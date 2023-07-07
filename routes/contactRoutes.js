const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Route for handling the contact form submission
router.post('/', contactController.submitContactForm);

// Route for retrieving all contact submissions
router.get('/', contactController.getAllContactSubmissions);

module.exports = router;
