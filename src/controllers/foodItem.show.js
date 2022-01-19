const router = require("express").Router();
const Product = require("../models/product.model")
router.get("", async (req, res) => {
    const products = await Product.find().lean().exec()
    // console.log(products)
    res.render("collections", {products:products});
});

module.exports = router;
