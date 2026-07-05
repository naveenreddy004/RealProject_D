/**
 * scripts/seedCourseContent.js
 *
 * One-time script: reads course data from the static JS file and
 * upserts it into MongoDB. Safe to re-run — it upserts, never duplicates.
 *
 * Usage:
 *   node scripts/seedCourseContent.js
 */

require('dotenv').config();
const mongoose = require('mongoose');
const path     = require('path');

// Load the static course data
const dataPath = path.join(__dirname, '../public/course-data-java-full-stack.js');
// The file uses `const JAVA_FULLSTACK = {...}` — we evaluate it in a mini VM context
const fs = require('fs');
const vm = require('vm');
const src = fs.readFileSync(dataPath, 'utf8')
  // Strip the Node.js export block at the bottom if present
  .replace(/if\s*\(typeof module[\s\S]*?;\s*$/m, '')
  // Make const/let declarations global so the VM context can access them
  .replace(/^const\s+/gm, 'var ');

const ctx = {};
vm.createContext(ctx);
vm.runInContext(src, ctx);
const JAVA_FULLSTACK = ctx.JAVA_FULLSTACK;

if (!JAVA_FULLSTACK || !JAVA_FULLSTACK.weeks) {
  console.error('❌ Could not parse JAVA_FULLSTACK from course-data-java-full-stack.js');
  process.exit(1);
}

const CourseContent = require('../models/CourseContent');

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 10000 });
  console.log('✅ MongoDB connected');

  const doc = {
    domain:     'Java Full Stack Developer',
    slug:       'java-full-stack',
    title:      JAVA_FULLSTACK.domain || 'Java Full Stack Developer',
    totalWeeks: JAVA_FULLSTACK.weeks.length,
    weeks:      JAVA_FULLSTACK.weeks,
  };

  const result = await CourseContent.findOneAndUpdate(
    { slug: 'java-full-stack' },
    doc,
    { upsert: true, new: true }
  );

  console.log(`✅ Seeded: ${result.domain} — ${result.totalWeeks} weeks, ${result.weeks.length} week objects`);
  console.log(`   MongoDB _id: ${result._id}`);

  await mongoose.connection.close();
  console.log('🔒 Done.');
}

seed().catch(err => {
  console.error('❌ Seed failed:', err.message);
  process.exit(1);
});
