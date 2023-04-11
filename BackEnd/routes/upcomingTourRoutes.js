const express = require('express')
const upcomingTourModel = require('../model/upcomingTourModel');

const upcomingTourRouter = express.Router();

//localhost:5000/api/upcomingTournament   -- Will return the entire schema data
upcomingTourRouter.get('/', async (req, res) => {
  const upTour = await upcomingTourModel.find();
  res.send(upTour);
});

//localhost:5000/api/upcomingTournament/slug/:slug  --- Searches by unique slug value for only one document
upcomingTourRouter.get('/slug/:slug', async (req, res) => {
  const upTour = await upcomingTourModel.findOne({ slug: req.params.slug });
  if (upTour) {
    res.send(upTour);
  } else {
    res.status(404).send({ message: 'upTour Not Found' });
  }
});
//localhost:5000/api/upcomingTournament/:id  --- Searches by unique ID value for only one document
upcomingTourRouter.get('/:id', async (req, res) => {
  const upTour = await upcomingTourModel.findById(req.params.id);
  if (upTour) {
    res.send(upTour);
  } else {
    res.status(404).send({ message: 'upTour Not Found' });
  }
});

module.exports = upcomingTourRouter;