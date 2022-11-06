const user = require("../model/userSchema");
const products = require("../model/productSchema");
const orders = require("../model/order");
const express = require("express");
const Router = express.Router();
const productRouter = require("./productRouter")

Router.get("/products", productRouter.FindProducts)
Router.post("/user/:id/:product")

module.exports = Router