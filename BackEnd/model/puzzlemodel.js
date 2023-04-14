const  mongoose = require ('mongoose') ;

const puzzleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    description: { type: String, required: true },   
    link: { type: String, required: true },
    quantity: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

//const GamePuzzle = mongoose.model('GamePuzzle', puzzleSchema);
//export default GamePuzzle;

module.exports = mongoose.model('GamePuzzle', puzzleSchema);