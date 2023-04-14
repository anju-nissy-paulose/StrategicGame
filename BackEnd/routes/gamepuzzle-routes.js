const express  = require('express') ;
const  PuzzleModel = require('../model/puzzlemodel');

const puzzleRouter = express.Router();

//localhost:5000/api/puzzles   -- Will return the entire schema data
puzzleRouter.get('/', async (req, res) => {
  const puzzle = await PuzzleModel.find();
  res.send(puzzle);
});

//localhost:5000/api/puzzles/slug/:slug  --- Searches by unique slug value for only one document
puzzleRouter.get('/slug/:slug', async (req, res) => {
  const puzzle = await PuzzleModel.findOne({ slug: req.params.slug });
  if (puzzle) {
    res.send(puzzle);
  } else {
    res.status(404).send({ message: 'Puzzle Not Found' });
  }
});
//localhost:5000/api/puzzles/:id  --- Searches by unique ID value for only one document
puzzleRouter.get('/:id', async (req, res) => {
  const puzzle = await PuzzleModel.findById(req.params.id);
  if (puzzle) {
    res.send(puzzle);
  } else {
    res.status(404).send({ message: 'Puzzle Not Found' });
  }
});

//localhost:5000/api/puzzles/  --- Creates a new puzzle record in the DB (POST)
puzzleRouter.post('/', async (req, res) => {
  const {  name,slug,category,image,price,rating,description,link,quantity} = req.body;
  let puzzle;
  try {
    puzzle = new PuzzleModel({
      name,
      slug,
      category,
      image,
      price,
      rating,
      description,
      link,
      quantity
    });
    await puzzle.save();
  } catch (err) {
    console.log(err);
  }

  if (!puzzle) {
    return res.status(500).json({ message: "Unable To Add puzzle" });
  }
  return res.status(201).json({ puzzle });
});

//-----------------------Delete--------------------//
puzzleRouter.delete('/:id', async (req, res) => {
  const id = req.params.id;
  let puzzle;
  try {
    puzzle = await PuzzleModel.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!puzzle) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Puzzle Successfully Deleted" });
});

//--------------------Update----------------------//
puzzleRouter.put('/:id', async (req, res) =>{
  if(!req.body){
      return res
          .status(400)
          .send({ message : "Data to update can not be empty"})
  }

  const id = req.params.id;
  PuzzleModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
      .then(data => {
          if(!data){
              res.status(404).send({ message : `Cannot Update puzzle with ${id}. Maybe Puzzle not found!`})
          }else{
              res.send(data)
          }
      })
      .catch(err =>{
          res.status(500).send({ message : "Error Update Puzzle information"})
      })
})

//export default puzzleRouter;

module.exports = puzzleRouter;