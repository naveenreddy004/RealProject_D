const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Registration = require('../models/Registration');
const Attendance = require('../models/Attendance');
const AssignmentProgress = require('../models/AssignmentProgress');
const LearningLog = require('../models/LearningLog');
const { checkAndAwardBadges } = require('../utils/badgeChecker');
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

// ── MARK INTERNSHIP COMPLETE — DEPRECATED, kept as stub ─────────────────────
// Removed — students no longer self-issue certificates.

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

// ── GET COURSE PROGRESS ───────────────────────────────────────────────────────
router.get('/course-progress', authStudent, async (req, res) => {
  try {
    const { domain } = req.query;
    const reg = await Registration.findOne({
      user: req.user._id,
      ...(domain ? { domain } : {}),
      status: { $in: ['payment_verified','active','completed','certificate_sent'] },
    }).sort({ createdAt: -1 });
    if (!reg) return res.json({ success: true, progress: {} });
    res.json({ success: true, progress: reg.courseProgress || {} });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Could not fetch progress.' });
  }
});

// ── SAVE COURSE PROGRESS ──────────────────────────────────────────────────────
router.put('/course-progress', authStudent, async (req, res) => {
  try {
    const { domain, progress, completedWeek } = req.body;
    if (!domain || !progress) return res.status(400).json({ success: false, message: 'domain and progress required.' });

    const reg = await Registration.findOne({
      user: req.user._id,
      domain,
      status: { $in: ['payment_verified','active','completed','certificate_sent'] },
    }).sort({ createdAt: -1 });
    if (!reg) return res.status(404).json({ success: false, message: 'No active registration found.' });

    reg.courseProgress = progress;
    reg.markModified('courseProgress');
    await reg.save();

    // If a week was just completed, queue an email notification
    if (completedWeek) {
      const user = req.user;
      setImmediate(() => {
        const { queueEmail } = require('../utils/emailQueue');
        queueEmail('weekComplete', { user, reg, weekNum: completedWeek.num, weekTitle: completedWeek.title });
      });
    }

    // Check for newly unlocked badges (async, non-blocking)
    setImmediate(() => checkAndAwardBadges(req.user._id).catch(() => {}));

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Could not save progress.' });
  }
});

