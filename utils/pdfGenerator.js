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
  // Use registrantName if stored (handles case where same email used for multiple people)
  const certName    = reg.registrantName    || user.fullName;
  const certCollege = reg.registrantCollege || user.college;
  const certCourse  = reg.registrantCourse  || user.course;

  const verifyUrl = `${process.env.BASE_URL || 'http://localhost:3000'}/verify?id=${reg.certId}`;

  const qrBuffer = await QRCode.toBuffer(verifyUrl, {
    width: 130, margin: 1,
    color: { dark: '#1a5c46', light: '#ffffff' },
  });

  const doc = new PDFDocument({
    layout: 'landscape', size: 'A4',
    margins: { top: 0, bottom: 0, left: 0, right: 0 },
    bufferPages: true,
  });

  const bufferPromise = streamToBuffer(doc);

  const W = doc.page.width, H = doc.page.height;

  // Background
  doc.rect(0, 0, W, H).fill('#ffffff');
  doc.rect(0, 0, 18, H).fill('#0b2e22');
  doc.polygon([18, 0], [220, 0], [18, 140]).fill('#1a5c46');
  doc.polygon([W, H], [W - 200, H], [W, H - 120]).fill('#1a5c46');

  // Grid watermark
  doc.save();
  for (let x = 40; x < W; x += 50) doc.moveTo(x, 0).lineTo(x, H).strokeColor('#e8f3ef').lineWidth(0.4).stroke();
  for (let y = 0; y < H; y += 50) doc.moveTo(18, y).lineTo(W, y).strokeColor('#e8f3ef').lineWidth(0.4).stroke();
  doc.restore();

  // Borders
  doc.rect(30, 20, W - 48, H - 40).lineWidth(1.5).strokeColor('#1a5c46').stroke();
  doc.rect(35, 25, W - 58, H - 50).lineWidth(0.4).strokeColor('#38d996').stroke();

  // Header
  doc.font('Helvetica-Bold').fontSize(9).fillColor('#38d996').fillOpacity(1)
    .text('CERTIFICATE OF COMPLETION', 0, 50, { align: 'center', characterSpacing: 4 });
  doc.font('Helvetica-Bold').fontSize(32).fillColor('#0b2e22')
    .text('avRoN Technologies', 0, 66, { align: 'center' });

  const dw = 180;
  doc.moveTo(W/2 - dw/2, 108).lineTo(W/2 + dw/2, 108).lineWidth(1).strokeColor('#38d996').stroke();

  // Body
  doc.font('Helvetica').fontSize(12).fillColor('#666666').text('This is to certify that', 0, 124, { align: 'center' });
  doc.font('Helvetica-Bold').fontSize(34).fillColor('#0b2e22').text(certName, 0, 144, { align: 'center' });

  const nw = doc.widthOfString(certName, { font: 'Helvetica-Bold', fontSize: 34 });
  const nx = (W - nw) / 2;
  doc.moveTo(nx, 187).lineTo(nx + nw, 187).lineWidth(1.5).strokeColor('#1a5c46').stroke();

  doc.font('Helvetica').fontSize(12).fillColor('#555555').text('has successfully completed an internship in', 0, 200, { align: 'center' });
  doc.font('Helvetica-Bold').fontSize(15).fillColor('#1a5c46').text(reg.domain, 0, 220, { align: 'center' });
  doc.font('Helvetica').fontSize(12).fillColor('#555555').text(`from  ${fmt(reg.startDate)}  to  ${fmt(reg.endDate)}`, 0, 244, { align: 'center' });
  doc.font('Helvetica-Bold').fontSize(13).fillColor('#0b2e22').text('under the guidance of avRoN Technologies', 0, 264, { align: 'center' });

  if (certCollege) {
    doc.font('Helvetica').fontSize(10).fillColor('#888888')
      .text(`${certCollege}${certCourse ? '  ·  ' + certCourse : ''}`, 0, 284, { align: 'center' });
  }

  // Cert ID box
  doc.rect(W/2 - 120, 305, 240, 26).fill('#f0faf6');
  doc.font('Helvetica').fontSize(10).fillColor('#666').text('Certificate ID:', W/2 - 115, 312, { continued: true });
  doc.font('Helvetica-Bold').fontSize(10).fillColor('#1a5c46').text('  ' + reg.certId);

  if (reg.expiresAt) {
    doc.font('Helvetica').fontSize(9).fillColor('#666')
      .text(`Valid until ${fmt(reg.expiresAt)}`, 0, 337, { align: 'center' });
  }

  // Footer
  doc.moveTo(60, H - 130).lineTo(W - 60, H - 130).lineWidth(0.5).strokeColor('#cccccc').stroke();
  doc.moveTo(70, H - 80).lineTo(220, H - 80).lineWidth(1).strokeColor('#333').stroke();
  doc.font('Helvetica-Bold').fontSize(10).fillColor('#222').text('Authorized Signatory', 70, H - 75);
  doc.font('Helvetica').fontSize(9).fillColor('#666').text('avRoN Technologies', 70, H - 63);
  doc.font('Helvetica').fontSize(9).fillColor('#999').text(`Issued: ${fmt(new Date())}`, 0, H - 45, { align: 'center' });

  // QR Code
  doc.image(qrBuffer, W - 155, H - 155, { width: 95, height: 95 });
  doc.font('Helvetica').fontSize(7).fillColor('#888').text('Scan to Verify', W - 157, H - 57, { width: 100, align: 'center' });

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

  // ── Company name — top left next to logo
  doc.font('Helvetica-Bold').fontSize(26).fillColor('#ffffff').text('avRoN', 112, 22);
  const avronW = doc.widthOfString('avRoN', { font: 'Helvetica-Bold', fontSize: 26 });
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
