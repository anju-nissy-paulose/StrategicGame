import express from 'express';
import Puzzle from '../model/puzzlemodel.js';
import Strategy from '../model/strategymodel.js';
import Tournament from '../model/tournamentModel.js';
import UpcomingTournament from '../model/upcomingTourModel.js';
import Wallet from '../model/walletModel.js';
import News from '../model/newsModel.js'; 
import data from '../data.js';

const seedRouter = express.Router();

// Async API get call
// Will create the data for 'Strategy'in MongoDB from the data.js sample js file

seedRouter.get('/', async (req, res) => {
  await Puzzle.deleteMany({});
  const createdPuzzle = await Puzzle.insertMany(data.games);
  await Strategy.deleteMany({});
  const createdStrategy = await Strategy.insertMany(data.strategy);
  await Tournament.deleteMany({});
  const createdTournament = await Tournament.insertMany(data.tournament);
  await UpcomingTournament.deleteMany({});
  const createdUpcomingTour = await UpcomingTournament.insertMany(data.upcomingTournament);
  await Wallet.deleteMany({});
  const createdWallet = await Wallet.insertMany(data.wallet);
  res.send({createdWallet });
});
/*
seedRouter.get('/', async (req, res) => {
  await News.deleteOne();
  const createdNews = await News.insertMany(data.news);
  res.send({ createdNews });
});
*/
export default seedRouter;