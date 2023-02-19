const mongoose = require("mongoose")

const Schema = mongoose.Schema 

const admin = new Schema(
    {
        name: {type: String, default: "Darshan Boyat", require: true},
        phone: {type: String, require: true},
        email: {type: String, default: "darshboyat@gmail.com", require: true},
        password: {type: String, require: true},
        adminKey: {type: String, require: true}
    }
)
module.exports = mongoose.model("admin", admin)