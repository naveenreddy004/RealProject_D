/**
 * avRoN Tech — Transactional Emails
 *
 * Provider priority:
 *   1. Resend HTTP API (RESEND_API_KEY set) — works on Render free tier (uses HTTPS, not SMTP)
 *   2. Gmail SMTP fallback                  — local development only
 */
const nodemailer = require('nodemailer');

// ── Resend HTTP API sender (no SMTP, pure HTTPS — works on all platforms) ─────
async function sendViaResend(to, subject, html, attachments = []) {
  const body = {
    from: process.env.EMAIL_FROM || 'avRoN Tech <onboarding@resend.dev>',
    to: [to],
    subject,
    html,
  };

  if (attachments.length > 0) {
    body.attachments = attachments.map(a => ({
      filename: a.filename,
      content: Buffer.isBuffer(a.content)
        ? a.content.toString('base64')
        : Buffer.from(a.content).toString('base64'),
    }));
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(`Resend API error: ${data.message || JSON.stringify(data)}`);
  }
  return data;
}

// ── Gmail SMTP transporter (local dev fallback) ───────────────────────────────
function gmailTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });
}

// ── Unified send function ─────────────────────────────────────────────────────
async function sendMail({ to, subject, html, attachments = [] }) {
  // 1. Resend HTTP API (RESEND_API_KEY) — works on Render, no SMTP ports needed
  if (process.env.RESEND_API_KEY) {
    return sendViaResend(to, subject, html, attachments);
  }

  // 2. Brevo HTTP API (BREVO_SMTP_KEY) — sends to any email, no domain needed, 300/day free
  if (process.env.BREVO_SMTP_KEY) {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': process.env.BREVO_SMTP_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: 'avRoN Tech', email: process.env.BREVO_SENDER_EMAIL || process.env.BREVO_SMTP_USER },
        to: [{ email: to }],
        subject,
        htmlContent: html,
        ...(attachments.length > 0 && {
          attachment: attachments.map(a => ({
            name: a.filename,
            content: Buffer.isBuffer(a.content)
              ? a.content.toString('base64')
              : Buffer.from(a.content).toString('base64'),
          })),
        }),
      }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(`Brevo API error: ${data.message || JSON.stringify(data)}`);
    return data;
  }

  // 3. Local dev fallback — Gmail SMTP
  const from = `"avRoN Tech" <${process.env.EMAIL_USER}>`;
  return gmailTransporter().sendMail({ from, to, subject, html, attachments });
}

const BRAND = 'avRoN Tech';
const DOMAIN = 'avRoNTech.in';
const SUPPORT_EMAIL = process.env.SUPPORT_EMAIL || 'support.avrontech@gmail.com';

const fmt = (d) => d ? new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' }) : '—';

// ── Logo as base64 — read once at startup, cached for performance ─────────────
let _logoB64 = '';
let _logoMime = 'image/jpeg';
try {
  const _fs = require('fs');
  const _path = require('path');
  const _lp = _path.join(__dirname, '../public/logo.png');
  if (_fs.existsSync(_lp)) {
    const buf = _fs.readFileSync(_lp);
    _logoMime = buf.slice(0, 2).toString('hex') === 'ffd8' ? 'image/jpeg' : 'image/png';
    _logoB64 = buf.toString('base64');
  }
} catch (_) {}

function getLogoTag(size = 48) {
  if (_logoB64) {
    return `<img src="data:${_logoMime};base64,${_logoB64}" alt="avRoN Technologies" style="width:${size}px;height:${size}px;object-fit:contain;flex-shrink:0;" />`;
  }
  return `<div style="width:${size}px;height:${size}px;background:#608BC1;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:14px;color:#0B192C;flex-shrink:0;">aR</div>`;
}

const logoImgTag = getLogoTag(48);

