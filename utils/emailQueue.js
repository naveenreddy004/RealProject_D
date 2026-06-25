/**
 * Email dispatch helper — FIRE-AND-FORGET.
 *
 * IMPORTANT: This used to await Bull/Redis on the request path which made the
 * UI spinner hang for 10-30 seconds (Redis unreachable -> fallback to direct
 * Gmail SMTP send -> slow). The HTTP response is now returned to the client
 * IMMEDIATELY and the email is dispatched in the background.
 *
 * Bull/Redis is OPTIONAL. Only enabled if REDIS_URL is explicitly set.
 * Otherwise emails are sent directly in the background via setImmediate.
 */

const {
  sendConfirmationEmail, sendOTPEmail, sendOfferLetterEmail,
  sendPortalInviteEmail, sendPaymentReceivedEmail, sendPaymentVerifiedEmail,
  sendAdminPaymentAlert, sendCertificateEmail, sendPaymentRejectedEmail,
} = require('./emailService');

const handlers = {
  confirmation:     (p) => sendConfirmationEmail(p.user, p.reg),
  otp:              (p) => sendOTPEmail(p.user, p.otp),
  offerLetter:      (p) => sendOfferLetterEmail(p.user, p.reg, p.pdfBuffer),
  paymentRejected:  (p) => sendPaymentRejectedEmail(p.user, p.reg, p.reason),
  // Legacy (no-op) handlers — kept so existing call sites don't crash.
  portalInvite:     (p) => sendPortalInviteEmail(p.user, p.reg),
  paymentReceived:  (p) => sendPaymentReceivedEmail(p.user, p.reg),
  paymentVerified:  (p) => sendPaymentVerifiedEmail(p.user, p.reg),
  adminPaymentAlert:(p) => sendAdminPaymentAlert(p.user, p.reg),
  certificate:      (p) => sendCertificateEmail(p.user, p.reg, p.pdfBuffer),
};

let emailQueue = null;

// Enable Bull only when REDIS_URL is set (production deployments with Redis).
if (process.env.REDIS_URL) {
  try {
    const Queue = require('bull');
    emailQueue = new Queue('avron-tech-emails', process.env.REDIS_URL, {
      defaultJobOptions: {
        attempts: 3,
        backoff: { type: 'exponential', delay: 5000 },
        removeOnComplete: 100,
        removeOnFail: 50,
      },
    });

    emailQueue.process(async (job) => {
      const { type, payload } = job.data;
      const handler = handlers[type];
      if (!handler) throw new Error(`Unknown email type: ${type}`);
      await handler(payload);
    });

    emailQueue.on('failed', (job, err) => {
      console.error(`✉️ Email job failed (${job.data.type}, attempt ${job.attemptsMade}):`, err.message);
    });
    emailQueue.on('completed', (job) => {
      console.log(`✉️ Email queued job completed: ${job.data.type}`);
    });
    console.log('📬 Email queue (Redis/Bull) enabled');
  } catch (e) {
    console.warn('📬 Email queue init failed — using direct background send:', e.message);
    emailQueue = null;
  }
} else {
  console.log('📬 Email queue: direct background send (set REDIS_URL to enable Bull)');
}

/**
 * Fire-and-forget email dispatch. Returns IMMEDIATELY without awaiting any IO.
 * Errors are logged but never thrown — they cannot block the HTTP response.
 */
function queueEmail(type, payload) {
  const handler = handlers[type];
  if (!handler) {
    console.error(`📬 Unknown email type: ${type}`);
    return;
  }

  // Use the Bull queue if available — but don't await it.
  if (emailQueue) {
    emailQueue.add({ type, payload }).catch((err) => {
      console.warn(`📬 Queue add failed for ${type}, sending direct:`, err.message);
      setImmediate(() => {
        handler(payload).catch(e => console.error(`✉️ ${type} send failed:`, e.message));
      });
    });
    return;
  }

  // No queue → send directly in the next tick. Never blocks the caller.
  setImmediate(() => {
    handler(payload).catch(e => console.error(`✉️ ${type} send failed:`, e.message));
  });
}

module.exports = { emailQueue, queueEmail };
