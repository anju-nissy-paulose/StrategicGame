const express = require("express");

const StrategyModel = require ('../model/strategymodel.js');

const strategyRouter = express.Router();

//localhost:5000/api/strategy   -- Will return the entire schema data
strategyRouter.get('/', async (req, res) => {
  const strategy = await StrategyModel.find();
  res.send(strategy);
});

//localhost:5000/api/strategy/slug/:slug  --- Searches by unique slug value for only one document
strategyRouter.get('/slug/:slug', async (req, res) => {
  const strategy = await StrategyModel.findOne({ slug: req.params.slug });
  if (strategy) {
    res.send(strategy);
  } else {
    res.status(404).send({ message: 'strategy game Not Found' });
  }
});
//localhost:5000/api/strategy/:id  --- Searches by unique ID value for only one document
strategyRouter.get('/:id', async (req, res) => {
  const strategy = await StrategyModel.findById(req.params.id);
  if (strategy) {
    res.send(strategy);
  } else {
    res.status(404).send({ message: 'strategy game Not Found' });
  }
});

//export default strategyRouter;
module.exports = strategyRouter;