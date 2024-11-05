const { Router } = require("express");
const usersController = require("../controllers/usersController");
const usersRouter = Router();

usersRouter.get("/", usersController.usersListGet);
usersRouter.get("/new", usersController.usersListForm);
usersRouter.get("/search", usersController.usersListUsernames);
usersRouter.post("/new", usersController.usersListCreate);

module.exports = usersRouter;
