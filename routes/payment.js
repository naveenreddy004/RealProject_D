const express = require('express');
const crypto = require('crypto');
const Registration = require('../models/Registration');
const User = require('../models/User');
const { authStudent } = require('../middleware/auth');
const { queueEmail } = require('../utils/emailQueue');
const { generateReceiptPDF } = require('../utils/pdfGenerator');
const { logActivity } = require('../utils/activityLogger');

const router = express.Router();

function isRazorpayEnabled() {
  return !!(process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET);
}

function isCashfreeEnabled() {
  return !!(process.env.CASHFREE_APP_ID && process.env.CASHFREE_SECRET_KEY);
}

// ── Payment gateway config (public) ───────────────────────────────────────────
router.get('/config', (req, res) => {
  res.json({
    success: true,
    gateways: {
      upi: true,
      razorpay: isRazorpayEnabled(),
      cashfree: isCashfreeEnabled(),
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

// ── Create Cashfree order ───────────────────────────────────────────────────────
router.post('/cashfree/create-order', authStudent, async (req, res) => {
  try {
    if (!isCashfreeEnabled()) {
      return res.status(400).json({ success: false, message: 'Cashfree is not configured.' });
    }

    const reg = await Registration.findOne({
      user: req.user._id,
      status: { $nin: ['certificate_sent', 'rejected', 'payment_submitted', 'payment_verified', 'active'] },
    });
    if (!reg) return res.status(404).json({ success: false, message: 'No registration awaiting payment.' });

    const orderId = `CF_${reg.certId}_${Date.now()}`;
    const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
    const isProd = process.env.CASHFREE_ENV === 'production';
    const cfBase = isProd ? 'https://api.cashfree.com/pg' : 'https://sandbox.cashfree.com/pg';

    const response = await fetch(`${cfBase}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-client-id': process.env.CASHFREE_APP_ID,
        'x-client-secret': process.env.CASHFREE_SECRET_KEY,
        'x-api-version': '2023-08-01',
      },
      body: JSON.stringify({
        order_id: orderId,
        order_amount: reg.amount,
        order_currency: 'INR',
        customer_details: {
          customer_id: req.user._id.toString(),
          customer_email: req.user.email,
          customer_phone: req.user.mobile || '9999999999',
          customer_name: req.user.fullName,
        },
        order_meta: {
          return_url: `${baseUrl}/dashboard?payment=cashfree&order_id=${orderId}`,
          notify_url: `${baseUrl}/api/payment/cashfree/webhook`,
        },
        order_note: reg.certId,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      console.error('Cashfree order error:', data);
      return res.status(500).json({ success: false, message: data.message || 'Cashfree order failed.' });
    }

    reg.payment.gatewayOrderId = orderId;
    reg.payment.gatewayProvider = 'cashfree';
    reg.payment.method = 'cashfree';
    await reg.save();

    res.json({
      success: true,
      orderId,
      paymentSessionId: data.payment_session_id,
      amount: reg.amount,
      cashfreeEnv: isProd ? 'production' : 'sandbox',
    });
  } catch (err) {
    console.error('Cashfree create order error:', err);
    res.status(500).json({ success: false, message: 'Failed to create Cashfree order.' });
  }
});

// ── Cashfree webhook ────────────────────────────────────────────────────────────
router.post('/cashfree/webhook', async (req, res) => {
  try {
    // ── Signature verification ──────────────────────────────────────────────
    const webhookSecret = process.env.CASHFREE_WEBHOOK_SECRET;
    if (!webhookSecret) {
      console.error('CASHFREE_WEBHOOK_SECRET is not set — rejecting webhook.');
      return res.status(400).json({ success: false, message: 'Webhook secret not configured.' });
    }
    const ts        = req.headers['x-webhook-timestamp'];
    const signature = req.headers['x-webhook-signature'];
    if (!ts || !signature) {
      return res.status(400).json({ success: false, message: 'Missing webhook headers.' });
    }
    const rawBody  = JSON.stringify(req.body);
    const expected = crypto
      .createHmac('sha256', webhookSecret)
      .update(ts + rawBody)
      .digest('base64');
    if (signature !== expected) {
      return res.status(400).json({ success: false, message: 'Invalid webhook signature.' });
    }

    const { data } = req.body;
    if (!data || data.order?.order_status !== 'PAID') {
      return res.json({ success: true });
    }

    const orderId = data.order.order_id;
    const paymentId = data.payment?.cf_payment_id || data.payment?.payment_id || orderId;

    const reg = await Registration.findOne({ 'payment.gatewayOrderId': orderId }).populate('user');
    if (reg && !['active', 'payment_verified', 'completed', 'certificate_sent'].includes(reg.status)) {
      await activatePayment(reg, {
        paymentId,
        utrNumber: String(paymentId),
        verifiedBy: 'Cashfree Webhook',
        method: 'cashfree',
      });
      await logActivity({
        action: 'auto_payment_verified',
        targetId: reg._id,
        targetLabel: reg.user?.fullName,
        details: { provider: 'cashfree', paymentId, certId: reg.certId },
      });
    }
    res.json({ success: true });
  } catch (err) {
    console.error('Cashfree webhook error:', err);
    res.status(500).json({ success: false });
  }
});

// ── Cashfree verify (return URL callback) ─────────────────────────────────────
router.post('/cashfree/verify', authStudent, async (req, res) => {
  try {
    const { orderId } = req.body;
    if (!orderId) return res.status(400).json({ success: false, message: 'Order ID required.' });

    const isProd = process.env.CASHFREE_ENV === 'production';
    const cfBase = isProd ? 'https://api.cashfree.com/pg' : 'https://sandbox.cashfree.com/pg';

    const response = await fetch(`${cfBase}/orders/${orderId}`, {
      headers: {
        'x-client-id': process.env.CASHFREE_APP_ID,
        'x-client-secret': process.env.CASHFREE_SECRET_KEY,
        'x-api-version': '2023-08-01',
      },
    });
    const data = await response.json();

    if (data.order_status !== 'PAID') {
      return res.status(400).json({ success: false, message: 'Payment not completed yet.' });
    }

    const reg = await Registration.findOne({
      user: req.user._id,
      'payment.gatewayOrderId': orderId,
    }).populate('user');
    if (!reg) return res.status(404).json({ success: false, message: 'Order not found.' });

    if (['active', 'payment_verified', 'completed', 'certificate_sent'].includes(reg.status)) {
      return res.json({ success: true, message: 'Payment already confirmed.' });
    }

    const paymentId = data.cf_order_id || orderId;
    await activatePayment(reg, {
      paymentId,
      utrNumber: String(paymentId),
      verifiedBy: 'Cashfree (Auto)',
      method: 'cashfree',
    });

    res.json({ success: true, message: 'Payment confirmed! Your internship is now active.' });
  } catch (err) {
    console.error('Cashfree verify error:', err);
    res.status(500).json({ success: false, message: 'Payment verification failed.' });
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
      const receiptBuf = await generateReceiptPDF(user, reg);
      // Persist receipt as binary in MongoDB — no file on disk
      await Registration.findByIdAndUpdate(reg._id, { receiptPdf: receiptBuf });
    } catch (e) { console.error('Receipt PDF error:', e.message); }
    queueEmail('paymentVerified', { user, reg });
  });
}

module.exports = router;
