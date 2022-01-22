const express=require("express");
const router=express.Router();
const Product=require("../models/products.model")

router.get("", async (req, res) => {
    try {
        console.log(req.query);
        const products = await Product.find().count().lean().exec();        
        return res.send({products})
    } catch (err) {
        res.send(err.message)
    }
});

module.exports=router