const user = require("../model/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  try {
    let hashedPassword = await bcrypt.hash(req.body.password, 10);

    let createUser = new user({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      permanentaddress: req.body.permanentaddress,
      gender: req.body.gender,
      password: hashedPassword,
    });

    await createUser.save();

    res.status(201).send(createUser);
  } catch (err) {
    res.status(400).send("User not created");
  }
};

const login = async (req, res, next) => {
  try {
    var username = req.body.email;
    var password = req.body.password;

    const foundUser = await user.findOne({
      email: username,
    });

    if (!foundUser) throw new Error("User not found");

    const isMatch = await bcrypt.compare(password, foundUser.password);

    if (!isMatch) throw new Error("Sorry! Incorrect email or password");

    const token = jwt.sign({ _id: foundUser._id.toString() }, "roshankumar");

    foundUser.token = token;
    await foundUser.save();

    res.status(200).send(foundUser);
  } catch (err) {
    res.status(500).send("Something went wrong");
  }
};

module.exports = {
  register,
  login,
};
