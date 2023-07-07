const mongoose = require('mongoose');

const callbackSchema = new mongoose.Schema({
  // Define your schema fields here
  firstName: String,
  lastName: String,
  email: String,
  mobile: String,
  typeOfPhotoshoot: String,
  city: String,
  comments: String
});

const Callback = mongoose.model('Callback', callbackSchema);

module.exports = Callback;
