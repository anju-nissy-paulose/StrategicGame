const mongoose = require('mongoose');
const Schema = mongoose.Mongoose.Schema;
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
        type:int,
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
module.exports = mongoose.exports("gameSet",gamesetSchema);