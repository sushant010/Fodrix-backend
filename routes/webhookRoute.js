const express = require('express');
const router = express.Router();
const webhookController = require('../controllers/webhookController');

// Handle the Razorpay webhook callback
router.post('/razorpay', webhookController.handleRazorpayWebhook);

module.exports = router;
