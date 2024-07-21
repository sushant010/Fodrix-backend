// models/payment.js

const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: 'pending',
  },
  // Add other fields you may need
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);
