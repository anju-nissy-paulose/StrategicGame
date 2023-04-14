const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
   
  },
 
  date: {
    type: Date,
    required: [true, 'Booking date is required.'], // Add validation check for the date field
  },
  time: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Booking', bookingSchema);
// books