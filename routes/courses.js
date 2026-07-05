const express = require('express');
const router = express.Router();
const { authStudent } = require('../middleware/auth');
const { getCurriculum, CURRICULA } = require('../utils/curricula');
const CourseContent = require('../models/CourseContent');
const Registration  = require('../models/Registration');

// List all available curricula — public (used by register page domain picker)
router.get('/available', (req, res) => {
  res.json({ success: true, available: Object.keys(CURRICULA) });
});

// ── GET INTERACTIVE COURSE CONTENT (weeks, topics, quizzes, projects) ─────────
// Returns the full week data from MongoDB. Requires active complete-bundle registration.
router.get('/content/:slug', authStudent, async (req, res) => {
  try {
    const { slug } = req.params;

    // Verify the student has an active registration for this course
    const courseMap = {
      'java-full-stack': 'Java Full Stack Developer',
    };
    const domain = courseMap[slug] || decodeURIComponent(slug);

    const reg = await Registration.findOne({
      user: req.user._id,
      domain,
      status: { $in: ['payment_verified','active','completed','certificate_sent'] },
    });

    if (!reg) {
      return res.status(403).json({ success: false, message: 'No active registration for this course.' });
    }

    // Verify complete bundle
    const isComplete = (reg.package && /complete/i.test(reg.package)) || Number(reg.amount) >= 1099;
    if (!isComplete) {
      return res.status(403).json({ success: false, message: 'Complete Bundle required to access course content.' });
    }

    const content = await CourseContent.findOne({ slug }).lean();
    if (!content) {
      return res.status(404).json({ success: false, message: 'Course content not found.' });
    }

    res.json({
      success: true,
      domain:     content.domain,
      title:      content.title,
      totalWeeks: content.totalWeeks,
      weeks:      content.weeks,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Could not load course content.' });
  }
});

// Fetch full curriculum — requires login (protects content from scraping)
router.get('/:domain', authStudent, (req, res) => {
  const domain = decodeURIComponent(req.params.domain || '');
  const data = getCurriculum(domain);
  res.json({ success: true, curriculum: data });
});

module.exports = router;
