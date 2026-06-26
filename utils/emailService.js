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

// ── Common HTML scaffolding ───────────────────────────────────────────────────
const wrap = (innerHTML) => `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><style>
*{margin:0;padding:0;box-sizing:border-box;}
body{background:#f0f4f8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1a1a1a;padding:24px 16px;}
.email-wrap{max-width:600px;margin:0 auto;}
.header{background:linear-gradient(135deg,#0B192C 0%,#0e2138 100%);padding:28px 32px;border-radius:12px 12px 0 0;border-bottom:3px solid #608BC1;}
.brand-row{display:flex;align-items:center;gap:12px;}
.brand-mark{width:38px;height:38px;background:#608BC1;color:#0B192C;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px;border-radius:8px;flex-shrink:0;}
.brand-text{font-size:19px;font-weight:700;color:#fff;letter-spacing:-.3px;}
.brand-text span{color:#608BC1;}
.brand-domain{font-size:10px;color:#7186a0;letter-spacing:0.16em;text-transform:uppercase;margin-top:2px;}
.body{background:#fff;padding:32px;border-left:1px solid #e6ebf2;border-right:1px solid #e6ebf2;}
.body h2{font-size:20px;font-weight:700;color:#0B192C;margin-bottom:18px;line-height:1.3;}
.body p{font-size:15px;color:#374151;margin-bottom:16px;line-height:1.75;}
.body p.muted{color:#6b7280;font-size:13.5px;}
.kv{background:#f8fafc;border-radius:10px;padding:0;margin:20px 0;overflow:hidden;border:1px solid #e6ebf2;}
.kv-row{display:flex;justify-content:space-between;align-items:center;padding:12px 18px;border-bottom:1px solid #e6ebf2;}
.kv-row:last-child{border-bottom:none;}
.kv-row .lbl{color:#6b7280;font-size:13.5px;font-weight:500;}
.kv-row .val{font-weight:700;color:#0B192C;font-size:14px;text-align:right;}
.steps{background:#f8fafc;border-radius:10px;padding:20px 22px;margin:20px 0;border:1px solid #e6ebf2;}
.steps .head{font-size:11px;font-weight:800;color:#608BC1;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;}
.steps ol{padding-left:20px;}
.steps ol li{font-size:14px;color:#374151;margin-bottom:10px;line-height:1.65;}
.cta{display:inline-block;background:#0B192C;color:#fff !important;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:700;letter-spacing:0.02em;margin-top:8px;}
.cta:hover{background:#0e2138;}
.signoff{font-size:14.5px;color:#374151;margin-top:24px;line-height:1.8;padding-top:20px;border-top:1px solid #f0f4f8;}
.signoff b{color:#0B192C;}
hr.divider{border:none;border-top:1px solid #e6ebf2;margin:24px 0;}
.footer{background:#0B192C;padding:20px 32px;border-radius:0 0 12px 12px;color:#7186a0;font-size:11.5px;text-align:center;line-height:1.8;}
.footer a{color:#608BC1;text-decoration:none;margin:0 5px;}
.footer .pipe{color:#2a3a52;margin:0 3px;}
.footer .small{font-size:10.5px;margin-top:6px;color:#4a5568;display:block;}
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
      <a href="https://${DOMAIN}/contact">Contact</a>
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
  await sendMail({ to: user.email, subject: `Internship Registration Confirmed! - ${BRAND}`, html });
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
      <div class="kv-row"><span class="lbl">Stipend</span><span class="val">Unpaid / Learning-based</span></div>
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
  const attachments = (pdfBuffer && pdfBuffer.length > 0) ? [{
    filename: `avRoN_Tech_Offer_Letter_${reg.certId}.pdf`,
    content: pdfBuffer,
    contentType: 'application/pdf',
  }] : [];
  await sendMail({ to: user.email, subject: `Official Internship Offer Letter & Onboarding Details - ${BRAND}`, html, attachments });
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
  await sendMail({ to: user.email, subject: `Action Required: Payment Resubmission Needed — ${BRAND}`, html });
  console.log(`✉️ Payment rejection notice sent to ${user.email}`);
}

// ── 6. Certificate Revocation ─────────────────────────────────────────────────
async function sendRevocationEmail(user, reg, reason) {
  const html = wrap(`
    <h2>Important: Certificate Revoked</h2>
    <p>Dear ${user.fullName}, we regret to inform you that your internship certificate has been <b style="color:#dc2626;">revoked</b>.</p>
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
  sendPortalInviteEmail: noop,
  sendPaymentReceivedEmail: noop,
  sendPaymentVerifiedEmail: noop,
  sendAdminPaymentAlert: noop,
};
