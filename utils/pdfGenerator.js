/**
 * PDF Generator — ALL PDFs are generated into memory Buffers.
 * Nothing is written to disk. Buffers are stored directly in MongoDB
 * on the Registration document (certificatePdf / offerLetterPdf / receiptPdf).
 */

const PDFDocument = require('pdfkit');
const QRCode = require('qrcode');

const fmt = (d) => new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' });

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
  doc.font('Helvetica-Bold').fontSize(34).fillColor('#0b2e22').text(user.fullName, 0, 144, { align: 'center' });

  const nw = doc.widthOfString(user.fullName, { font: 'Helvetica-Bold', fontSize: 34 });
  const nx = (W - nw) / 2;
  doc.moveTo(nx, 187).lineTo(nx + nw, 187).lineWidth(1.5).strokeColor('#1a5c46').stroke();

  doc.font('Helvetica').fontSize(12).fillColor('#555555').text('has successfully completed an internship in', 0, 200, { align: 'center' });
  doc.font('Helvetica-Bold').fontSize(15).fillColor('#1a5c46').text(reg.domain, 0, 220, { align: 'center' });
  doc.font('Helvetica').fontSize(12).fillColor('#555555').text(`from  ${fmt(reg.startDate)}  to  ${fmt(reg.endDate)}`, 0, 244, { align: 'center' });
  doc.font('Helvetica-Bold').fontSize(13).fillColor('#0b2e22').text('under the guidance of avRoN Technologies', 0, 264, { align: 'center' });

  if (user.college) {
    doc.font('Helvetica').fontSize(10).fillColor('#888888')
      .text(`${user.college}${user.course ? '  ·  ' + user.course : ''}`, 0, 284, { align: 'center' });
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
    ['Student Name', user.fullName],
    ['Email', user.email],
    ['College', user.college || '—'],
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
    .text('This is a computer-generated receipt. For any queries contact support@avron.in',
          40, y + 18, { align: 'center', width: W - 80 });

  doc.end();
  return bufferPromise;
}

