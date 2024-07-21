// routes/auth.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser, verifyOTP, forgotPassword, resetPassword, resendOTP } = require('../controllers/auth');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/verify-otp', verifyOTP);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword); // New route for reset password
router.post('/resend-otp', resendOTP);


module.exports = router;
