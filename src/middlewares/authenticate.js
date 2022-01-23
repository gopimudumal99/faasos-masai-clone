const jwt=require("jsonwebtoken");
require("dotenv").config();

const verifyToken=(token)=>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token, process.env.jwtSectretKey, (err,user)=>{
            if(err) return reject(err);
            resolve(user);
        })
    })
}

const getUser=async(req,res,next)=>{
    if(!req.headers.authorization)
        return res.status(400).send({message: "please provide valid token"});
    
    const bearerToken=req.headers.authorization;
    if(!bearerToken.startswith("Bearer "))
        return res.status(400).send({message: "please provide valid token"});
    
        const token= bearerToken.split(" ")[1];
        let user
        try{
            user=await verifyToken(token);            
        }
        catch(err){
            return res.status(400).send({message:"token is invalid"});
        }
        req.user=user.user;

        next();
}

module.exports=getUser;