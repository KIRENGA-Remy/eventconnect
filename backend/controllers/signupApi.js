const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/user');
const validateUser = require('../Models/valid');
require('dotenv').config();

router.post('/', async (req, res) => {
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

    // Create a new user
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      fullName: req.body.fullName,
      userprofile: req.body.userprofile,
      phoneNumber: req.body.phoneNumber
    });

    // Save the user to the database
    await user.save();

    // Send the token and success message
    res.status(201).send({ message: 'Account created', data:user });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

module.exports = router;
