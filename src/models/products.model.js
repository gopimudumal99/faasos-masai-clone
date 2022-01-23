const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
  category: {type:String,required:true},
  id:  {type:Number,required:true},
  img_url: {type:String,required:true} ,
  name:  {type:String,required:true},
  price: {type:String,required:true} ,
  short_desc:  {type:String,required:true},
  desc: {type:String,required:true} ,
  rating:  {type:String,required:true},
  bought:  {type:String,required:true},
});
module.exports = mongoose.model("product",productSchema)