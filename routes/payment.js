const express = require('express');
const crypto = require('crypto');
const Registration = require('../models/Registration');
const User = require('../models/User');
const { authStudent } = require('../middleware/auth');
const { queueEmail } = require('../utils/emailQueue');
const { generateOfferLetterPDF } = require('../utils/pdfGenerator');
const { logActivity } = require('../utils/activityLogger');

const router = express.Router();

function isRazorpayEnabled() {
  return !!(process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET);
}

// ── Payment gateway config (public) ───────────────────────────────────────────
router.get('/config', (req, res) => {
  res.json({
    success: true,
    gateways: {
      upi: true,
      razorpay: isRazorpayEnabled(),
    },
    razorpayKeyId: isRazorpayEnabled() ? process.env.RAZORPAY_KEY_ID : null,
  });
});

// ── Create Razorpay order ─────────────────────────────────────────────────────
router.post('/razorpay/create-order', authStudent, async (req, res) => {
  try {
    if (!isRazorpayEnabled()) {
      return res.status(400).json({ success: false, message: 'Razorpay is not configured.' });
    }

    const reg = await Registration.findOne({
      user: req.user._id,
      status: { $nin: ['certificate_sent', 'rejected', 'payment_submitted', 'payment_verified', 'active'] },
    });
    if (!reg) return res.status(404).json({ success: false, message: 'No registration awaiting payment.' });

    const Razorpay = require('razorpay');
    const rzp = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const order = await rzp.orders.create({
      amount: reg.amount * 100,
      currency: 'INR',
      receipt: reg.certId,
      notes: { certId: reg.certId, userId: req.user._id.toString() },
    });

    reg.payment.gatewayOrderId = order.id;
    reg.payment.gatewayProvider = 'razorpay';
    reg.payment.method = 'razorpay';
    await reg.save();

    res.json({
      success: true,
      orderId: order.id,
      amount: reg.amount,
      currency: 'INR',
      keyId: process.env.RAZORPAY_KEY_ID,
      name: 'avRoN Technologies',
      description: `${reg.domain} Internship`,
      prefill: { name: req.user.fullName, email: req.user.email, contact: req.user.mobile || '' },
    });
  } catch (err) {
    console.error('Razorpay order error:', err);
    res.status(500).json({ success: false, message: 'Failed to create payment order.' });
  }
});

// ── Verify Razorpay payment (client callback) ───────────────────────────────────
router.post('/razorpay/verify', authStudent, async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ success: false, message: 'Missing payment details.' });
    }

    const body = razorpay_order_id + '|' + razorpay_payment_id;
    const expected = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest('hex');

    if (expected !== razorpay_signature) {
      return res.status(400).json({ success: false, message: 'Invalid payment signature.' });
    }

    const reg = await Registration.findOne({
      user: req.user._id,
      'payment.gatewayOrderId': razorpay_order_id,
    }).populate('user');
    if (!reg) return res.status(404).json({ success: false, message: 'Order not found.' });

    if (['active', 'payment_verified', 'completed', 'certificate_sent'].includes(reg.status)) {
      return res.json({ success: true, message: 'Payment already confirmed.', status: reg.status });
    }

    await activatePayment(reg, {
      paymentId: razorpay_payment_id,
      utrNumber: razorpay_payment_id,
      verifiedBy: 'Razorpay (Auto)',
      method: 'razorpay',
    });

    res.json({ success: true, message: 'Payment confirmed! Your internship is now active.' });
  } catch (err) {
    console.error('Razorpay verify error:', err);
    res.status(500).json({ success: false, message: 'Payment verification failed.' });
  }
});

// ── Razorpay webhook ────────────────────────────────────────────────────────────
router.post('/razorpay/webhook', async (req, res) => {
  try {
    const rawBody = Buffer.isBuffer(req.body) ? req.body : Buffer.from(typeof req.body === 'string' ? req.body : JSON.stringify(req.body));
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
    if (!secret) {
      console.error('RAZORPAY_WEBHOOK_SECRET is not set — rejecting webhook.');
      return res.status(400).json({ success: false, message: 'Webhook secret not configured.' });
    }
    const signature = req.headers['x-razorpay-signature'];
    const expected = crypto.createHmac('sha256', secret).update(rawBody).digest('hex');
    if (signature !== expected) return res.status(400).json({ success: false, message: 'Invalid signature.' });

    const event = JSON.parse(rawBody.toString());
    if (event.event === 'payment.captured') {
      const payment = event.payload.payment.entity;
      const orderId = payment.order_id;
      const reg = await Registration.findOne({ 'payment.gatewayOrderId': orderId }).populate('user');
      if (reg && !['active', 'payment_verified', 'completed', 'certificate_sent'].includes(reg.status)) {
        await activatePayment(reg, {
          paymentId: payment.id,
          utrNumber: payment.id,
          verifiedBy: 'Razorpay Webhook',
          method: 'razorpay',
        });
        await logActivity({
          action: 'auto_payment_verified',
          targetId: reg._id,
          targetLabel: reg.user?.fullName,
          details: { provider: 'razorpay', paymentId: payment.id, certId: reg.certId },
        });
      }
    }
    res.json({ success: true });
  } catch (err) {
    console.error('Razorpay webhook error:', err);
    res.status(500).json({ success: false });
  }
});

// ── Shared: activate payment after gateway confirmation ─────────────────────────
async function activatePayment(reg, { paymentId, utrNumber, verifiedBy, method }) {
  reg.payment.utrNumber = utrNumber;
  reg.payment.gatewayPaymentId = paymentId;
  reg.payment.method = method;
  reg.payment.submittedAt = new Date();
  reg.payment.verifiedAt = new Date();
  reg.payment.verifiedBy = verifiedBy;
  reg.payment.amount = reg.amount;
  reg.status = 'active';

  const payTask = reg.tasks.find(t => t.title === 'Make Payment');
  if (payTask) { payTask.completed = true; payTask.completedAt = new Date(); }
  const portalTask = reg.tasks.find(t => t.title === 'Login to Portal');
  if (portalTask) { portalTask.completed = true; portalTask.completedAt = new Date(); }
  reg.tasksCompletedCount = reg.tasks.filter(t => t.completed).length;

  await reg.save();

  const user = (reg.user && reg.user.email) ? reg.user : await User.findById(reg.user);
  // Background — never blocks the caller (which is usually a webhook handler).
  setImmediate(async () => {
    try {
      const offerBuf = await generateOfferLetterPDF(user, reg);
      queueEmail('offerLetter', { user, reg, pdfBuffer: offerBuf });
    } catch (e) { console.error('Offer Letter PDF error:', e.message); }
  });
}

module.exports = router;
