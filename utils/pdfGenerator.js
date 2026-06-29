/**
 * PDF Generator — ALL PDFs are generated into memory Buffers.
 * Nothing is written to disk. Buffers are stored directly in MongoDB
 * on the Registration document (certificatePdf / offerLetterPdf / receiptPdf).
 */

const PDFDocument = require('pdfkit');
const QRCode = require('qrcode');

const fmt = (d) => {
  if (!d) return '—';
  try { return new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' }); }
  catch { return '—'; }
};

/** Collect all chunks from a PDFDocument stream into a single Buffer */
function streamToBuffer(doc) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    doc.on('data', (chunk) => chunks.push(chunk));
    doc.on('end',  () => resolve(Buffer.concat(chunks)));
    doc.on('error', reject);
  });
}

// ─── Certificate PDF ──────────────────────────────────────────────────────────
async function generateCertificatePDF(user, reg) {
  const certName    = reg.registrantName    || user.fullName;
  const certCollege = reg.registrantCollege || user.college;
  const certCourse  = reg.registrantCourse  || user.course;
  const mentorName  = reg.mentorName  || 'Rohit Sharma';
  const mentorTitle = reg.mentorTitle || 'Senior Software Engineer';
  const ceoName     = reg.ceoName     || 'Amit Malhotra';

  const verifyUrl = `${process.env.BASE_URL || 'http://localhost:3000'}/verify?id=${reg.certId}`;

  const qrBuffer = await QRCode.toBuffer(verifyUrl, {
    width: 130, margin: 1,
    color: { dark: '#0B192C', light: '#ffffff' },
  });

  const doc = new PDFDocument({
    layout: 'landscape', size: 'A4',
    margins: { top: 0, bottom: 0, left: 0, right: 0 },
    bufferPages: true,
  });
  const bufferPromise = streamToBuffer(doc);
  const W = doc.page.width;   // 841.89
  const H = doc.page.height;  // 595.28

  const fs   = require('fs');
  const path = require('path');

  // ── Background template
  const tpl = path.join(__dirname, '../public/certificate.png');
  if (fs.existsSync(tpl)) {
    doc.image(tpl, 0, 0, { width: W, height: H });
  } else {
    doc.rect(0, 0, W, H).fill('#ffffff');
  }

  const NAVY    = '#0B192C';
  const GOLD    = '#b8972a';
  const cx      = W / 2;

  // ── "This is to certify that" — italic, centered
// ── Decorative gold line under title
const lineY1 = 192;
doc.moveTo(250, lineY1).lineTo(cx - 15, lineY1).lineWidth(0.8).strokeColor(GOLD).stroke();
doc.circle(cx, lineY1, 3).fillAndStroke(GOLD, GOLD);
doc.moveTo(cx + 15, lineY1).lineTo(W - 250, lineY1).lineWidth(0.8).strokeColor(GOLD).stroke();

doc.font('Helvetica-Oblique').fontSize(13).fillColor('#444444')
  .text('This is to certify that', 180, 205, { width: W - 360, align: 'center' });
  // ── Intern Name — large script-style bold italic, centered
  const nameSize = certName.length > 24 ? 28 : certName.length > 18 ? 34 : 42;
  doc.font('Helvetica-BoldOblique').fontSize(nameSize).fillColor('#142A63')
    .text(certName, 180, 235, { width: W - 360, align: 'center' });

  // ── Gold diamond separator under name — use simple text bullet
 // ── Gold line with diamond below name
const lineY2 = 282;
doc.moveTo(280, lineY2).lineTo(cx - 12, lineY2).lineWidth(0.8).strokeColor(GOLD).stroke();
// Draw a diamond shape using polygon
doc.save();
doc.translate(cx, lineY2);
doc.moveTo(0, -5).lineTo(5, 0).lineTo(0, 5).lineTo(-5, 0).closePath();
doc.fillAndStroke(GOLD, GOLD);
doc.restore();
doc.moveTo(cx + 12, lineY2).lineTo(W - 280, lineY2).lineWidth(0.8).strokeColor(GOLD).stroke();
  // ── "has successfully completed the Virtual Internship Program in"
  doc.font('Helvetica').fontSize(10.5).fillColor('#333333')
    .text('has successfully completed the Virtual Internship Program in', 180, 295, { width: W - 360, align: 'center' });

  // ── Domain bold, centered
  doc.font('Helvetica-Bold').fontSize(14).fillColor(NAVY)
    .text(reg.domain, 180, 315, { width: W - 360, align: 'center' });

  // ── "conducted by AvRoN Technologies." — single line, moved down slightly
  doc.font('Helvetica').fontSize(10.5).fillColor('#333333')
    .text('conducted by AvRoN Technologies.', 180, 334, { width: W - 360, align: 'center' });

  // ── Description paragraph
  doc.font('Helvetica').fontSize(9.5).fillColor('#444444')
    .text(
      'During the internship, the intern demonstrated dedication, consistency\nand a strong grasp of the concepts while completing all assigned tasks,\nassessments and the final project.',
      180, 358, { width: W - 360, align: 'center', lineGap: 2 }
    );

  // ── 3-column info row: DURATION | CERTIFICATE ID | ISSUE DATE
  // Vertical dividers + icon placeholders
  const infoY   = 418;
  const col1cx  = 280;   // DURATION center x
  const col2cx  = cx;    // CERT ID center x (421)
  const col3cx  = 562;   // ISSUE DATE center x

  const colW = 140;

  // Vertical separators
  doc.moveTo(col1cx + colW / 2 + 10, infoY - 5).lineTo(col1cx + colW / 2 + 10, infoY + 50)
    .lineWidth(0.8).strokeColor('#cccccc').stroke();
  doc.moveTo(col3cx - colW / 2 - 10, infoY - 5).lineTo(col3cx - colW / 2 - 10, infoY + 50)
    .lineWidth(0.8).strokeColor('#cccccc').stroke();

  // Labels (bold, navy, small caps feel)
  const labelSize = 8;
  const valSize   = 11;

  // DURATION
  doc.font('Helvetica-Bold').fontSize(labelSize).fillColor(NAVY)
    .text('DURATION', col1cx - colW / 2, infoY, { width: colW, align: 'center' });
  doc.font('Helvetica-Bold').fontSize(valSize).fillColor(NAVY)
    .text(
      reg.duration || `${Math.round((new Date(reg.endDate) - new Date(reg.startDate)) / (1000*60*60*24*7))} Weeks`,
      col1cx - colW / 2, infoY + 14, { width: colW, align: 'center' }
    );

  // CERTIFICATE ID
  doc.font('Helvetica-Bold').fontSize(labelSize).fillColor(NAVY)
    .text('CERTIFICATE ID', col2cx - colW / 2, infoY, { width: colW, align: 'center' });
  doc.font('Helvetica-Bold').fontSize(valSize).fillColor(NAVY)
    .text(reg.certId, col2cx - colW / 2, infoY + 14, { width: colW, align: 'center' });

  // ISSUE DATE
  doc.font('Helvetica-Bold').fontSize(labelSize).fillColor(NAVY)
    .text('ISSUE DATE', col3cx - colW / 2, infoY, { width: colW, align: 'center' });
  doc.font('Helvetica-Bold').fontSize(valSize).fillColor(NAVY)
    .text(fmt(reg.sentAt || new Date()), col3cx - colW / 2, infoY + 14, { width: colW, align: 'center' });

  // ── QR Code — far right, moved up to avoid blue corner overlap
 doc.image(qrBuffer, W - 158, 348, { width: 96, height: 96 });
doc.font('Helvetica-Bold').fontSize(7).fillColor(NAVY)
  .text('SCAN TO VERIFY', W - 163, 447, { width: 110, align: 'center' });
doc.font('Helvetica').fontSize(7).fillColor('#444444')
  .text('THIS CERTIFICATE', W - 163, 456, { width: 110, align: 'center' });
  // ── Signatures row
  const sigY = 478;

  // Mentor — left
  doc.font('Helvetica-BoldOblique').fontSize(14).fillColor(NAVY)
    .text(mentorName, 90, sigY, { width: 160, align: 'center' });
  doc.moveTo(90, sigY + 20).lineTo(250, sigY + 20).lineWidth(0.5).strokeColor('#aaaaaa').stroke();
  doc.font('Helvetica-Bold').fontSize(8).fillColor(NAVY)
    .text('MENTOR', 90, sigY + 25, { width: 160, align: 'center' });
  doc.font('Helvetica').fontSize(8).fillColor('#555')
    .text(mentorName, 90, sigY + 37, { width: 160, align: 'center' });
  doc.font('Helvetica').fontSize(8).fillColor('#555')
    .text(mentorTitle, 90, sigY + 49, { width: 160, align: 'center' });

  // CEO — right (leave space for QR on far right)
  doc.font('Helvetica-BoldOblique').fontSize(14).fillColor(NAVY)
    .text(ceoName, 490, sigY, { width: 160, align: 'center' });
  doc.moveTo(490, sigY + 20).lineTo(650, sigY + 20).lineWidth(0.5).strokeColor('#aaaaaa').stroke();
  doc.font('Helvetica-Bold').fontSize(8).fillColor(NAVY)
    .text('CEO & CO-FOUNDER', 490, sigY + 25, { width: 160, align: 'center' });
  doc.font('Helvetica').fontSize(8).fillColor('#555')
    .text(ceoName, 490, sigY + 37, { width: 160, align: 'center' });
  doc.font('Helvetica').fontSize(8).fillColor('#555')
    .text('AvRoN Technologies', 490, sigY + 49, { width: 160, align: 'center' });

  // ── Seal logo in center (if exists)
  const sealPath = path.join(__dirname, '../public/seal.png');
  if (fs.existsSync(sealPath)) {
    doc.image(sealPath, cx - 40, sigY - 10, { width: 80, height: 80 });
  }

  doc.end();
  return bufferPromise;
}

