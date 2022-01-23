const express = require("express")
const app = express();
const cors = require("cors");
const path = require("path")

const corsOptions = {
  origin: ["*", "https://faasos-masai-clone.herokuapp.com", "http://localhost:3000"],
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set("view engine", "ejs"); // root directory for views views/
app.use(express.static("public"));

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


// foodItems api 
app.use("/foodItems",require("./controllers/foodItems.controller"))

app.use("/collections", require("./controllers/foodItem.show"));

module.exports = app;
