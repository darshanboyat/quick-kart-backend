const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  phone: {
    type: Number,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  permanentAddress: {
    type: String,
    require: true
  },
  gender: {
    type: String,
  },
  password: {
    type: String,
    require: true
  }
});

const user = new mongoose.model("user", userSchema);

module.exports = user;