// ── SAVE / UPDATE TODAY'S LEARNING LOG ────────────────────────────────────────
router.post('/learning-log', authStudent, async (req, res) => {
  try {
    const { domain, log } = req.body;
    if (!domain) return res.status(400).json({ success: false, message: 'domain required.' });
    if (!log || log.trim().length < 5)
      return res.status(400).json({ success: false, message: 'Log must be at least 5 characters.' });
    if (log.trim().length > 1000)
      return res.status(400).json({ success: false, message: 'Log too long (max 1000 chars).' });

    const reg = await Registration.findOne({
      user: req.user._id, domain,
      status: { $in: ['payment_verified','active','completed','certificate_sent'] },
    });
    if (!reg) return res.status(403).json({ success: false, message: 'No active registration.' });

    const ist     = new Date(Date.now() + 5.5 * 3600000);
    const dateStr = ist.toISOString().slice(0, 10);
    const date    = new Date(dateStr + 'T00:00:00.000Z');

    await LearningLog.findOneAndUpdate(
      { user: req.user._id, domain, dateStr },
      { log: log.trim(), date, dateStr },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    res.json({ success: true, dateStr });
    // Check badges async — never blocks the response
    setImmediate(() => checkAndAwardBadges(req.user._id).catch(() => {}));
  } catch (err) {
    if (err.code === 11000) return res.json({ success: true });
    res.status(500).json({ success: false, message: 'Could not save log.' });
  }
});

// ── GET LEARNING LOGS ─────────────────────────────────────────────────────────
router.get('/learning-log', authStudent, async (req, res) => {
  try {
    const { domain } = req.query;
    const filter = { user: req.user._id };
    if (domain) filter.domain = domain;
    const logs = await LearningLog.find(filter).sort({ date: -1 }).limit(60).lean();
    const ist      = new Date(Date.now() + 5.5 * 3600000);
    const todayStr = ist.toISOString().slice(0, 10);
    const todayLog = logs.find(l => l.dateStr === todayStr) || null;
    res.json({ success: true, logs, todayLog, todayStr });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Could not fetch logs.' });
  }
});

// ── GET BADGES ────────────────────────────────────────────────────────────────
// Only course-progress milestones count — not just signing up or paying.
router.get('/badges', authStudent, async (req, res) => {
  try {
    const regs = await Registration.find({ user: req.user._id }).sort({ createdAt: 1 });
    const badges = [];

    // Pull course progress from all registrations
    const allCP = {};
    regs.forEach(r => {
      const cp = r.courseProgress || {};
      Object.entries(cp).forEach(([wid, wdata]) => {
        const week = parseInt(wid);
        if (!allCP[week]) allCP[week] = wdata;
      });
    });

    const completedWeeks  = Object.values(allCP).filter(w => w && w.projectDone).length;
    const allTopicsDone   = Object.values(allCP).reduce((s, w) =>
      s + Object.values(w?.topicStatus || {}).filter(st => st === 'completed').length, 0);
    const allQuizzesDone  = Object.values(allCP).filter(w => w && w.weekQuizDone).length;

    // Attendance data
    const totalAtt = await Attendance.countDocuments({ user: req.user._id });

    // Learning log data
    const totalLogs = await LearningLog.countDocuments({ user: req.user._id });

    // Registration-level flags
    const anyCert    = regs.some(r => r.status === 'certificate_sent');
    const certReg    = regs.find(r => r.status === 'certificate_sent');
    const anyComplete = regs.some(r => ['completed','certificate_sent'].includes(r.status));
    const completedReg = regs.find(r => ['completed','certificate_sent'].includes(r.status));
    const fastReg    = regs.find(r =>
      ['completed','certificate_sent'].includes(r.status) &&
      r.endDate && r.updatedAt && new Date(r.updatedAt) < new Date(r.endDate)
    );

    // ── LEARNING BADGES — earned only through actual course work ──────────────

    // 1. First Topic — completed first topic quiz
    badges.push({
      id: 'first_topic',
      icon: '📖',
      name: 'First Steps',
      desc: 'Complete 5 topic quizzes in the course (score ≥80% each)',
      earned: allTopicsDone >= 5,
      earnedAt: allTopicsDone >= 5 ? new Date() : null,
    });

    // 2. Week 1 Complete — submitted Week 1 mini project
    badges.push({
      id: 'week1_done',
      icon: '🏁',
      name: 'Week 1 Finisher',
      desc: 'Submit your first weekly mini project on GitHub',
      earned: completedWeeks >= 1,
      earnedAt: completedWeeks >= 1 ? new Date() : null,
    });

    // 3. Halfway There — 5 of 9 weeks done (>50%)
    badges.push({
      id: 'halfway',
      icon: '⚡',
      name: 'Halfway There',
      desc: 'Complete 5 of 9 full weeks (topics + quiz + project)',
      earned: completedWeeks >= 5,
      earnedAt: completedWeeks >= 5 ? new Date() : null,
    });

    // 4. Quiz Crusher — passed ALL 9 week assessment quizzes
    badges.push({
      id: 'quiz_crusher',
      icon: '🎯',
      name: 'Quiz Crusher',
      desc: 'Pass all 9 weekly assessment quizzes with ≥80% score',
      earned: allQuizzesDone >= 9,
      earnedAt: allQuizzesDone >= 9 ? new Date() : null,
    });

    // 5. Consistent Learner — 21 attendance days (3 weeks)
    badges.push({
      id: 'consistent',
      icon: '🔥',
      name: 'Consistent Learner',
      desc: 'Open your course dashboard on 21 separate days',
      earned: totalAtt >= 21,
      earnedAt: totalAtt >= 21 ? new Date() : null,
    });

    // 6. Journal Writer — wrote 15 daily learning logs (2+ weeks straight)
    badges.push({
      id: 'journal',
      icon: '✏️',
      name: 'Journal Writer',
      desc: 'Write 15 daily learning log entries',
      earned: totalLogs >= 15,
      earnedAt: totalLogs >= 15 ? new Date() : null,
    });

    // 7. Problem Solver — 30 LeetCode problems done (1/3 of assignments)
    let totalProblemsCompleted = 0;
    let problemSolverEarned    = false;
    let allAssignmentsDone     = false;
    for (const reg of regs) {
      const ap = await AssignmentProgress.findOne({ user: req.user._id, domain: reg.domain });
      if (ap) {
        const count = Object.keys(ap.completed || {}).length;
        if (count > totalProblemsCompleted) totalProblemsCompleted = count;
        if (count >= 90) allAssignmentsDone = true;
        if (count >= 30) problemSolverEarned = true;
      }
    }
    badges.push({
      id: 'problem_solver',
      icon: '💻',
      name: 'Problem Solver',
      desc: 'Complete 30 LeetCode problems in daily assignments',
      earned: problemSolverEarned,
      earnedAt: problemSolverEarned ? new Date() : null,
    });

    // 8. All 9 Weeks — course fully completed
    badges.push({
      id: 'course_complete',
      icon: '🏆',
      name: 'Course Complete',
      desc: 'Complete all 9 weeks — topics, quizzes and projects',
      earned: completedWeeks >= 9,
      earnedAt: completedWeeks >= 9 ? completedReg?.updatedAt || new Date() : null,
    });

    // 9. Fast Finisher — finished before end date
    badges.push({
      id: 'fast_finisher',
      icon: '🚀',
      name: 'Fast Finisher',
      desc: 'Complete the entire program ahead of your scheduled end date',
      earned: !!fastReg,
      earnedAt: fastReg?.updatedAt || null,
    });

    // 10. Assignment Master — all 90 LeetCode problems done
    badges.push({
      id: 'assignment_master',
      icon: '🏅',
      name: 'Assignment Master',
      desc: 'Complete all 90 LeetCode problems across all 45 days',
      earned: allAssignmentsDone,
      earnedAt: allAssignmentsDone ? new Date() : null,
    });

    // 11. Certificate Earned
    badges.push({
      id: 'certified',
      icon: '🎓',
      name: 'Certified',
      desc: 'Receive your QR-verified internship certificate from avRoN Tech',
      earned: anyCert,
      earnedAt: certReg?.sentAt || null,
    });

    const earned = badges.filter(b => b.earned).length;
    res.json({ success: true, badges, earned, total: badges.length });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Could not fetch badges.' });
  }
});

// ── GET ASSIGNMENT PROGRESS ───────────────────────────────────────────────────
router.get('/assignments', authStudent, async (req, res) => {
  try {
    const { domain } = req.query;
    const reg = await Registration.findOne({
      user: req.user._id,
      ...(domain ? { domain } : {}),
      status: { $in: ['payment_verified','active','completed','certificate_sent'] },
    }).sort({ createdAt: -1 });

    if (!reg) return res.json({ success: true, completed: {}, todayDay: 1, totalDays: 45 });

    // Calculate current day based on start date
    const startDate = new Date(reg.startDate);
    const now       = new Date();
    const elapsed   = Math.floor((now - startDate) / 86400000) + 1;
    const todayDay  = Math.max(1, Math.min(elapsed, 45));

    let ap = await AssignmentProgress.findOne({ user: req.user._id, domain: reg.domain });
    if (!ap) ap = { completed: {} };

    // Check if yesterday was missed — for nudge notification
    const yesterdayDay = todayDay - 1;
    let yesterdayMissed = false;
    if (yesterdayDay >= 1) {
      const y0 = ap.completed[`${yesterdayDay}-0`];
      const y1 = ap.completed[`${yesterdayDay}-1`];
      yesterdayMissed = !y0 || !y1;
    }

    res.json({
      success: true,
      completed: ap.completed || {},
      todayDay,
      totalDays: 45,
      startDate: reg.startDate,
      yesterdayMissed,
      yesterdayDay,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Could not fetch assignments.' });
  }
});

// ── MARK PROBLEM COMPLETE / INCOMPLETE ────────────────────────────────────────
router.post('/assignments/complete', authStudent, async (req, res) => {
  try {
    const { domain, day, problemIndex, done } = req.body;
    if (!domain || day == null || problemIndex == null)
      return res.status(400).json({ success: false, message: 'domain, day, problemIndex required.' });

    const reg = await Registration.findOne({
      user: req.user._id, domain,
      status: { $in: ['payment_verified','active','completed','certificate_sent'] },
    });
    if (!reg) return res.status(403).json({ success: false, message: 'No active registration.' });

    const key = `${day}-${problemIndex}`;
    let ap = await AssignmentProgress.findOne({ user: req.user._id, domain });
    if (!ap) {
      ap = new AssignmentProgress({ user: req.user._id, domain, completed: {} });
    }

    if (done) {
      ap.completed[key] = { completedAt: new Date() };
    } else {
      delete ap.completed[key];
    }
    ap.markModified('completed');
    await ap.save();

    // Check if all 45 days complete → push notification + flag for badge
    const totalCompleted = Object.keys(ap.completed).length;
    if (totalCompleted >= 90) { // 45 days × 2 problems
      const existingNotif = await Notification.findOne({
        user: req.user._id, title: '🏅 Problem Solver Badge Unlocked!'
      });
      if (!existingNotif) {
        await Notification.create({
          user: req.user._id,
          type: 'success',
          title: '🏅 Problem Solver Badge Unlocked!',
          message: 'You completed all 45 days of LeetCode assignments! The Problem Solver badge is yours.',
        });
      }
    }

    res.json({ success: true, totalCompleted });
    setImmediate(() => checkAndAwardBadges(req.user._id).catch(() => {}));
  } catch (err) {
    res.status(500).json({ success: false, message: 'Could not update progress.' });
  }
});

// ── MARK ATTENDANCE ───────────────────────────────────────────────────────────
// Called by course-dashboard.html on load. Idempotent — safe to call many times.
router.post('/attendance/mark', authStudent, async (req, res) => {
  try {
    const { domain } = req.body;
    if (!domain) return res.status(400).json({ success: false, message: 'domain required.' });

    // Verify student has an active registration for this domain
    const reg = await Registration.findOne({
      user: req.user._id,
      domain,
      status: { $in: ['payment_verified', 'active', 'completed', 'certificate_sent'] },
    });
    if (!reg) return res.status(403).json({ success: false, message: 'No active registration for this domain.' });

    // Build today's date string in IST (UTC+5:30)
    const now    = new Date();
    const ist    = new Date(now.getTime() + (5.5 * 60 * 60 * 1000));
    const dateStr = ist.toISOString().slice(0, 10); // YYYY-MM-DD
    const date    = new Date(dateStr + 'T00:00:00.000Z');

    // Upsert — insert only if not already present today
    await Attendance.updateOne(
      { user: req.user._id, domain, dateStr },
      { $setOnInsert: { user: req.user._id, domain, date, dateStr } },
      { upsert: true }
    );

    res.json({ success: true, date: dateStr });
    setImmediate(() => checkAndAwardBadges(req.user._id).catch(() => {}));
  } catch (err) {
    if (err.code === 11000) {
      // Already marked today — still check badges in case threshold just reached
      setImmediate(() => checkAndAwardBadges(req.user._id).catch(() => {}));
      return res.json({ success: true, alreadyMarked: true });
    }
    res.status(500).json({ success: false, message: 'Could not mark attendance.' });
  }
});

// ── GET ATTENDANCE STATS ──────────────────────────────────────────────────────
router.get('/attendance', authStudent, async (req, res) => {
  try {
    const regs = await Registration.find({
      user: req.user._id,
      status: { $in: ['payment_verified', 'active', 'completed', 'certificate_sent'] },
    });
    if (!regs.length) return res.json({ success: true, overall: 0, byDomain: [] });

    const results = [];

    for (const reg of regs) {
      const totalDays  = reg.duration ? parseInt(reg.duration) * 30 : 45;
      const startDate  = new Date(reg.startDate);
      const today      = new Date();

      // Count days elapsed since start (capped at total)
      const msPerDay   = 24 * 60 * 60 * 1000;
      const elapsed    = Math.max(1, Math.min(
        Math.floor((today - startDate) / msPerDay) + 1,
        totalDays
      ));

      // Count distinct days with attendance
      const presentDays = await Attendance.countDocuments({
        user:   req.user._id,
        domain: reg.domain,
        date:   { $gte: startDate },
      });

      const pct = Math.round((presentDays / elapsed) * 100);

      // All attendance dates since start (for full calendar)
      const allRecords = await Attendance.find({
        user:   req.user._id,
        domain: reg.domain,
        date:   { $gte: startDate },
      }).select('dateStr').lean();
      results.push({
        domain:      reg.domain,
        totalDays,
        elapsed,
        presentDays,
        percentage:  Math.min(pct, 100),
        recentDates: allRecords.map(r => r.dateStr),
      });
    }

    // Overall attendance across all courses
    const overall = results.length
      ? Math.round(results.reduce((s, r) => s + r.percentage, 0) / results.length)
      : 0;

    res.json({ success: true, overall, byDomain: results });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Could not fetch attendance.' });
  }
});

module.exports = router;
