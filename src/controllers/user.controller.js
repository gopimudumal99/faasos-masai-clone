const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const authenticate = require("../middlewares/authenticate");

router.get("",async(req,res)=>{
    try{
        const page=+req.query.page || 1;
        const size=+req.query.size || 10;
        const offset=(page-1)*size;
        const user= await User.find().skip(offset).limit(size).lean().exec();
        return res.status(200).send(user);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
});

router.post("", async (req, res) => {
    try {
        console.log(req.body);
        const user = await User.create(req.body);
        return res.status(201).send(user);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

router.patch("", authenticate, async (req, res) => {
    try {
        
        const user = await User.findByIdAndUpdate(req.user._id,req.body,{new:true}).lean().exec();
        return res.status(201).send(user);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        
        const user = await User.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(user);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

module.exports = router;