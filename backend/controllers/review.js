const router = require('express').Router()
const Event = require('../Models/event');
const Review = require('../Models/review.js');

router.post('/', async (req, res) => {
  const { eventId, username, reviewText, rating } = req.body;

  try {
    // Validate if event exists
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // Create a new review
    const newReview = new Review({ eventId, username, reviewText, rating });

    // Save the review
    const savedReview = await newReview.save();

    // Add the review reference to the event's reviews array
    event.reviews.push(savedReview._id);
    await event.save();

    res.status(201).json({message: "Review created successfully" , data: savedReview});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  });

  
// Delete a review
router.delete('/:reviewId/event/:eventId', async (req, res) => {
  const { reviewId, eventId } = req.params;

  try {
    // Find the review
    const review = await Review.findById(reviewId);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    // Validate if event exists
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // Remove the review reference from the event's reviews array
    event.reviews = event.reviews.filter((id) => id.toString() !== reviewId);
    await event.save();

    // Delete the review
    await review.remove();

    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  });

module.exports = router;
