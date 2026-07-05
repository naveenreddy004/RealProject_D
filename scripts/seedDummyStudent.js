/**
 * scripts/seedDummyStudent.js
 *
 * Creates a dummy student + Java Full Stack registration for testing the portal/dashboard.
 *
 * Usage:
 *   node scripts/seedDummyStudent.js
 *
 * Login credentials after running:
 *   Email    : demo.student@avron.tech
 *   Password : Demo@1234
 */

require('dotenv').config();
const mongoose = require('mongoose');
const crypto   = require('crypto');

const User         = require('../models/User');
const Registration = require('../models/Registration');

async function seed() {
  if (!process.env.MONGODB_URI) {
    console.error('❌  MONGODB_URI is not set. Add it to your .env file.');
    process.exit(1);
  }

  await mongoose.connect(process.env.MONGODB_URI);
  console.log('✅  MongoDB connected');

  // ── Student details ────────────────────────────────────────────────────────
  const EMAIL    = 'demo.student@avron.tech';
  const PASSWORD = 'Demo@1234';

  let user = await User.findOne({ email: EMAIL });

  if (user) {
    console.log(`ℹ️   User already exists: ${EMAIL}  — skipping user creation.`);
  } else {
    user = new User({
      fullName     : 'Arjun Sharma',
      email        : EMAIL,
      password     : PASSWORD,        // pre-save hook in User model will hash this
      gender       : 'Male',
      mobile       : '9876543210',
      college      : 'JNTUH College of Engineering',
      course       : 'B.Tech CSE',
      location     : 'Hyderabad',
      isActive     : true,
      isAdmin      : false,
      otpVerified  : false,
      portalInviteSent: true,         // mark as already invited
    });

    await user.save();
    console.log(`✅  Student created: ${EMAIL}`);
  }

  // ── Registration ───────────────────────────────────────────────────────────
  const existing = await Registration.findOne({ user: user._id });

  if (existing) {
    console.log(`ℹ️   Registration already exists (certId: ${existing.certId}) — skipping.`);
  } else {
    const certId    = 'AT' + crypto.randomBytes(4).toString('hex').toUpperCase();
    const startDate = new Date('2025-06-01');
    const endDate   = new Date('2025-07-31');

    const reg = new Registration({
      user              : user._id,
      certId,
      domain            : 'Java Full Stack Development',
      duration          : '2 Months',
      startDate,
      endDate,
      package           : 'Pro Package',
      amount            : 299,
      registrantName    : 'Arjun Sharma',
      registrantCollege : 'JNTUH College of Engineering',
      registrantCourse  : 'B.Tech CSE',
      status            : 'active',   // payment verified, portal access granted
      portalInviteSent  : true,
      payment: {
        utrNumber      : 'UTR' + Date.now(),
        approved       : true,
        verifiedAt     : new Date(),
        verifiedBy     : 'seed-script',
        amount         : 299,
        method         : 'upi_manual',
      },
    });

    // Initialise default tasks and mark first two as complete
    reg.initTasks();
    reg.tasks[0].completed   = true;
    reg.tasks[0].completedAt = startDate;
    reg.tasks[1].completed   = true;
    reg.tasks[1].completedAt = startDate;
    reg.tasks[2].completed   = true;      // Login to Portal
    reg.tasks[2].completedAt = new Date();
    reg.tasksCompletedCount  = 3;

    await reg.save();
    console.log(`✅  Registration created  : certId = ${certId}`);
    console.log(`    Domain               : Java Full Stack Development`);
    console.log(`    Status               : active`);
  }

  // ── Summary ────────────────────────────────────────────────────────────────
  console.log('\n─────────────────────────────────────────────');
  console.log('  DUMMY STUDENT LOGIN CREDENTIALS');
  console.log('─────────────────────────────────────────────');
  console.log(`  Email    : ${EMAIL}`);
  console.log(`  Password : ${PASSWORD}`);
  console.log('  Portal   : /portal  (login with password)');
  console.log('  Dashboard: /dashboard');
  console.log('─────────────────────────────────────────────\n');

  await mongoose.connection.close();
  console.log('🔒  MongoDB disconnected. Done!');
}

seed().catch(err => {
  console.error('❌  Seed failed:', err.message);
  process.exit(1);
});
