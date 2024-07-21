const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');

// GET media links for a specific category and media type
router.get('/:category/media', portfolioController.getMediaLinks);

// POST media links for a specific category and media type
router.post('/:category/add', portfolioController.addMediaLink);

// DELETE media link for a specific category and media type
router.delete('/:category/delete', portfolioController.deleteMediaLink);

module.exports = router;