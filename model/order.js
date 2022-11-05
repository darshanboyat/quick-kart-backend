const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    order_username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    order_details: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    }],
    price: {
        type: String,
    },
    payment: {
        type: String
    },
    delivery_add: {
        type: String,
    }
});

const order = mongoose.model("Order", orderSchema);

module.exports = order;