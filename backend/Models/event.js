const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventname: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  location: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    postalCode: { type: String, required: true },
  },
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  categories: [{ type: String }], // e.g., ['Wedding', 'Festival']
  ticketInfo: {
    price: { type: Number, required: true },
    currency: { type: String, required: true },
    availability: { type: Number, required: true }, // Number of tickets available
  },
  eventimages: [{ type: String }], // Array of image URLs
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Users who have booked or attended the event
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
