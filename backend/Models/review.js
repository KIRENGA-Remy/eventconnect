const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  username: { type: String, required: true },
  comment: { type: String, required: true },
  date: { type: Date, required: false, default: Date.now },
  userprofile: { type: String, required: false },
});

module.exports  = mongoose.model('Review', reviewSchema);
