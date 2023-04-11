
const express  = require('express') ;
const NewsModel = require('../model/newsModel.js') ;

const newsRouter = express.Router();

//localhost:5000/api/news   -- Will return the entire schema data
newsRouter.get('/', async (req, res) => {
  const news = await NewsModel.find();
  res.send(news);
});

//localhost:5000/api/news/slug/:slug  --- Searches by unique slug value for only one document
newsRouter.get('/slug/:slug', async (req, res) => {
  const news = await NewsModel.findOne({ slug: req.params.slug });
  if (news) {
    res.send(news);
  } else {
    res.status(404).send({ message: 'news Not Found' });
  }
});
//localhost:5000/api/news/:id  --- Searches by unique ID value for only one document
newsRouter.get('/:id', async (req, res) => {
  const news = await NewsModel.findById(req.params.id);
  if (news) {
    res.send(news);
  } else {
    res.status(404).send({ message: 'news Not Found' });
  }
});

module.exports =newsRouter;