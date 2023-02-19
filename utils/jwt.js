const jwt = require("jsonwebtoken");
require("dotenv").config();
function generateAccessToken(username) {
  return jwt.sign({ _id: username._id }, process.env.secret_key, {
    expiresIn: "18000s",
  });
}


module.exports = { generateAccessToken };