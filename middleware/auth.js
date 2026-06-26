const jwt = require('jsonwebtoken');               // ⬅ FIX: was missing
const User = require('../models/User');

// ── Generate a JWT (used by routes/auth.js for student & admin login) ─────────
function generateToken(userId, extra = {}) {
  return jwt.sign(
    { id: String(userId), ...extra },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  );
}

// ── Extract token from request (header / cookie / x-auth-token) ───────────────
function extractToken(req) {
  return (
    req.headers.authorization?.split(' ')[1] ||
    req.cookies?.token ||
    req.headers['x-auth-token'] ||
    null
  );
}

// ── Student / regular user auth ───────────────────────────────────────────────
const authStudent = async (req, res, next) => {
  try {
    const token = extractToken(req);
    if (!token) {
      return res.status(401).json({ success: false, message: 'No token. Please login.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');
    if (!user) {
      return res.status(401).json({ success: false, message: 'User not found.' });
    }
    if (user.isActive === false) {
      return res.status(403).json({ success: false, message: 'Account is disabled.' });
    }

    req.user = user;
    next();
  } catch (err) {
    console.error('authStudent error:', err.message);
    return res.status(401).json({ success: false, message: 'Invalid or expired token.' });
  }
};

// ── Admin auth ────────────────────────────────────────────────────────────────
const authAdmin = async (req, res, next) => {
  try {
    const token = extractToken(req);
    if (!token) {
      return res.status(401).json({ success: false, message: 'No token. Please login.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded.isAdmin) {
      return res.status(403).json({ success: false, message: 'Admin access required.' });
    }

    // Always verify against DB so revoked admins can't use old tokens
    if (decoded.id && decoded.id !== 'admin') {
      const user = await User.findById(decoded.id).select('-password');
      if (!user || !user.isAdmin || !user.isActive) {
        return res.status(403).json({ success: false, message: 'Admin access revoked or account disabled.' });
      }
      req.admin = { id: user._id, email: user.email, fullName: user.fullName };
    } else {
      req.admin = { id: 'admin', email: process.env.ADMIN_EMAIL };
    }

    next();
  } catch (err) {
    console.error('authAdmin error:', err.message);
    return res.status(401).json({ success: false, message: 'Invalid or expired token.' });
  }
};

module.exports = { generateToken, authStudent, authAdmin };