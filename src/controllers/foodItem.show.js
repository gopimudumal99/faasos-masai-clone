const router = require("express").Router();
const Product = require("../models/product.model")



router.get("", async (req, res) => {
    const products = await Product.find().lean().exec()
    // console.log(products)
    res.render("collections", {products:products});
});



router.get("/:id", async (req, res) => { 
    try {
        const product = await Product.findById(req.params.id).lean().exec()
        console.log(product)
        res.render("singleFood", {product:product})
    } catch (error) {
        res.send(error)
    }
})


module.exports = router;
