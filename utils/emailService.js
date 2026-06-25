/**
 * avRoN Tech — Transactional Emails
 *
 * Provider priority:
 *   1. Resend (RESEND_API_KEY set)  — works on Render free tier, 3000/month free
 *   2. Gmail SMTP fallback          — local development only
 */
const nodemailer = require('nodemailer');

function transporter() {
  if (process.env.RESEND_API_KEY) {
    return nodemailer.createTransport({
      host: 'smtp.resend.com',
      port: 465,
      secure: true,
      auth: {
        user: 'resend',
        pass: process.env.RESEND_API_KEY,
      },
    });
  }
  // Local dev fallback
  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });
}

function fromAddress() {
  if (process.env.RESEND_API_KEY) {
    return process.env.EMAIL_FROM || `"${BRAND}" <onboarding@resend.dev>`;
  }
  return `"${BRAND}" <${process.env.EMAIL_USER}>`;
}

const BRAND = 'avRoN Tech';
const DOMAIN = 'avRoNTech.in';
const SUPPORT_EMAIL = process.env.SUPPORT_EMAIL || 'official@avrontech.in';

const fmt = (d) => d ? new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' }) : '—';

// ── Common HTML scaffolding ───────────────────────────────────────────────────
const wrap = (innerHTML) => `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box;}
body{background:#f4f6fa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1a1a1a;}
.email-wrap{max-width:640px;margin:32px auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 4px 24px rgba(11,25,44,.08);border:1px solid #e6ebf2;}
.header{background:#0B192C;padding:32px 36px;color:#fff;border-bottom:4px solid #608BC1;}
.brand-row{display:flex;align-items:center;gap:12px;}
.brand-mark{width:42px;height:42px;background:#608BC1;color:#0B192C;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:14px;letter-spacing:0.5px;border-radius:6px;}
.brand-text{font-size:20px;font-weight:700;letter-spacing:-.3px;}
.brand-text span{color:#608BC1;}
.brand-domain{font-size:11px;color:#608BC1;letter-spacing:0.14em;text-transform:uppercase;margin-top:2px;}
.body{padding:36px;color:#1a1a1a;line-height:1.7;}
.body h2{font-size:20px;font-weight:700;color:#0B192C;margin-bottom:16px;letter-spacing:-.3px;}
.body p{font-size:14.5px;color:#2a2a2a;margin-bottom:14px;}
.body p.muted{color:#5a6a7e;font-size:13.5px;}
.kv{background:#f7f9fc;border-left:3px solid #608BC1;padding:18px 22px;margin:22px 0;border-radius:0 4px 4px 0;}
.kv-row{display:flex;justify-content:space-between;padding:6px 0;font-size:14px;border-bottom:1px solid #e6ebf2;}
.kv-row:last-child{border-bottom:none;}
.kv-row .lbl{color:#5a6a7e;font-weight:500;}
.kv-row .val{font-weight:700;color:#0B192C;}
.steps{background:#f7f9fc;border:1px solid #e6ebf2;border-radius:6px;padding:18px 22px;margin:18px 0;}
.steps .head{font-size:13px;font-weight:700;color:#0B192C;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:10px;}
.steps ol{padding-left:20px;}
.steps ol li{font-size:14px;color:#2a2a2a;margin-bottom:8px;line-height:1.6;}
.cta{display:inline-block;background:#0B192C;color:#fff !important;padding:13px 28px;border-radius:5px;text-decoration:none;font-size:14px;font-weight:600;letter-spacing:0.02em;}
.signoff{font-size:14px;color:#1a1a1a;margin-top:22px;line-height:1.7;}
.signoff b{color:#0B192C;}
hr.divider{border:none;border-top:1px solid #e6ebf2;margin:22px 0 14px;}
.footer{background:#0B192C;padding:22px 36px;color:#9eb2c8;font-size:11.5px;text-align:center;line-height:1.7;letter-spacing:0.02em;}
.footer a{color:#608BC1;text-decoration:none;margin:0 6px;}
.footer .pipe{color:#3a4d66;margin:0 4px;}
.footer .small{font-size:10.5px;margin-top:8px;color:#7186a0;display:block;}
</style></head><body>
<div class="email-wrap">
  <div class="header">
    <div class="brand-row">
      <div class="brand-mark">aR</div>
      <div>
        <div class="brand-text">av<span>RoN</span> Tech</div>
        <div class="brand-domain">${DOMAIN}</div>
      </div>
    </div>
  </div>
  <div class="body">${innerHTML}</div>
  <div class="footer">
    <div>
      <a href="https://${DOMAIN}">Home</a><span class="pipe">|</span>
      <a href="https://${DOMAIN}/about">About Us</a><span class="pipe">|</span>
      <a href="https://${DOMAIN}/privacy">Privacy Policy</a><span class="pipe">|</span>
      <a href="https://${DOMAIN}/contact">Contact Us</a>
    </div>
    <span class="small">You received this email because you registered for an internship at ${DOMAIN}</span>
    <span class="small">Copyright © 2026 ${BRAND}. All rights reserved.</span>
  </div>
</div></body></html>`;

