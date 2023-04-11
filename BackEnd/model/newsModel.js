const mongoose = require ('mongoose');

const newsSchema = new mongoose.Schema(
  {
    newsimg: { type: String, required: true },
    newsdesc: { type: String, required: true },
    slug: { type: String, required: true, unique: true },   
    content_img: { type: String, required: true },
  } 
);

//const NewsModel = mongoose.model('NewsModel', newsSchema);
module.exports = mongoose.model('NewsModel', newsSchema);;