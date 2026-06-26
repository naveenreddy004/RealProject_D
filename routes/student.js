const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Registration = require('../models/Registration');
const User = require('../models/User');
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
    const reg = await Registration.findOne({ user: req.user._id }).sort({ createdAt: -1 });
    if (!reg) return res.json({ success: true, registration: null, user: req.user });

    const totalTasks = reg.tasks.length;
    const doneTasks = reg.tasks.filter(t => t.completed).length;
    // Guard against division by zero when tasks array is empty
    const progress = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;

    res.json({
      success: true,
      user: req.user,
      registration: reg,
      progress,
      upiDetails: {
        upiId: process.env.UPI_ID || 'avron@upi',
        name: process.env.UPI_NAME || 'avRoN Technologies',
        amount: reg.amount,
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

    setImmediate(async () => {
      try {
        const receiptBuf = await generateReceiptPDF(user, reg);
        await Registration.findByIdAndUpdate(reg._id, { receiptPdf: receiptBuf });
      } catch (e) { console.error('Receipt PDF error:', e.message); }
    });
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

    // Background: generate PDF receipt — stored in MongoDB, no disk file.
    setImmediate(async () => {
      try {
        const receiptBuf = await generateReceiptPDF(req.user, reg);
        await Registration.findByIdAndUpdate(reg._id, { receiptPdf: receiptBuf });
      } catch (e) { console.error('Receipt PDF error:', e.message); }
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
    const reg = await Registration.findOne({ user: req.user._id });
    if (!reg) return res.status(404).json({ success: false, message: 'Registration not found.' });
    if (reg.status !== 'active') return res.status(400).json({ success: false, message: 'Internship not yet active.' });

    if (!isNaN(taskIndex) && taskIndex >= 0 && taskIndex < reg.tasks.length) {
      reg.tasks[taskIndex].completed = true;
      reg.tasks[taskIndex].completedAt = new Date();
    }
    reg.tasksCompletedCount = reg.tasks.filter(t => t.completed).length;

    // If all required tasks done, mark completed
    const allRequired = reg.tasks.filter(t => t.required).every(t => t.completed);
    if (allRequired) reg.status = 'completed';

    await reg.save();
    res.json({ success: true, status: reg.status, tasksCompletedCount: reg.tasksCompletedCount });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error.' });
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

// ── DOWNLOAD CERTIFICATE PDF (gated on admin approval) ───────────────────────
router.get('/certificate', authStudent, async (req, res) => {
  try {
    const reg = await Registration.findOne({ user: req.user._id });
    if (!reg) return res.status(404).json({ success: false, message: 'Registration not found.' });
    if (reg.revoked) return res.status(403).json({ success: false, message: 'Certificate revoked.' });
    if (reg.status !== 'certificate_sent') {
      return res.status(400).json({ success: false, message: 'Certificate is locked. It will be available once your payment is approved by our admin team.' });
    }

    // Serve from MongoDB buffer — no file read
    let pdfBuf = reg.certificatePdf;
    if (!pdfBuf || pdfBuf.length === 0) {
      // Regenerate on-the-fly and persist for next time
      pdfBuf = await generateCertificatePDF(req.user, reg);
      await Registration.findByIdAndUpdate(reg._id, { certificatePdf: pdfBuf });
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="Certificate_${reg.certId}.pdf"`);
    res.setHeader('Content-Length', pdfBuf.length);
    res.send(pdfBuf);
  } catch (err) {
    res.status(500).json({ success: false, message: 'Could not download certificate.' });
  }
});

// ── GET OFFER LETTER (gated on certificate_sent status) ──────────────────────
router.get('/offer-letter', authStudent, async (req, res) => {
  try {
    const reg = await Registration.findOne({ user: req.user._id });
    if (!reg) return res.status(404).json({ success: false, message: 'Registration not found.' });
    if (!['certificate_sent', 'active', 'completed'].includes(reg.status)) {
      return res.status(400).json({ success: false, message: 'Offer letter not yet available. Awaiting admin approval.' });
    }

    let pdfBuf = reg.offerLetterPdf;
    if (!pdfBuf || pdfBuf.length === 0) {
      pdfBuf = await generateOfferLetterPDF(req.user, reg);
      await Registration.findByIdAndUpdate(reg._id, { offerLetterPdf: pdfBuf });
    }

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
    const reg = await Registration.findOne({ user: req.user._id });
    if (!reg || !reg.payment.utrNumber) return res.status(404).json({ success: false, message: 'No payment found.' });

    let pdfBuf = reg.receiptPdf;
    if (!pdfBuf || pdfBuf.length === 0) {
      // Regenerate and persist if somehow missing
      pdfBuf = await generateReceiptPDF(req.user, reg);
      await Registration.findByIdAndUpdate(reg._id, { receiptPdf: pdfBuf });
    }

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
    const reg = await Registration.findOne({ user: req.user._id });
    if (!reg) return res.status(404).json({ success: false, message: 'Registration not found.' });
    const { getCurriculum } = require('../utils/curricula');
    const data = getCurriculum(reg.domain);
    res.json({ success: true, domain: reg.domain, curriculum: data });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Could not load curriculum.' });
  }
});

// ── VERIFY CERTIFICATE (public) ───────────────────────────────────────────────
router.get('/verify/:certId', async (req, res) => {
  try {
    const reg = await Registration.findOne({ certId: req.params.certId }).populate('user', 'fullName college course');
    if (!reg) return res.json({ valid: false, message: 'Certificate not found.', state: 'not_found' });

    if (reg.revoked) {
      return res.json({
        valid: false, state: 'revoked',
        name: reg.user.fullName, domain: reg.domain, certId: reg.certId,
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
      name: reg.user.fullName,
      domain: reg.domain,
      college: reg.user.college,
      course: reg.user.course,
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

    const { sendTicketEmail } = require('../utils/emailService');
    setImmediate(() => {
      sendTicketEmail(req.user, {
        id: ticketId || ('TKT-' + Date.now().toString(36).toUpperCase().slice(-6)),
        subject: subject.trim(),
        message: message.trim(),
        category: category || 'General',
        priority: priority || 'Normal',
      }).catch(e => console.error('Ticket email error:', e.message));
    });

    res.json({ success: true, message: 'Ticket submitted. We will get back to you within 24 hours.' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to submit ticket.' });
  }
});

module.exports = router;
