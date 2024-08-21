const router = require('express').Router()
const Booking = require('../Models/booking')

router.post('/', async (req, res) => {
    const userId = req.body.userId;
    const eventName = req.body.eventName;
  
    // Check if a booking already exists for the user and event
    const existingBooking = await Booking.findOne({ userId, eventName });
  
    if (existingBooking) {
      return res.status(400).send({ message: 'You already booked this event!' });
    }
  
    // Create a new booking if it doesn't exist
    const newBooking = new Booking(req.body);
  
    try {
      const savedBooking = await newBooking.save();
      res.status(200).send({ success: true, message: "Your event is booked", data: savedBooking });
    } catch (err) {
      res.status(500).send({ success: false, message: "Internal server error" });
    }
  });

router.get('/:id', async (req,res)=>{
    const id = req.params.id
    try {
        const book = await Booking.findById(id)
        res.status(200).send({success: true, message: "Successfully got booking", data: book})
    } catch (err) {
        res.status(404).send({success: false, message: "Booking not found"})
    }
})

router.get('/', async (req,res)=>{
    try {
        const books = await Booking.find()
        res.status(200).send({success: true, message: "Successfully got bookings", data: books})
    } catch (err) {
        res.status(404).send({success: false, message: "Bookings not found"})
    }
})
module.exports = router;








// CREATE BOOKING
// export const createBooking = async (req,res) =>{
//     const newBooking = new Booking(req.body)
//     try {
//         const savedBooking = await newBooking.save();
//         res.status(200).send({success: true, message: "Your event is booked", data: savedBooking})
        
//     } catch (err) {
//         res.status(500).send({success: false, message: "Internal server error"})
//     }
// }

// GET SINGLE BOOKING
// export const getSingleBooking = async (req,res)=>{
//     const id = req.params.id
//     try {
//         const book = await Booking.findById(id)
//         res.status(200).send({success: true, message: "Successfully got booking", data: book})
//     } catch (err) {
//         res.status(404).send({success: false, message: "Booking not found"})
//     }
// }

// GET ALL BOOKINGS
// export const getBookings = async (req,res)=>{
//     try {
//         const books = await Booking.find()
//         res.status(200).send({success: true, message: "Successfully got bookings", data: books})
//     } catch (err) {
//         res.status(404).send({success: false, message: "Bookings not found"})
//     }
// }