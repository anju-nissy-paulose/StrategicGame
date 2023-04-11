const express = require('express')
const playedTourModel = require('../model/playedTourModel') ;

const playedTourRouter = express.Router();

//localhost:5000/api/playedTournament   -- Will return the entire schema data
playedTourRouter.get('/', async (req, res) => {
  const playedTour = await playedTourModel.find();
  res.send(playedTour);
});

//localhost:5000/api/playedTournament/tourCode/:tourCode  --- Searches by tourCode value for the document
playedTourRouter.get('/tourCode/:tourCode', async (req, res) => {
  const playedTour = await playedTourModel.find({ tourCode: req.params.tourCode });
  if (playedTour) {
    res.send(playedTour);
  } else {
    res.status(404).send({ message: 'playedTour Not Found' });
  }
});
//localhost:5000/api/playedTournament/useremail/:useremail  --- Searches by tourCode value for the document
playedTourRouter.get('/useremail/:useremail', async (req, res) => {
  const playedTour = await playedTourModel.find({ useremail: req.params.useremail });
  if (playedTour) {
    res.send(playedTour);
  } else {
    res.status(404).send({ message: 'playedTour Not Found' });
  }
});
//localhost:5000/api/playedTournament/:id  --- Searches by unique ID value for only one document
playedTourRouter.get('/:id', async (req, res) => {
  const playedTour = await playedTourModel.findById(req.params.id);
  if (playedTour) {
    res.send(playedTour);
  } else {
    res.status(404).send({ message: 'playedTour Not Found' });
  }
});
//localhost:5000/api/playedTournament/  --- Creates a new playedTournament record in the DB (POST)
playedTourRouter.post('/', async (req, res) => {
    const {  name,tourCode,username,useremail,score,playedStatus,notificationStatus } = req.body;
    let playedTour;
    try {
        playedTour = new playedTourModel({
        name,
        tourCode,
        username,
        useremail,
        score,
        playedStatus,
        notificationStatus,
      });
      await playedTour.save();
    } catch (err) {
      console.log(err);
    }
  
    if (!playedTour) {
      return res.status(500).json({ message: "Unable To Add playedTour" });
    }
    return res.status(201).json({ playedTour });
  });
   
  module.exports = playedTourRouter;