const user = require("../model/userSchema");
const products = require("../model/productSchema");
const orders = require("../model/order");
const express = require("express");
const Router = express.Router();

Router.post("/user/:id/:product")

