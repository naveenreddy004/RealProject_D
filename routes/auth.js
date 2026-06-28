const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Registration = require('../models/Registration');
const { generateToken, authStudent } = require('../middleware/auth');
const { queueEmail } = require('../utils/emailQueue');
const { pushNotification } = require('../utils/notify');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'public/uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const allowedImageTypes = /jpeg|jpg|png|webp/;
const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const ext  = allowedImageTypes.test(path.extname(file.originalname).toLowerCase());
    const mime = allowedImageTypes.test(file.mimetype);
    if (ext && mime) return cb(null, true);
    cb(new Error('Only image files (jpeg, jpg, png, webp) are allowed.'));
  },
});

// ── REGISTER (Website 1 form) ─────────────────────────────────────────────────
router.post('/register', upload.single('profilePhoto'), async (req, res) => {
  try {
    const { fullName, email, gender, mobile, domain, duration, college, course, startDate, endDate, location, package: pkg } = req.body;
    if (!fullName || !email || !domain || !startDate || !endDate) {
      return res.status(400).json({ success: false, message: 'Required fields missing.' });
    }

    const parsedStart = new Date(startDate);
    const parsedEnd   = new Date(endDate);
    if (isNaN(parsedStart.getTime()) || isNaN(parsedEnd.getTime())) {
      return res.status(400).json({ success: false, message: 'Invalid start or end date.' });
    }
    if (parsedEnd <= parsedStart) {
      return res.status(400).json({ success: false, message: 'End date must be after start date.' });
    }

    // Check if user exists
    let user = await User.findOne({ email: email.toLowerCase() });
    let isNewUser = false;

    if (!user) {
      isNewUser = true;
      user = new User({
        fullName, email: email.toLowerCase(), gender, mobile,
        college, course, location,
        profilePhoto: req.file ? req.file.filename : null,
      });
      await user.save();
    }

    // No restriction on multiple registrations — allow any email to register anytime

    // Generate collision-proof cert ID using crypto random bytes
    const crypto = require('crypto');
    const certId = 'AT' + crypto.randomBytes(4).toString('hex').toUpperCase();
    const reg = new Registration({
      user: user._id, certId, domain, duration,
      startDate: parsedStart, endDate: parsedEnd,
      package: pkg || 'Basic Package',
      amount: Number(req.body.amount) || 199,
      status: 'payment_pending',
      // Store registrant's actual name/college/course from the form
      // so certificate is correct even when the same email is reused
      registrantName:    fullName.trim(),
      registrantCollege: req.body.college || null,
      registrantCourse:  req.body.course  || null,
    });
    reg.initTasks();
    await reg.save();

    // Respond IMMEDIATELY — single welcome email is dispatched in background.
    queueEmail('confirmation', { user, reg });

    // Push registration notification
    pushNotification(user._id, {
      type: 'success',
      title: '🎉 Registration Confirmed!',
      message: `Your registration for ${domain} is confirmed. Submit your payment to activate your internship.`,
      regId: reg._id,
    });

    return res.json({ success: true, message: 'Registration successful! Check your email.', certId, isNewUser });
  } catch (err) {
    console.error(err);
    if (err.code === 11000) return res.status(400).json({ success: false, message: 'Email already registered.' });
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

// ── SEND OTP (first login / forgot password) ──────────────────────────────────
router.post('/send-otp', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ success: false, message: 'Email required.' });

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(404).json({ success: false, message: 'No account found with this email. Please register first.' });

    const otp = user.generateOTP();
    await user.save();
    queueEmail('otp', { user, otp });   // fire-and-forget, do not block response

    res.json({ success: true, message: 'OTP sent to your email.', hasPassword: !!user.password });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to send OTP.' });
  }
});

