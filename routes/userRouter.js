const express = require("express");
const Router = express.Router();
const { register, loginUser } = require("../controller/authController");
const getUser = require("../controller/userController");
const authenticate = require("../middleware");


Router.get("/getUser", authenticate.verifyToken, async (request, response) => {
  const result = await getUser(request);
  return response.json(result);
});

Router.post("/register", register);

Router.post("/login", loginUser);

module.exports = Router;
