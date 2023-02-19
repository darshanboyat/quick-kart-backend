const Order = require("../model/order")
const Products = require("../model/productSchema");


const getAllProducts = async (req, res) => {
    const product = await Products.find();
    return res.json(product)
}
const getOrder = async (req, res) => {
    await Order.find().then((data)=>
        res.json(
            {
                error: false,
                success: true,
                data
            }
        )
    ).catch(err => res.json(
        {
            error: true,
            success: false,
            message: "Data not found!!!"
        }
    ))
}
const postOrder = async(req, res) => {
    const {user, order} = req.body

    await Order.create({user, order}).then(()=>
    res.json(
        {
            error: false,
            success: true,
            message: "Order added successfully..."
        }
    ));
}

module.exports = {getOrder, postOrder, getAllProducts}