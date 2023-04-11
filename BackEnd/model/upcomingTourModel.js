const mongoose = require ('mongoose');

const upcomingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    uptourimg: { type: String, required: true },
    slug: { type: String, required: true, unique: true }, 
    endDate: {type: Date, required: true}, 
    link: { type: String, required: true },
  } 
);

module.exports  = mongoose.model('upcomingTourModel', upcomingSchema);
