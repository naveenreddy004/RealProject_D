require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {serverSelectionTimeoutMS:8000}).then(async () => {
  const regs  = await mongoose.connection.db.collection('registrations').find({}).toArray();
  const users = await mongoose.connection.db.collection('users').find({},{projection:{fullName:1,email:1}}).toArray();
  const userMap = {};
  users.forEach(u => userMap[u._id.toString()] = u);
  console.log('Total registrations:', regs.length);
  regs.forEach(r => {
    const u = userMap[r.user?.toString()];
    const isBundle = !!(r.package && /complete/i.test(r.package)) || r.amount >= 1099;
    console.log('---');
    console.log('User    :', u ? u.fullName + ' / ' + u.email : 'not found');
    console.log('Package :', r.package);
    console.log('Amount  :', r.amount);
    console.log('Status  :', r.status);
    console.log('Domain  :', r.domain);
    console.log('IsBundle:', isBundle);
  });
  process.exit(0);
}).catch(e => { console.error(e.message); process.exit(1); });
