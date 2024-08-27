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
      default: 0
    },    
  },
  { timestamps: true }
);

const eventSchema = new mongoose.Schema({
  eventname: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  startTime: { type: String, required: true }, // Changed from 'time' to 'String'
  location: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  categories: [{ type: String }], // e.g., ['Wedding', 'Festival']
  ticketInfo: {
    price: { type: Number, required: true },
    availability: { type: Number, required: true }, // Number of tickets available
  },
  eventimages: { type: String, required: true }, 
   reviews: {
    type: [reviewSchema],
    default: [], // Default to an empty array if not provided
  },
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', default: [] }], // Changed 'default: empty' to 'default: []'
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
