const express = require('express');
const router = express.Router();
const { checkAuthenticated } = require('../middleware/auth');

router.get('/admin/dashboard', checkAuthenticated, (req, res) => {
  // Only authenticated users can access this route
  res.send('Welcome to the admin dashboard!');
});

router.get('/admin/view-partners', checkAuthenticated, (req, res) => {
  // Only authenticated users can access this route
  res.send('Welcome to the admin view partners page!');
});

router.get('/admin/view-contacted', checkAuthenticated, (req, res) => {
  // Only authenticated users can access this route
  res.send('Welcome to the admin view contacted page!');
});

router.get('/admin/view-callbacks', checkAuthenticated, (req, res) => {
  // Only authenticated users can access this route
  res.send('Welcome to the admin view callbacks page!');
});

// Add more admin routes as needed

module.exports = router;
