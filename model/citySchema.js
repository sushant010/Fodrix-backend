const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: [String],
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  touristSpots: {
    type: [String],
    required: true,
  },
  mapLink: {
    type: String,
    // required: true,
  },
});



const City = mongoose.model('City', citySchema);

module.exports = City;
