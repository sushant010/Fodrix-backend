const mongoose = require('mongoose');

const razorpayPaymentSchema = new mongoose.Schema({
 userId: String,
  order_id: String,
  payment_id: String,
  firstName: String,
  lastName: String,
  email: String,
  mobileNumber: String,
  amount: {
    type: Number,
  },
  city: {
    type: String, 
  },
  service: {
    type: String, 
  },
  date: {
    type: String, 
  },
  time: {
    type: String, 
  },
  bookedPackage: {
    type: String, 
  },
  comment: {
    type: String, 
  },
  coupon: {
    type: String, 
  },
  currency: String,
  timestamp: { type: Date, default: Date.now }, 
});

const RazorpayPayment = mongoose.model('RazorpayPayment', razorpayPaymentSchema);

module.exports = RazorpayPayment;
