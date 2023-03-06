const express = require("express");
const registerRouter = express.Router();
const gameBookRouter = express.Router();
const registration = require('../model/registration');


const regController = require('../controllers/registration-controller');

//registration

registerRouter.get("/", regController.getAllUsers);
registerRouter.post("/", regController.addUser);
registerRouter.get("/:id", regController.getById);
registerRouter.put("/:id", regController.updateUser);
registerRouter.delete("/:id", regController.deleteUser);

module.exports =registerRouter;