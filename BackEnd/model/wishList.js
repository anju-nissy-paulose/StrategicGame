const mongoose = require('mongoose');

const wishListSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
      },
      ProductId: {
        type: String,
        required: true,
      },
}, 
);

module.exports = mongoose.model('WishList', wishListSchema);
