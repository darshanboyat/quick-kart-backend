const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  phone: {
    type: Number,
  },
  email: {
    type: String,
  },
  permanentAddress: {
    type: String,
  },
  gender: {
    type: String,
  },
  password: {
    type: String,
  },
  token: {
    type: String,
  },
});

const user = new mongoose.model("user", userSchema);

module.exports = user;
