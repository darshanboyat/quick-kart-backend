const express = require("express")
const product = require("../model/productSchema")
const router = express.Router()


router.post("/product", async (req , res)=>{
    const addProduct = new product(req.body)
    await addProduct.save()
    res.send(addProduct)
})

router.patch("/product/:id",async(req,res)=>{
    const id = req.params.id;
    const findProduct = await product.findByIdAndUpdate(id, req.body)
    await findProduct.save()
    res.send(findProduct)

})

module.exports= router;
