const mongoose = require('mongoose');

/**
 * AssignmentProgress — tracks which problems a student has marked complete.
 * One document per student per domain.
 */
const assignmentProgressSchema = new mongoose.Schema({
  user:      { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  domain:    { type: String, required: true },
  // Map of "day-problemIndex" -> { completedAt: Date }
  // e.g. "1-0", "1-1", "2-0" etc.
  completed: { type: mongoose.Schema.Types.Mixed, default: {} },
}, { timestamps: true });

assignmentProgressSchema.index({ user: 1, domain: 1 }, { unique: true });

module.exports = mongoose.model('AssignmentProgress', assignmentProgressSchema);
