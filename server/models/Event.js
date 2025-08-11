const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  content: {
    type: String
  },
  date: {
    type: Date,
    required: [true, 'Event date is required']
  },
  time: {
    type: String,
    required: [true, 'Event time is required']
  },
  endDate: {
    type: Date
  },
  endTime: {
    type: String
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    trim: true
  },
  venue: {
    name: String,
    address: {
      street: String,
      city: String,
      state: String,
      country: String,
      zipCode: String
    },
    coordinates: {
      latitude: Number,
      longitude: Number
    }
  },
  eventType: {
    type: String,
    enum: ['workshop', 'seminar', 'conference', 'webinar', 'training', 'networking', 'other'],
    default: 'other'
  },
  category: {
    type: String,
    enum: ['Health', 'Nutrition', 'Technology', 'Business', 'Research', 'Training', 'Other'],
    default: 'Other'
  },
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  speakers: [{
    name: {
      type: String,
      required: true
    },
    title: String,
    organization: String,
    bio: String,
    image: String
  }],
  maxAttendees: {
    type: Number,
    min: [1, 'Maximum attendees must be at least 1']
  },
  registrationDeadline: {
    type: Date
  },
  registrationFee: {
    type: Number,
    default: 0,
    min: [0, 'Registration fee cannot be negative']
  },
  currency: {
    type: String,
    default: 'USD'
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'cancelled', 'completed'],
    default: 'draft'
  },
  featuredImage: String,
  attachments: [{
    name: String,
    url: String,
    type: String
  }],
  tags: [{
    type: String,
    trim: true
  }],
  registrations: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    registeredAt: {
      type: Date,
      default: Date.now
    },
    status: {
      type: String,
      enum: ['registered', 'attended', 'cancelled'],
      default: 'registered'
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'paid', 'refunded'],
      default: 'pending'
    }
  }],
  isVirtual: {
    type: Boolean,
    default: false
  },
  virtualLink: String,
  virtualPlatform: String
}, {
  timestamps: true
});

// Indexes
eventSchema.index({ date: 1 });
eventSchema.index({ category: 1 });
eventSchema.index({ status: 1 });
eventSchema.index({ organizer: 1 });
eventSchema.index({ 'registrations.user': 1 });

// Virtual for registration count
eventSchema.virtual('registrationCount').get(function() {
  return this.registrations.filter(reg => reg.status === 'registered').length;
});

// Virtual for available spots
eventSchema.virtual('availableSpots').get(function() {
  if (!this.maxAttendees) return null;
  return this.maxAttendees - this.registrationCount;
});

// Check if registration is open
eventSchema.virtual('isRegistrationOpen').get(function() {
  const now = new Date();
  const registrationOpen = !this.registrationDeadline || now <= this.registrationDeadline;
  const spotsAvailable = !this.maxAttendees || this.registrationCount < this.maxAttendees;
  return this.status === 'published' && registrationOpen && spotsAvailable;
});

module.exports = mongoose.model('Event', eventSchema);