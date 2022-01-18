const router = require("express").Router();
// const fooditems = require("./fooditems.json");
const Product = require("../models/product.model")

//localhost:3000/foodItems
router.get("", async (req, res) => {
  try {
    const products = await Product.find().sort().lean().exec();
    res.send({ items: products });
  } catch (err) {
    res.send(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.find({ _id: req.params.id }).lean().exec();
    res.send({item: product });
  } catch (err) {
    res.send(err);
  }
})





module.exports = router;
