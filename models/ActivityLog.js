const mongoose = require('mongoose');

const activityLogSchema = new mongoose.Schema({
  action:      { type: String, required: true },
  adminLabel:  { type: String, default: 'Admin' },
  targetType:  { type: String, default: 'registration' },
  targetId:    { type: mongoose.Schema.Types.ObjectId, default: null },
  targetLabel: { type: String, default: null },
  details:     { type: mongoose.Schema.Types.Mixed, default: {} },
  ip:          { type: String, default: null },
}, { timestamps: true });

activityLogSchema.index({ createdAt: -1 });
activityLogSchema.index({ action: 1 });

module.exports = mongoose.model('ActivityLog', activityLogSchema);
