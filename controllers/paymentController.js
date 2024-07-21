// paymentController.js
const RazorpayPayment = require("../model/razorpayPayment");
const Razorpay = require("razorpay");
const crypto = require("crypto");


const razorpayInstance = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET,
});

const createOrder = async (req, res) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: req.body.amount * 100,
      currency: "INR",
      receipt: crypto.randomBytes(10).toString("hex"),
    };

    razorpayInstance.orders.create(options, (error, order) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Something Went Wrong!" });
      }
      res.status(200).json({ data: order });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

const verifyPayment = async (req, res) => {
  try {
    console.log("pay 37", req.body);
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, prefill } = req.body;
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.KEY_SECRET)
      .update(sign)
      .digest("hex");

    console.log("Expected Sign:", expectedSign);
    console.log("Received Signature:", razorpay_signature);

    if (razorpay_signature === expectedSign) {
      // Payment signature is valid
      console.log("line 44",req.body);
      const paymentData = {
        order_id: razorpay_order_id,
        payment_id: razorpay_payment_id,
        // amount: req.body.amount / 100, 
        // currency: req.body.currency,
     
        userId: prefill.userId,
        firstName: prefill.firstName,
        lastName: prefill.lastName,
        email: prefill.email,
        mobileNumber: prefill.mobileNumber,
        city: prefill.city,
        service: prefill.service,
        date: prefill.date,
        time: prefill.time,
        bookedPackage: prefill.bookedPackage,
        comment: prefill.comment,
        coupon: prefill.coupon,
      };

      console.log("Payment Data:", paymentData);

      // Create a new RazorpayPayment document and save it to the database
      const newPayment = new RazorpayPayment(paymentData);
      console.log("New Payment Document:", newPayment);
      await newPayment.save();

      return res.status(200).json({ message: "Payment verified and saved successfully" });
    } else {
      // Invalid payment signature
      console.error("Invalid payment signature:", expectedSign, razorpay_signature);
      return res.status(400).json({ message: "Invalid signature sent!" });
    }
    
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};



module.exports = {
  createOrder,
  verifyPayment,
};
