const express = require('express');
const { body, validationResult } = require('express-validator');
const Subscription = require('../models/Subscription');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// @desc    Subscribe to newsletter
// @route   POST /api/subscriptions
// @access  Public
router.post('/', [
  body('email').isEmail().normalizeEmail().withMessage('Please enter a valid email')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email',
        errors: errors.array()
      });
    }

    const { email } = req.body;

    // Check if already subscribed
    let subscription = await Subscription.findOne({ email });

    if (subscription) {
      if (subscription.status === 'active') {
        return res.status(400).json({
          success: false,
          message: 'Email is already subscribed'
        });
      } else {
        // Reactivate subscription
        subscription.status = 'active';
        subscription.unsubscribedAt = undefined;
        subscription.unsubscribeToken = undefined;
        await subscription.save();

        return res.json({
          success: true,
          message: 'Subscription reactivated successfully'
        });
      }
    }

    // Create new subscription
    subscription = await Subscription.create({
      email,
      source: req.body.source || 'website'
    });

    res.status(201).json({
      success: true,
      message: 'Subscribed successfully',
      data: { subscription }
    });
  } catch (error) {
    console.error('Subscribe error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Get all subscriptions (admin only)
// @route   GET /api/subscriptions
// @access  Private/Admin
router.get('/', protect, authorize('admin'), async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const { status = 'active' } = req.query;

    const subscriptions = await Subscription.find({ status })
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    const total = await Subscription.countDocuments({ status });

    res.json({
      success: true,
      data: {
        subscriptions,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        }
      }
    });
  } catch (error) {
    console.error('Get subscriptions error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Unsubscribe from newsletter
// @route   POST /api/subscriptions/unsubscribe
// @access  Public
router.post('/unsubscribe', [
  body('email').isEmail().normalizeEmail().withMessage('Please enter a valid email')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email',
        errors: errors.array()
      });
    }

    const { email } = req.body;

    const subscription = await Subscription.findOne({ email, status: 'active' });

    if (!subscription) {
      return res.status(404).json({
        success: false,
        message: 'Subscription not found'
      });
    }

    subscription.status = 'unsubscribed';
    subscription.unsubscribedAt = new Date();
    await subscription.save();

    res.json({
      success: true,
      message: 'Unsubscribed successfully'
    });
  } catch (error) {
    console.error('Unsubscribe error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Update subscription preferences
// @route   PUT /api/subscriptions/:id
// @access  Private/Admin
router.put('/:id', protect, authorize('admin'), async (req, res) => {
  try {
    const subscription = await Subscription.findByIdAndUpdate(
      req.params.id,
      { preferences: req.body.preferences },
      { new: true, runValidators: true }
    );

    if (!subscription) {
      return res.status(404).json({
        success: false,
        message: 'Subscription not found'
      });
    }

    res.json({
      success: true,
      message: 'Subscription preferences updated',
      data: { subscription }
    });
  } catch (error) {
    console.error('Update subscription error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

module.exports = router;