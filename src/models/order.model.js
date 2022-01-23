const mongoose=require("mongoose");

const orderSchema= new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId, ref:"user", required:true},
    items:[{type:mongoose.Schema.Types.ObjectId, ref:"product", required:true}],
    total:{type:Number, required:true},
    status:{type:String, required:true, default:"Pending"}
},{
    versionKey:false,
    timestamps:true
});

const Order=mongoose.model("order",orderSchema);
module.exports=Order;