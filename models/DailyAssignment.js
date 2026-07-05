const mongoose = require('mongoose');

/**
 * DailyAssignment — stores all 45 days of LeetCode problems.
 * One document per day. Replaces assignment-data.js.
 */
const problemSchema = new mongoose.Schema({
  id:         { type: Number, required: true },
  title:      { type: String, required: true },
  difficulty: { type: String, enum: ['Easy','Medium','Hard'], required: true },
  url:        { type: String, required: true },
  topic:      { type: String, required: true },
  hint:       { type: String, default: '' },
}, { _id: false });

const dailyAssignmentSchema = new mongoose.Schema({
  day:      { type: Number, required: true, unique: true, min: 1, max: 45 },
  problems: { type: [problemSchema], required: true },
}, { timestamps: true });

module.exports = mongoose.model('DailyAssignment', dailyAssignmentSchema);
