// Require dotenv to load environment variables from .env file
require('dotenv').config();

const router = require('express').Router();
const User = require('../Models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Joi = require('joi');

const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label('Email'),
    password: Joi.string().label('Password'),
  });
  return schema.validate(data);
  console.log(data);
};

router.post('/', async (req, res) => {
  // Validate request body
  const { error } = validate(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message }); // Specific error message from Joi validation

  // Check for user existence (improved error handling)
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(401).send({ message: 'This email does not exist, You may signup ' });

  // Compare password
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(401).send({ message: 'This password is not the correct one.' });

  const userData = {
    id: user._id,
    username: user.username,
    fullName: user.fullName,
    phoneNumber: user.phoneNumber,
    userprofile: user.userprofile
  };

  // Access JWT_SECRET from environment variable
  const token = jwt.sign({ _id: user._id, email: user.email }, process.env.JWT_SECRET);
  res.status(201).send({ token: token , message: "Successful login", data: userData});
});

module.exports = router;
