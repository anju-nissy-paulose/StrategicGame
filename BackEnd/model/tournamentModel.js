const mongoose = require ('mongoose');

const tournamentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },   
    link: { type: String, required: true },
    linkDesc: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('GameTournament', tournamentSchema);