// ── Common HTML scaffolding ───────────────────────────────────────────────────
const wrap = (innerHTML) => `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><style>
*{margin:0;padding:0;box-sizing:border-box;}
body{background:#f0f4f8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1a1a1a;padding:24px 8px;}
.email-wrap{max-width:600px;margin:0 auto;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(11,25,44,0.12);}
.header{background:linear-gradient(135deg,#0B192C 0%,#152844 100%);padding:22px 28px;display:flex;align-items:center;gap:14px;border-bottom:3px solid #608BC1;}
.brand-text .big{font-size:21px;font-weight:800;color:#ffffff;letter-spacing:-0.3px;line-height:1.1;}
.brand-text .sub{font-size:10px;color:#7186a0;margin-top:3px;letter-spacing:0.1em;text-transform:uppercase;}
.body{background:#ffffff;padding:28px 32px;}
.body h2{font-size:20px;font-weight:700;color:#0B192C;margin-bottom:6px;line-height:1.3;}
.body p{font-size:14px;color:#374151;margin-bottom:12px;line-height:1.7;}
.body p.muted{color:#6b7280;font-size:12.5px;}
.kv{background:#f5f7fb;border-radius:10px;padding:0;margin:16px 0;overflow:hidden;border:1px solid #e6ebf2;}
.kv-row{display:flex;justify-content:space-between;align-items:center;padding:11px 16px;border-bottom:1px solid #e6ebf2;}
.kv-row:last-child{border-bottom:none;}
.kv-row:nth-child(even){background:#eef2f8;}
.kv-row .lbl{color:#608BC1;font-size:12.5px;font-weight:600;}
.kv-row .val{font-weight:700;color:#0B192C;font-size:13px;text-align:right;}
.steps{background:#f5f7fb;border-radius:10px;padding:16px 18px;margin:16px 0;border:1px solid #e6ebf2;}
.steps .head{font-size:10px;font-weight:800;color:#608BC1;text-transform:uppercase;letter-spacing:0.12em;margin-bottom:10px;}
.steps ol{padding-left:18px;}
.steps ol li{font-size:13.5px;color:#374151;margin-bottom:8px;line-height:1.6;}
.cta{display:inline-block;background:linear-gradient(135deg,#0B192C,#152844);color:#fff !important;padding:13px 28px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:700;letter-spacing:0.02em;box-shadow:0 4px 14px rgba(11,25,44,0.25);}
.signoff{font-size:13.5px;color:#374151;margin-top:16px;line-height:1.8;padding-top:16px;border-top:1px solid #e6ebf2;}
.signoff b{color:#0B192C;}
hr.divider{border:none;border-top:1px solid #e6ebf2;margin:16px 0;}
.footer{background:linear-gradient(135deg,#0B192C 0%,#0e2138 100%);padding:18px 28px;color:#4a5568;font-size:11px;text-align:center;line-height:1.9;}
.footer a{color:#608BC1;text-decoration:none;margin:0 6px;}
.footer .pipe{color:#1a2c4a;margin:0 2px;}
.footer .small{font-size:10px;margin-top:6px;color:#3a4a60;display:block;}
</style></head><body>
<div class="email-wrap">
  <div class="header">
    ${logoImgTag}
    <div class="brand-text">
      <div class="big">avRoN Technologies</div>
      <div class="sub">avRoNTech.in &nbsp;·&nbsp; Corporate Internships</div>
    </div>
  </div>
  <div class="body">${innerHTML}</div>
  <div class="footer">
    <div>
      <a href="https://${DOMAIN}">Home</a><span class="pipe">|</span>
      <a href="https://${DOMAIN}/about">About</a><span class="pipe">|</span>
      <a href="https://${DOMAIN}/privacy">Privacy</a><span class="pipe">|</span>
      <a href="mailto:${SUPPORT_EMAIL}">Support</a>
    </div>
    <span class="small">© 2026 avRoN Technologies · All rights reserved</span>
  </div>
</div></body></html>`;

// ── 1. Registration confirmation ──────────────────────────────────────────────
async function sendConfirmationEmail(user, reg) {
  const name = (reg && reg.registrantName) || user.fullName;
  const BASE = process.env.BASE_URL || `https://${DOMAIN}`;
  const html = wrap(`
    <h2>Internship Registration Confirmed! 🎉</h2>
    <p style="color:#608BC1;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:16px;">avRoN Technologies — Internship Program</p>
    <p>Dear <b>${name}</b>,</p>
    <p>Thank you for applying for the <b>${reg.domain}</b> internship program at <b>avRoN Technologies</b>! We have received your application successfully.</p>
    <div class="kv">
      <div class="kv-row"><span class="lbl">🗓 Duration</span><span class="val">${fmt(reg.startDate)} – ${fmt(reg.endDate)}</span></div>
      <div class="kv-row"><span class="lbl">💻 Domain</span><span class="val">${reg.domain}</span></div>
      <div class="kv-row"><span class="lbl">🆔 Certificate ID</span><span class="val" style="font-family:monospace;">${reg.certId}</span></div>
      <div class="kv-row"><span class="lbl">⏳ Offer Letter</span><span class="val">Within a few hours</span></div>
    </div>
    <p>Our team is reviewing your application. You will receive your <b>Official Offer Letter</b> shortly with further instructions on how to begin your internship journey.</p>
    <p>If you have any questions, feel free to reach out at <a href="mailto:${SUPPORT_EMAIL}" style="color:#608BC1;">${SUPPORT_EMAIL}</a>.</p>
    <div style="text-align:center;margin:24px 0;">
      <a href="${BASE}/portal" class="cta">Get Started →</a>
    </div>
    <hr class="divider">
    <div class="signoff">Best regards,<br><b>The avRoN Technologies Team</b></div>
  `);
  await sendMail({ to: user.email, subject: `✅ Registration Confirmed — ${reg.domain} Internship | avRoN Technologies`, html });
  console.log(`✉️ Confirmation sent to ${user.email}`);
}

