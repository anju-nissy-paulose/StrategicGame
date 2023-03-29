const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true,
    unique: true
  },
  address: String,
  // other fields as needed
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
