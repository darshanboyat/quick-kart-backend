const Products = require('../model/productSchema')
const Order = require('../model/order')
const Admin = require('../model/admin')
const bcrypt = require("bcryptjs")

const addProducts = async (req, res) => {
    const addProduct = new product(req.body)
    await Products.create(addProduct).then( () => 
    res.json(
        {
            status: 200,
            error: false,
            success: true,
            message: "Product has been added successfully...."
        })
    ).catch(err => {
        res.json(
            {
                status: 501,
                error: true,
                success: false,
                message: "An internal server error has been occurred while adding new product!!"
            })
    })
}
const getProductList = async (req, res) => {
    await Products.find().then(response => {
    res.json(
        {
            status: 200,
            error: false,
            success: true,
            message: "Data found Successfully....",
            response
        }
    )
   }).catch(err => 
    res.json(
        {
            status: 501,
            error: true,
            success: false,
            message: "An internal server error has been occurred while fetching products from the database!!!",
        }
    ))
}
const register = async (req, res) => {
    try {
        let { name, phone, email, password, adminKey} = req.body;
        if (!name) {
          res.json({
            status: 501,
            error: true,
            success: false,
            message: "Some of the required fields are missing!!!",
          });
        } else {
          let hashedPassword = await bcrypt.hash(password, 10);
    
          let createUser = new Admin({
            name,
            phone,
            email,
            adminKey,
            password: hashedPassword,
          });
    
          await Admin
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
        console.log(err)
        res.status(400).send("User not created");
      }
}
const getOrder = async (req, res) => {
    await Order.find().then(response => {
        res.json(
            {
                status: 200,
                error: false,
                success: true,
                message: "Data found Successfully....",
                response
            }
        )
       }).catch(err => 
        res.json(
            {
                status: 501,
                error: true,
                success: false,
                message: "An internal server error has been occurred while fetching products from the database!!!",
            }
        ))
}
module.exports = {addProducts, getProductList, register, getOrder}