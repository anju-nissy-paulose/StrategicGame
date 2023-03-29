const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const gameSetSchema = new Schema({
    name:{
        type:String,
        required: true,
    },
    material:{
        type:String,
        required: true,
    },
    theme:{
        type:String,
        required: true,
    }, 
    genre:{
        type:String,
        required: true,
    },
    noOfPlayers:{
        type:Number,
        required: true,
    },
    colour:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    price:{
        type:Number,
        required: true,
    },
    image:{
        type:String,
        required: true,
    },
});
module.exports = mongoose.model("gameSet",gameSetSchema);