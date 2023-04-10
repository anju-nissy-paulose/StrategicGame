const express = require("express");
const addToCartRouter = express.Router();

const addToCartController = require('../controllers/addToCart-controller');

addToCartRouter.post("/",addToCartController.addToCart);




module.exports = addToCartRouter;