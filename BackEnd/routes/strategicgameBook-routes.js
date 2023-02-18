const express = require("express");
const gameSetRouter = express.Router();
const gameBookRouter = express.Router();
const gameSet = require('../model/gameBook');


const gameBookController = require('../controllers/gameBook-controller');

//game books

gameBookRouter.get("/", gameBookController.getAllBooks);
gameBookRouter.post("/", gameBookController.addBook);
gameBookRouter.get("/:id", gameBookController.getById);
gameBookRouter.put("/:id", gameBookController.updateBook);
gameBookRouter.delete("/:id", gameBookController.deleteBook);

module.exports =gameBookRouter;