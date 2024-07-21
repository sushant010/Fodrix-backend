const mongoose = require('mongoose');

const photographerSchema = new mongoose.Schema({
  coverPhotoLinks: [{ type: String, required: true }], 
  firstName: { type: String },
  lastName: { type: String },
  bio: { type: String },
  profilePhotoLink: { type: String, required: true },
  city: { type: String, required: true },
});

const Photographer = mongoose.model('Photographer', photographerSchema);

module.exports = Photographer;
