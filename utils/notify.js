const Notification = require('../models/Notification');

/**
 * Push a notification to a user. Fire-and-forget — never blocks the caller.
 * @param {ObjectId|string} userId
 * @param {object} opts  { type, title, message, regId? }
 */
function pushNotification(userId, { type = 'info', title, message, regId = null }) {
  setImmediate(async () => {
    try {
      await Notification.create({ user: userId, type, title, message, regId });
    } catch (e) {
      console.error('Notification push error:', e.message);
    }
  });
}

module.exports = { pushNotification };
