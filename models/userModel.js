const mongoose = require('mongoose');

const userSchma = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'User must have a username'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'User must have a password'],
    unique: true,
  },
});

const User = mongoose.model('User', userSchma);
module.exports = User;
