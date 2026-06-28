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

// ── Logo as base64 (loaded once at module level) ──────────────────────────────
let _logoB64 = '';
try {
  const _fs = require('fs');
  const _path = require('path');
  const _lp = _path.join(__dirname, '../public/logo.png');
  if (_fs.existsSync(_lp)) _logoB64 = _fs.readFileSync(_lp).toString('base64');
} catch (_) {}

const logoImgTag = _logoB64
  ? `<img src="data:image/png;base64,${_logoB64}" alt="avRoN Technologies" style="width:48px;height:48px;object-fit:contain;border-radius:50%;background:#fff;padding:3px;flex-shrink:0;" />`
  : `<div style="width:48px;height:48px;background:#608BC1;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:14px;color:#0B192C;flex-shrink:0;">aR</div>`;

// ── Common HTML scaffolding ───────────────────────────────────────────────────
const wrap = (innerHTML) => `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><style>
*{margin:0;padding:0;box-sizing:border-box;}
body{background:#eaf6f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1a1a1a;padding:16px 8px;}
.email-wrap{max-width:580px;margin:0 auto;}
.header{background:#0e7c6e;padding:18px 24px;border-radius:10px 10px 0 0;display:flex;align-items:center;gap:12px;}
.brand-text .big{font-size:20px;font-weight:800;color:#fff;letter-spacing:-0.3px;line-height:1.1;}
.brand-text .sub{font-size:10px;color:#c8f0ec;margin-top:2px;letter-spacing:0.08em;}
.body{background:#f0fbf9;padding:22px 26px;border-left:1px solid #b2e0d8;border-right:1px solid #b2e0d8;}
.body h2{font-size:18px;font-weight:700;color:#0f2e2b;margin-bottom:4px;line-height:1.3;}
.body p{font-size:14px;color:#374151;margin-bottom:10px;line-height:1.6;}
.body p.muted{color:#6b7280;font-size:12.5px;}
.kv{background:#e4f5f1;border-radius:8px;padding:0;margin:12px 0;overflow:hidden;border:1px solid #b2e0d8;}
.kv-row{display:flex;justify-content:space-between;align-items:center;padding:9px 14px;border-bottom:1px solid #c8ede8;}
.kv-row:last-child{border-bottom:none;}
.kv-row:nth-child(even){background:#f0fbf9;}
.kv-row .lbl{color:#0e7c6e;font-size:12.5px;font-weight:600;}
.kv-row .val{font-weight:700;color:#0f2e2b;font-size:13px;text-align:right;}
.steps{background:#e4f5f1;border-radius:8px;padding:14px 16px;margin:12px 0;border:1px solid #b2e0d8;}
.steps .head{font-size:10px;font-weight:800;color:#0e7c6e;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;}
.steps ol{padding-left:18px;}
.steps ol li{font-size:13px;color:#374151;margin-bottom:6px;line-height:1.5;}
.cta{display:inline-block;background:#0e7c6e;color:#fff !important;padding:11px 22px;border-radius:7px;text-decoration:none;font-size:13px;font-weight:700;letter-spacing:0.02em;}
.signoff{font-size:13px;color:#374151;margin-top:14px;line-height:1.7;padding-top:14px;border-top:1px solid #c8ede8;}
.signoff b{color:#0f2e2b;}
hr.divider{border:none;border-top:1px solid #c8ede8;margin:14px 0;}
.footer{background:#0f2e2b;padding:14px 26px;border-radius:0 0 10px 10px;color:#7ab8b0;font-size:11px;text-align:center;line-height:1.7;}
.footer a{color:#c8f0ec;text-decoration:none;margin:0 4px;}
.footer .pipe{color:#1a4a44;margin:0 2px;}
.footer .small{font-size:10px;margin-top:4px;color:#4a8a82;display:block;}
</style></head><body>
<div class="email-wrap">
  <div class="header">
    ${logoImgTag}
    <div class="brand-text">
      <div class="big">avRoN Technologies</div>
      <div class="sub">${DOMAIN} &nbsp;·&nbsp; UDYAM-AP-23-0089163</div>
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
    <span class="small">© 2026 avRoN Technologies. You received this because you registered for an internship.</span>
  </div>
</div></body></html>`;

