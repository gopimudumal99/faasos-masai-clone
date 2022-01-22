const express = require("express")
const app = express();

const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set("view engine", "ejs"); // root directory for views views/
app.use(express.static("public"));

app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')))

app.get("",(req,res)=>{
 try {
  return res.render("home")
 } catch (error) {
   return res.status(500).send({message:error.message})
 }
 
  })



// foodItems api 
// app.use("/foodItems",require("./controllers/foodItems.controller"))

// app.use("/collections", require("./controllers/foodItem.show"));

module.exports = app;