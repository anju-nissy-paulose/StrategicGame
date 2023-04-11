const mongoose = require ('mongoose');

const walletSchema = new mongoose.Schema(
  {
    useremail: { type: String, required: true },
    credit: { type: Number},  
    userimage:  { type: String},
  } 
);

module.exports  = mongoose.model('Wallet', walletSchema);