// ── 1. Registration confirmation ──────────────────────────────────────────────
async function sendConfirmationEmail(user, reg) {
  const name = (reg && reg.registrantName) || user.fullName;
  const BASE = process.env.BASE_URL || `https://${DOMAIN}`;

  const html = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<style>
*{margin:0;padding:0;box-sizing:border-box;}
body{background:#eaf6f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;color:#1a1a1a;padding:16px 8px;}
.wrap{max-width:600px;margin:0 auto;border-radius:12px;overflow:hidden;box-shadow:0 2px 16px rgba(0,0,0,0.09);}
.header{background:#0e7c6e;padding:20px 28px;text-align:center;}
.header-inner{display:inline-flex;align-items:center;gap:12px;}
.brand-name .big{font-size:22px;font-weight:800;color:#fff;letter-spacing:-0.5px;line-height:1;}
.brand-name .small{font-size:11px;color:#c8f0ec;margin-top:2px;}
.body{background:#f0fbf9;padding:32px 32px 24px;}
.title{font-size:24px;font-weight:800;color:#0f2e2b;margin-bottom:6px;}
.subtitle{font-size:14px;color:#374151;margin-bottom:20px;line-height:1.6;}
.highlight-box{background:#fff;border-left:4px solid #0e7c6e;border-radius:0 8px 8px 0;padding:14px 18px;margin:20px 0;}
.highlight-box p{font-size:13.5px;color:#374151;margin-bottom:6px;line-height:1.6;}
.highlight-box p:last-child{margin-bottom:0;}
.highlight-box b{color:#0e7c6e;}
.divider{border:none;border-top:1px solid #c8ede8;margin:20px 0;}
.cta{display:inline-block;background:#0e7c6e;color:#fff !important;padding:12px 30px;border-radius:7px;text-decoration:none;font-size:14px;font-weight:700;}
.footer{background:#0f2e2b;padding:20px 28px;text-align:center;color:#7ab8b0;font-size:11px;line-height:2;}
.footer a{color:#c8f0ec;text-decoration:none;margin:0 8px;}
.social{margin:8px 0;}
.social a{display:inline-block;margin:0 6px;color:#c8f0ec;font-size:18px;text-decoration:none;}
</style></head><body>
<div class="wrap">

  <!-- Header with logo + brand -->
  <div class="header">
    <div class="header-inner">
      ${logoImgTag}
      <div class="brand-name">
        <div class="big">avRoN Technologies</div>
        <div class="small">avRoNTech.in &nbsp;·&nbsp; support.avrontech@gmail.com</div>
      </div>
    </div>
  </div>

  <!-- Body -->
  <div class="body">
    <div class="title">Internship Registration Confirmed! 🎉</div>
    <p class="subtitle">Dear <b>${name}</b>,<br>
    Thank you for applying for the <b>${reg.domain}</b> internship program at <b>avRoN Technologies</b>!</p>

    <!-- Highlight box -->
    <div class="highlight-box">
      <p>🗓 <b>Duration:</b> ${fmt(reg.startDate)} to ${fmt(reg.endDate)}</p>
      <p>🆔 <b>Certificate ID:</b> <span style="font-family:monospace;color:#0e7c6e;">${reg.certId}</span></p>
      <p>⏳ <b>Offer Letter Timeline:</b> within a few hours</p>
    </div>

    <p style="font-size:14px;color:#374151;line-height:1.7;margin-bottom:10px;">Our team is reviewing your application. You will receive your offer letter shortly with further instructions on how to begin your internship journey.</p>

    <p style="font-size:14px;color:#374151;line-height:1.7;margin-bottom:20px;">If you have any questions, feel free to reach out to our support team at <a href="mailto:${SUPPORT_EMAIL}" style="color:#0e7c6e;">${SUPPORT_EMAIL}</a>.</p>

    <hr class="divider">

    <p style="font-size:14px;color:#374151;margin-bottom:4px;">Thank you for choosing <b>avRoN Technologies</b>!</p>
    <p style="font-size:14px;color:#374151;margin-bottom:20px;">Best regards,<br><b>The avRoN Technologies Team</b></p>

    <div style="text-align:center;">
      <a href="${BASE}/portal" class="cta">Get Started →</a>
    </div>
  </div>

  <!-- Footer -->
  <div class="footer">
    <div>
      <a href="${BASE}">Home</a>
      <a href="${BASE}/about">About Us</a>
      <a href="${BASE}/privacy">Privacy Policy</a>
      <a href="mailto:${SUPPORT_EMAIL}">Contact Us</a>
    </div>
    <div class="social">
      <a href="#" title="Facebook">&#9646;</a>
      <a href="#" title="LinkedIn">in</a>
      <a href="#" title="Instagram">&#9675;</a>
    </div>
    <div style="font-size:10px;color:#4a8a82;margin-top:4px;">
      You received this email because you registered for an internship at avRoNTech.in<br>
      © 2026 avRoN Technologies. All rights reserved. &nbsp;·&nbsp; UDYAM-AP-23-0089163
    </div>
  </div>

</div>
</body></html>`;

  await sendMail({ to: user.email, subject: `✅ Registration Confirmed — ${reg.domain} Internship | avRoN Technologies`, html });
  console.log(`✉️ Confirmation sent to ${user.email}`);
}

// ── 2. Offer Letter ───────────────────────────────────────────────────────────
async function sendOfferLetterEmail(user, reg, pdfBuffer) {
  const name = (reg && reg.registrantName) || user.fullName;
  const BASE = process.env.BASE_URL || `https://${DOMAIN}`;

  // Logo as base64 for email embedding
  const fs = require('fs');
  const path = require('path');
  const logoPath = path.join(__dirname, '../public/logo.png');
  let logoTag = '';
  try {
    if (fs.existsSync(logoPath)) {
      const logoB64 = fs.readFileSync(logoPath).toString('base64');
      logoTag = `<img src="data:image/png;base64,${logoB64}" alt="avRoN Technologies" style="width:60px;height:60px;object-fit:contain;border-radius:50%;background:#fff;padding:4px;" />`;
    }
  } catch (_) {}

  const html = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<style>
*{margin:0;padding:0;box-sizing:border-box;}
body{background:#eaf6f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;color:#1a1a1a;padding:16px 8px;}
.wrap{max-width:600px;margin:0 auto;border-radius:12px;overflow:hidden;box-shadow:0 2px 16px rgba(0,0,0,0.09);}
.header{background:#0e7c6e;padding:22px 28px;display:flex;align-items:center;gap:14px;}
.brand-name{color:#fff;}
.brand-name .big{font-size:22px;font-weight:800;letter-spacing:-0.5px;line-height:1;}
.brand-name .small{font-size:11px;color:#c8f0ec;margin-top:2px;letter-spacing:0.05em;}
.body{background:#f0fbf9;padding:28px 32px;}
.body p{font-size:14px;color:#374151;line-height:1.7;margin-bottom:12px;}
.detail-row{display:flex;padding:10px 14px;border-bottom:1px solid #c8ede8;}
.detail-row:last-child{border-bottom:none;}
.detail-row:nth-child(even){background:#e0f5f1;}
.detail-row:nth-child(odd){background:#f0fbf9;}
.detail-lbl{font-size:13px;font-weight:700;color:#0e7c6e;width:120px;flex-shrink:0;}
.detail-val{font-size:13px;color:#1a1a1a;}
.table-wrap{border:1px solid #b2e0d8;border-radius:8px;overflow:hidden;margin:18px 0;}
.cta{display:inline-block;background:#0e7c6e;color:#fff !important;padding:12px 28px;border-radius:7px;text-decoration:none;font-size:13px;font-weight:700;margin:8px 0;}
.footer{background:#0f2e2b;padding:16px 28px;text-align:center;color:#7ab8b0;font-size:11px;line-height:1.8;}
.footer a{color:#c8f0ec;text-decoration:none;}
</style></head><body>
<div class="wrap">
  <div class="header">
    ${logoTag}
    <div class="brand-name">
      <div class="big">avRoN Technologies</div>
      <div class="small">avRoNTech.in &nbsp;·&nbsp; support.avrontech@gmail.com</div>
    </div>
  </div>
  <div class="body">
    <p>Dear <b>${name},</b></p>
    <p>We are pleased to offer you an internship at <b>avRoN Technologies</b>. Here are the details:</p>

    <div class="table-wrap">
      <div class="detail-row"><span class="detail-lbl">Domain</span><span class="detail-val">${reg.domain}</span></div>
      <div class="detail-row"><span class="detail-lbl">Duration</span><span class="detail-val">${fmt(reg.startDate)} to ${fmt(reg.endDate)}</span></div>
      <div class="detail-row"><span class="detail-lbl">Stipend</span><span class="detail-val">₹ 0.00</span></div>
      <div class="detail-row"><span class="detail-lbl">Certificate ID</span><span class="detail-val" style="font-family:monospace;color:#0e7c6e;">${reg.certId}</span></div>
    </div>

    <p>Please review the attached offer letter PDF.</p>

    <p>Feel free to contact us at <a href="mailto:${SUPPORT_EMAIL}" style="color:#0e7c6e;">${SUPPORT_EMAIL}</a> if you have any questions.</p>

    <p>We look forward to your positive response!</p>

    <div style="text-align:center;margin:24px 0;">
      <a href="${BASE}/dashboard" class="cta">Get Started →</a>
    </div>

    <p style="font-size:12px;color:#6b7280;">Best,<br><b>Team avRoN Technologies</b></p>
  </div>
  <div class="footer">
    <a href="${BASE}">Home</a> &nbsp;|&nbsp;
    <a href="mailto:${SUPPORT_EMAIL}">Support</a><br>
    <span style="font-size:10px;color:#4a8a82;">© 2026 avRoN Technologies. UDYAM-AP-23-0089163</span>
  </div>
</div>
</body></html>`;

  const attachments = (pdfBuffer && pdfBuffer.length > 0) ? [{
    filename: `avRoN_Tech_Offer_Letter_${reg.certId}.pdf`,
    content: pdfBuffer,
    contentType: 'application/pdf',
  }] : [];
  await sendMail({ to: user.email, subject: `🎓 Official Offer Letter — ${reg.domain} Internship | ${BRAND}`, html, attachments });
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
  await sendMail({ to: user.email, subject: `Your ${BRAND} login code: ${otp}`, html });
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
  await sendMail({ to: user.email, subject: `Action Required: Payment Resubmission Needed — ${BRAND}`, html });
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
  await sendMail({ to: user.email, subject: `Certificate Revoked — ${reg.certId} | avRoN Tech`, html });
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