// ─── Receipt PDF ──────────────────────────────────────────────────────────────
async function generateReceiptPDF(user, reg) {
  const doc = new PDFDocument({
    size: 'A5', margins: { top: 40, bottom: 40, left: 40, right: 40 },
    bufferPages: true,
  });

  const bufferPromise = streamToBuffer(doc);

  const W = doc.page.width;

  doc.rect(0, 0, W, 80).fill('#0b2e22');
  doc.font('Helvetica-Bold').fontSize(22).fillColor('#fff').text('avRoN Technologies', 40, 20);
  doc.font('Helvetica').fontSize(10).fillColor('#38d996').text('Payment Receipt', 40, 46);
  doc.font('Helvetica').fontSize(9).fillColor('rgba(255,255,255,0.5)').text('OFFICIAL RECEIPT', W - 130, 30);

  doc.moveDown(2);
  doc.font('Helvetica-Bold').fontSize(13).fillColor('#0b2e22').text('Receipt Details', 40, 100);
  doc.moveTo(40, 118).lineTo(W - 40, 118).lineWidth(1).strokeColor('#c3e6d8').stroke();

  const rows = [
    ['Student Name', reg.registrantName || user.fullName],
    ['Email', user.email],
    ['College', reg.registrantCollege || user.college || '—'],
    ['Domain', reg.domain],
    ['Package', reg.package],
    ['Amount Paid', `₹${reg.payment.amount}`],
    ['UPI ID (Recipient)', process.env.UPI_ID || 'avron@upi'],
    ['UTR Number', reg.payment.utrNumber],
    ['Payment Date', fmt(reg.payment.submittedAt)],
    ['Certificate ID', reg.certId],
    ['Status', reg.payment.verifiedAt ? 'Verified ✓' : 'Pending Verification'],
  ];

  let y = 128;
  rows.forEach(([label, value], i) => {
    if (i % 2 === 0) doc.rect(40, y, W - 80, 22).fill('#f5faf8');
    doc.font('Helvetica').fontSize(9).fillColor('#666').text(label, 48, y + 6);
    doc.font('Helvetica-Bold').fontSize(9).fillColor('#0b2e22').text(String(value ?? '—'), 200, y + 6, { width: W - 240 });
    y += 22;
  });

  doc.moveTo(40, y + 10).lineTo(W - 40, y + 10).lineWidth(0.5).strokeColor('#c3e6d8').stroke();
  doc.font('Helvetica').fontSize(8).fillColor('#999')
    .text('This is a computer-generated receipt. For any queries contact support.avrontech@gmail.com',
          40, y + 18, { align: 'center', width: W - 80 });

  doc.end();
  return bufferPromise;
}

