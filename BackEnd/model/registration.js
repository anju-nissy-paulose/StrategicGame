const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const regSchema = new Schema({
  fname: String,
  lname: String,
  email: { type: String, unique: true },
  password: String,
  userType: String,
},

  
);

module.exports = mongoose.model("registration", regSchema);

// registration