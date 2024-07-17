// const mongoose = require('mongoose');

// const bookingSchema = new mongoose.Schema({
//   event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
//   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   venue: { type: mongoose.Schema.Types.ObjectId, ref: 'Venue', required: true },
//   date: { type: Date, required: true },
//   time: { type: String, required: true },
// });

// module.exports = mongoose.model('Booking', bookingSchema);



const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({
  userId: {
    type: String
  },
  userEmail: {
    type: String,
    required: true
  },
  eventName: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  guestSize: {
    type: Number,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  bookAt: {
    type: Date,
    required: true
  }
});
module.exports = mongoose.model('Booking', bookingSchema);