// ── 2. Offer Letter ───────────────────────────────────────────────────────────
async function sendOfferLetterEmail(user, reg, pdfBuffer) {
  const name = (reg && reg.registrantName) || user.fullName;
  const BASE = process.env.BASE_URL || `https://${DOMAIN}`;
  const html = wrap(`
    <h2>Official Offer Letter 🎓</h2>
    <p style="color:#608BC1;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:16px;">avRoN Technologies — Corporate Internship</p>
    <p>Dear <b>${name}</b>,</p>
    <p>We are pleased to offer you an internship at <b>avRoN Technologies</b>. Here are your program details:</p>
    <div class="kv">
      <div class="kv-row"><span class="lbl">💻 Domain</span><span class="val">${reg.domain}</span></div>
      <div class="kv-row"><span class="lbl">📅 Duration</span><span class="val">${fmt(reg.startDate)} to ${fmt(reg.endDate)}</span></div>
      <div class="kv-row"><span class="lbl">💰 Stipend</span><span class="val">₹ 0.00 (Learning-based)</span></div>
      <div class="kv-row"><span class="lbl">🆔 Certificate ID</span><span class="val" style="font-family:monospace;">${reg.certId}</span></div>
    </div>
    <p>Your <b>Official Offer Letter PDF</b> is attached. Please keep it for your records.</p>
    <p>Feel free to contact us at <a href="mailto:${SUPPORT_EMAIL}" style="color:#608BC1;">${SUPPORT_EMAIL}</a> if you have any questions.</p>
    <p>We look forward to your positive response!</p>
    <div style="text-align:center;margin:24px 0;">
      <a href="${BASE}/dashboard" class="cta">Go to Dashboard →</a>
    </div>
    <hr class="divider">
    <div class="signoff">Best regards,<br><b>Team avRoN Technologies</b></div>
  `);
  const attachments = (pdfBuffer && pdfBuffer.length > 0) ? [{
    filename: `avRoN_Tech_Offer_Letter_${reg.certId}.pdf`,
    content: pdfBuffer,
    contentType: 'application/pdf',
  }] : [];
  await sendMail({ to: user.email, subject: `🎓 Official Offer Letter — ${reg.domain} Internship | avRoN Technologies`, html, attachments });
  console.log(`✉️ Offer letter sent to ${user.email}`);
}

// ── 3. OTP ────────────────────────────────────────────────────────────────────
async function sendOTPEmail(user, otp) {
  const html = wrap(`
    <h2 style="font-size:22px;font-weight:800;color:#0B192C;margin-bottom:4px;">Login Verification Code</h2>
    <p style="color:#608BC1;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:20px;">avRoN Technologies — Secure Access</p>
    <p>Hello <b>${user.fullName}</b>, use the code below to login to your <b>avRoN Technologies</b> dashboard. Valid for 10 minutes.</p>
    <div style="background:linear-gradient(135deg,#0B192C 0%,#152844 100%);border-radius:12px;text-align:center;padding:32px 22px;margin:24px 0;border:1px solid #1a2c4a;">
      <div style="font-size:48px;font-weight:800;color:#608BC1;letter-spacing:12px;font-family:'SF Mono',Consolas,Monaco,monospace;">${otp}</div>
      <div style="font-size:11px;color:#7186a0;margin-top:10px;letter-spacing:.14em;text-transform:uppercase;">Expires in 10 minutes</div>
    </div>
    <p class="muted">If you didn't request this code, you can safely ignore this email.</p>
  `);
  await sendMail({ to: user.email, subject: `${otp} — Your avRoN Technologies login code`, html });
  console.log(`✉️ OTP sent to ${user.email}`);
}

