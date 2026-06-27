const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');
const User = require('../models/User');
const ActivityLog = require('../models/ActivityLog');
const { authAdmin } = require('../middleware/auth');
const { queueEmail } = require('../utils/emailQueue');
const { generateCertificatePDF, generateOfferLetterPDF } = require('../utils/pdfGenerator');
const { logActivity } = require('../utils/activityLogger');

// Normalize MongoDB Binary or Buffer to a plain Buffer
function toBuffer(val) {
  if (!val) return null;
  if (Buffer.isBuffer(val)) return val;
  if (val.buffer) return Buffer.from(val.buffer); // Mongoose Binary
  return Buffer.from(val);
}

// All routes require admin JWT
router.use(authAdmin);

// ── ANALYTICS / STATS ─────────────────────────────────────────────────────────
router.get('/stats', async (req, res) => {
  try {
    const [total, byStatus, revenue, recentRegs, domainStats] = await Promise.all([
      Registration.countDocuments(),
      Registration.aggregate([{ $group: { _id: '$status', count: { $sum: 1 } } }]),
      Registration.aggregate([
        { $match: { status: { $in: ['payment_verified','active','completed','certificate_sent'] } } },
        { $group: { _id: null, total: { $sum: '$payment.amount' } } }
      ]),
      Registration.find().sort({ createdAt: -1 }).limit(5).populate('user', 'fullName email'),
      Registration.aggregate([{ $group: { _id: '$domain', count: { $sum: 1 } } }, { $sort: { count: -1 } }, { $limit: 5 }])
    ]);

    const statusMap = {};
    byStatus.forEach(s => statusMap[s._id] = s.count);

    // Daily registrations for last 7 days
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const daily = await Registration.aggregate([
      { $match: { createdAt: { $gte: sevenDaysAgo } } },
      { $group: { _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } }, count: { $sum: 1 } } },
      { $sort: { _id: 1 } }
    ]);

    res.json({
      success: true,
      stats: {
        total,
        pending: statusMap['pending'] || 0,
        payment_pending: statusMap['payment_pending'] || 0,
        payment_submitted: statusMap['payment_submitted'] || 0,
        payment_verified: statusMap['payment_verified'] || 0,
        active: statusMap['active'] || 0,
        completed: statusMap['completed'] || 0,
        certificate_sent: statusMap['certificate_sent'] || 0,
        rejected: statusMap['rejected'] || 0,
        revenue: revenue[0]?.total || 0,
        domainStats,
        daily,
        recent: recentRegs
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ── GET ALL REGISTRATIONS ─────────────────────────────────────────────────────
router.get('/registrations', async (req, res) => {
  try {
    const { status, search, utr, page = 1, limit = 20 } = req.query;
    const filter = {};
    if (status && status !== 'all') filter.status = status;

    // Escape special regex characters to prevent ReDoS
    const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Direct UTR search
    if (utr && utr.trim()) {
      filter['payment.utrNumber'] = { $regex: escapeRegex(utr.trim()), $options: 'i' };
    }

    let query = Registration.find(filter).populate('user', 'fullName email mobile college course');

    let total;
    if (search && !utr) {
      const searchRegex = { $regex: escapeRegex(search), $options: 'i' };
      const users = await User.find({
        $or: [{ fullName: searchRegex }, { email: searchRegex }]
      }).select('_id');
      const userIds = users.map(u => u._id);
      const searchFilter = {
        ...filter,
        $or: [
          { user: { $in: userIds } },
          { certId: searchRegex },
          { 'payment.utrNumber': searchRegex },
          { domain: searchRegex },
        ]
      };
      query = Registration.find(searchFilter).populate('user', 'fullName email mobile college course');
      total = await Registration.countDocuments(searchFilter);
    } else {
      total = await Registration.countDocuments(filter);
    }

    const regs = await query.sort({ createdAt: -1 }).skip((page - 1) * limit).limit(Number(limit));

    res.json({ success: true, data: regs, total, pages: Math.ceil(total / limit) });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ── VERIFY PAYMENT ────────────────────────────────────────────────────────────
// ── APPROVE PAYMENT  →  issue certificate  +  send offer letter ──────────────
const approvePayment = async (req, res) => {
  try {
    const reg = await Registration.findById(req.params.id).populate('user');

    if (!reg) {
      return res.status(404).json({
        success: false,
        message: 'Not found'
      });
    }

    if (!['payment_submitted', 'active', 'completed'].includes(reg.status)) {
      return res.status(400).json({
        success: false,
        message: 'Payment not in a state that can be approved.'
      });
    }

    reg.payment.verifiedAt = new Date();
    reg.payment.verifiedBy = req.admin ? req.admin.email : 'admin';
    reg.payment.approved = true;
    // Sync payment.amount from top-level amount so revenue stats are accurate
    if (!reg.payment.amount) reg.payment.amount = reg.amount;

    // Only mark payment tasks done — student still needs to complete internship
    const payTask = reg.tasks.find(t => t.title === 'Make Payment');
    if (payTask && !payTask.completed) { payTask.completed = true; payTask.completedAt = new Date(); }
    const portalTask = reg.tasks.find(t => t.title === 'Login to Portal');
    if (portalTask && !portalTask.completed) { portalTask.completed = true; portalTask.completedAt = new Date(); }
    reg.tasksCompletedCount = reg.tasks.filter(t => t.completed).length;

    if (!reg.expiresAt) {
      const years = reg.validityYears || Number(process.env.CERT_VALIDITY_YEARS) || 2;
      reg.expiresAt = new Date(Date.now() + years * 365 * 24 * 60 * 60 * 1000);
    }

    // Payment approved → activate internship (NOT certificate_sent yet)
    // Certificate will be sent separately via bulk send or send-certificate button
    reg.status = 'active';

    await reg.save();

    res.json({
      success: true,
      message: `Payment approved. Internship activated for ${reg.registrantName || reg.user.fullName}. Offer Letter emailed. Certificate can be sent when internship is complete.`,
      certId: reg.certId
    });

    setImmediate(async () => {
      try {
        // Only generate and send OFFER LETTER — not certificate
        const offerBuf = await generateOfferLetterPDF(reg.user, reg).catch(err => {
          console.error('Offer Letter PDF Error:', err.message);
          return null;
        });

        if (offerBuf) {
          await Registration.findByIdAndUpdate(reg._id, { offerLetterPdf: offerBuf });
        }

        // Send offer letter email only
        queueEmail('offerLetter', {
          user: reg.user,
          reg,
          pdfBuffer: offerBuf,
        });

      } catch (err) {
        console.error('Approve Payment Background Error:', err.message);
      }
    });

    await logActivity({
      action: 'approve_payment',
      targetId: reg._id,
      targetLabel: reg.registrantName || reg.user.fullName,
      details: {
        utr: reg.payment.utrNumber,
        certId: reg.certId
      },
      req
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

// Both URLs use the SAME handler
router.post('/approve-payment/:id', approvePayment);
router.post('/verify-payment/:id', approvePayment);

// ── REJECT PAYMENT ────────────────────────────────────────────────────────────
router.post('/reject-payment/:id', async (req, res) => {
  try {
    const reg = await Registration.findById(req.params.id).populate('user', 'fullName email');
    if (!reg) return res.status(404).json({ success: false, message: 'Not found' });
    const reason = (req.body && req.body.reason || '').toString().trim().slice(0, 500) || 'Payment could not be verified';
    reg.status = 'payment_pending';
    reg.payment.utrNumber = null;
    reg.payment.submittedAt = null;
    reg.payment.screenshotPath = null;   // clear old screenshot so admin doesn't see stale data
    const payTask = reg.tasks.find(t => t.title === 'Make Payment');
    if (payTask) { payTask.completed = false; payTask.completedAt = null; }
    reg.tasksCompletedCount = reg.tasks.filter(t => t.completed).length;
    await reg.save();
    await logActivity({
      action: 'reject_payment',
      targetId: reg._id,
      targetLabel: reg.certId,
      details: { reason },
      req,
    });
    // Notify the student so they know to resubmit
    if (reg.user && reg.user.email) {
      setImmediate(() => {
        queueEmail('paymentRejected', { user: reg.user, reg, reason });
      });
    }
    res.json({ success: true, message: 'Payment rejected. Student notified and can resubmit.' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ── MARK COMPLETE ─────────────────────────────────────────────────────────────
router.post('/mark-complete/:id', async (req, res) => {
  try {
    const reg = await Registration.findById(req.params.id);
    if (!reg) return res.status(404).json({ success: false, message: 'Not found' });
    reg.status = 'completed';
    reg.tasks.forEach(t => { if (!t.completed) { t.completed = true; t.completedAt = new Date(); } });
    reg.tasksCompletedCount = reg.tasks.length;
    await reg.save();
    await logActivity({
      action: 'mark_complete',
      targetId: reg._id,
      targetLabel: reg.certId,
      req,
    });
    res.json({ success: true, message: 'Marked as completed.' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ── SEND CERTIFICATE ──────────────────────────────────────────────────────────
router.post('/send-certificate/:id', async (req, res) => {
  try {
    const reg = await Registration.findById(req.params.id).populate('user');
    if (!reg) return res.status(404).json({ success: false, message: 'Not found' });
    if (!['active', 'completed'].includes(reg.status)) {
      return res.status(400).json({ success: false, message: 'Internship must be active or completed to send certificate.' });
    }

    const certBuf = await generateCertificatePDF(reg.user, reg);
    queueEmail('certificate', { user: reg.user, reg, pdfBuffer: certBuf });

    reg.status = 'certificate_sent';
    reg.certificatePdf = certBuf;
    reg.sentAt = new Date();
    const certTask = reg.tasks.find(t => t.title === 'Receive Certificate');
    if (certTask) { certTask.completed = true; certTask.completedAt = new Date(); }
    reg.tasksCompletedCount = reg.tasks.length;
    await reg.save();

    await logActivity({
      action: 'send_certificate',
      targetId: reg._id,
      targetLabel: reg.user.fullName,
      details: { certId: reg.certId, email: reg.user.email },
      req,
    });
    res.json({ success: true, message: `Certificate sent to ${reg.user.email}` });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ── REJECT REGISTRATION ───────────────────────────────────────────────────────
router.post('/reject/:id', async (req, res) => {
  try {
    const reg = await Registration.findByIdAndUpdate(req.params.id, { status: 'rejected' }, { new: true });
    if (!reg) return res.status(404).json({ success: false, message: 'Not found' });
    await logActivity({
      action: 'reject_registration',
      targetId: reg._id,
      targetLabel: reg.certId,
      req,
    });
    res.json({ success: true, message: 'Registration rejected.' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ── GET SINGLE REGISTRATION ───────────────────────────────────────────────────
router.get('/registration/:id', async (req, res) => {
  try {
    const reg = await Registration.findById(req.params.id).populate('user');
    if (!reg) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, data: reg });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ── GET ALL USERS ─────────────────────────────────────────────────────────────
router.get('/users', async (req, res) => {
  try {
    const users = await User.find().select('-password -otp').sort({ createdAt: -1 });
    res.json({ success: true, data: users });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ── REVENUE DASHBOARD ─────────────────────────────────────────────────────────
router.get('/revenue', async (req, res) => {
  try {
    const { months = 12, domain, package: pkg } = req.query;
    const paidStatuses = ['payment_verified', 'active', 'completed', 'certificate_sent'];
    const match = { status: { $in: paidStatuses } };
    if (domain && domain !== 'all') match.domain = domain;
    if (pkg && pkg !== 'all') match.package = pkg;

    const monthsBack = Math.min(Number(months) || 12, 24);
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - monthsBack);
    startDate.setDate(1);
    startDate.setHours(0, 0, 0, 0);

    const [byMonth, byDomain, byPackage, total, domains, packages] = await Promise.all([
      Registration.aggregate([
        { $match: { ...match, 'payment.verifiedAt': { $gte: startDate } } },
        {
          $group: {
            _id: { $dateToString: { format: '%Y-%m', date: '$payment.verifiedAt' } },
            revenue: { $sum: '$payment.amount' },
            count: { $sum: 1 },
          }
        },
        { $sort: { _id: 1 } }
      ]),
      Registration.aggregate([
        { $match: match },
        { $group: { _id: '$domain', revenue: { $sum: '$payment.amount' }, count: { $sum: 1 } } },
        { $sort: { revenue: -1 } }
      ]),
      Registration.aggregate([
        { $match: match },
        { $group: { _id: '$package', revenue: { $sum: '$payment.amount' }, count: { $sum: 1 } } },
        { $sort: { revenue: -1 } }
      ]),
      Registration.aggregate([
        { $match: match },
        { $group: { _id: null, total: { $sum: '$payment.amount' }, count: { $sum: 1 } } }
      ]),
      Registration.distinct('domain'),
      Registration.distinct('package'),
    ]);

    res.json({
      success: true,
      revenue: {
        total: total[0]?.total || 0,
        count: total[0]?.count || 0,
        byMonth,
        byDomain,
        byPackage,
        filters: { domains, packages },
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ── BULK SEND CERTIFICATES ────────────────────────────────────────────────────
router.post('/bulk-send-certificates', async (req, res) => {
  try {
    const { ids } = req.body;
    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ success: false, message: 'No registration IDs provided.' });
    }
    if (ids.length > 50) {
      return res.status(400).json({ success: false, message: 'Maximum 50 certificates at once.' });
    }

    const results = { sent: [], failed: [] };

    for (const id of ids) {
      try {
        const reg = await Registration.findById(id).populate('user');
        if (!reg) { results.failed.push({ id, reason: 'Not found' }); continue; }
        if (!['active', 'completed'].includes(reg.status)) {
          results.failed.push({ id, reason: `Invalid status: ${reg.status}` }); continue;
        }

        const certBuf = await generateCertificatePDF(reg.user, reg);
        queueEmail('certificate', { user: reg.user, reg, pdfBuffer: certBuf });

        reg.status = 'certificate_sent';
        reg.certificatePdf = certBuf;
        reg.sentAt = new Date();
        const certTask = reg.tasks.find(t => t.title === 'Receive Certificate');
        if (certTask) { certTask.completed = true; certTask.completedAt = new Date(); }
        reg.tasksCompletedCount = reg.tasks.length;
        await reg.save();

        results.sent.push({ id, name: reg.user.fullName, certId: reg.certId });
      } catch (e) {
        results.failed.push({ id, reason: e.message });
      }
    }

    await logActivity({
      action: 'bulk_send_certificates',
      targetType: 'batch',
      details: { sent: results.sent.length, failed: results.failed.length, ids },
      req,
    });

    res.json({
      success: true,
      message: `Sent ${results.sent.length} certificate(s). ${results.failed.length} failed.`,
      results,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ── ADMIN: Download certificate PDF (from MongoDB buffer) ────────────────────
router.get('/certificate/:id', async (req, res) => {
  try {
    const reg = await Registration.findById(req.params.id).populate('user');
    if (!reg) return res.status(404).json({ success: false, message: 'Not found' });

    let pdfBuf = toBuffer(reg.certificatePdf);
    if (!pdfBuf || pdfBuf.length === 0) {
      if (!reg.user) return res.status(404).json({ success: false, message: 'User data missing.' });
      const { generateCertificatePDF } = require('../utils/pdfGenerator');
      pdfBuf = await generateCertificatePDF(reg.user, reg);
      await Registration.findByIdAndUpdate(reg._id, { certificatePdf: pdfBuf });
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="Certificate_${reg.certId}.pdf"`);
    res.setHeader('Content-Length', pdfBuf.length);
    res.send(pdfBuf);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ── ADMIN: Download receipt PDF (from MongoDB buffer) ─────────────────────────
router.get('/receipt/:id', async (req, res) => {
  try {
    const reg = await Registration.findById(req.params.id).populate('user');
    if (!reg) return res.status(404).json({ success: false, message: 'Not found' });

    let pdfBuf = toBuffer(reg.receiptPdf);
    if (!pdfBuf || pdfBuf.length === 0) {
      if (!reg.user) return res.status(404).json({ success: false, message: 'User data missing.' });
      const { generateReceiptPDF } = require('../utils/pdfGenerator');
      pdfBuf = await generateReceiptPDF(reg.user, reg);
      await Registration.findByIdAndUpdate(reg._id, { receiptPdf: pdfBuf });
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="Receipt_${reg.certId}.pdf"`);
    res.setHeader('Content-Length', pdfBuf.length);
    res.send(pdfBuf);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ── ACTIVITY LOG ──────────────────────────────────────────────────────────────
router.get('/activity-log', async (req, res) => {
  try {
    const { action, page = 1, limit = 50 } = req.query;
    const filter = {};
    if (action && action !== 'all') filter.action = action;

    const total = await ActivityLog.countDocuments(filter);
    const logs = await ActivityLog.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json({ success: true, data: logs, total, pages: Math.ceil(total / limit) });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ── SEARCH BY UTR ─────────────────────────────────────────────────────────────
router.get('/search-utr', async (req, res) => {
  try {
    const { utr } = req.query;
    if (!utr || utr.trim().length < 4) {
      return res.status(400).json({ success: false, message: 'Enter at least 4 characters of UTR.' });
    }
    const escaped = utr.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regs = await Registration.find({
      'payment.utrNumber': { $regex: escaped, $options: 'i' }
    }).populate('user', 'fullName email mobile college').sort({ createdAt: -1 }).limit(20);

    res.json({ success: true, data: regs, total: regs.length });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ── REVOKE CERTIFICATE ────────────────────────────────────────────────────────
router.post('/revoke/:id', async (req, res) => {
  try {
    const reg = await Registration.findById(req.params.id).populate('user', 'fullName email');
    if (!reg) return res.status(404).json({ success: false, message: 'Not found' });
    if (reg.revoked) return res.status(400).json({ success: false, message: 'Already revoked.' });

    reg.revoked = true;
    reg.revokedAt = new Date();
    reg.revokedReason = (req.body && req.body.reason) || 'Revoked by admin';
    await reg.save();

    // Send revocation email to student
    if (reg.user && reg.user.email) {
      const { sendRevocationEmail } = require('../utils/emailService');
      setImmediate(() => {
        sendRevocationEmail(reg.user, reg, reg.revokedReason).catch(e => console.error('Revocation email error:', e.message));
      });
    }

    logActivity({
      action: 'revoke_certificate',
      targetId: reg._id,
      targetLabel: reg.user ? reg.user.fullName : reg.certId,
      details: { certId: reg.certId, reason: reg.revokedReason },
      req,
    });
    res.json({ success: true, message: `Certificate ${reg.certId} revoked.` });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ── UN-REVOKE (restore) ───────────────────────────────────────────────────────
router.post('/unrevoke/:id', async (req, res) => {
  try {
    const reg = await Registration.findById(req.params.id);
    if (!reg) return res.status(404).json({ success: false, message: 'Not found' });
    reg.revoked = false;
    reg.revokedAt = null;
    reg.revokedReason = null;
    await reg.save();
    logActivity({ action: 'unrevoke_certificate', targetId: reg._id, targetLabel: reg.certId, req });
    res.json({ success: true, message: `Certificate ${reg.certId} restored.` });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ── EXPORT ALL REGISTRATIONS TO EXCEL ─────────────────────────────────────────
router.get('/export-registrations', async (req, res) => {
  try {
    const ExcelJS = require('exceljs');
    const regs = await Registration.find().populate('user', 'fullName email mobile college course location').sort({ createdAt: -1 });

    const wb = new ExcelJS.Workbook();
    wb.creator = 'avRoN Technologies';
    wb.created = new Date();
    const ws = wb.addWorksheet('Registrations');

    ws.columns = [
      { header: 'Cert ID',     key: 'certId',   width: 14 },
      { header: 'Name',        key: 'name',     width: 24 },
      { header: 'Email',       key: 'email',    width: 28 },
      { header: 'Mobile',      key: 'mobile',   width: 14 },
      { header: 'College',     key: 'college',  width: 24 },
      { header: 'Course',      key: 'course',   width: 18 },
      { header: 'Domain',      key: 'domain',   width: 26 },
      { header: 'Duration',    key: 'duration', width: 12 },
      { header: 'Start',       key: 'start',    width: 14 },
      { header: 'End',         key: 'end',      width: 14 },
      { header: 'Package',     key: 'package',  width: 22 },
      { header: 'Amount',      key: 'amount',   width: 10 },
      { header: 'UTR',         key: 'utr',      width: 22 },
      { header: 'Status',      key: 'status',   width: 18 },
      { header: 'Revoked',     key: 'revoked',  width: 10 },
      { header: 'Issued At',   key: 'issuedAt', width: 18 },
      { header: 'Created At',  key: 'createdAt',width: 18 },
    ];
    ws.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
    ws.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF0B2E22' } };

    regs.forEach(r => {
      ws.addRow({
        certId: r.certId,
        name: r.user ? r.user.fullName : '—',
        email: r.user ? r.user.email : '—',
        mobile: r.user ? r.user.mobile : '—',
        college: r.user ? r.user.college : '—',
        course: r.user ? r.user.course : '—',
        domain: r.domain,
        duration: r.duration || '—',
        start: r.startDate ? r.startDate.toISOString().slice(0,10) : '',
        end:   r.endDate   ? r.endDate.toISOString().slice(0,10)   : '',
        package: r.package,
        amount: r.amount,
        utr: r.payment && r.payment.utrNumber || '',
        status: r.status,
        revoked: r.revoked ? 'YES' : 'no',
        issuedAt: r.sentAt ? r.sentAt.toISOString().slice(0,10) : '',
        createdAt: r.createdAt ? r.createdAt.toISOString().slice(0,10) : '',
      });
    });

    const filename = `avRoN_registrations_${new Date().toISOString().slice(0,10)}.xlsx`;
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    await wb.xlsx.write(res);
    res.end();
  } catch (err) {
    console.error('Excel export error:', err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// ── ADMIN: POST BROADCAST UPDATE ─────────────────────────────────────────────
router.post('/broadcast', async (req, res) => {
  try {
    const { message } = req.body;
    if (!message || message.trim().length < 5) {
      return res.status(400).json({ success: false, message: 'Broadcast message too short.' });
    }
    // Store broadcast in ActivityLog with action='broadcast'
    await ActivityLog.create({
      action: 'broadcast',
      adminLabel: req.admin?.email || 'Admin',
      targetType: 'all_users',
      targetLabel: 'Broadcast',
      details: { message: message.trim() },
      ip: req.ip,
    });
    res.json({ success: true, message: 'Broadcast posted successfully.' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ── PUBLIC: GET LATEST BROADCASTS (for scrolling banner + notifications) ──────
router.get('/broadcasts', async (req, res) => {
  try {
    const ActivityLog = require('../models/ActivityLog');
    const broadcasts = await ActivityLog.find({ action: 'broadcast' })
      .sort({ createdAt: -1 }).limit(10);
    res.json({ success: true, data: broadcasts });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ── DELETE BROADCAST ──────────────────────────────────────────────────────────
router.delete('/broadcast/:id', async (req, res) => {
  try {
    const ActivityLog = require('../models/ActivityLog');
    await ActivityLog.findOneAndDelete({ _id: req.params.id, action: 'broadcast' });
    res.json({ success: true, message: 'Broadcast deleted.' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