// ─── Offer Letter PDF ─────────────────────────────────────────────────────────
async function generateOfferLetterPDF(user, reg) {
  const doc = new PDFDocument({ size: 'A4', margin: 0, bufferPages: true });
  const bufferPromise = streamToBuffer(doc);

  const W = doc.page.width, H = doc.page.height;

  // Letterhead
  doc.rect(0, 0, W, 110).fill('#0B192C');
  doc.rect(0, 110, W, 4).fill('#608BC1');

  doc.rect(48, 36, 44, 44).fill('#608BC1');
  doc.font('Helvetica-Bold').fontSize(13).fillColor('#0B192C').text('aR', 56, 50);

  doc.font('Helvetica-Bold').fontSize(22).fillColor('#fff').text('avRoN Tech', 110, 38);
  doc.font('Helvetica').fontSize(10).fillColor('#9eb2c8').text('avRoNTech.in', 110, 64);
  doc.font('Helvetica').fontSize(8).fillColor('#608BC1').text('CORPORATE INTERNSHIP DIVISION', 110, 80, { characterSpacing: 1.6 });

  let y = 150;
  doc.font('Helvetica').fontSize(10).fillColor('#5a6a7e').text(`Reference: ${reg.certId}`, 48, y);
  doc.text(`Date: ${new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}`, W - 240, y);

  y += 36;
  doc.font('Helvetica-Bold').fontSize(20).fillColor('#0B192C').text('OFFICIAL OFFER LETTER', 48, y, { align: 'center', width: W - 96 });

  y += 38;
  doc.font('Helvetica').fontSize(11.5).fillColor('#1a1a1a').text(`Dear ${user.fullName},`, 48, y);

  y += 22;
  doc.text(
    `We are pleased to formally offer you a virtual internship position at avRoN Tech. After review of your registration parameters, your application has been approved and you are confirmed for the following program:`,
    48, y, { width: W - 96, align: 'justify', lineGap: 4 },
  );

  y += 90;
  doc.rect(48, y, W - 96, 132).fill('#f7f9fc').stroke('#e6ebf2');
  doc.rect(48, y, 4, 132).fill('#608BC1');

  doc.font('Helvetica-Bold').fontSize(12).fillColor('#0B192C').text('Program Details', 64, y + 14);
  const rows = [
    ['Intern Name',    user.fullName],
    ['Email',          user.email],
    ['Domain',         reg.domain],
    ['Duration',       `${fmt(reg.startDate)} – ${fmt(reg.endDate)}  (${reg.duration || ''})`],
    ['Certificate ID', reg.certId],
    ['Stipend',        'Performance-based Perks / Unpaid'],
  ];
  let ry = y + 36;
  rows.forEach(([k, v]) => {
    doc.font('Helvetica').fontSize(10).fillColor('#5a6a7e').text(k, 64, ry, { width: 130 });
    doc.font('Helvetica-Bold').fontSize(10.5).fillColor('#0B192C').text(v, 196, ry, { width: W - 260 });
    ry += 16;
  });

  y += 152;
  doc.font('Helvetica-Bold').fontSize(11).fillColor('#0B192C').text('Onboarding Steps', 48, y);
  y += 16;
  const steps = [
    '1. Log securely into your dashboard at avRoNTech.in/dashboard.',
    '2. Open the "My Internships" tab to view your domain roadmap.',
    '3. Review weekly timelines and submit your task repositories through the portal.',
    '4. Upon successful completion, your QR-verified certificate will be released.',
  ];
  doc.font('Helvetica').fontSize(10.5).fillColor('#1a1a1a');
  steps.forEach(s => { doc.text(s, 48, y, { width: W - 96, lineGap: 3 }); y += 18; });

  y += 6;
  doc.font('Helvetica').fontSize(10.5).fillColor('#1a1a1a')
    .text('We highly encourage you to celebrate your placement, share your official selection letter, and tag our corporate engine on LinkedIn at avRoNTech.in.',
          48, y, { width: W - 96, align: 'justify', lineGap: 3 });

  const fy = H - 150;
  doc.moveTo(48, fy).lineTo(W - 48, fy).lineWidth(0.5).strokeColor('#e6ebf2').stroke();

  doc.font('Helvetica').fontSize(11).fillColor('#1a1a1a').text('Warm regards,', 48, fy + 12);
  doc.font('Helvetica-Bold').fontSize(11.5).fillColor('#0B192C').text('Corporate Onboarding Team', 48, fy + 30);
  doc.font('Helvetica').fontSize(10).fillColor('#5a6a7e').text('avRoN Tech  ·  avRoNTech.in', 48, fy + 46);

  doc.rect(W - 196, fy + 12, 148, 70).lineWidth(1).strokeColor('#608BC1').stroke();
  doc.font('Helvetica-Bold').fontSize(9).fillColor('#608BC1').text('AUTHORIZED', W - 192, fy + 22, { width: 138, align: 'center', characterSpacing: 2 });
  doc.font('Helvetica-Bold').fontSize(13).fillColor('#0B192C').text('avRoN Tech', W - 192, fy + 38, { width: 138, align: 'center' });
  doc.font('Helvetica').fontSize(8).fillColor('#5a6a7e').text(new Date().toLocaleDateString('en-IN'), W - 192, fy + 60, { width: 138, align: 'center' });

  doc.rect(0, H - 30, W, 30).fill('#0B192C');
  doc.font('Helvetica').fontSize(8).fillColor('#9eb2c8')
    .text(`This is a computer-generated offer letter from avRoN Tech (avRoNTech.in)  ·  Reference: ${reg.certId}`,
          0, H - 19, { align: 'center', width: W });

  doc.end();
  return bufferPromise;
}

module.exports = { generateCertificatePDF, generateReceiptPDF, generateOfferLetterPDF };
