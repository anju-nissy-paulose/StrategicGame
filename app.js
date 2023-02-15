const express = require('express');
const mogoose = require('mongoose');
const router = require('./routes/strategicgame-routes');
const app = express();

//middleware
app.use("/gamesets",router);

mogoose.connect("mongodb+srv://Admin:R3dvFOjecTYolViQ@cluster0.dw1dqgi.mongodb.net/?retryWrites=true&w=majority"
).then(()=>console.log("connected to database"))
.then(()=>{app.listen(5000)})
.catch((Error)=> console.log(Error));



//app.use('/',(req,res,next)=>{
    //res.send("This is our starting app")
//
//});




//R3dvFOjecTYolViQ