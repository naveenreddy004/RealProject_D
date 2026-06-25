require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const logger = require('./utils/logger');

const BRAND = 'avRoN Tech';
const app = express();
const PORT = process.env.PORT || 3000;

// ── Ensure directories exist ──────────────────────────────────────────────────
['public/uploads', 'public/qr', 'logs'].forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

// ── Security middleware ───────────────────────────────────────────────────────
app.use(helmet({ contentSecurityPolicy: false, crossOriginResourcePolicy: false }));

// CORS — locked down via ALLOWED_ORIGINS env (comma-separated). "*" means open.
const allowed = (process.env.ALLOWED_ORIGINS || '*')
  .split(',').map(s => s.trim()).filter(Boolean);
app.use(cors({
  origin: (origin, cb) => {
    if (!origin || allowed.includes('*') || allowed.includes(origin)) return cb(null, true);
    return cb(new Error('CORS: origin ' + origin + ' is not allowed'));
  },
  credentials: true,
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
// HTTP request logging → winston file logs
app.use(morgan('combined', { stream: logger.stream }));

// Razorpay webhook needs raw body — mount before JSON parser
app.use('/api/payment/razorpay/webhook', express.raw({ type: 'application/json' }));

// ── Rate limiting ─────────────────────────────────────────────────────────────
const registerLimiter    = rateLimit({ windowMs: 15 * 60 * 1000, max: 10, message: { success: false, message: 'Too many requests. Try again later.' } });
const loginLimiter       = rateLimit({ windowMs: 15 * 60 * 1000, max: 20 });
const payPublicLimiter   = rateLimit({ windowMs: 15 * 60 * 1000, max: 5, message: { success: false, message: 'Too many payment submissions. Try again later.' } });
const otpLimiter         = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 3,
  keyGenerator: (req) => `${req.ip}::${(req.body && req.body.email || '').toLowerCase()}`,
  message: { success: false, message: 'Too many OTP requests. Try again in 1 hour.' }
});

// ── Static files ──────────────────────────────────────────────────────────────
app.use(express.static('public'));
app.use('/uploads', express.static('public/uploads'));

// ── API routes ────────────────────────────────────────────────────────────────
const authRoutes    = require('./routes/auth');
const studentRoutes = require('./routes/student');
const adminRoutes   = require('./routes/admin');
const paymentRoutes = require('./routes/payment');
const coursesRoutes = require('./routes/courses');

app.use('/api/auth/register',                  registerLimiter);
app.use('/api/auth/login',                     loginLimiter);
app.use('/api/auth/admin/login',               loginLimiter);
app.use('/api/auth/send-otp',                  otpLimiter);
app.use('/api/student/submit-payment-public',  payPublicLimiter);
app.use('/api/auth',     authRoutes);
app.use('/api/student',  studentRoutes);
app.use('/api/admin',    adminRoutes);
app.use('/api/payment',  paymentRoutes);
app.use('/api/courses',  coursesRoutes);

// Initialize email queue worker (no-op without REDIS_URL)
require('./utils/emailQueue');

// ── Health check ──────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  const dbState = ['disconnected', 'connected', 'connecting', 'disconnecting'][mongoose.connection.readyState] || 'unknown';
  res.json({
    status: dbState === 'connected' ? 'ok' : 'degraded',
    service: BRAND,
    uptime_seconds: Math.round(process.uptime()),
    mongo: dbState,
    timestamp: new Date().toISOString(),
  });
});

