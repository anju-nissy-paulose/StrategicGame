const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tutorialSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  professorName: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  deliverymode: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  availableDate:{
    type:String,
    required:true
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("tutorial", tutorialSchema);

// books