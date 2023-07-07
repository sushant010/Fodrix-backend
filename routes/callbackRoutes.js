// callbackRoutes.js

const express = require('express');
const router = express.Router();
const callbackController = require('../controllers/callbackController');

router.post("/", callbackController.addCallback);
router.get("/", callbackController.getCallbacks);

module.exports = router;
