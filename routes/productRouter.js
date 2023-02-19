const {postOrder, getOrder, getAllProducts} = require("../controller/orderController")
const authenticate = require("../middleware")
const express = require("express")
const Router = express.Router();
Router.get("/products", getAllProducts);
Router.get("/order/products", authenticate.verifyToken, getOrder)
Router.post("/setOrders", postOrder)
module.exports = Router