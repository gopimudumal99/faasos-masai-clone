const express = require("express");
const app = express();
const {
    body,
    validationResult
} = require('express-validator');
const path = require("path");
const cors =require("cors");

const UserController = require("./controllers/user.controller");
const {
    signup,
    login
} = require("./controllers/auth.controller");
const productController = require("./controllers/product.controller");
const checkoutController = require("./controllers/checkout.controller");
const homeController=require("./controllers/home.controller");

//cors origin
app.use(cors({
    origin: "*",
}));
app.use(express.json());

app.use("/user", UserController);
app.use("/products", productController);

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));

app.use("/checkout", checkoutController);
app.use("",homeController);

app.post("/signup", body("name").isLength({
    min: 1
}), body("email").isEmail(), body("password").isLength({
    min: 8
}), signup);
app.post("login", body("email").isEmail(), body("password").isLength({
    min: 8
}), login);
module.exports = app;