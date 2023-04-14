const express = require('express');
const mogoose = require('mongoose');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

//const redis = require("redis");
//require('./utils/redis');
const gameSetRouter = require('./routes/strategicgame-routes');
const gameBookRouter = require('./routes/strategicgameBook-routes');
//const loginRouter = require('./routes/login-routes');
const registerRouter = require('./routes/registration-routes');
const storeLocationRouter = require('./routes/storeLocation-routes');
const tutorialRouter = require('./routes/tutorial-routes')
const addToCartRouter = require('./routes/addToCart-routes')
const wishListRouter = require('./routes/wishList-routes')
//const stripeRouter = require('./routes/stripe-routes')

// tournament, game, ------merging codes............................................//

//import seedRouter from './routes/seedRouter.js';
const puzzleRouter  = require('./routes/gamepuzzle-routes')

const newsRouter = require ('./routes/newsRouter');
const strategyRouter = require('./routes/gamestrategy-routes') 
const tournamentRouter = require ('./routes/tournamentRouter'); 
const upcomingTourRouter = require('./routes/upcomingTourRoutes') ;
const playedTourRouter = require('./routes/playedTourRoutes') ;
const walletRouter = require('./routes/walletRoutes') ;
 //---------------------------------------------------------------------------//
 const bookingRouter = require('./routes/booking-routes') ;
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
app.use("/tutorial",tutorialRouter);//localhost:5000/tutorial
app.use("/addtocart",addToCartRouter);//localhost:5000/addtocart
app.use("/wishlist",wishListRouter);//localhost:5000/wishlist
//app.use("/stripe",stripeRouter );//localhost:5000/wishlist

//......merge code------------------------------------------------------------------//
//app.use('/api/seed', seedRouter); //localhost:5000/api/seed
app.use('/api/puzzles', puzzleRouter); //localhost:5000/api/puzzles
app.use('/api/news', newsRouter); //localhost:5000/api/news
app.use('/api/strategy', strategyRouter); //localhost:5000/api/strategy
app.use('/api/tournament', tournamentRouter); //localhost:5000/api/tournament
app.use('/api/upcomingTournament', upcomingTourRouter); //localhost:5000/api/upcomingTournament
app.use('/api/playedTournament', playedTourRouter); //localhost:5000/api/playedTournament
app.use('/api/wallet', walletRouter); //localhost:5000/api/wallet
//-------------------------------------------------------------------------------------------//
app.use('/api/booking', bookingRouter); //localhost:5000/api/booking

app.post('/api/payment', async (req, res) => {
    try {
      const { amount, token } = req.body;
      const charge = await stripe.charges.create({
        amount,
        currency: 'usd',
        description: 'Sample Charge',
        source: token.id,
      });
      res.status(200).json({ message: 'Payment processed successfully' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error processing payment' });
    }
  });

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