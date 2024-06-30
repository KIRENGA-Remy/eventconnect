const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../Models/user');
const validateUser = require('../Models/valid');
const upload = require('../middleware/multerConfig'); // Import multer configuration

router.post('/', (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).send({ message: err });
    }

    try {
      // Validate user input
      const { error } = validateUser(req.body);
      if (error) {
        return res.status(400).send({ error: error.details[0].message });
      }

      // Check if the user already exists
      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        return res.status(400).send({ message: 'User already exists' });
      }

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(req.body.password, salt);

      // Create a new user object
      const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash,
        fullName: req.body.fullName,
        phoneNumber: req.body.phoneNumber,
        userprofile: req.file ? `/uploads/${req.file.filename}` : '../assets/user.png' // Path to the uploaded file or a default image
      });

      // Save the user to the database
      await user.save();

      const userData = {
        id: user._id,
        username: user.username,
        fullName: user.fullName,
        phoneNumber: user.phoneNumber,
        userprofile: user.userprofile
      }
      // Send the success message
      res.status(201).send({ message: 'Account created', data: userData });
    } catch (error) {
      console.error(error.message);
      res.status(500).send({ message: 'Internal server error' });
    }
  });
});

module.exports = router;
