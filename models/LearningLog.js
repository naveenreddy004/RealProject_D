const mongoose = require('mongoose');

/**
 * LearningLog — one entry per student per calendar day per domain.
 * Student writes 1-3 lines about what they learned. Stored in DB.
 */
const learningLogSchema = new mongoose.Schema({
  user:     { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  domain:   { type: String, required: true },
  dateStr:  { type: String, required: true },   // YYYY-MM-DD in IST
  date:     { type: Date,   required: true },
  log:      { type: String, required: true, maxlength: 1000 },
}, { timestamps: true });

// One entry per student per domain per day
learningLogSchema.index({ user: 1, domain: 1, dateStr: 1 }, { unique: true });
learningLogSchema.index({ user: 1, domain: 1, date: -1 });

module.exports = mongoose.model('LearningLog', learningLogSchema);
