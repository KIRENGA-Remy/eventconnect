const router = require('express').Router()
const Review = require('../Models/review.js')

router.post('/', async (req, res) => {

    const newReview = new Review(req.body);
    try {
       await newReview.save();
      res.status(200).send({ success: true, message: "Your comment is created on this event" });
    } catch (err) {
      res.status(500).send({ success: false, message: "Internal server error" });
    }
  });

  
// Delete a review
router.delete('/:id', async (req, res) => {
    try {
      const deletedReview = await Review.findByIdAndDelete(req.params.id);
  
      if (!deletedReview) {
        return res.status(404).send({ message: 'Comment not found' });
      }
  
      res.status(200).send({ message: 'Comment deleted successfully' });
    } catch (error) {
      console.error(error.message);
      res.status(500).send({ message: 'Internal Server Error' });
    }
  });

module.exports = router;
