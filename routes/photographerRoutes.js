const express = require('express');
const router = express.Router();
const photographerController = require('../controllers/photographerController');

// Define routes
router.post('/', photographerController.createPhotographer);
router.get('/', photographerController.getPhotographers);
router.put('/:id', photographerController.updatePhotographer); // New PUT route
router.delete('/:id', photographerController.deletePhotographer);
router.get('/city/:city', photographerController.getPhotographersByCity);


module.exports = router;
