const { application } = require("express")
const express = require("express")
const userRouter = require("./routes/userRouter")
const mongoose = require("mongoose")
const adminRouter = require("./routes/adminRouter")
const productRouter = require("./routes/productRouter")

const cors = require('cors');


const app = express()

// mongoose.connect("mongodb+srv://Roshan:roshan123@trail.33ilqpu.mongodb.net/?retryWrites=true&w=majority").then(()=> console.log("Database connected successfully")).catch(()=>{
mongoose.connect("mongodb://localhost:27017/quickkart").then(()=> console.log("Database connected successfully")).catch(()=>{
    console.log("Database connection error")
})

app.set('port', (process.env.PORT || 3300))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(cors());
app.use(userRouter)
app.use(adminRouter)
app.use(productRouter)



app.listen(app.get('port'), ()=>{
    console.log(`listening on port ${app.get('port')}`)
})