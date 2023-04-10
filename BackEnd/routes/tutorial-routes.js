const express = require("express");
const tutorialRouter = express.Router();
//const gameBookRouter = express.Router();
const GameSet = require('../model/gameSet');
//const gameBook = require('../model/gameSet');
const tutorialController = require('../controllers/tutorial-controller');
//const gameBookController = require('../controllers/gameBook-controller');

// game sets
tutorialRouter.get("/", tutorialController.getAllTutorial);
tutorialRouter.post("/",tutorialController.addTutorial);
tutorialRouter.get("/:id", tutorialController.getById);
tutorialRouter.put("/:id", tutorialController.updateTutorial);
tutorialRouter.delete("/:id", tutorialController.deleteTutorial);




module.exports =tutorialRouter ;
