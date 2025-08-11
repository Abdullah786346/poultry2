const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please enter a valid email'
    ]
  },
  status: {
    type: String,
    enum: ['active', 'unsubscribed'],
    default: 'active'
  },
  preferences: {
    newsletter: {
      type: Boolean,
      default: true
    },
    eventNotifications: {
      type: Boolean,
      default: true
    },
    researchUpdates: {
      type: Boolean,
      default: true
    }
  },
  source: {
    type: String,
    enum: ['website', 'event', 'referral', 'social', 'other'],
    default: 'website'
  },
  unsubscribeToken: String,
  unsubscribedAt: Date
}, {
  timestamps: true
});

// Index for email lookups
subscriptionSchema.index({ email: 1 });
subscriptionSchema.index({ status: 1 });

module.exports = mongoose.model('Subscription', subscriptionSchema);