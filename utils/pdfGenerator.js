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

  const verifyUrl = `${process.env.BASE_URL || 'http://localhost:3000'}/verify?id=${reg.certId}`;

  // QR code — dark navy on white
  const qrBuffer = await QRCode.toBuffer(verifyUrl, {
    width: 100, margin: 1,
    color: { dark: '#0B192C', light: '#ffffff' },
  });

  const doc = new PDFDocument({
    layout: 'landscape', size: 'A4',
    margins: { top: 0, bottom: 0, left: 0, right: 0 },
    bufferPages: true,
  });
  const bufferPromise = streamToBuffer(doc);
  const W = doc.page.width, H = doc.page.height;

  // ── Background
  doc.rect(0, 0, W, H).fill('#ffffff');

  // ── Navy corner decorations (top-left + bottom-right)
  const NAVY = '#0B192C';
  const GOLD = '#C9A84C';

  // Top-left navy triangle
  doc.polygon([0,0],[180,0],[0,140]).fill(NAVY);
  // Bottom-right navy triangle
  doc.polygon([W,H],[W-180,H],[W,H-140]).fill(NAVY);

  // Gold diagonal accent lines — top-left
  for(let i=0;i<4;i++){
    const off = 12 + i*10;
    doc.moveTo(0, off*1.8).lineTo(off*1.8, 0).lineWidth(1.2).strokeColor(GOLD).stroke();
  }
  // Gold diagonal accent lines — bottom-right
  for(let i=0;i<4;i++){
    const off = 12 + i*10;
    doc.moveTo(W, H-off*1.8).lineTo(W-off*1.8, H).lineWidth(1.2).strokeColor(GOLD).stroke();
  }

  // ── Outer gold border
  doc.rect(22, 18, W-44, H-36).lineWidth(1.5).strokeColor(GOLD).stroke();
  // Inner thin border
  doc.rect(27, 23, W-54, H-46).lineWidth(0.5).strokeColor(GOLD).stroke();

  // ── Logo (phoenix) — centered top
  const logoPath = require('path').join(__dirname, '../public/logo.png');
  const fs = require('fs');
  if (fs.existsSync(logoPath)) {
    doc.image(logoPath, W/2 - 36, 28, { width: 72, height: 72 });
  }

  // ── Company name below logo
  doc.font('Helvetica-Bold').fontSize(22).fillColor(NAVY).text('AvRoN', W/2 - 60, 104, { continued: true });
  doc.font('Helvetica-Bold').fontSize(22).fillColor(GOLD).text('N');
  doc.font('Helvetica').fontSize(11).fillColor(NAVY).text('technologies', W/2 - 45, 128);

  // ── MSME logo top-right
  doc.font('Helvetica-Bold').fontSize(7).fillColor(NAVY)
    .text('MSME', W - 78, 28, { width: 60, align: 'center', characterSpacing: 1 });
  doc.font('Helvetica').fontSize(6).fillColor('#555')
    .text('MICRO, SMALL & MEDIUM\nENTERPRISES', W - 78, 37, { width: 60, align: 'center' });
  doc.rect(W-78, 25, 60, 38).lineWidth(0.5).strokeColor(NAVY).stroke();

  // ── "EMPOWERING FUTURE PROFESSIONALS" tagline
  const ty = 148;
  const lw = 90;
  doc.moveTo(W/2 - lw - 50, ty+5).lineTo(W/2 - 12, ty+5).lineWidth(0.8).strokeColor(GOLD).stroke();
  doc.moveTo(W/2 + 12, ty+5).lineTo(W/2 + lw + 50, ty+5).lineWidth(0.8).strokeColor(GOLD).stroke();
  doc.font('Helvetica').fontSize(8).fillColor(GOLD)
    .text('EMPOWERING FUTURE PROFESSIONALS', 0, ty, { align: 'center', characterSpacing: 2 });

  // ── Main title
  doc.font('Helvetica-Bold').fontSize(26).fillColor(NAVY)
    .text('INTERNSHIP COMPLETION CERTIFICATE', 0, 163, { align: 'center', characterSpacing: 1 });

  // Gold diamond divider
  doc.moveTo(W/2 - 80, 196).lineTo(W/2 - 8, 196).lineWidth(0.8).strokeColor(GOLD).stroke();
  doc.circle(W/2, 196, 4).fill(GOLD);
  doc.moveTo(W/2 + 8, 196).lineTo(W/2 + 80, 196).lineWidth(0.8).strokeColor(GOLD).stroke();

  // ── "This is to certify that"
  doc.font('Helvetica').fontSize(11).fillColor('#555')
    .text('This is to certify that', 0, 208, { align: 'center' });

  // ── Candidate name in large italic
  doc.font('Helvetica-BoldOblique').fontSize(36).fillColor(NAVY)
    .text(certName, 0, 222, { align: 'center' });

  // Gold line under name
  const nameW = Math.min(doc.widthOfString(certName, { fontSize: 36 }) + 40, 300);
  doc.moveTo(W/2 - nameW/2, 264).lineTo(W/2 + nameW/2, 264).lineWidth(1).strokeColor(GOLD).stroke();
  doc.circle(W/2, 264, 3).fill(GOLD);

  // ── Body text
  doc.font('Helvetica').fontSize(11).fillColor('#444')
    .text('has successfully completed the Virtual Internship Program in', 0, 273, { align: 'center' });

  doc.font('Helvetica-Bold').fontSize(14).fillColor(NAVY)
    .text(reg.domain, 0, 290, { align: 'center' });

  doc.font('Helvetica').fontSize(10.5).fillColor('#444')
    .text('conducted by AvRoN Technologies.', 0, 308, { align: 'center' });

  doc.font('Helvetica').fontSize(9.5).fillColor('#666')
    .text('During the internship, the intern demonstrated dedication, consistency\nand a strong grasp of the concepts while completing all assigned tasks,\nassessments and the final project.', 0, 322, { align: 'center', lineGap: 2 });

  // ── Info row: Duration | Cert ID | Issue Date
  const infoY = H - 140;
  const col1 = W/2 - 200, col2 = W/2 - 30, col3 = W/2 + 120;

  // Dividers
  doc.moveTo(W/2 - 82, infoY - 2).lineTo(W/2 - 82, infoY + 36).lineWidth(0.5).strokeColor('#ccc').stroke();
  doc.moveTo(W/2 + 80, infoY - 2).lineTo(W/2 + 80, infoY + 36).lineWidth(0.5).strokeColor('#ccc').stroke();

  // Duration
  doc.font('Helvetica-Bold').fontSize(8).fillColor(NAVY)
    .text('DURATION', col1, infoY, { width: 120, align: 'center', characterSpacing: 1 });
  doc.font('Helvetica').fontSize(11).fillColor('#333')
    .text(reg.duration || `${Math.round((new Date(reg.endDate)-new Date(reg.startDate))/(1000*60*60*24*7))} Weeks`, col1, infoY+13, { width: 120, align: 'center' });

  // Cert ID
  doc.font('Helvetica-Bold').fontSize(8).fillColor(NAVY)
    .text('CERTIFICATE ID', col2, infoY, { width: 120, align: 'center', characterSpacing: 1 });
  doc.font('Helvetica').fontSize(10).fillColor('#333')
    .text(reg.certId, col2, infoY+13, { width: 120, align: 'center' });

  // Issue Date
  doc.font('Helvetica-Bold').fontSize(8).fillColor(NAVY)
    .text('ISSUE DATE', col3, infoY, { width: 120, align: 'center', characterSpacing: 1 });
  doc.font('Helvetica').fontSize(11).fillColor('#333')
    .text(fmt(reg.sentAt || new Date()), col3, infoY+13, { width: 120, align: 'center' });

  // ── Signatures row
  const sigY = H - 95;

  // Left: Mentor/Coordinator
  doc.font('Helvetica-BoldOblique').fontSize(14).fillColor(NAVY)
    .text('avRoN Tech', 55, sigY, { width: 160, align: 'center' });
  doc.moveTo(55, sigY + 18).lineTo(215, sigY + 18).lineWidth(0.8).strokeColor('#888').stroke();
  doc.font('Helvetica-Bold').fontSize(8).fillColor(NAVY)
    .text('PROGRAM COORDINATOR', 55, sigY + 22, { width: 160, align: 'center', characterSpacing: 0.5 });
  doc.font('Helvetica').fontSize(8).fillColor('#555')
    .text('avRoN Technologies', 55, sigY + 33, { width: 160, align: 'center' });

  // Center: AvRoN seal
  const sealX = W/2 - 38, sealY = sigY - 10;
  doc.circle(W/2, sealY + 38, 38).fill(NAVY);
  doc.circle(W/2, sealY + 38, 34).lineWidth(1.5).strokeColor(GOLD).stroke();
  if (fs.existsSync(logoPath)) {
    doc.image(logoPath, sealX + 6, sealY + 8, { width: 64, height: 64 });
  }
  doc.font('Helvetica-Bold').fontSize(7).fillColor(GOLD)
    .text('AvRoN', W/2 - 15, sealY + 60);
  doc.font('Helvetica').fontSize(5.5).fillColor('#cdd9eb')
    .text('technologies', W/2 - 17, sealY + 70);

  // Right: CEO
  doc.font('Helvetica-BoldOblique').fontSize(14).fillColor(NAVY)
    .text('Naveen Reddy', W - 215, sigY, { width: 160, align: 'center' });
  doc.moveTo(W - 215, sigY + 18).lineTo(W - 55, sigY + 18).lineWidth(0.8).strokeColor('#888').stroke();
  doc.font('Helvetica-Bold').fontSize(8).fillColor(NAVY)
    .text('CEO & FOUNDER', W - 215, sigY + 22, { width: 160, align: 'center', characterSpacing: 0.5 });
  doc.font('Helvetica').fontSize(8).fillColor('#555')
    .text('Naveen Reddy\navRoN Technologies', W - 215, sigY + 33, { width: 160, align: 'center' });

  // ── QR Code — top right area
  doc.image(qrBuffer, W - 140, 155, { width: 80, height: 80 });
  doc.font('Helvetica-Bold').fontSize(7).fillColor(NAVY)
    .text('SCAN TO VERIFY', W - 140, 238, { width: 80, align: 'center', characterSpacing: 0.5 });
  doc.font('Helvetica').fontSize(7).fillColor('#666')
    .text('THIS CERTIFICATE', W - 140, 248, { width: 80, align: 'center' });

  // ── Footer bar
  const fY = H - 28;
  doc.rect(27, fY, W - 54, 22).fill(NAVY);
  const fItems = [
    '🛡  Issued by AvRoN Technologies',
    '🏛  An MSME Registered Enterprise',
    '🔒  This certificate is digitally signed and secure.',
  ];
  const fW = (W - 54) / 3;
  fItems.forEach((txt, i) => {
    doc.font('Helvetica').fontSize(7.5).fillColor('#fff')
      .text(txt, 27 + i * fW, fY + 7, { width: fW, align: 'center' });
  });

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
