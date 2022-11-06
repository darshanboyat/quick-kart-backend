const Products = require("../model/productSchema");

const FindProducts = async (req, res) => {
  const product = await Products.find();
  return res.send(product)
};
module.exports = FindProducts