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

// ── Email test endpoint (admin only — remove after confirming emails work) ────
app.get('/api/test-email', async (req, res) => {
  const secret = req.query.secret;
  if (secret !== process.env.ADMIN_KEY) {
    return res.status(403).json({ success: false, message: 'Forbidden' });
  }
  const to = req.query.to;
  if (!to) return res.status(400).json({ success: false, message: 'Pass ?to=youremail@gmail.com&secret=...' });

  try {
    if (process.env.RESEND_API_KEY) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ from: process.env.EMAIL_FROM || 'avRoN Tech <onboarding@resend.dev>', to: [to], subject: 'avRoN Tech — Email Test ✅', html: '<h2>Working via Resend!</h2>' }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || JSON.stringify(data));
      return res.json({ success: true, message: `Sent to ${to}`, provider: 'Resend HTTP API', id: data.id });
    }

    if (process.env.BREVO_SMTP_KEY) {
      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: { 'api-key': process.env.BREVO_SMTP_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sender: { name: 'avRoN Tech', email: process.env.BREVO_SMTP_USER },
          to: [{ email: to }],
          subject: 'avRoN Tech — Email Test ✅',
          htmlContent: '<h2>Working via Brevo!</h2><p>Emails are now working on Render.</p>',
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(`Brevo: ${data.message || JSON.stringify(data)}`);
      return res.json({ success: true, message: `Sent to ${to}`, provider: 'Brevo HTTP API', id: data.messageId });
    }

    // Local dev fallback — Gmail SMTP
    const nodemailer = require('nodemailer');
    const transport = nodemailer.createTransport({ service: 'gmail', auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS } });
    await transport.verify();
    await transport.sendMail({ from: `"avRoN Tech" <${process.env.EMAIL_USER}>`, to, subject: 'avRoN Tech — Email Test ✅', text: 'Working!' });
    res.json({ success: true, message: `Sent to ${to}`, provider: 'Gmail SMTP' });
  } catch (err) {
    console.error('Test email error:', err);
    res.status(500).json({
      success: false,
      error: err.message,
      provider: process.env.RESEND_API_KEY ? 'Resend HTTP API' : 'Gmail SMTP',
      resend_key_set: !!process.env.RESEND_API_KEY,
    });
  }
});

// ── Health check ──────────────────────────────────────────────────────────────

// Helper: format bytes to human-readable
function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

// Helper: format uptime to human-readable
function formatUptime(seconds) {
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return `${d}d ${h}h ${m}m ${s}s`;
}

// ── Full health report ────────────────────────────────────────────────────────
app.get('/api/health', async (req, res) => {
  const startTime = Date.now();
  const dbReadyState = mongoose.connection.readyState;
  const dbState = ['disconnected', 'connected', 'connecting', 'disconnecting'][dbReadyState] || 'unknown';
  const isHealthy = dbState === 'connected';

  // Memory stats
  const mem = process.memoryUsage();

  // Live DB stats (non-blocking, fail gracefully)
  let dbStats = null;
  try {
    if (isHealthy) {
      const Registration = require('./models/Registration');
      const User = require('./models/User');
      const [totalRegs, totalUsers, pendingPayments] = await Promise.all([
        Registration.countDocuments(),
        User.countDocuments(),
        Registration.countDocuments({ status: 'payment_submitted' }),
      ]);
      dbStats = { totalRegistrations: totalRegs, totalUsers, pendingPayments };
    }
  } catch (_) { /* non-critical */ }

  // Package version
  let version = 'unknown';
  try { version = require('./package.json').version; } catch (_) {}

  const responseTime = Date.now() - startTime;

  const payload = {
    status: isHealthy ? 'ok' : 'degraded',
    service: BRAND,
    version,
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
    uptime: {
      seconds: Math.round(process.uptime()),
      human: formatUptime(Math.round(process.uptime())),
    },
    response_time_ms: responseTime,
    database: {
      status: dbState,
      name: mongoose.connection.name || 'certifypro',
    },
    memory: {
      rss:       formatBytes(mem.rss),
      heapUsed:  formatBytes(mem.heapUsed),
      heapTotal: formatBytes(mem.heapTotal),
      external:  formatBytes(mem.external),
    },
    email: {
      configured: !!(process.env.EMAIL_USER && process.env.EMAIL_PASS),
      provider: process.env.EMAIL_USER ? process.env.EMAIL_USER.split('@')[1] : 'not configured',
    },
    ...(dbStats && { stats: dbStats }),
  };

  res.status(isHealthy ? 200 : 503).json(payload);
});

// ── Liveness probe — is the process alive? (used by Render / Docker) ──────────
app.get('/api/health/live', (req, res) => {
  res.status(200).json({ alive: true, timestamp: new Date().toISOString() });
});

// ── Readiness probe — is the app ready to serve traffic? ─────────────────────
app.get('/api/health/ready', (req, res) => {
  const dbState = mongoose.connection.readyState;
  const ready = dbState === 1; // 1 = connected
  res.status(ready ? 200 : 503).json({
    ready,
    database: ready ? 'connected' : 'not ready',
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

// ── Public broadcasts endpoint (no auth — used by student portal banner) ──────
app.get('/api/broadcasts', async (req, res) => {
  try {
    const ActivityLog = require('./models/ActivityLog');
    const broadcasts = await ActivityLog.find({ action: 'broadcast' })
      .sort({ createdAt: -1 }).limit(5).select('details createdAt adminLabel');
    res.json({ success: true, data: broadcasts });
  } catch (err) {
    res.status(500).json({ success: false, data: [] });
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

  // ── Build the list of admins to seed ─────────────────────────────────────
  // Primary admin always comes from ADMIN_EMAIL + ADMIN_PASSWORD
  // Extra admins: set ADMIN_2_EMAIL + ADMIN_2_PASSWORD, ADMIN_3_EMAIL + ADMIN_3_PASSWORD, etc.
  const adminsToSeed = [
    { email: process.env.ADMIN_EMAIL,   password: process.env.ADMIN_PASSWORD,   fullName: process.env.ADMIN_NAME   || 'Admin' },
    { email: process.env.ADMIN_2_EMAIL, password: process.env.ADMIN_2_PASSWORD, fullName: process.env.ADMIN_2_NAME || 'Admin 2' },
    { email: process.env.ADMIN_3_EMAIL, password: process.env.ADMIN_3_PASSWORD, fullName: process.env.ADMIN_3_NAME || 'Admin 3' },
    { email: process.env.ADMIN_4_EMAIL, password: process.env.ADMIN_4_PASSWORD, fullName: process.env.ADMIN_4_NAME || 'Admin 4' },
  ].filter(a => a.email && a.password); // skip entries with missing env vars

  for (const adminData of adminsToSeed) {
    const email = adminData.email.toLowerCase();
    const password = adminData.password;

    let admin = await User.findOne({ email });
    if (admin) {
      let changed = false;
      if (!admin.isAdmin)  { admin.isAdmin  = true; changed = true; }
      if (!admin.isActive) { admin.isActive = true; changed = true; }
      // Only re-hash if password actually changed (avoids bcrypt work on every restart)
      const passwordMatch = await admin.comparePassword(password);
      if (!passwordMatch) {
        admin.password = password; // pre-save hook re-hashes
        changed = true;
      }
      if (changed) {
        await admin.save();
        logger.info(`🔐 Admin synced: ${email}`);
      }
    } else {
      admin = new User({ fullName: adminData.fullName, email, password, isAdmin: true });
      await admin.save();
      logger.info(`🔐 Admin seeded: ${email}`);
    }
  }
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
