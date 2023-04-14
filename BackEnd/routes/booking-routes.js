const express = require("express");
const bookingRouter = express.Router();
//const gameBookRouter = express.Router();

const Booking = require('../model/booking');
const bookingController = require('../controllers/booking-controller');
//const gameBookController = require('../controllers/gameBook-controller');

// game sets

bookingRouter.post("/",bookingController.booking);




module.exports =bookingRouter;