const express = require('express');
const { body, validationResult } = require('express-validator');
const News = require('../models/News');
const { protect, optionalAuth } = require('../middleware/auth');

const router = express.Router();

// @desc    Get all news
// @route   GET /api/news
// @access  Public
router.get('/', optionalAuth, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    const { category, search, status = 'published' } = req.query;

    // Build query
    const query = { status };
    
    if (category && category !== 'all') {
      query.category = category;
    }
    
    if (search) {
      query.$text = { $search: search };
    }

    const news = await News.find(query)
      .populate('author', 'firstName lastName')
      .skip(skip)
      .limit(limit)
      .sort({ publishedAt: -1, createdAt: -1 });

    const total = await News.countDocuments(query);

    res.json({
      success: true,
      data: {
        news,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        }
      }
    });
  } catch (error) {
    console.error('Get news error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Get single news article
// @route   GET /api/news/:id
// @access  Public
router.get('/:id', optionalAuth, async (req, res) => {
  try {
    const news = await News.findById(req.params.id)
      .populate('author', 'firstName lastName')
      .populate('comments.user', 'firstName lastName');

    if (!news) {
      return res.status(404).json({
        success: false,
        message: 'News article not found'
      });
    }

    // Increment views
    news.views += 1;
    await news.save();

    res.json({
      success: true,
      data: { news }
    });
  } catch (error) {
    console.error('Get news by ID error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Create news article
// @route   POST /api/news
// @access  Private
router.post('/', protect, [
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('excerpt').trim().notEmpty().withMessage('Excerpt is required'),
  body('content').trim().notEmpty().withMessage('Content is required'),
  body('category').isIn(['Research', 'Event', 'Industry', 'Technology', 'Health', 'Nutrition', 'Other']).withMessage('Invalid category')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const newsData = {
      ...req.body,
      author: req.user.id
    };

    const news = await News.create(newsData);
    await news.populate('author', 'firstName lastName');

    res.status(201).json({
      success: true,
      message: 'News article created successfully',
      data: { news }
    });
  } catch (error) {
    console.error('Create news error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Update news article
// @route   PUT /api/news/:id
// @access  Private
router.put('/:id', protect, async (req, res) => {
  try {
    let news = await News.findById(req.params.id);

    if (!news) {
      return res.status(404).json({
        success: false,
        message: 'News article not found'
      });
    }

    // Check if user owns the news or is admin
    if (news.author.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this news article'
      });
    }

    news = await News.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('author', 'firstName lastName');

    res.json({
      success: true,
      message: 'News article updated successfully',
      data: { news }
    });
  } catch (error) {
    console.error('Update news error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Delete news article
// @route   DELETE /api/news/:id
// @access  Private
router.delete('/:id', protect, async (req, res) => {
  try {
    const news = await News.findById(req.params.id);

    if (!news) {
      return res.status(404).json({
        success: false,
        message: 'News article not found'
      });
    }

    // Check if user owns the news or is admin
    if (news.author.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to delete this news article'
      });
    }

    await News.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: 'News article deleted successfully'
    });
  } catch (error) {
    console.error('Delete news error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Like/Unlike news article
// @route   POST /api/news/:id/like
// @access  Private
router.post('/:id/like', protect, async (req, res) => {
  try {
    const news = await News.findById(req.params.id);

    if (!news) {
      return res.status(404).json({
        success: false,
        message: 'News article not found'
      });
    }

    const existingLike = news.likes.find(like => like.user.toString() === req.user.id);

    if (existingLike) {
      // Unlike
      news.likes = news.likes.filter(like => like.user.toString() !== req.user.id);
    } else {
      // Like
      news.likes.push({ user: req.user.id });
    }

    await news.save();

    res.json({
      success: true,
      message: existingLike ? 'News article unliked' : 'News article liked',
      data: { 
        liked: !existingLike,
        likeCount: news.likes.length 
      }
    });
  } catch (error) {
    console.error('Like news error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Add comment to news article
// @route   POST /api/news/:id/comments
// @access  Private
router.post('/:id/comments', protect, [
  body('content').trim().notEmpty().withMessage('Comment content is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const news = await News.findById(req.params.id);

    if (!news) {
      return res.status(404).json({
        success: false,
        message: 'News article not found'
      });
    }

    const comment = {
      user: req.user.id,
      content: req.body.content
    };

    news.comments.push(comment);
    await news.save();

    await news.populate('comments.user', 'firstName lastName');

    res.status(201).json({
      success: true,
      message: 'Comment added successfully',
      data: { 
        comment: news.comments[news.comments.length - 1]
      }
    });
  } catch (error) {
    console.error('Add comment error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

module.exports = router;