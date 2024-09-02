const Router = require("express").Router;
const UserSchema = require("../controllers/user-controller");

const projectRouter = new Router();

projectRouter.post("/registration", UserSchema.registration);
projectRouter.post("/login", UserSchema.login);
projectRouter.post("/logout", UserSchema.logout);
projectRouter.get("/refresh", UserSchema.refresh);
projectRouter.get("/users", UserSchema.getUsers);

module.exports = projectRouter;
