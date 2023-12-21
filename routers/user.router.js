const express = require("express");
const usetctrl = require ("../controller/users_ctrl");

const usersRouter = express.Router();

usersRouter.route("/").get(usetctrl.getAllUsers).post(usetctrl.postNewUser)

usersRouter
 .route("/:id")
 .get(usetctrl.getUserbyId)
 .patch(usetctrl.UpdateUserId)
 .delete(usetctrl.deleteById);

 module.exports = usersRouter;