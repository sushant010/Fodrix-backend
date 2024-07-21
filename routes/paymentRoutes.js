// paymentRoute.js

const express = require("express");
const paymentController = require("../controllers/paymentController");

const router = express.Router();

// Define routes for creating an order and verifying payment
router.post("/orders", paymentController.createOrder);
router.post("/verify", paymentController.verifyPayment);

module.exports = router;
