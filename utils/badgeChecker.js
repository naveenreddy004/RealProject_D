/**
 * badgeChecker.js
 *
 * Call checkAndAwardBadges(userId) at any point where student progress changes.
 * It computes which badges are now earned, compares against already-notified ones,
 * and fires an in-portal notification for each newly unlocked badge.
 *
 * Idempotent — safe to call repeatedly; each badge notification fires only once.
 */

const Registration       = require('../models/Registration');
const Attendance         = require('../models/Attendance');
const LearningLog        = require('../models/LearningLog');
const AssignmentProgress = require('../models/AssignmentProgress');
const Notification       = require('../models/Notification');

// Badge definitions — must match the ones in routes/student.js
const BADGE_META = {
  first_topic:       { icon: '📖', name: 'First Steps',          msg: 'You passed 5 topic quizzes! The "First Steps" badge is yours.' },
  week1_done:        { icon: '🏁', name: 'Week 1 Finisher',      msg: 'Week 1 project submitted! You earned the "Week 1 Finisher" badge.' },
  halfway:           { icon: '⚡', name: 'Halfway There',         msg: 'You completed 5 weeks! You\'re officially halfway through the program. 🎉' },
  quiz_crusher:      { icon: '🎯', name: 'Quiz Crusher',          msg: 'All 9 weekly quizzes passed! The "Quiz Crusher" badge is unlocked.' },
  consistent:        { icon: '🔥', name: 'Consistent Learner',    msg: '21 days of opening your course! You\'ve earned the "Consistent Learner" badge. Keep it up!' },
  journal:           { icon: '✏️', name: 'Journal Writer',        msg: '15 daily log entries written! The "Journal Writer" badge is yours.' },
  problem_solver:    { icon: '💻', name: 'Problem Solver',        msg: '30 LeetCode problems done! The "Problem Solver" badge is unlocked.' },
  course_complete:   { icon: '🏆', name: 'Course Complete',       msg: 'You completed all 9 weeks of the program! 🏆 The "Course Complete" badge is yours.' },
  fast_finisher:     { icon: '🚀', name: 'Fast Finisher',         msg: 'You finished the program ahead of schedule! Rare "Fast Finisher" badge unlocked. 🚀' },
  assignment_master: { icon: '🏅', name: 'Assignment Master',     msg: 'All 90 LeetCode problems completed across 45 days! "Assignment Master" badge unlocked. 🏅' },
  certified:         { icon: '🎓', name: 'Certified',             msg: 'Your certificate has been issued! The "Certified" badge is now on your profile.' },
};

/**
 * Compute which badges are currently earned for a user.
 * Returns an array of badge IDs that are earned.
 */
async function computeEarnedBadges(userId) {
  const regs = await Registration.find({ user: userId }).sort({ createdAt: 1 });
  if (!regs.length) return [];

  // Course progress
  const allCP = {};
  regs.forEach(r => {
    const cp = r.courseProgress || {};
    Object.entries(cp).forEach(([wid, wdata]) => {
      allCP[parseInt(wid)] = wdata;
    });
  });

  const completedWeeks = Object.values(allCP).filter(w => w && w.projectDone).length;
  const allTopicsDone  = Object.values(allCP).reduce((s, w) =>
    s + Object.values(w?.topicStatus || {}).filter(st => st === 'completed').length, 0);
  const allQuizzesDone = Object.values(allCP).filter(w => w && w.weekQuizDone).length;

  // Attendance
  const totalAtt  = await Attendance.countDocuments({ user: userId });

  // Logs
  const totalLogs = await LearningLog.countDocuments({ user: userId });

  // Assignment progress
  let totalProbs = 0;
  for (const reg of regs) {
    const ap = await AssignmentProgress.findOne({ user: userId, domain: reg.domain });
    if (ap) totalProbs = Math.max(totalProbs, Object.keys(ap.completed || {}).length);
  }

  // Registration flags
  const anyCert  = regs.some(r => r.status === 'certificate_sent');
  const fastReg  = regs.find(r =>
    ['completed','certificate_sent'].includes(r.status) &&
    r.endDate && r.updatedAt && new Date(r.updatedAt) < new Date(r.endDate)
  );

  const earned = [];
  if (allTopicsDone >= 5)   earned.push('first_topic');
  if (completedWeeks >= 1)  earned.push('week1_done');
  if (completedWeeks >= 5)  earned.push('halfway');
  if (allQuizzesDone >= 9)  earned.push('quiz_crusher');
  if (totalAtt >= 21)       earned.push('consistent');
  if (totalLogs >= 15)      earned.push('journal');
  if (totalProbs >= 30)     earned.push('problem_solver');
  if (completedWeeks >= 9)  earned.push('course_complete');
  if (fastReg)              earned.push('fast_finisher');
  if (totalProbs >= 90)     earned.push('assignment_master');
  if (anyCert)              earned.push('certified');

  return earned;
}

/**
 * Check which badges are newly earned and fire notifications for them.
 * Call this after any progress-changing action.
 */
async function checkAndAwardBadges(userId) {
  try {
    const earned = await computeEarnedBadges(userId);
    if (!earned.length) return;

    // Find already-notified badge IDs for this user
    const existing = await Notification.find({
      user: userId,
      title: { $regex: /^🏅 Badge Unlocked/ },
    }).select('title').lean();

    const alreadyNotified = new Set(
      existing.map(n => {
        // Extract badge ID from title like "🏅 Badge Unlocked: First Steps"
        const match = n.title.match(/Badge Unlocked: (.+)$/);
        if (!match) return null;
        // Find badge ID by name
        const entry = Object.entries(BADGE_META).find(([, v]) => v.name === match[1]);
        return entry ? entry[0] : null;
      }).filter(Boolean)
    );

    // Fire notifications for newly earned badges
    const newBadges = earned.filter(id => !alreadyNotified.has(id));
    if (!newBadges.length) return;

    const notifications = newBadges.map(id => {
      const meta = BADGE_META[id];
      if (!meta) return null;
      return {
        user: userId,
        type: 'success',
        title: `🏅 Badge Unlocked: ${meta.name}`,
        message: meta.msg,
      };
    }).filter(Boolean);

    if (notifications.length) {
      await Notification.insertMany(notifications);
    }
  } catch (e) {
    // Never crash the calling request
    console.error('badgeChecker error:', e.message);
  }
}

module.exports = { checkAndAwardBadges };
