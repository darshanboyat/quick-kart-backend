const { application } = require("express")
const express = require("express")
const userRouter = require("./routes/userRouter")
require("./config/db")
const adminRouter = require("./routes/adminRouter")


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(userRouter)
app.use(adminRouter)



app.listen(3300, ()=>{
    console.log("listening...")
})