const user = require("../model/userSchema");
const admin = require("../model/admin");
const bcrypt = require("bcryptjs");
const ExpressError = require("../utils/errorGenerator.js");
const { generateAccessToken } = require("../utils/jwt");

const register = async (req, res) => {
  try {
    let { name, phone, email, permanentAddress, gender, password } = req.body;
    if (!name || !phone || !email || !permanentAddress || !password) {
      res.json({
        status: 501,
        error: true,
        success: false,
        message: "Some of the required fields are missing!!!",
      });
    } else {
      let hashedPassword = await bcrypt.hash(password, 10);

      let createUser = new user({
        name,
        phone,
        email,
        permanentAddress,
        gender,
        password: hashedPassword,
      });

      await user
        .create(createUser)
        .then(() =>
          res.json({
            status: 200,
            error: false,
            success: true,
            message: "User Created Successfully...",
          })
        )
        .catch((err) =>
          res.json({
            error: true,
            success: false,
            message: "An internal server has been caught",
          })
        );
    }
  } catch (err) {
    res.status(400).send("User not created");
  }
};


const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return new ExpressError(
      401,
      "Either username or password is missing in the request."
    );
  }

  await user.findOne({ email }).then(async (response) => {
    const matched = await bcrypt.compare(password, response.password);
    if (matched) {
      const token = generateAccessToken({ _id: response._id });
      res.json({
        error: false,
        sucess: true,
        message: "login user successfully",
        response,
        token,
      });
    } else {
      res.json({
        error: true,
        sucess: false,
        message: "Password not match!!!",
      });
    }
  }).catch(err => 
    res.json (
      {
        error: true,
        success: false,
        message: "User Not found please check the mail id!!!"
      }
    )
  )
};

const adminLogin = async (req, res) => {
  const { email, password, adminKey} = req.body;
  if (!email || !password || !adminKey) {
    return new ExpressError(
      401,
      "Either username or password is missing in the request."
    );
  }

  await admin.findOne({ email }).then(async (response) => {
    const matched = await bcrypt.compare(password, response.password);
    const adminKeyMatch = (adminKey === response.adminKey)
    if (matched & adminKeyMatch) {
      const token = generateAccessToken({ _id: response._id });
      res.json({
        error: false,
        sucess: true,
        message: "login user successfully",
        response,
        token,
      });
    } else {
      res.json({
        error: true,
        sucess: false,
        message: "Password not match!!!",
      });
    }
  }).catch(err => {
    res.json (
      {
        error: true,
        success: false,
        message: "User Not found please check the mail id!!!"
      }
    )
  })
};

module.exports = {
  register,
  adminLogin,
  loginUser,
};
