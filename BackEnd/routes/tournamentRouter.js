const express = require('express');
const TournamentModel = require('../model/tournamentModel') ;

const tournamentRouter = express.Router();

//localhost:5000/api/tournament   -- Will return the entire schema data
tournamentRouter.get('/', async (req, res) => {
  const tournaments = await TournamentModel.find();
  res.send(tournaments);
});

//localhost:5000/api/tournament/slug/:slug  --- Searches by unique slug value for only one document
tournamentRouter.get('/slug/:slug', async (req, res) => {
  const tournaments = await TournamentModel.findOne({ slug: req.params.slug });
  if (tournaments) {
    res.send(tournaments);
  } else {
    res.status(404).send({ message: 'tournaments Not Found' });
  }
});
//localhost:5000/api/tournament/:id  --- Searches by unique ID value for only one document
tournamentRouter.get('/:id', async (req, res) => {
  const tournaments = await TournamentModel.findById(req.params.id);
  if (tournaments) {
    res.send(tournaments);
  } else {
    res.status(404).send({ message: 'tournaments Not Found' });
  }
});

module.exports = tournamentRouter;