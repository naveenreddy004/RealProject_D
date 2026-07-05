/**
 * scripts/seedCompleteBundle.js
 *
 * Creates a dummy student with the ₹1099 Complete Certification Bundle
 * for testing the interactive Course Dashboard.
 *
 * Usage:
 *   node scripts/seedCompleteBundle.js
 *
 * ┌─────────────────────────────────────────────────┐
 * │  LOGIN CREDENTIALS                              │
 * │  Email    : bundle.demo@avron.tech              │
 * │  Password : Bundle@1234                         │
 * │  Portal   : /portal                             │
 * │  Course   : /course-dashboard.html?domain=...   │
 * └─────────────────────────────────────────────────┘
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
  const EMAIL    = 'bundle.demo@avron.tech';
  const PASSWORD = 'Bundle@1234';

  let user = await User.findOne({ email: EMAIL });

  if (user) {
    console.log(`ℹ️   User already exists: ${EMAIL} — skipping user creation.`);
  } else {
    user = new User({
      fullName         : 'Priya Reddy',
      email            : EMAIL,
      password         : PASSWORD,   // hashed by pre-save hook in User model
      gender           : 'Female',
      mobile           : '9000000001',
      college          : 'JNTUH College of Engineering',
      course           : 'B.Tech CSE',
      location         : 'Hyderabad',
      isActive         : true,
      isAdmin          : false,
      otpVerified      : false,
      portalInviteSent : true,
    });

    await user.save();
    console.log(`✅  User created: ${EMAIL}`);
  }

  // ── Registration ───────────────────────────────────────────────────────────
  // Remove any old registration for this user so we can recreate cleanly
  const existing = await Registration.findOne({
    user   : user._id,
    domain : 'Java Full Stack Developer',
  });

  if (existing) {
    console.log(`ℹ️   Registration already exists (certId: ${existing.certId})`);
    console.log(`    Package : ${existing.package}  Amount : ₹${existing.amount}`);

    // Patch to complete bundle if it was seeded with an old amount
    if (existing.amount < 1099 || !/complete/i.test(existing.package || '')) {
      existing.package = 'Complete Certification Bundle (₹1099)';
      existing.amount  = 1099;
      existing.payment.amount = 1099;
      existing.status  = 'active';
      await existing.save();
      console.log('⬆️   Patched to Complete Bundle (₹1099) + status = active');
    }
  } else {
    const certId    = 'AT' + crypto.randomBytes(4).toString('hex').toUpperCase();
    const startDate = new Date();
    const endDate   = new Date();
    endDate.setMonth(endDate.getMonth() + 2);   // 2-month program

    const reg = new Registration({
      user              : user._id,
      certId,
      domain            : 'Java Full Stack Developer',   // must match DOMAIN_HAS_DASHBOARD key
      duration          : '2 Months',
      startDate,
      endDate,
      package           : 'Complete Certification Bundle (₹1099)',
      amount            : 1099,
      registrantName    : 'Priya Reddy',
      registrantCollege : 'JNTUH College of Engineering',
      registrantCourse  : 'B.Tech CSE',
      status            : 'active',
      portalInviteSent  : true,
      payment: {
        utrNumber    : 'SEED' + Date.now(),
        approved     : true,
        verifiedAt   : new Date(),
        verifiedBy   : 'seed-script',
        amount       : 1099,
        method       : 'upi_manual',
      },
    });

    reg.initTasks();
    // Mark first 3 tasks complete (Registration, Payment, Portal Login)
    [0, 1, 2].forEach(i => {
      reg.tasks[i].completed   = true;
      reg.tasks[i].completedAt = new Date();
    });
    reg.tasksCompletedCount = 3;

    await reg.save();
    console.log(`✅  Registration created : certId = ${certId}`);
    console.log(`    Domain              : Java Full Stack Developer`);
    console.log(`    Package             : Complete Certification Bundle (₹1099)`);
    console.log(`    Status              : active`);
  }

  // ── Print credentials ──────────────────────────────────────────────────────
  const domain = encodeURIComponent('Java Full Stack Developer');
  console.log('\n══════════════════════════════════════════════════');
  console.log('  COMPLETE BUNDLE — DUMMY STUDENT CREDENTIALS');
  console.log('══════════════════════════════════════════════════');
  console.log(`  Email          : ${EMAIL}`);
  console.log(`  Password       : ${PASSWORD}`);
  console.log(`  Portal login   : /portal`);
  console.log(`  Course URL     : /course-dashboard.html?domain=${domain}`);
  console.log('══════════════════════════════════════════════════\n');

  await mongoose.connection.close();
  console.log('🔒  MongoDB disconnected. Done!');
}

seed().catch(err => {
  console.error('❌  Seed failed:', err.message);
  process.exit(1);
});
