const express=require("express");
const router=express.Router();
const Product=require("../models/products.model")

router.get("", async (req, res) => {
    try {
        const products = await Product.find({category:""}).count().lean().exec();
        console.log(products)
        return res.send({products})
    } catch (err) {
        res.send(err.message)
    }
});

module.exports=router;