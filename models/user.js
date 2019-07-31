const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  nationalId: {
    type: String,
    required: true
  },
  county: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  marital: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  education: {
    type: String,
    required: true
  },
  institution: {
    type: String,
    required: true
  },
  appointment: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
