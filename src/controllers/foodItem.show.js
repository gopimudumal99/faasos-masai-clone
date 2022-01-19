const router = require("express").Router();
const Product = require("../models/product.model")

router.get("", async (req, res) => {
    const products = await Product.find().lean().exec()
    // console.log(products)
    res.render("collections", {products:products});
});


router.get("/:id", async (req, res) => {
  try {
    const product = await Product.find({ _id: req.params.id }).lean().exec();
    res.send({ item: product });
  } catch (err) {
    res.send(err);
  }
});


module.exports = router;
