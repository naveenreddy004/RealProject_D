const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  description: { type: String },
  completed:   { type: Boolean, default: false },
  completedAt: { type: Date, default: null },
  required:    { type: Boolean, default: true },
});

const registrationSchema = new mongoose.Schema({
  user:       { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  certId:     { type: String, required: true, unique: true },

  // Internship details
  domain:     { type: String, required: true },
  duration:   { type: String },
  startDate:  { type: Date, required: true },
  endDate:    { type: Date, required: true },
  package:    { type: String, default: 'Certificate Program' },
  amount:     { type: Number, default: 299 },

  // Registrant details — stored at registration time so certificate is always correct
  // even if the same email is used for multiple people
  registrantName:    { type: String, default: null },
  registrantCollege: { type: String, default: null },
  registrantCourse:  { type: String, default: null },

  // Status flow: pending → payment_pending → payment_submitted → payment_verified → active → completed → certificate_sent → rejected
  status: {
    type: String,
    enum: ['pending','payment_pending','payment_submitted','payment_verified','active','completed','certificate_sent','rejected'],
    default: 'pending'
  },

  // Payment
  payment: {
    utrNumber:         { type: String, default: null },
    screenshotPath:    { type: String, default: null },
    submittedAt:       { type: Date, default: null },
    verifiedAt:        { type: Date, default: null },
    verifiedBy:        { type: String, default: null },
    approved:          { type: Boolean, default: false },
    amount:            { type: Number, default: 299 },
    upiId:             { type: String, default: null },
    notes:             { type: String, default: null },
    method:            { type: String, enum: ['upi_manual', 'razorpay', 'cashfree', null], default: null },
    gatewayOrderId:    { type: String, default: null },
    gatewayPaymentId:  { type: String, default: null },
    gatewayProvider:   { type: String, default: null },
  },

  // Tasks
  tasks: { type: [taskSchema], default: [] },
  tasksCompletedCount: { type: Number, default: 0 },

  // Certificate — generated on-demand, not stored in DB
  sentAt:     { type: Date, default: null },
  validityYears: { type: Number, default: () => Number(process.env.CERT_VALIDITY_YEARS) || 2 },
  expiresAt:  { type: Date, default: null },
  revoked:    { type: Boolean, default: false },
  revokedAt:  { type: Date, default: null },
  revokedReason: { type: String, default: null },

  // Portal — tracks whether invite was sent
  portalInviteSent: { type: Boolean, default: false },

}, { timestamps: true });

// Default tasks by domain
registrationSchema.methods.initTasks = function() {
  this.tasks = [
    { title: 'Complete Registration', description: 'Submit your internship application form', completed: true, completedAt: new Date(), required: true },
    { title: 'Make Payment', description: 'Pay the internship fee via UPI and submit UTR', completed: false, required: true },
    { title: 'Login to Portal', description: 'Access your student portal with your credentials', completed: false, required: true },
    { title: 'Complete Internship Tasks', description: `Work through your ${this.domain} internship program`, completed: false, required: true },
    { title: 'Submit Final Project', description: 'Upload or describe your completed project/work', completed: false, required: false },
    { title: 'Receive Certificate', description: 'Get your QR-verified PDF certificate via email', completed: false, required: true },
  ];
};

// ── Indexes for fast lookups ───────────────────────────────────────────────────
registrationSchema.index({ user: 1 });
registrationSchema.index({ 'payment.utrNumber': 1 });
registrationSchema.index({ status: 1 });
// Note: certId index is already created by unique:true in the schema definition above

module.exports = mongoose.model('Registration', registrationSchema);
