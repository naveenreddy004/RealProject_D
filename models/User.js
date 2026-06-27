const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
  fullName:     { type: String, required: true, trim: true },
  email:        { type: String, required: true, unique: true, lowercase: true, trim: true },
  password:     { type: String, default: null }, // set after first OTP login
  gender:       { type: String, enum: ['Male','Female','Other',''], default: '' },
  mobile:       { type: String },
  college:      { type: String },
  course:       { type: String },
  location:     { type: String },
  profilePhoto: { type: String, default: null },

  // OTP for first-time / forgot password
  otp:          { type: String, default: null },
  otpExpiresAt: { type: Date, default: null },
  otpVerified:  { type: Boolean, default: false },

  // Portal invite tracking
  portalInviteSent: { type: Boolean, default: false },

  isActive:     { type: Boolean, default: true },
  isAdmin:      { type: Boolean, default: false },
  lastLogin:    { type: Date, default: null },
}, { timestamps: true });

// Hash password before save
userSchema.pre('save', async function(next) {
  if (!this.isModified('password') || !this.password) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Compare password
userSchema.methods.comparePassword = async function(candidate) {
  if (!this.password) return false;
  return bcrypt.compare(candidate, this.password);
};

// Generate OTP — uses crypto.randomInt (CSPRNG, not Math.random)
userSchema.methods.generateOTP = function() {
  const otp = crypto.randomInt(100000, 1000000).toString();
  this.otp = otp;
  this.otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 min
  return otp;
};

// Verify OTP
userSchema.methods.verifyOTP = function(inputOtp) {
  if (!this.otp || !this.otpExpiresAt) return { valid: false, reason: 'No OTP found' };
  if (Date.now() > this.otpExpiresAt.getTime()) return { valid: false, reason: 'OTP expired' };
  if (this.otp !== inputOtp) return { valid: false, reason: 'Invalid OTP' };
  this.otp = null;
  this.otpExpiresAt = null;
  return { valid: true };
};

module.exports = mongoose.model('User', userSchema);