// ── 4. Payment Rejected ───────────────────────────────────────────────────────
async function sendPaymentRejectedEmail(user, reg, reason) {
  const name = (reg && reg.registrantName) || user.fullName;
  const html = wrap(`
    <h2>Dear ${name},</h2>
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
  await sendMail({ to: user.email, subject: `Action Required: Payment Resubmission Needed — avRoN Technologies`, html });
  console.log(`✉️ Payment rejection notice sent to ${user.email}`);
}

// ── 6. Certificate Revocation ─────────────────────────────────────────────────
async function sendRevocationEmail(user, reg, reason) {
  const name = (reg && reg.registrantName) || user.fullName;
  const html = wrap(`
    <h2>Important: Certificate Revoked</h2>
    <p>Dear ${name}, we regret to inform you that your internship certificate has been <b style="color:#dc2626;">revoked</b>.</p>
    <div class="kv">
      <div class="kv-row"><span class="lbl">Certificate ID</span><span class="val">${reg.certId}</span></div>
      <div class="kv-row"><span class="lbl">Domain</span><span class="val">${reg.domain}</span></div>
      <div class="kv-row"><span class="lbl">Revoked On</span><span class="val">${new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}</span></div>
      ${reason ? `<div class="kv-row"><span class="lbl">Reason</span><span class="val" style="color:#dc2626;">${reason}</span></div>` : ''}
    </div>
    <p>If you believe this is a mistake or have any questions, please contact us immediately at <a href="mailto:${SUPPORT_EMAIL}" style="color:#608BC1;">${SUPPORT_EMAIL}</a>.</p>
    <hr class="divider">
    <div class="signoff">Regards,<br><b>avRoN Tech Team</b></div>
  `);
  await sendMail({ to: user.email, subject: `Certificate Revoked — ${reg.certId} | avRoN Technologies`, html });
  console.log(`✉️ Revocation email sent to ${user.email}`);
}

// ── 5. Support Ticket notification ───────────────────────────────────────────
async function sendTicketEmail(user, ticket) {
  const html = wrap(`
    <h2>New Support Ticket — ${ticket.id}</h2>
    <div class="kv">
      <div class="kv-row"><span class="lbl">Ticket ID</span><span class="val">${ticket.id}</span></div>
      <div class="kv-row"><span class="lbl">Student</span><span class="val">${user.fullName}</span></div>
      <div class="kv-row"><span class="lbl">Email</span><span class="val">${user.email}</span></div>
      <div class="kv-row"><span class="lbl">Category</span><span class="val">${ticket.category}</span></div>
      <div class="kv-row"><span class="lbl">Priority</span><span class="val">${ticket.priority}</span></div>
      <div class="kv-row"><span class="lbl">Subject</span><span class="val">${ticket.subject}</span></div>
    </div>
    <p><b>Message:</b></p>
    <div style="background:#f7f9fc;border-left:3px solid #608BC1;padding:14px 18px;border-radius:0 6px 6px 0;font-size:14px;color:#1a1a1a;line-height:1.7;white-space:pre-wrap;">${ticket.message}</div>
    <hr class="divider">
    <p class="muted">Reply directly to <b>${user.email}</b> to respond to this student.</p>
  `);
  // Send to support inbox
  await sendMail({
    to: process.env.SUPPORT_EMAIL || 'support.avrontech@gmail.com',
    subject: `[${ticket.priority}] Support Ticket ${ticket.id} — ${ticket.subject}`,
    html,
  });
  // Also confirm to student
  const confirmHtml = wrap(`
    <h2>We received your ticket</h2>
    <p>Hi ${user.fullName}, your support ticket has been submitted successfully. Our team will get back to you within 24 hours.</p>
    <div class="kv">
      <div class="kv-row"><span class="lbl">Ticket ID</span><span class="val">${ticket.id}</span></div>
      <div class="kv-row"><span class="lbl">Subject</span><span class="val">${ticket.subject}</span></div>
      <div class="kv-row"><span class="lbl">Priority</span><span class="val">${ticket.priority}</span></div>
    </div>
    <p class="muted">For urgent issues you can also email us directly at <a href="mailto:${SUPPORT_EMAIL}" style="color:#608BC1;">${SUPPORT_EMAIL}</a></p>
    <hr class="divider">
    <div class="signoff">Regards,<br><b>avRoN Tech Support Team</b></div>
  `);
  await sendMail({
    to: user.email,
    subject: `Ticket Received: ${ticket.subject} [${ticket.id}]`,
    html: confirmHtml,
  });
  console.log(`✉️ Ticket ${ticket.id} emailed to support and confirmed to ${user.email}`);
}

const noop = async () => {};
module.exports = {
  sendConfirmationEmail,
  sendOfferLetterEmail,
  sendPaymentRejectedEmail,
  sendOTPEmail,
  sendTicketEmail,
  sendRevocationEmail,
  sendCertificateEmail: noop,
  sendPaymentVerifiedEmail: noop,
  sendPortalInviteEmail: noop,
  sendPaymentReceivedEmail: noop,
  sendAdminPaymentAlert: noop,
};
