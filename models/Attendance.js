const mongoose = require('mongoose');

/**
 * Attendance — one document per student per calendar day per domain.
 * Marked automatically when the student opens their course dashboard.
 * "Present" = opened the course at least once that day.
 */
const attendanceSchema = new mongoose.Schema({
  user:       { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  domain:     { type: String, required: true },
  // Store date as midnight UTC so one-per-day dedup works cleanly
  date:       { type: Date, required: true },
  // ISO date string YYYY-MM-DD for easy querying and display
  dateStr:    { type: String, required: true },
}, { timestamps: true });

// One record per student per domain per day
attendanceSchema.index({ user: 1, domain: 1, dateStr: 1 }, { unique: true });
// Fast lookup by user + domain for stats
attendanceSchema.index({ user: 1, domain: 1 });

module.exports = mongoose.model('Attendance', attendanceSchema);
