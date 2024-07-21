const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const bcrypt = require('bcrypt');
const User = require('../model/User'); // Assuming your User model is in this path

// Get user profile
router.get('/', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId; // Use the userId directly from the token
    console.log('Decoded userId:', userId);

    const user = await User.findById(userId).select('-password -otp -isOTPVerified -__v');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// Update user profile
router.put('/', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId; // Use the userId directly from the token
    console.log('Decoded userId:', userId);

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user data
    for (const key in req.body) {
      if (key in user) {
        user[key] = req.body[key];
      }
    }

    await user.save(); // Save the updated user document

    res.json({ message: 'User data updated successfully' });
  } catch (error) {
    console.error('Error updating user data:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

router.get('/all', async (req, res) => {
  try {
      const users = await User.find().select('-password -otp -isOTPVerified -__v');
      res.json(users);
  } catch (error) {
      console.error('Error fetching all user profiles:', error);
      res.status(500).json({ message: 'Internal server error.' });
  }
});

module.exports = router;
