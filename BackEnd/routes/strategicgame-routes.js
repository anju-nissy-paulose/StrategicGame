const express = require("express");
const gameSetRouter = express.Router();
//const gameBookRouter = express.Router();
const gameSet = require('../model/gameSet');
//const gameBook = require('../model/gameSet');
const gameSetController = require('../controllers/gameSet-controller');
//const gameBookController = require('../controllers/gameBook-controller');

// game sets
gameSetRouter.get("/", gameSetController.getAllGameSets);
gameSetRouter.post("/",gameSetController.addGameSets);
gameSetRouter.get("/:id", gameSetController.getGameSetById);
gameSetRouter.put("/:id", gameSetController.updateGameSet);
gameSetRouter.delete("/:id", gameSetController.deleteGameSet);




module.exports =gameSetRouter;
