const mongoose = require('mongoose');

const supportTicketSchema = new mongoose.Schema({
  ticketId:   { type: String, required: true, unique: true },   // TKT-XXXXXX
  user:       { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  reg:        { type: mongoose.Schema.Types.ObjectId, ref: 'Registration', default: null },

  subject:    { type: String, required: true, trim: true },
  message:    { type: String, required: true, trim: true },
  category:   { type: String, default: 'General' },
  priority:   { type: String, enum: ['Low', 'Normal', 'High', 'Urgent'], default: 'Normal' },

  // Status flow: open → in_progress → resolved → closed
  status:     { type: String, enum: ['open', 'in_progress', 'resolved', 'closed'], default: 'open' },

  // SLA: 12 hours from createdAt
  slaDeadline: { type: Date, default: null },
  slaBroken:   { type: Boolean, default: false },

  // Admin resolution
  resolvedAt:  { type: Date, default: null },
  resolvedBy:  { type: String, default: null },         // admin label/email
  resolution:  { type: String, default: null },         // admin's reply/note

  // Email tracking
  studentEmail: { type: String, default: null },        // snapshot at creation
  studentName:  { type: String, default: null },

}, { timestamps: true });

supportTicketSchema.index({ user: 1, createdAt: -1 });
supportTicketSchema.index({ status: 1, createdAt: -1 });
supportTicketSchema.index({ ticketId: 1 });
supportTicketSchema.index({ priority: 1, status: 1 });

module.exports = mongoose.model('SupportTicket', supportTicketSchema);
