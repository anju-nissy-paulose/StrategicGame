const express = require('express');
//const router = express.Router();
const Location = require('../model/storeLocation');
//get
const getAllLocation = async (req, res, next) => {
  let locations;
  try {
    locations = await Location.find()
  } catch (err) {
    console.log(err);
  }

  if (!locations) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.status(200).json({ locations });
};



// POST /locations - create a new location
const addLocation = async (req, res) => {
  try {
    const location = new Location(req.body);
    await location.save();
    res.status(201).json(location);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.addLocation = addLocation;
exports.getAllLocation = getAllLocation;
