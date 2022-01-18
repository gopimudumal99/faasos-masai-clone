const router = require("express").Router();
// const fooditems = require("./fooditems.json");
const Product = require("../models/product.model")
const redis = require("../configs/redis")

//localhost:3000/foodItems
// router.get("", async (req, res) => {
//   try {
//     const products = await Product.find().sort().lean().exec();
//     res.send({ items: products });
//   } catch (err) {
//     res.send(err);
//   }
// });

// router.get("/:id", async (req, res) => {
//   try {
//     const product = await Product.find({ _id: req.params.id }).lean().exec();
//     res.send( product);
//   } catch (err) {
//     res.send(err);
//   }
// })


//    ######################################### Redis methode #################
router.get("", async (req, res) => {
  try {
    redis.get("products", async function (err, products) {
      if (err) return res.status(500).send({ message: err.message });

      if (products) {
        const allPorducts = JSON.parse(products);
        return res.status(200).send({ products: allPorducts, redis: true });
      } else {
        const products = await Product.find().sort().lean().exec();
        redis.set("products", JSON.stringify(products));
        res.send({ products: products, redis: false });
      }
    });
  } catch (err) {
    res.send(err.message);
  }
});



module.exports = router;
