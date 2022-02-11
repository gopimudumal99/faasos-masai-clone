const express = require("express");
const app = express();
const cors =require("cors");
const path = require("path");

// app.use(cors({
//     origin: "*",
// }));


//  https://faasos-masai-clone.herokuapp.com/

const corsOptions = {
  origin: [
    "*",
    "https://faasos-masai-clone.herokuapp.com",
    "http://localhost:3003",
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "POST"],
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS, PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With-content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});
const {
    body,
    validationResult
} = require('express-validator');


const UserController = require("./controllers/user.controller");

const {
    signup,
    login
} = require("./controllers/auth.controller");

const orderController = require("./controllers/order.controller");
const checkoutController = require("./controllers/checkout.controller");
const homeController=require("./controllers/home.controller");
const paymentController=require("./controllers/payment.controller");

//cors origin


app.use(express.json());
app.use("/user", UserController);
app.use("/order",orderController);


app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));










app.use("/collections", require("./controllers/foodItem.show"));

app.use("/foodItems",require("./controllers/foodItems.controller"))

app.use("/checkout", checkoutController);
app.use("",homeController);
app.use("/payment",paymentController);

app.post("/signup", body("name").isLength({
    min: 1
}), body("email").isEmail(), body("password").isLength({
    min: 8
}), signup);
app.post("/login", body("email").isEmail(), body("password").isLength({
    min: 8
}), login);
module.exports = app;

