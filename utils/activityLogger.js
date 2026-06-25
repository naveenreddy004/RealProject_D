const ActivityLog = require('../models/ActivityLog');

async function logActivity({ action, targetType, targetId, targetLabel, details, req }) {
  try {
    await ActivityLog.create({
      action,
      adminLabel: req?.admin?.email || req?.admin?.fullName || 'Admin',
      targetType: targetType || 'registration',
      targetId: targetId || null,
      targetLabel: targetLabel || null,
      details: details || {},
      ip: req?.ip || req?.headers?.['x-forwarded-for'] || null,
    });
  } catch (err) {
    console.error('Activity log error:', err.message);
  }
}

module.exports = { logActivity };
