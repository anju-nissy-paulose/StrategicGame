const express = require('express');
const router = express.Router();
const CartItem = require('../model/addToCart');

const addToCart = async (req, res) => {
  const { product, quantity } = req.body;

  try {
    let cartItem = await CartItem.findOne({ product });

    if (cartItem) {
      // If the item is already in the cart, update the quantity
      cartItem.quantity += quantity;
      cartItem = await cartItem.save();
    } else {
      // If the item is not in the cart, create a new cart item
      cartItem = await CartItem.create({ product, quantity });
    }

    res.json(cartItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.addToCart = addToCart;

