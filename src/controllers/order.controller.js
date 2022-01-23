const express = require("express");
const router = express.Router();
const Order = require("../models/order.model");
const authenticate=require("../middlewares/authenticate");

router.get("", async (req, res) => {
    try {
        const page = +req.query.page || 1;
        const size = +req.query.size || 10;
        const offset = (page - 1) * size;
        const order = await Order.find().skip(offset).limit(size).lean().exec();
        return res.status(200).send(order);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

router.post("", async (req, res) => {
    try {
        console.log(req.body);
        const order = await Order.create(req.body);
        return res.status(201).send(order);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

router.patch("", authenticate, async (req, res) => {
    try {

        const order= await Order.findByIdAndUpdate(req.user._id, req.body, {
            new: true
        }).lean().exec();
        return res.status(201).send(order);
    } catch (err) {
        return res.status(500).send({message:err.message});
    }
});

router.delete("/:id", async (req, res) => {
    try {

        const order = await Order.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(user);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

router.get("/user",authenticate,async(req,res)=>{
    try{
        const order=await Order.findById(req.user._id).lean().exec();
        return res.status(200).send(order);
    }
    catch(err){
        return res.status(200).send({message:err.message})
    }
})
module.exports = router;