const crypto = require('crypto');
const Razorpay = require('razorpay');
require('dotenv').config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Controller to handle Razorpay webhook callback
const handleRazorpayWebhook = (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

  // Verify the payment signature
  const generatedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest('hex');

  if (generatedSignature !== razorpay_signature) {
    return res.status(400).json({ error: 'Invalid signature' });
  }

  // Payment signature is valid, process the webhook callback
  // Update your database with payment details and mark payment as successful
  // ...

  res.json({ message: 'Webhook received and processed successfully' });
};

module.exports = {
  handleRazorpayWebhook,
};
