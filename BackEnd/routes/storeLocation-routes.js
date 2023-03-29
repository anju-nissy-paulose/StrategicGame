const express = require("express");
const storeLocationRouter = express.Router();
//const gameBookRouter = express.Router();
conststoreLocation = require('../model/storeLocation');
//const gameBook = require('../model/gameSet');
const storeLocationController = require('../controllers/storeLocation-controller');
//const gameBookController = require('../controllers/gameBook-controller');

// game sets
storeLocationRouter.get("/", storeLocationController.getAllLocation);
storeLocationRouter.post("/",storeLocationController.addLocation);
//gameSetRouter.get("/:id", gameSetController.getGameSetById);
//gameSetRouter.put("/:id", gameSetController.updateGameSet);
//gameSetRouter.delete("/:id", gameSetController.deleteGameSet);




module.exports =storeLocationRouter;