// ── UPI QR Code endpoint ──────────────────────────────────────────────────────
app.get('/api/upi-qr', async (req, res) => {
  try {
    const QRCode = require('qrcode');
    const amount = req.query.amount || process.env.UPI_AMOUNT || '199';
    const upiId  = process.env.UPI_ID || 'avron@upi';
    const name   = encodeURIComponent(process.env.UPI_NAME || BRAND);
    const upiString = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR&tn=avRoN+Tech+Internship`;
    const qr = await QRCode.toDataURL(upiString, { width: 320, margin: 2, color: { dark: '#0B192C', light: '#ffffff' } });
    res.json({ success: true, qr, upiId, amount, name: process.env.UPI_NAME || BRAND });
  } catch (err) {
    logger.error('UPI QR error', err);
    res.status(500).json({ success: false, message: 'Error generating QR.' });
  }
});

// ── Page routes (Multi-Page Application) ──────────────────────────────────────
app.get('/',                (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/register',        (req, res) => res.sendFile(path.join(__dirname, 'public', 'register.html')));
app.get('/portal',          (req, res) => res.sendFile(path.join(__dirname, 'public', 'portal.html')));
app.get('/dashboard',       (req, res) => res.sendFile(path.join(__dirname, 'public', 'dashboard.html')));
app.get('/verify',          (req, res) => res.sendFile(path.join(__dirname, 'public', 'verify.html')));
app.get('/admin',           (req, res) => res.redirect('/admin/login'));
app.get('/admin/login',     (req, res) => res.sendFile(path.join(__dirname, 'public', 'admin', 'login.html')));
app.get('/admin/dashboard', (req, res) => res.sendFile(path.join(__dirname, 'public', 'admin', 'dashboard.html')));

// ── Global error handler ──────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.originalUrl} → ${err.message}`, err);
  if (res.headersSent) return;
  res.status(500).json({ success: false, message: 'Server error.' });
});

// ── Seed default admin user (idempotent) ──────────────────────────────────────
async function seedAdmin() {
  const User = require('./models/User');

  // Hard fail if critical env vars are missing — never use fallback secrets in prod
  if (!process.env.JWT_SECRET) {
    logger.error('❌ JWT_SECRET is not set. Refusing to start.');
    process.exit(1);
  }
  if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
    logger.error('❌ ADMIN_EMAIL and ADMIN_PASSWORD must be set in environment variables.');
    process.exit(1);
  }
  if (!process.env.MONGODB_URI) {
    logger.error('❌ MONGODB_URI is not set. Refusing to start.');
    process.exit(1);
  }

  const email = process.env.ADMIN_EMAIL.toLowerCase();
  const password = process.env.ADMIN_PASSWORD;

  let admin = await User.findOne({ email });
  if (admin) {
    if (!admin.isAdmin) { admin.isAdmin = true; await admin.save(); logger.info('Promoted existing user to admin'); }
    return;
  }
  admin = new User({ fullName: 'Admin', email, password, isAdmin: true });
  await admin.save();
  logger.info(`🔐 Admin account seeded → ${email}`);
}

// ── MongoDB Connect ───────────────────────────────────────────────────────────
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    logger.info(`✅ MongoDB connected`);
  } catch (err) {
    logger.error('❌ MongoDB connection failed', err);
    process.exit(1);
  }
}

// ── Start server ──────────────────────────────────────────────────────────────
connectDB().then(async () => {
  await seedAdmin();
  app.listen(PORT, () => {
    logger.info(`🚀 ${BRAND} running on port ${PORT}`);
    console.log(`\n🚀 ${BRAND} running at http://localhost:${PORT}`);
    console.log(`🌐 Landing:    http://localhost:${PORT}/`);
    console.log(`📝 Register:   http://localhost:${PORT}/register`);
    console.log(`🔑 Portal:     http://localhost:${PORT}/portal`);
    console.log(`📊 Dashboard:  http://localhost:${PORT}/dashboard`);
    console.log(`👨‍💼 Admin:      http://localhost:${PORT}/admin/login`);
    console.log(`🔍 Verify:     http://localhost:${PORT}/verify`);
    console.log(`💚 Health:     http://localhost:${PORT}/api/health\n`);
  });
});

// ── Graceful shutdown ─────────────────────────────────────────────────────────
process.on('SIGINT', async () => {
  logger.info('SIGINT received, closing MongoDB and shutting down.');
  await mongoose.connection.close();
  process.exit(0);
});
process.on('unhandledRejection', (reason) => { logger.error('Unhandled rejection', reason); });
process.on('uncaughtException',  (err)    => { logger.error('Uncaught exception', err); });
