const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  titleContent: { type: String },
  titleImage: { type: String },
  // author: {
  //   name: { type: String, required: true },
  //   image: { type: String }, // URL to author's image
  // },
  authorName:{ type: String, required: true},
  authorImage: { type: String},
  sections: [
    {
      heading: { type: String, },
      paragraphs: [{ type: String,}],
      images: [{ type: String }], // Array of image URLs for this section
    },
  ],
  
  category: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', postSchema);
