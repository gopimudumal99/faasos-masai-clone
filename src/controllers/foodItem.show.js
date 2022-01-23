const router = require("express").Router();
const Product = require("../models/product.model")



router.get("", async (req, res) => {
    
    const products = await Product.find().lean().exec()
    // console.log(products)
    res.render("collections", {products:products});
});

router.get("", async (req, res)=>{ 
    try {
    let queries = req.query;
    let filterObj = {};
    for (let query in queries) {
      if (query == "cat") {
        filterObj[query] = queries[query];
      }
    }
    const products = await Product.find(filterObj).lean().exec();
    res.send({ items: products });
    } catch (err) {
        
    }
})


router.get("/:id", async (req, res) => { 
    try {
        
        const product = await Product.findById(req.params.id).lean().exec();
       
        res.render("singleFood", {product:product})
    } catch (error) {
        res.send(error)
    }
})


module.exports = router;
