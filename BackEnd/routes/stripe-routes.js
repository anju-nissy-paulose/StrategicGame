const express = require("express");
const gameSetRouter = express.Router();
const stripeRouter = express.Router();



const strpeController = require('../controllers/Stripe-controller');

//game books
stripeRouter.post("/", strpeController.addStripe);
// gameBookRouter.get("/", gameBookController.getAllBooks);

// gameBookRouter.get("/:id", gameBookController.getById);
// gameBookRouter.put("/:id", gameBookController.updateBook);
// gameBookRouter.delete("/:id", gameBookController.deleteBook);

module.exports =stripeRouter;