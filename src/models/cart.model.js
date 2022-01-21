const mongoose=require("mongoose");

const cartSchema= new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId, ref:"user", require:true},
    items:[{type:mongoose.Schema.Types.ObjectId, ref:"product", required:false}],
    quantity:[{type:Number, required:false}],
});

module.exports=mongoose.model("cart",cartSchema);