// ── 1. Registration confirmation ──────────────────────────────────────────────
async function sendConfirmationEmail(user, reg) {
  const html = wrap(`
    <h2>Dear ${user.fullName},</h2>
    <p>Thank you for applying for the <b>${reg.domain}</b> internship program at <b>${BRAND}</b>!</p>
    <div class="kv">
      <div class="kv-row"><span class="lbl">Domain</span><span class="val">${reg.domain}</span></div>
      <div class="kv-row"><span class="lbl">Duration</span><span class="val">${reg.duration || '—'}</span></div>
      <div class="kv-row"><span class="lbl">Offer Letter Timeline</span><span class="val">Within hours</span></div>
    </div>
    <p>Our team is currently reviewing your registration. You will receive your official onboarding package shortly.</p>
    <p class="muted">If you have any questions, feel free to reach out to our support team. Thank you for choosing ${BRAND}!</p>
    <hr class="divider">
    <div class="signoff">Best regards,<br><b>The ${BRAND} Team</b><br><a href="https://${DOMAIN}" style="color:#608BC1;text-decoration:none;">${DOMAIN}</a></div>
  `);
  await transporter().sendMail({
    from: fromAddress(),
    to: user.email,
    subject: `Internship Registration Confirmed! - ${BRAND}`,
    html,
  });
  console.log(`✉️ Confirmation sent to ${user.email}`);
}

// ── 2. Offer Letter ───────────────────────────────────────────────────────────
async function sendOfferLetterEmail(user, reg, pdfBuffer) {
  const html = wrap(`
    <h2>Dear ${user.fullName},</h2>
    <p>We are pleased to offer you a <b>virtual internship position</b> at <b>${BRAND}</b>. Congratulations!</p>
    <div class="kv">
      <div class="kv-row"><span class="lbl">Domain</span><span class="val">${reg.domain}</span></div>
      <div class="kv-row"><span class="lbl">Duration</span><span class="val">${fmt(reg.startDate)} – ${fmt(reg.endDate)}</span></div>
      <div class="kv-row"><span class="lbl">Certificate ID</span><span class="val">${reg.certId}</span></div>
      <div class="kv-row"><span class="lbl">Stipend</span><span class="val">Performance-based Perks / Unpaid</span></div>
    </div>
    <p>Please find your official Offer Letter attached. Log in to your dashboard to begin your internship tasks.</p>
    <div class="steps">
      <div class="head">Next Steps</div>
      <ol>
        <li>Log in to your dashboard at <b>${DOMAIN}/dashboard</b></li>
        <li>Open the <b>"My Internships"</b> tab to view your tasks</li>
        <li>Submit your weekly tasks and track your progress</li>
      </ol>
    </div>
    <p class="muted">Questions? Contact us at <a href="mailto:${SUPPORT_EMAIL}" style="color:#608BC1;">${SUPPORT_EMAIL}</a></p>
    <hr class="divider">
    <div class="signoff">Warm regards,<br><b>Corporate Onboarding Team</b><br>${BRAND} (<a href="https://${DOMAIN}" style="color:#608BC1;text-decoration:none;">${DOMAIN}</a>)</div>
  `);
  const attachments = [];
  if (pdfBuffer && pdfBuffer.length > 0) {
    attachments.push({
      filename: `avRoN_Tech_Offer_Letter_${reg.certId}.pdf`,
      content: pdfBuffer,
      contentType: 'application/pdf',
    });
  }
  await transporter().sendMail({
    from: fromAddress(),
    to: user.email,
    subject: `Official Internship Offer Letter & Onboarding Details - ${BRAND}`,
    html,
    attachments,
  });
  console.log(`✉️ Offer letter sent to ${user.email}`);
}

