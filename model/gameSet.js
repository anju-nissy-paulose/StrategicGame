const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const gamesetSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    available:{
        type:Boolean,
        required: true
    },
    image:{
        type:String,
        required: true
    },
});
module.exports = mongoose.model("gameSet",gamesetSchema);