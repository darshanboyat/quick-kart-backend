const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://Roshan:roshan123@trail.33ilqpu.mongodb.net/?retryWrites=true&w=majority",{usenewurlparser:true})
const db = mongoose.connection
db.on("error",console.error.bind(console,"Connection Error"))

db.once("open",()=>{
    console.log("Database Connected")
})