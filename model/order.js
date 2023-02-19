const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
    order: {type: Array, require: true},
    user: {type: Object, require: true},
    payment: {type: String}
}, {
    timestamps: true,
    get: time => time.toDateString()
 });

const order = new mongoose.model("order", orderSchema);
module.exports = order;
