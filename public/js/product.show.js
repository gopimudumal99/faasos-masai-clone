import { showData, cartFunction } from "./refactor.food.js";

let box1 = document.getElementById("box1")
let box2 = document.getElementById("box2")
let box4 = document.getElementById("box4")
let box7 = document.getElementById("box7")
let box8 = document.getElementById("box8")
let box9 = document.getElementById("box9")
let box11 = document.getElementById("box11")
let box12 = document.getElementById("box12")
let box13 = document.getElementById("box13");

let location = [box1, box2, box4, box7, box8, box9, box11, box12, box13]

let start = [
  "Fab Wraps starting at 99 each",
  "Faasos Chefs Specials",
  "Daily Value Wrap Combos (Save Upto 40% Extra",
  "Signature Wraps",
  "Meal Combos (Upto 25% Savings)",
  "Rice Bowls",
  "Sides And Beverages",
  "Desserts",
  "Classic Wraps",
];

const foodAPI = async () => {
  try {
    let url = `https://faasos-masai-clone.herokuapp.com/foodItems`;
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data);
      for (var i = 0; i < start.length; i++) {
        showData(data,start[i], location[i])
        cartFunction()
      }
  } catch (err) {
    console.log("err:", err);
  }
};
foodAPI();


// function showData(data,start,location) {
//     let obj = data.items
//     obj.forEach((el) => {
//         if (el.category.startsWith(start)) {
//             // console.log(el)
//             // ****************start**********
//                 let { desc, img, name, price, rate, s_desc, bought, cat } = el;
//                 let div = document.createElement("div");
//                 div.setAttribute("id", "main_div");
//                 let imgdiv = document.createElement("div");
//                 imgdiv.setAttribute("id", "imgdiv01");
//                 let img1 = document.createElement("img");

//                 img1.setAttribute("src", img);

//                 let namediv = document.createElement("div");
//                 namediv.setAttribute("id", "namediv01");
//                 let name1 = document.createElement("h3");
//                 name1.innerHTML = `${name}`;

//                 let pricediv = document.createElement("div");
//                 pricediv.setAttribute("id", "pricediv01");
//                 let priceimg = document.createElement("img");
//                 if (cat == "veg") {
//                   priceimg.setAttribute(
//                     "src",
//                     "https://www.iamgoingvegan.com/wp-content/uploads/2020/05/Indian-Vegetarian-Mark-1-1024x1024.jpg"
//                   );
//                 } else {
//                   priceimg.setAttribute(
//                     "src",
//                     "https://raizethebar.com/media/non-veg-sign_aXi4mRk.png"
//                   );
//                 }
//                 let price1 = document.createElement("h5");

//                 price1.setAttribute("id", "price01");
//                 price1.innerHTML = `₹ ${price}`;

//                 let p_div = document.createElement("div");
//                 p_div.setAttribute("id", "p_div01");
//                 let p = document.createElement("p");
//                 p.innerHTML = `${s_desc}`;
//                 let br = document.createElement("br");
//                 let p1 = document.createElement("div");
//                 p1.setAttribute("id", "readmore");
//                 p1.innerText = "Read More";

//                 let buttom = document.createElement("div");
//                 buttom.setAttribute("id", "buttom01");
//                 let rate_div = document.createElement("div");
//                 rate_div.setAttribute("id", "rate_div01");
//                 let buttonrate = document.createElement("button");
//                 buttonrate.setAttribute("id", "buttonrate");
//                 buttonrate.innerHTML = `<i class="fas fa-star fa-customize"></i> ${rate}`;
//                 let pbought = document.createElement("p");
//                 pbought.innerHTML = `${bought}`;

//                 let add_div = document.createElement("div");
//                 add_div.setAttribute("id", "add_div01");
//                 let addbtn = document.createElement("button");
//                 addbtn.setAttribute("id", "addbtn01");
//                 addbtn.setAttribute("class", "addbtn01");
//                 addbtn.addEventListener("click", () => {
//                   arr.push(el);
//                   localStorage.setItem("cartItems", JSON.stringify(arr));
//                 });
//                 addbtn.innerText = "ADD";
//                 let costa = document.createElement("p");
//                 costa.innerText = "Customisable";

//                 imgdiv.append(img1);

//                 pricediv.append(priceimg, price1);
//                 namediv.append(name1, pricediv);

//                 p_div.append(p, br, p1);

//                 rate_div.append(buttonrate, pbought);
//                 add_div.append(addbtn, costa);
//                 buttom.append(rate_div, add_div);

//                 div.append(imgdiv, namediv, p_div, buttom);
//                 imgdiv.addEventListener("click", () => {
//                   newPage(el);
//                 });

//                 location.append(div);

//             //***************end************
            
//         }
//     })
// }



