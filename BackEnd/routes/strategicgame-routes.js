const express = require("express");
const router = express.Router();
const gameSet = require('../model/gameSet');

const gameSetController = require('../controllers/gameSet-controller');

router.get("/", gameSetController.getAllGameSets);
router.post("/",gameSetController.addGameSets);
router.get("/:id", gameSetController.getById);
router.put("/:id", gameSetController.updateGameSet);
router.delete("/:id", gameSetController.deleteGameSet);

module.exports = router;