// ─── Offer Letter PDF ─────────────────────────────────────────────────────────
async function generateOfferLetterPDF(user, reg) {
  const certName    = reg.registrantName    || user.fullName;
  const certCollege = reg.registrantCollege || user.college;
  const certCourse  = reg.registrantCourse  || user.course;
  const doc = new PDFDocument({ size: 'A4', margin: 0, bufferPages: true });
  const bufferPromise = streamToBuffer(doc);

  const W = doc.page.width, H = doc.page.height;
  const TEAL  = '#0e7c6e';
  const DARK  = '#0f2e2b';
  const LIGHT = '#f4fbfa';
  const GRAY  = '#555555';

  // ── Background
  doc.rect(0, 0, W, H).fill('#ffffff');

  // ── Top teal header bar
  doc.rect(0, 0, W, 100).fill(TEAL);

  // ── Logo image (phoenix) — top left
  const logoPath = require('path').join(__dirname, '../public/logo.png');
  const fs = require('fs');
  if (fs.existsSync(logoPath)) {
    doc.image(logoPath, 36, 14, { width: 64, height: 64 });
  }

  // ── Company name next to logo
  doc.font('Helvetica-Bold').fontSize(26).fillColor('#ffffff').text('avRoN', 112, 22);
  doc.font('Helvetica').fontSize(11).fillColor('#c8f0ec').text('Technologies', 112, 52);
  doc.font('Helvetica').fontSize(8).fillColor('#a0ddd7').text('avRoNTech.in  ·  support.avrontech@gmail.com', 112, 68);

  // ── UDYAM badge top right
  doc.font('Helvetica-Bold').fontSize(7).fillColor('#ffffff')
    .text('UDYAM REGISTERED', W - 160, 20, { width: 130, align: 'right', characterSpacing: 1 });
  doc.font('Helvetica').fontSize(7).fillColor('#c8f0ec')
    .text('UDYAM-AP-23-0089163', W - 160, 32, { width: 130, align: 'right' });
  doc.font('Helvetica').fontSize(7).fillColor('#a0ddd7')
    .text('Micro Enterprise · MSME Govt. of India', W - 160, 44, { width: 130, align: 'right' });

  // ── Teal bottom accent bar
  doc.rect(0, H - 28, W, 28).fill(TEAL);
  doc.font('Helvetica').fontSize(8).fillColor('#c8f0ec')
    .text('avRoN Technologies  ·  avRoNTech.in  ·  support.avrontech@gmail.com', 0, H - 18, { align: 'center', width: W });

  // ── Left teal side strip
  doc.rect(0, 100, 6, H - 128).fill(TEAL);

  // ── "INTERNSHIP OFFER LETTER" title
  doc.font('Helvetica-Bold').fontSize(16).fillColor(DARK)
    .text('INTERNSHIP OFFER LETTER', 0, 120, { align: 'center', width: W, characterSpacing: 1.5 });
  doc.moveTo(W / 2 - 120, 142).lineTo(W / 2 + 120, 142).lineWidth(1.5).strokeColor(TEAL).stroke();

  // ── Reference + Date row
  const dateStr = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' });
  doc.font('Helvetica').fontSize(9).fillColor(GRAY).text(`ID — ${reg.certId}`, 48, 154);
  doc.font('Helvetica').fontSize(9).fillColor(GRAY).text(dateStr, W - 48, 154, { align: 'right', width: 200 });

  // ── Salutation
  let y = 178;
  doc.font('Helvetica-Bold').fontSize(11).fillColor(DARK).text(`Dear ${certName},`, 48, y);

  y += 22;
  doc.font('Helvetica').fontSize(10.5).fillColor('#333333')
    .text(
      `We are pleased to extend an offer for you to join avRoN Technologies as an Intern in the ( ${reg.domain} ) program. We believe that your skills, background, and enthusiasm will be an excellent fit for our team.`,
      48, y, { width: W - 96, align: 'justify', lineGap: 3 }
    );

  y += 64;
  doc.font('Helvetica').fontSize(10.5).fillColor('#333333')
    .text(
      `Your internship is scheduled to commence on ${fmt(reg.startDate)} and will conclude on ${fmt(reg.endDate)}. During your internship you will gain hands-on experience and deepen your understanding of various concepts in a dynamic environment.`,
      48, y, { width: W - 96, align: 'justify', lineGap: 3 }
    );

  // ── Details table (full width, like ApexPlanet)
  y += 68;
  const tableRows = [
    ['Intern Name',    certName],
    ['Email',          user.email],
    ['Domain',         reg.domain],
    ['Duration',       `${fmt(reg.startDate)} to ${fmt(reg.endDate)}`],
    ['Stipend',        '₹ 0.00 (Learning-based / Unpaid)'],
    ['Certificate ID', reg.certId],
    ...(certCollege ? [['College', certCollege + (certCourse ? ` · ${certCourse}` : '')]] : []),
  ];

  const tableX = 48, tableW = W - 96, rowH = 24;
  tableRows.forEach(([label, value], i) => {
    const rowY = y + i * rowH;
    doc.rect(tableX, rowY, tableW, rowH).fill(i % 2 === 0 ? LIGHT : '#ffffff').stroke('#d4eeea');
    doc.rect(tableX, rowY, 4, rowH).fill(TEAL);
    doc.font('Helvetica-Bold').fontSize(9.5).fillColor(TEAL).text(label, tableX + 14, rowY + 7);
    doc.font('Helvetica').fontSize(9.5).fillColor(DARK).text(String(value ?? '—'), tableX + 160, rowY + 7, { width: tableW - 170 });
  });

  y += tableRows.length * rowH + 20;

  // ── Body paragraphs
  doc.font('Helvetica').fontSize(10.5).fillColor('#333333')
    .text(
      'We are confident that your dedication and willingness to take on tasks will contribute to a valuable experience for both you and us. As an intern, you will not be a company employee. Therefore, you will not be eligible for the benefits that our regular employees receive.',
      48, y, { width: W - 96, align: 'justify', lineGap: 3 }
    );

  y += 60;
  doc.font('Helvetica').fontSize(10.5).fillColor('#333333')
    .text(
      `We expect you to comply with our company practices, including those related to conduct and confidentiality. We are confident that your internship with us will be rewarding and wish you all the best as you embark on this exciting opportunity. If you have any questions or require further information, please feel free to reach out to us at support.avrontech@gmail.com.`,
      48, y, { width: W - 96, align: 'justify', lineGap: 3 }
    );

  // ── Thank you + signature
  y += 72;
  doc.font('Helvetica-Bold').fontSize(11).fillColor(DARK).text('Thank You,', 48, y);
  y += 16;
  doc.font('Helvetica-Bold').fontSize(11).fillColor(DARK).text('Team avRoN Technologies', 48, y);

  // ── Signature line
  y += 36;
  doc.moveTo(48, y).lineTo(200, y).lineWidth(1).strokeColor('#aaaaaa').stroke();
  y += 6;
  doc.font('Helvetica').fontSize(9).fillColor(GRAY).text('Program Coordinator', 48, y);
  doc.font('Helvetica').fontSize(9).fillColor(GRAY).text('avRoN Technologies', 48, y + 13);

  // ── MSME QR code (right side, bottom area) — use QRCode for UDYAM number
  try {
    const msmeQr = await QRCode.toBuffer('https://udyamregistration.gov.in', {
      width: 70, margin: 1,
      color: { dark: '#0e7c6e', light: '#ffffff' },
    });
    const qrY = y - 20;
    doc.image(msmeQr, W - 120, qrY, { width: 70, height: 70 });
    doc.font('Helvetica').fontSize(7).fillColor(GRAY).text('MSME · UDYAM-AP-23-0089163', W - 130, qrY + 72, { width: 90, align: 'center' });
  } catch (_) {}

  doc.end();
  return bufferPromise;
}

module.exports = { generateCertificatePDF, generateReceiptPDF, generateOfferLetterPDF };
