const route = require("express").Router();
const auth = require("../middleware/authorization");
const userController = require("../controllers/user.controller");

route.post("/register", auth("Master"), userController.register);
route.post("/login", userController.login);
route.post("/logout", auth("user"), userController.logout);

route.get("/profile", auth("user"), userController.profile);
route.get("/users", auth("Master"), userController.users);
route.get("/user/:code", userController.findUser);

module.exports = route;