// ── VERIFY OTP + SET PASSWORD (first time login) ──────────────────────────────
router.post('/verify-otp', async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(404).json({ success: false, message: 'User not found.' });

    const result = user.verifyOTP(otp);
    if (!result.valid) return res.status(400).json({ success: false, message: result.reason });

    const isFirstLogin = !user.password;

    // If first login, require setting a password
    if (isFirstLogin) {
      if (!newPassword || newPassword.length < 6) {
        return res.status(400).json({ success: false, message: 'Please set a password (min 6 characters).', requirePassword: true });
      }
      user.password = newPassword;
    }

    user.otpVerified = true;
    user.lastLogin = new Date();
    await user.save();

    const token = generateToken(user._id);
    const reg = await Registration.findOne({ user: user._id }).sort({ createdAt: -1 });

    // Clear otpVerified after issuing token — it's a one-time flag
    setImmediate(async () => {
      try { await User.findByIdAndUpdate(user._id, { otpVerified: false }); } catch (_) {}
    });

    res.json({
      success: true,
      token,
      user: { id: user._id, fullName: user.fullName, email: user.email },
      registration: reg ? { certId: reg.certId, domain: reg.domain, status: reg.status } : null,
      isFirstLogin
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Verification failed.' });
  }
});

// ── LOGIN WITH PASSWORD (returning users) ─────────────────────────────────────
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ success: false, message: 'Email and password required.' });

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(404).json({ success: false, message: 'No account found. Please register.' });
    if (!user.password) return res.status(400).json({ success: false, message: 'Please use OTP login for the first time.', requireOTP: true });

    const match = await user.comparePassword(password);
    if (!match) return res.status(400).json({ success: false, message: 'Incorrect password.' });

    user.lastLogin = new Date();
    await user.save();

    const token = generateToken(user._id);
    const reg = await Registration.findOne({ user: user._id }).sort({ createdAt: -1 });

    res.json({
      success: true,
      token,
      user: { id: user._id, fullName: user.fullName, email: user.email },
      registration: reg ? { certId: reg.certId, domain: reg.domain, status: reg.status } : null
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Login failed.' });
  }
});

// ── GET ME (check token) ──────────────────────────────────────────────────────
router.get('/me', authStudent, async (req, res) => {
  try {
    const reg = await Registration.findOne({ user: req.user._id }).sort({ createdAt: -1 });
    // Strip sensitive OTP fields before sending
    const user = req.user.toObject ? req.user.toObject() : { ...req.user };
    delete user.otp;
    delete user.otpExpiresAt;
    res.json({ success: true, user, registration: reg });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error fetching profile.' });
  }
});

// ── CHANGE PASSWORD ───────────────────────────────────────────────────────────
router.post('/change-password', authStudent, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    if (!newPassword || newPassword.length < 6) {
      return res.status(400).json({ success: false, message: 'New password must be at least 6 characters.' });
    }
    const user = await User.findById(req.user._id);
    if (user.password) {
      if (!currentPassword) return res.status(400).json({ success: false, message: 'Current password is required.' });
      const match = await user.comparePassword(currentPassword);
      if (!match) return res.status(400).json({ success: false, message: 'Current password is incorrect.' });
    }
    user.password = newPassword;
    await user.save();
    res.json({ success: true, message: 'Password updated successfully.' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to change password.' });
  }
});

// ── ADMIN LOGIN (email + password, returns admin JWT) ────────────────────────
router.post('/admin/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ success: false, message: 'Email and password required.' });

    const user = await User.findOne({ email: email.toLowerCase(), isAdmin: true });
    if (!user || !user.isActive) return res.status(401).json({ success: false, message: 'Invalid admin credentials.' });

    const match = await user.comparePassword(password);
    if (!match) return res.status(401).json({ success: false, message: 'Invalid admin credentials.' });

    user.lastLogin = new Date();
    await user.save();

    const token = generateToken(user._id, { isAdmin: true });
    res.json({
      success: true,
      message: 'Welcome back, admin.',
      token,
      admin: { fullName: user.fullName, email: user.email },
    });
  } catch (err) {
    console.error('Admin login error:', err);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

module.exports = router;
