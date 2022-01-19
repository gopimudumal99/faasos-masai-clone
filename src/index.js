const express = require("express")
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.set("view engine", "ejs"); // root directory for views views/
app.use(express.static("public"));

// foodItems api 
app.use("/foodItems",require("./controllers/foodItems.controller"))

app.use("/collections", require("./controllers/foodItem.show"));

module.exports = app;
