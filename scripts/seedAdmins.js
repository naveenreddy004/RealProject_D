
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');

const ADMINS = [
  { fullName: 'Admin One',   email: 'naveenreddyduvvuru6@gmail.com', password: 'Naveen@1234' },
  { fullName: 'Admin Two',   email: 'admin2@yourdomain.com', password: 'ChangeMe@456' },
  { fullName: 'Admin Three', email: 'admin3@yourdomain.com', password: 'ChangeMe@789' },
  { fullName: 'Admin Four',  email: 'admin4@yourdomain.com', password: 'ChangeMe@321' },
];
// ─────────────────────────────────────────────────────────────────────────────

async function seedAdmins() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('✅ Connected to MongoDB\n');

  for (const adminData of ADMINS) {
    const email = adminData.email.toLowerCase();
    let user = await User.findOne({ email });

    if (user) {
      if (!user.isAdmin) {
        user.isAdmin = true;
        await user.save();
        console.log(`🔼 Promoted existing user to admin: ${email}`);
      } else {
        // Already admin — update password in case it changed
        user.password = adminData.password;
        await user.save();
        console.log(`🔄 Admin password updated: ${email}`);
      }
    } else {
      user = new User({
        fullName: adminData.fullName,
        email,
        password: adminData.password,
        isAdmin: true,
        isActive: true,
      });
      await user.save();
      console.log(`✅ Admin created: ${email}`);
    }
  }

  console.log('\n🎉 Done! All admins are set up.');
  console.log('📢 Remind each admin to change their password after first login.\n');
  await mongoose.connection.close();
  process.exit(0);
}

seedAdmins().catch(err => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