// ── 3. OTP ────────────────────────────────────────────────────────────────────
async function sendOTPEmail(user, otp) {
  const html = wrap(`
    <h2>Login verification code</h2>
    <p>Hello ${user.fullName}, use the code below to login to your <b>${BRAND}</b> dashboard. Valid for 10 minutes.</p>
    <div style="background:#0B192C;border-radius:6px;text-align:center;padding:28px 22px;margin:22px 0;">
      <div style="font-size:42px;font-weight:800;color:#608BC1;letter-spacing:8px;font-family:'SF Mono',Consolas,Monaco,monospace;">${otp}</div>
      <div style="font-size:11px;color:#9eb2c8;margin-top:8px;letter-spacing:.1em;text-transform:uppercase;">Expires in 10 minutes</div>
    </div>
    <p class="muted">If you didn't request this code, you can safely ignore this email.</p>
  `);
  await transporter().sendMail({
    from: fromAddress(),
    to: user.email,
    subject: `Your ${BRAND} login code: ${otp}`,
    html,
  });
  console.log(`✉️ OTP sent to ${user.email}`);
}

// ── 4. Payment Rejected ───────────────────────────────────────────────────────
async function sendPaymentRejectedEmail(user, reg, reason) {
  const html = wrap(`
    <h2>Dear ${user.fullName},</h2>
    <p>Unfortunately, we were <b>unable to verify your recent payment</b> for the <b>${reg.domain}</b> internship.</p>
    <div class="kv" style="border-color:#dc2626;">
      <div class="kv-row"><span class="lbl">Certificate ID</span><span class="val">${reg.certId}</span></div>
      <div class="kv-row"><span class="lbl">Reason</span><span class="val" style="color:#dc2626;">${reason || 'Payment could not be verified'}</span></div>
    </div>
    <p>Please log in to your portal and resubmit your payment with a valid UTR number and a clear screenshot.</p>
    <div class="steps">
      <div class="head">What to do next</div>
      <ol>
        <li>Open your portal at <a href="https://${DOMAIN}/portal" style="color:#608BC1;">${DOMAIN}/portal</a></li>
        <li>Go to Dashboard and resubmit your payment with the correct UTR</li>
        <li>Make sure the screenshot clearly shows the transaction ID and amount</li>
      </ol>
    </div>
    <p class="muted">Questions? Contact us at <a href="mailto:${SUPPORT_EMAIL}" style="color:#608BC1;">${SUPPORT_EMAIL}</a></p>
    <hr class="divider">
    <div class="signoff">Regards,<br><b>The ${BRAND} Team</b></div>
  `);
  await transporter().sendMail({
    from: fromAddress(),
    to: user.email,
    subject: `Action Required: Payment Resubmission Needed — ${BRAND}`,
    html,
  });
  console.log(`✉️ Payment rejection notice sent to ${user.email}`);
}

const noop = async () => {};
module.exports = {
  sendConfirmationEmail,
  sendOfferLetterEmail,
  sendPaymentRejectedEmail,
  sendOTPEmail,
  sendCertificateEmail: noop,
  sendPortalInviteEmail: noop,
  sendPaymentReceivedEmail: noop,
  sendPaymentVerifiedEmail: noop,
  sendAdminPaymentAlert: noop,
};
