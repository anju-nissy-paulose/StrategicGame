const express = require('express');
const mogoose = require('mongoose');
const gameSetRouter = require('./routes/strategicgame-routes');
const gameBookRouter = require('./routes/strategicgameBook-routes');
const app = express();

//middleware
app.use(express.json());
app.use("/gamesets",gameSetRouter);//localhost:5000/gamesets
app.use("/gamebooks",gameBookRouter);//localhost:5000/gamebooks

mogoose.connect("mongodb+srv://Admin:Ijw1BkpdeT6eMK77@cluster0.dw1dqgi.mongodb.net/StrategicGame?retryWrites=true&w=majority"
).then(()=>console.log("connected to database"))
.then(()=>{app.listen(5000)})
.catch((Error)=> console.log(Error));



//app.use('/',(req,res,next)=>{
    //res.send("This is our starting app")
//
//});




//Ijw1BkpdeT6eMK77

//3XlUAX7yXME6UWOQ