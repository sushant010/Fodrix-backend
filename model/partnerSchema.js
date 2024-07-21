const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  category: { type: String, required: true },
  category2: { type: String },
  businessName: { type: String, required: true },
  whyFodrix: { type: String, required: true },
  howFodrix: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Partner', partnerSchema);
