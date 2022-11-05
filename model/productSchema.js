const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  category: {
    type: String,
  },
  brandName: {
    type: String,
  },
  itemName: {
    type: String,
  },
  size: {
    type: String,
  },
  color: {
    type: String,
  },
  gender: {
    type: String,
  },
});

const product = new mongoose.model("product", productSchema);
module.exports = product;
