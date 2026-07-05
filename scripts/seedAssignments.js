/**
 * scripts/seedAssignments.js
 *
 * Reads assignment-data.js and upserts all 45 days into MongoDB.
 * Safe to re-run — upserts, never duplicates.
 *
 * Usage:  node scripts/seedAssignments.js
 */

require('dotenv').config();
const mongoose = require('mongoose');
const path     = require('path');

// The assignment data file exports via module.exports at the bottom
// Load it directly with require after temporarily setting global
const dataPath = path.join(__dirname, '../public/assignment-data.js');

// Read and eval with a global shim so `const ASSIGNMENTS` becomes accessible
const fs = require('fs');
let src = fs.readFileSync(dataPath, 'utf8');
// Replace `const ASSIGNMENTS` with `global.ASSIGNMENTS` to make it accessible
src = src.replace(/^const ASSIGNMENTS\s*=/m, 'global.ASSIGNMENTS =');
// Remove the module.exports line
src = src.replace(/if\s*\(typeof module[\s\S]*$/m, '');
eval(src);
const ASSIGNMENTS = global.ASSIGNMENTS;

if (!ASSIGNMENTS || !Array.isArray(ASSIGNMENTS)) {
  console.error('❌ Could not parse ASSIGNMENTS from assignment-data.js');
  process.exit(1);
}

const DailyAssignment = require('../models/DailyAssignment');

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 10000 });
  console.log('✅ MongoDB connected');

  let inserted = 0, updated = 0;
  for (const dayData of ASSIGNMENTS) {
    const result = await DailyAssignment.findOneAndUpdate(
      { day: dayData.day },
      { day: dayData.day, problems: dayData.problems },
      { upsert: true, new: true }
    );
    if (result.createdAt === result.updatedAt) inserted++;
    else updated++;
    process.stdout.write(`\r  Seeding day ${dayData.day}/45...`);
  }

  console.log(`\n✅ Done — ${inserted} inserted, ${updated} updated`);
  console.log(`   Total days in DB: ${await DailyAssignment.countDocuments()}`);

  await mongoose.connection.close();
  console.log('🔒 Disconnected.');
}

seed().catch(err => {
  console.error('❌ Seed failed:', err.message);
  process.exit(1);
});
