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

//login 
registerRouter.post("/login-user", regController.loginUser);
//user data 
registerRouter.post("/userData", regController.userData);
//forget password 
registerRouter.post("/forgot-password", regController.forgetPswd);
//reset password 
registerRouter.get("/reset-password/:id/:token", regController.resetPswd);
registerRouter.post("/reset-password/:id/:token", regController.resetPwd);

module.exports =registerRouter;