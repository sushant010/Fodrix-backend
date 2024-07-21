const Payment = require('../model/razorpayPayment');

exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Payment.find();
    console.log('All Transactions:', transactions);
    res.json(transactions);
  } catch (error) {
    console.error('Error fetching transactions:', error.message);
    res.status(500).json({ message: 'Error fetching transactions', error: error.message });
  }
};

exports.getUserTransactions = async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log('Requested User ID:', userId);
    const transactions = await Payment.find({ userId: userId }).populate('userId');
    console.log('User Transactions:', transactions);
    res.json(transactions);
  } catch (error) {
    console.error('Error fetching user transactions:', error.message);
    res.status(500).json({ message: 'Error fetching transactions', error: error.message });
  }
};
