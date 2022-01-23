require("dotenv").config();
const jwt=require("jsonwebtoken");

const User=require("../models/user.model");

const newToken=(user)=>{
    return jwt.sign({user:user},process.env.jwtSecretKey);
};

const signup=async (req,res)=>{
    try{
        console.log("posting")
        let user=await User.findOne({"mobile":req.body.mobile}).lean().exec();
        if(user){
            return res.status(400).send({message:"phone number already exists"});
        }
        console.log(req.body);
        user=await User.create(req.body);
        const token=newToken(user);
        return res.status(201).send({user:user, token:token});
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
}

const login=async(req,res)=>{
    try{
        let user=await User.find({email:req.body.email}).lean().exec();
        if(!user) return res.status(400).send({message:"invalid credentials"});

        const match =user.checkpassword(req.body.password);
        if(!match) return res.status(400).send({message:"invalid credentials"});
        
        const token=newToken(user);

        return res.status(201).send({token:token, user:user});
    }
    catch(err){
        return res.status(500).send(err.message);
    }
}

module.exports={signup,login}