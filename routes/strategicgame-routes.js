const express = require("express");
const router = express.Router();
const product  = require("../model/gameSet")

router.get("/", async(res,req,next) =>{
    //this route will provide all game sets 
    let gamesets;
    try{
        gamesets = await product.find();
    } catch(err){
        console.log(err);
    }
    if(!gamesets){
        return res.status(404).json({message:"No products found "})
    }
    return res.status(202).json({gamesets})
});
module.exports = router;