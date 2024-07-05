
const Joi = require('joi');

const passwordComplexity = require('joi-password-complexity')

// Validation function
const validateUser = (data) => {
    const schema = Joi.object({
      username: Joi.string().required().label('Username'),
      email: Joi.string().email().required().label('Email'),
      password: passwordComplexity().label('Password'),
      fullName: Joi.string().label('Full Name'),
      userprofile: Joi.string().label('User Profile'),
      phoneNumber: Joi.string().pattern(/^\+?[1-9]\d{1,14}$/).label('Phone Number') // E.164 phone number format
    });
  
    return schema.validate(data);
  };
  module.exports = validateUser;