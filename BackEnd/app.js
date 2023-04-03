const express = require('express');
const mogoose = require('mongoose');
const cors = require('cors');

//const redis = require("redis");
//require('./utils/redis');
const gameSetRouter = require('./routes/strategicgame-routes');
const gameBookRouter = require('./routes/strategicgameBook-routes');
//const loginRouter = require('./routes/login-routes');
const registerRouter = require('./routes/registration-routes');
const storeLocationRouter = require('./routes/storeLocation-routes');
//redis 
const redis = require('redis');
const client = redis.createClient();


const app = express();



//middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use("/gamesets",gameSetRouter);//localhost:5000/gamesets
app.use("/gamebooks",gameBookRouter);//localhost:5000/gamebooks
app.use("/registration",registerRouter);//localhost:5000/registration
//app.use("/login-user",loginRouter);//localhost:5000/login-user

app.use("/location",storeLocationRouter);//localhost:5000/location



//database 
mogoose.connect("mongodb+srv://Admin:Ijw1BkpdeT6eMK77@cluster0.dw1dqgi.mongodb.net/StrategicGame?retryWrites=true&w=majority"
).then(()=>console.log("connected to database"))
.then(()=>{app.listen(5000)})
.catch((Error)=> console.log(Error));

//redis



//app.use('/',(req,res,next)=>{
    //res.send("This is our starting app")
//
//});




//Ijw1BkpdeT6eMK77

//3XlUAX7yXME6UWOQ