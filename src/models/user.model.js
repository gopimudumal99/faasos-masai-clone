const mongoose=require("mongoose");
const bcrypt=require("bcryptjs")

let userSchema=mongoose.Schema({
    name:{type:String, required:true},
    mobile:{type:String, required:true, unique:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    address:{type:Object, required:false},
    roles:[{type:String, required:true}]
},
{
    versionKeys:false,
    timestamps:true
});

// userSchema.pre("save",(next)=>{
//     if (!this.isModified("password")) return next();
//     this.password=bcrypt.hashSync(this.password, 8);
//     console.log(this.password);
//     return next();
// });

userSchema.methods.checkpassword=(password)=>{
    return bcrypt.compareSync(password,this.password)
}

const User=mongoose.model("user",userSchema);

module.exports=User;