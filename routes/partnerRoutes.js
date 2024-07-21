const express = require('express');
const router = express.Router();
const partnerController = require('../controllers/partnerController');

router.post('/addPartner', partnerController.addPartner);
router.get('/getAllPartners', partnerController.getAllPartners);

module.exports = router;
