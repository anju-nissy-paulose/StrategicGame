const express = require("express");
const wishListRouter = express.Router();

const wishListController = require('../controllers/wishList-controller');

wishListRouter.post("/",wishListController.addWishList);
wishListRouter.get("/:id",wishListController.addWishList);




module.exports = wishListRouter;