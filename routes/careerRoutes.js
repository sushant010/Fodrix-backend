const express = require('express');
const router = express.Router();
const CareerController = require('../controllers/careerController');

router.post('/', CareerController.submitCareerForm);
router.get('/', CareerController.getCareerSubmissions);

module.exports = router;
