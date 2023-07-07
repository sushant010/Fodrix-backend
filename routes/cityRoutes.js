const express = require('express');
const cityController = require('../controllers/cityController');

const router = express.Router();

// Route for creating a new city
router.post('/', cityController.createCity);

// Route for retrieving city details
router.get('/:cityName', cityController.getCity);

// Route for updating city details
router.put('/:cityName', cityController.updateCity);

// Route for retrieving all cities
router.get('/', cityController.getAllCities);

module.exports = router;
