const express = require("express")
const { adminLogin} = require("../controller/authController");
const {addProducts, getProductList, register, getOrder} = require("../controller/adminController");
const authenticateToken = require("../middleware");
const router = express.Router()


router.get("/admin/get_all_products", authenticateToken.verifyToken, getProductList)
router.post("/admin/add_new_product", authenticateToken.verifyToken, addProducts)
router.get("/admin/order", authenticateToken.verifyToken, getOrder)
router.post("/auth/admin/login", adminLogin)
router.post("/auth/admin/register", register)

module.exports= router;
