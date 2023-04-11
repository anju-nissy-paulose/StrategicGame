const mongoose = require ('mongoose');

const strategySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    description: { type: String, required: true },   
    link: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

//const GameStrategy = mongoose.model('GameStrategy', strategySchema);
module.exports = mongoose.model('GameStrategy', strategySchema);