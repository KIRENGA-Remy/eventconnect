// const mongoose = require('mongoose');

// const reviewSchema = new mongoose.Schema({
//   username: { type: String, required: true },
//   comment: { type: String, required: true },
//   date: { type: Date, required: false, default: Date.now },
//   userprofile: { type: String, required: false },
// });

// module.exports  = mongoose.model('Review', reviewSchema);





const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    eventId: {
      type: mongoose.Types.ObjectId,
      ref: "Event",
    },
    username: {
      type: String,
      required: true,
    },
    date: { 
      type: Date, 
      required: false, 
      default: Date.now 
    },
    reviewText: {
      type: String,
      required: true,
    },
    userprofile:  {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);