// routes/transactions.js
const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionsController');

// Route to get all transactions
router.get('/all', transactionController.getAllTransactions);

// Route to get transactions for a specific user
router.get('/user/:userId', transactionController.getUserTransactions);


module.exports = router;
