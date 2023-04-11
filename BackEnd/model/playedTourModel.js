const mongoose = require ('mongoose');

const playedSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    tourCode: { type: String, required: true },
    username: { type: String, required: true },
    useremail: { type: String, required: true },
    score: { type: Number, required: true },
    playedStatus: { type: String, required: true },
    notificationStatus: { type: String, required: true },
  } 
);

module.exports  = mongoose.model('playedTourModel', playedSchema);
