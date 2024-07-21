const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String},
  resumeLink: { type: String, required: true } ,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Career = mongoose.model('Career', careerSchema);

module.exports = Career;
