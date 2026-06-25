const express = require('express');
const router = express.Router();
const { authStudent } = require('../middleware/auth');
const { getCurriculum, CURRICULA } = require('../utils/curricula');

// List all available curricula — public (used by register page domain picker)
router.get('/available', (req, res) => {
  res.json({ success: true, available: Object.keys(CURRICULA) });
});

// Fetch full curriculum — requires login (protects content from scraping)
router.get('/:domain', authStudent, (req, res) => {
  const domain = decodeURIComponent(req.params.domain || '');
  const data = getCurriculum(domain);
  res.json({ success: true, curriculum: data });
});

module.exports = router;
