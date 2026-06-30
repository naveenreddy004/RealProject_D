const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Registration = require('../models/Registration');
const User = require('../models/User');
const Notification = require('../models/Notification');
const { authStudent } = require('../middleware/auth');
const { queueEmail } = require('../utils/emailQueue');
const { generateReceiptPDF, generateCertificatePDF, generateOfferLetterPDF } = require('../utils/pdfGenerator');

// Multer for payment screenshot
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'public/uploads/'),
  filename: (req, file, cb) => cb(null, 'pay_' + Date.now() + path.extname(file.originalname))
});
const allowedImageTypes = /jpeg|jpg|png|webp/;
const uploadPay = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const ext  = allowedImageTypes.test(path.extname(file.originalname).toLowerCase());
    const mime = allowedImageTypes.test(file.mimetype);
    if (ext && mime) return cb(null, true);
    cb(new Error('Only image files (jpeg, jpg, png, webp) are allowed.'));
  },
});

// ── GET MY DASHBOARD ──────────────────────────────────────────────────────────
router.get('/dashboard', authStudent, async (req, res) => {
  try {
    // Return all registrations sorted newest first
    const regs = await Registration.find({ user: req.user._id }).sort({ createdAt: -1 });
    const reg = regs[0] || null; // most recent for primary display

    const totalTasks = reg ? reg.tasks.length : 0;
    const doneTasks = reg ? reg.tasks.filter(t => t.completed).length : 0;
    const progress = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;

    res.json({
      success: true,
      user: req.user,
      registration: reg,
      registrations: regs, // all registrations
      progress,
      upiDetails: {
        upiId: process.env.UPI_ID || 'avron@upi',
        name: process.env.UPI_NAME || 'avRoN Technologies',
        amount: reg ? reg.amount : 299,
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error fetching dashboard.' });
  }
});

// ── PUBLIC PAYMENT SUBMIT ─────────────────────────────────────────────────────
// Used by /register flow where the student hasn't logged in yet.
// Authenticated via email + certId (both produced by the registration step).
router.post('/submit-payment-public', uploadPay.single('paymentScreenshot'), async (req, res) => {
  try {
    const { email, certId, utrNumber, amount } = req.body;
    if (!email || !certId || !utrNumber) return res.status(400).json({ success: false, message: 'Email, certId and UTR required.' });

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(404).json({ success: false, message: 'User not found.' });

    const reg = await Registration.findOne({ user: user._id, certId });
    if (!reg) return res.status(404).json({ success: false, message: 'Registration not found.' });

    // Validate screenshot
    if (!req.file) return res.status(400).json({ success: false, message: 'Payment screenshot is required.' });

    // Check UTR not already used by another registration
    const utrUpper = utrNumber.trim().toUpperCase();
    const utrExists = await Registration.findOne({ 'payment.utrNumber': utrUpper, _id: { $ne: reg._id } });
    if (utrExists) return res.status(400).json({ success: false, message: 'This UTR number has already been submitted. If this is your transaction, contact support.' });

    reg.payment.method = 'upi_manual';
    reg.payment.utrNumber = utrUpper;
    reg.payment.screenshotPath = req.file ? req.file.filename : null;
    reg.payment.submittedAt = new Date();
    reg.payment.amount = Number(amount) || reg.amount;
    reg.amount = reg.payment.amount;
    reg.payment.upiId = process.env.UPI_ID;
    reg.status = 'payment_submitted';

    const payTask = reg.tasks.find(t => t.title === 'Make Payment');
    if (payTask) { payTask.completed = true; payTask.completedAt = new Date(); }
    reg.tasksCompletedCount = reg.tasks.filter(t => t.completed).length;
    await reg.save();
    res.json({ success: true, message: 'Payment submitted for admin review.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to submit payment.' });
  }
});

// ── SUBMIT PAYMENT (authenticated, used by /dashboard) ────────────────────────
router.post('/submit-payment', authStudent, uploadPay.single('paymentScreenshot'), async (req, res) => {
  try {
    const { utrNumber, notes } = req.body;
    if (!utrNumber || utrNumber.trim().length < 6) {
      return res.status(400).json({ success: false, message: 'Please enter a valid UTR number.' });
    }

    const reg = await Registration.findOne({ user: req.user._id, status: { $nin: ['certificate_sent', 'rejected'] } });
    if (!reg) return res.status(404).json({ success: false, message: 'No active registration found.' });

    if (reg.status === 'payment_submitted' || reg.status === 'payment_verified' || reg.status === 'active') {
      return res.status(400).json({ success: false, message: 'Payment already submitted or verified.' });
    }

    // UTR duplicate check
    const utrUpper = utrNumber.trim().toUpperCase();
    const utrExists = await Registration.findOne({ 'payment.utrNumber': utrUpper, _id: { $ne: reg._id } });
    if (utrExists) return res.status(400).json({ success: false, message: 'This UTR number has already been submitted. If this is your transaction, contact support.' });

    // Save payment details
    reg.payment.method = 'upi_manual';
    reg.payment.utrNumber = utrUpper;
    reg.payment.screenshotPath = req.file ? req.file.filename : null;
    reg.payment.submittedAt = new Date();
    reg.payment.amount = reg.amount;
    reg.payment.upiId = process.env.UPI_ID;
    reg.payment.notes = notes || null;
    reg.status = 'payment_submitted';   // awaiting admin approval

    // Mark payment + portal-login tasks done
    const payTask = reg.tasks.find(t => t.title === 'Make Payment');
    if (payTask) { payTask.completed = true; payTask.completedAt = new Date(); }
    const portalTask = reg.tasks.find(t => t.title === 'Login to Portal');
    if (portalTask) { portalTask.completed = true; portalTask.completedAt = new Date(); }
    reg.tasksCompletedCount = reg.tasks.filter(t => t.completed).length;

    await reg.save();

    res.json({
      success: true,
      message: 'Payment submitted! Our admin team will verify shortly. You will receive an Offer Letter on email once approved.',
      status: reg.status,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to submit payment.' });
  }
});

// ── COMPLETE TASK ──────────────────────────────────────────────────────────────
router.post('/complete-task', authStudent, async (req, res) => {
  try {
    const taskIndex = parseInt(req.body.taskIndex, 10);
    const reg = await Registration.findOne({ user: req.user._id }).sort({ createdAt: -1 });
    if (!reg) return res.status(404).json({ success: false, message: 'Registration not found.' });
    if (reg.status !== 'active') return res.status(400).json({ success: false, message: 'Internship not yet active.' });

    if (!isNaN(taskIndex) && taskIndex >= 0 && taskIndex < reg.tasks.length) {
      const task = reg.tasks[taskIndex];
      // Students cannot self-complete payment or certificate tasks — these are admin-controlled
      const adminOnlyTasks = ['Make Payment', 'Receive Certificate'];
      if (adminOnlyTasks.includes(task.title)) {
        return res.status(403).json({ success: false, message: `"${task.title}" is completed automatically by our team.` });
      }
      task.completed = true;
      task.completedAt = new Date();
    }
    reg.tasksCompletedCount = reg.tasks.filter(t => t.completed).length;

    // Only mark completed if all required tasks (excluding admin-only ones) are done
    const allRequired = reg.tasks.filter(t => t.required).every(t => t.completed);
    if (allRequired) reg.status = 'completed';

    await reg.save();
    res.json({ success: true, status: reg.status, tasksCompletedCount: reg.tasksCompletedCount });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to update task.' });
  }
});

// ── MARK INTERNSHIP COMPLETE — DEPRECATED ────────────────────────────────────
// Students no longer self-issue certificates. Admin must approve payment, which
// triggers certificate issuance from routes/admin.js → POST /approve-payment.
router.post('/mark-complete', authStudent, async (req, res) => {
  return res.status(403).json({
    success: false,
    message: 'Certificates are now issued by our admin team after payment review. No action required from your side.',
  });
});

// ── DOWNLOAD CERTIFICATE PDF by registration ID ───────────────────────────────
router.get('/certificate/:regId', authStudent, async (req, res) => {
  try {
    const reg = await Registration.findOne({ _id: req.params.regId, user: req.user._id });
    if (!reg) return res.status(404).json({ success: false, message: 'Registration not found.' });
    if (reg.revoked) return res.status(403).json({ success: false, message: 'Certificate revoked.' });
    if (reg.status !== 'certificate_sent') {
      return res.status(400).json({ success: false, message: 'Certificate not yet issued.' });
    }
    const pdfBuf = await generateCertificatePDF(req.user, reg);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="Certificate_${reg.certId}.pdf"`);
    res.setHeader('Content-Length', pdfBuf.length);
    res.send(pdfBuf);
  } catch (err) {
    res.status(500).json({ success: false, message: 'Could not download certificate.' });
  }
});

// ── DOWNLOAD CERTIFICATE PDF (most recent) ────────────────────────────────────
router.get('/certificate', authStudent, async (req, res) => {
  try {
    const reg = await Registration.findOne({ user: req.user._id }).sort({ createdAt: -1 });
    if (!reg) return res.status(404).json({ success: false, message: 'Registration not found.' });
    if (reg.revoked) return res.status(403).json({ success: false, message: 'Certificate revoked.' });
    if (reg.status !== 'certificate_sent') {
      return res.status(400).json({ success: false, message: 'Certificate is locked. It will be available once your payment is approved by our admin team.' });
    }

    // Generate on-demand — nothing stored in MongoDB
    const pdfBuf = await generateCertificatePDF(req.user, reg);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="Certificate_${reg.certId}.pdf"`);
    res.setHeader('Content-Length', pdfBuf.length);
    res.send(pdfBuf);
  } catch (err) {
    res.status(500).json({ success: false, message: 'Could not download certificate.' });
  }
});

// ── GET OFFER LETTER by registration ID ──────────────────────────────────────
router.get('/offer-letter/:regId', authStudent, async (req, res) => {
  try {
    const reg = await Registration.findOne({ _id: req.params.regId, user: req.user._id });
    if (!reg) return res.status(404).json({ success: false, message: 'Registration not found.' });
    if (!['certificate_sent', 'active', 'completed'].includes(reg.status)) {
      return res.status(400).json({ success: false, message: 'Offer letter not yet available.' });
    }
    const pdfBuf = await generateOfferLetterPDF(req.user, reg);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="OfferLetter_${reg.certId}.pdf"`);
    res.setHeader('Content-Length', pdfBuf.length);
    res.send(pdfBuf);
  } catch (err) {
    res.status(500).json({ success: false, message: 'Could not download offer letter.' });
  }
});

// ── GET RECEIPT by registration ID ────────────────────────────────────────────
router.get('/receipt/:regId', authStudent, async (req, res) => {
  try {
    const reg = await Registration.findOne({ _id: req.params.regId, user: req.user._id });
    if (!reg || !reg.payment.utrNumber) return res.status(404).json({ success: false, message: 'No payment found.' });
    const pdfBuf = await generateReceiptPDF(req.user, reg);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="Receipt_${reg.certId}.pdf"`);
    res.setHeader('Content-Length', pdfBuf.length);
    res.send(pdfBuf);
  } catch (err) {
    res.status(500).json({ success: false, message: 'Receipt not found.' });
  }
});

// ── GET OFFER LETTER (most recent, legacy) ───────────────────────────────────
router.get('/offer-letter', authStudent, async (req, res) => {
  try {
    const reg = await Registration.findOne({ user: req.user._id }).sort({ createdAt: -1 });
    if (!reg) return res.status(404).json({ success: false, message: 'Registration not found.' });
    if (!['certificate_sent', 'active', 'completed'].includes(reg.status)) {
      return res.status(400).json({ success: false, message: 'Offer letter not yet available. Awaiting admin approval.' });
    }

    const pdfBuf = await generateOfferLetterPDF(req.user, reg);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="OfferLetter_${reg.certId}.pdf"`);
    res.setHeader('Content-Length', pdfBuf.length);
    res.send(pdfBuf);
  } catch (err) {
    res.status(500).json({ success: false, message: 'Could not download offer letter.' });
  }
});

router.get('/receipt', authStudent, async (req, res) => {
  try {
    const reg = await Registration.findOne({ user: req.user._id }).sort({ createdAt: -1 });
    if (!reg || !reg.payment.utrNumber) return res.status(404).json({ success: false, message: 'No payment found.' });

    const pdfBuf = await generateReceiptPDF(req.user, reg);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="Receipt_${reg.certId}.pdf"`);
    res.setHeader('Content-Length', pdfBuf.length);
    res.send(pdfBuf);
  } catch (err) {
    res.status(500).json({ success: false, message: 'Receipt not found.' });
  }
});

// ── CURRICULUM for the student's domain ──────────────────────────────────────
router.get('/curriculum', authStudent, async (req, res) => {
  try {
    const requestedDomain = req.headers['x-domain'];
    let domain = requestedDomain;
    let durationMonths = null;

    if (!domain) {
      const reg = await Registration.findOne({ user: req.user._id }).sort({ createdAt: -1 });
      if (!reg) return res.status(404).json({ success: false, message: 'Registration not found.' });
      if (reg.revoked) return res.status(403).json({ success: false, message: 'Curriculum access suspended. Certificate revoked.' });
      if (!['payment_verified', 'active', 'completed', 'certificate_sent'].includes(reg.status)) {
        return res.status(403).json({ success: false, message: 'Curriculum access is unlocked after payment verification.' });
      }
      domain = reg.domain;
      durationMonths = reg.duration ? parseInt(reg.duration) : null;
    } else {
      const reg = await Registration.findOne({ user: req.user._id, domain }).sort({ createdAt: -1 });
      if (!reg) return res.status(403).json({ success: false, message: 'No registration found for this domain.' });
      if (reg.revoked) {
        return res.status(403).json({ success: false, message: 'Curriculum access suspended. Certificate revoked.' });
      }
      if (!['payment_verified', 'active', 'completed', 'certificate_sent'].includes(reg.status)) {
        return res.status(403).json({ success: false, message: 'Curriculum access is unlocked after payment verification.' });
      }
      durationMonths = reg.duration ? parseInt(reg.duration) : null;
    }

    const { getCurriculum } = require('../utils/curricula');
    const data = getCurriculum(domain, durationMonths);
    res.json({ success: true, domain, curriculum: data });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Could not load curriculum.' });
  }
});

// ── VERIFY CERTIFICATE (public) ───────────────────────────────────────────────
router.get('/verify/:certId', async (req, res) => {
  try {
    const reg = await Registration.findOne({ certId: req.params.certId }).populate('user', 'fullName course');
    if (!reg) return res.json({ valid: false, message: 'Certificate not found.', state: 'not_found' });

    const studentName = reg.registrantName || (reg.user ? reg.user.fullName : 'Unknown');
    const studentCourse = reg.registrantCourse || (reg.user ? reg.user.course : '—');

    if (reg.revoked) {
      return res.json({
        valid: false, state: 'revoked',
        name: studentName, domain: reg.domain, certId: reg.certId,
        revokedAt: reg.revokedAt, reason: reg.revokedReason || 'Revoked by issuer',
      });
    }
    if (reg.status !== 'certificate_sent') {
      return res.json({ valid: false, state: 'not_issued', message: 'Certificate has not been issued yet.' });
    }
    const now = Date.now();
    const expired = reg.expiresAt && new Date(reg.expiresAt).getTime() < now;

    res.json({
      valid: !expired,
      state: expired ? 'expired' : 'valid',
      name: studentName,
      domain: reg.domain,
      course: studentCourse,
      startDate: reg.startDate,
      endDate: reg.endDate,
      certId: reg.certId,
      status: reg.status,
      issuedAt: reg.sentAt,
      expiresAt: reg.expiresAt,
    });
  } catch (err) {
    res.status(500).json({ valid: false, state: 'error', message: 'Error verifying.' });
  }
});

// ── SUBMIT SUPPORT TICKET ─────────────────────────────────────────────────────
router.post('/ticket', authStudent, async (req, res) => {
  try {
    const { subject, message, category, priority, ticketId } = req.body;
    if (!subject || subject.trim().length < 4) return res.status(400).json({ success: false, message: 'Subject too short.' });
    if (!message || message.trim().length < 10) return res.status(400).json({ success: false, message: 'Message too short.' });

    // Escape HTML to prevent injection in admin email
    const escapeHtml = (str) => String(str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#x27;');

    const { sendTicketEmail } = require('../utils/emailService');
    setImmediate(() => {
      sendTicketEmail(req.user, {
        id: ticketId || ('TKT-' + Date.now().toString(36).toUpperCase().slice(-6)),
        subject: escapeHtml(subject.trim()),
        message: escapeHtml(message.trim()),
        category: escapeHtml(category || 'General'),
        priority: escapeHtml(priority || 'Normal'),
      }).catch(e => console.error('Ticket email error:', e.message));
    });

    res.json({ success: true, message: 'Ticket submitted. We will get back to you within 24 hours.' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to submit ticket.' });
  }
});

// ── GET NOTIFICATIONS ─────────────────────────────────────────────────────────
router.get('/notifications', authStudent, async (req, res) => {
  try {
    const notifs = await Notification.find({ user: req.user._id })
      .sort({ createdAt: -1 }).limit(50);
    const unread = notifs.filter(n => !n.read).length;
    res.json({ success: true, data: notifs, unread });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Could not fetch notifications.' });
  }
});

// ── MARK NOTIFICATION(S) AS READ ──────────────────────────────────────────────
router.post('/notifications/read', authStudent, async (req, res) => {
  try {
    const { id, all } = req.body;
    if (all) {
      await Notification.updateMany({ user: req.user._id, read: false }, { read: true, readAt: new Date() });
    } else if (id) {
      await Notification.findOneAndUpdate({ _id: id, user: req.user._id }, { read: true, readAt: new Date() });
    }
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Could not mark as read.' });
  }
});

module.exports = router;
