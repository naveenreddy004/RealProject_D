const mongoose = require('mongoose');

/**
 * CourseContent — stores the full interactive course data for each domain.
 * One document per domain. Replaces the static JS data files.
 */
const courseContentSchema = new mongoose.Schema({
  domain:      { type: String, required: true, unique: true },
  slug:        { type: String, required: true, unique: true },
  title:       { type: String, required: true },
  totalWeeks:  { type: Number, default: 9 },
  weeks:       { type: mongoose.Schema.Types.Mixed, required: true },
}, { timestamps: true });

module.exports = mongoose.model('CourseContent', courseContentSchema);
