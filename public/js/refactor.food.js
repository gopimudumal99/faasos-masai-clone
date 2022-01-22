var arr = []

let showData = (data, start, location) => {
    let obj = data.items;
    location.innerHTML=''
  obj.forEach((el) => {
    if (el.category.startsWith(start)) {
      // console.log(el)
      // ****************start**********
      let { desc, img, name, price, rate, s_desc, bought, cat } = el;
      let div = document.createElement("div");
        div.setAttribute("id", "main_div");
        // div.addEventListener("click", () => { 
        //     console.log(el)
        // })
      let imgdiv = document.createElement("div");
      imgdiv.setAttribute("id", "imgdiv01");
      let img1 = document.createElement("img");

      img1.setAttribute("src", img);

      let namediv = document.createElement("div");
      namediv.setAttribute("id", "namediv01");
      let name1 = document.createElement("h3");
      name1.innerHTML = `${name}`;

      let pricediv = document.createElement("div");
      pricediv.setAttribute("id", "pricediv01");
      let priceimg = document.createElement("img");
      if (cat == "veg") {
        priceimg.setAttribute(
          "src",
          "https://www.iamgoingvegan.com/wp-content/uploads/2020/05/Indian-Vegetarian-Mark-1-1024x1024.jpg"
        );
      } else {
        priceimg.setAttribute(
          "src",
          "https://raizethebar.com/media/non-veg-sign_aXi4mRk.png"
        );
      }
      let price1 = document.createElement("h5");

      price1.setAttribute("id", "price01");
      price1.innerHTML = `₹ ${price}`;

      let p_div = document.createElement("div");
      p_div.setAttribute("id", "p_div01");
      let p = document.createElement("p");
      p.innerHTML = `${s_desc}`;
      let br = document.createElement("br");
      let p1 = document.createElement("div");
      p1.setAttribute("id", "readmore");
      p1.innerText = "Read More";

      let buttom = document.createElement("div");
      buttom.setAttribute("id", "buttom01");
      let rate_div = document.createElement("div");
      rate_div.setAttribute("id", "rate_div01");
      let buttonrate = document.createElement("button");
      buttonrate.setAttribute("id", "buttonrate");
      buttonrate.innerHTML = `<i class="fas fa-star fa-customize"></i> ${rate}`;
      let pbought = document.createElement("p");
      pbought.innerHTML = `${bought}`;

      let add_div = document.createElement("div");
      add_div.setAttribute("id", "add_div01");
      let addbtn = document.createElement("button");
      addbtn.setAttribute("id", "addbtn01");
     addbtn.setAttribute("class", "addbtn01");
      addbtn.addEventListener("click", () => {
        arr.push(el);
        localStorage.setItem("cartItems", JSON.stringify(arr));
      });
      addbtn.innerText = "ADD";
      let costa = document.createElement("p");
      costa.innerText = "Customisable";

      imgdiv.append(img1);

      pricediv.append(priceimg, price1);
      namediv.append(name1, pricediv);

       p_div.append(p, br, p1);

        rate_div.append(buttonrate, pbought);
        
        add_div.append(addbtn, costa);
        
      buttom.append(rate_div, add_div);

      div.append(imgdiv, namediv, p_div, buttom);
       namediv,imgdiv.addEventListener("click", () => {
          console.log(el);
          window.location.href = `/collections/${el._id}`;
          // newPage(el);
        });

      location.append(div);

      //***************end************
    }
  });
}


let cartFunction = ()=>{ 

// custom btn
let btn05 = document.getElementById("addbtn01")
//    let count = 1


btn05.addEventListener("click", function () {
    let quantity = document.getElementById("quantity")
    let minus = document.getElementById("minus").addEventListener("click", function () {
        quantity.innerHTML = ""
    })
    let plus = document.getElementById("plus").addEventListener("click", function () {
        // if (quantity.value > 1) {
        //     count++
        //     quantity.value = count
        // }
    })
})


// cart Items
let cartnumber = document.getElementById("style")
let cartname = document.getElementsByClassName("style1")
    
let data
let rupes
let total
data = JSON.parse(localStorage.getItem("cartItems"))
let cartshadow = document.getElementById("cartbox")
let checkbtndisplay = document.getElementById("dom2check")

let addbtn = document.getElementsByClassName("addbtn01")
for (var i = 0; i < addbtn.length; i++) {
    var button = addbtn[i]
    button.addEventListener("click", showcart)
}


var count1 = 0

function showcart() {

    // checkout functianality
    
    // checkbtndisplay.style.position="fixed"
    
    // cartname.style.position = "fixed"
    // cartnumber.style.position = "fixed"
    
    
    data = JSON.parse(localStorage.getItem("cartItems"))
    if (data != undefined && data.length != 0) {

        cartname.innerHTML = ""
        cartname[0].style.display = "none"
        // cartshadow.style.position="fixed"
        // cartshadow.style.top="3px"
        cartshadow.style.display = "block"
        cartshadow.style.width = "98%"
        cartshadow.style.margin = "auto"
        cartshadow.style.padding = "10px"
        cartshadow.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px"
        cartshadow.style.borderRadius = "10px"
    
        checkbtndisplay.style.display = "block"
        checkbtndisplay.style.width = "100%"
        checkbtndisplay.style.margin = "auto"
        checkbtndisplay.style.backgroundColor = "#ffd344"
        checkbtndisplay.style.fontSize = "20px"
        checkbtndisplay.style.fontWeight = "700"
        checkbtndisplay.style.padding = "12px"
        checkbtndisplay.style.border = "none"
        checkbtndisplay.style.borderRadius = "5px"
        checkbtndisplay.style.marginTop = "10px"
        checkbtndisplay.style.cursor = "pointer"
    } else { 
        for (let i = 0; i < cartname.length; i++) { 
            cartname[i].style.display = "block";
        }
    }
    count1++

    if (data.length == 0) {

        cartshadow.style.display = "none"

    }
    if (data.length == 1) {
        cartnumber.innerHTML = `Cart <span id="cartstyle"> ${1} item</span>`
    } else {
        cartnumber.innerHTML = `Cart <span id="cartstyle"> ${data.length} items</span>`
    }
    rupes = document.getElementById("rupee")
    let dom = document.getElementById("dom01")
    // rupes.style.position = "fixed"
    // dom.style.position = "fixed"

    // total calculation

    totalData(data)

    dom.innerHTML = ""
    data.forEach(function (el, i) {
        var count = 1
        let {
            desc,
            img,
            name,
            price,
            rate,
            s_desc,
            bought,
            cat
        } = el;

        let div = document.createElement("div")
        div.setAttribute("id", "cartdiv")
        div.setAttribute("class", "cartdiv")
        let food = document.createElement("div")
        food.setAttribute("id", "food")
        let imgdiv = document.createElement("div")
        imgdiv.setAttribute("id", "imgicon01")
        let priceimg = document.createElement("img")
        priceimg.setAttribute("id", "priceimg01")
        if (cat == "veg") {
            priceimg.setAttribute(
                "src",
                "https://www.iamgoingvegan.com/wp-content/uploads/2020/05/Indian-Vegetarian-Mark-1-1024x1024.jpg"
            );
        } else {
            priceimg.setAttribute(
                "src",
                "https://raizethebar.com/media/non-veg-sign_aXi4mRk.png"
            );
        }


        let foodnamediv = document.createElement("div")
        let foodname = document.createElement("p")
        foodname.setAttribute("id", "foodname")
        foodname.innerText = name
        // foodnamediv.style.position="fixed"
        let pricediv = document.createElement("div")
        pricediv.setAttribute("id", "pricediv")
        pricediv.innerHTML = `₹ ${price}`
        // pricediv.style.position="fixed"

        //button + & -

        let buttonsdiv = document.createElement("div")
        buttonsdiv.setAttribute("id", "buttonsdiv")

        let input01 = document.createElement("input")
        input01.setAttribute("class", "input01")
        input01.setAttribute("id", "input01");
        input01.value = 1;

        let minus = document.createElement("button")
        minus.setAttribute("id", "minus")
        minus.innerText = "-"
        minus.addEventListener("click", function () {
            if (count > 1) {
                count--
                input01.value = count
                rupes.innerHTML = `₹ ${total * count}`
                pricediv.innerHTML = `₹ ${price * count}`
            } else {
                count1--
                console.log(arr)
                cartnumber.innerHTML = `Cart <span id="cartstyle"> ${count1} items</span>`
                if (count1 == 0) {
                    cartshadow.style.display = "none"
                    cartnumber.innerHTML = `Cart`
                    checkbtndisplay.style.display = "none"
                } else {
                    cartnumber.innerHTML = `Cart <span id="cartstyle"> ${count1} items</span>`
                }
                removebtn(el, i)
                div.innerHTML = ""
                div.style.display = "none"
            }


        })
        // cartshadow.style.position = "fixed"
        // cartshadow.style.marginTop = "100px"
        // dom.style.position = "fixed"
        // dom.style.display="block"
        // dom.style.marginTop = "100px"

        // checkbtndisplay.style.position = "fixed"

        // cartname.style.position = "fixed"
        // cartnumber.style.position = "fixed"
        //  rupes.style.position = "relative"

        let plus = document.createElement("button")
        plus.innerText = "+"
        plus.setAttribute("id", "plus")
        plus.addEventListener("click", function () {
            count++
            input01.value = count
            let eachprice = price * count
            rupes.innerHTML = `₹ ${total + ((count - 1) * price)}`
            pricediv.innerHTML = `₹ ${price * count}`
        })

        imgdiv.append(priceimg)
        foodnamediv.append(foodname)
        food.append(imgdiv, foodnamediv)
        buttonsdiv.append(minus, input01, plus)
        div.append(food, buttonsdiv, pricediv)
        dom.append(div)
    })

}


function removebtn(m, i) {
    data = data.filter(function (elem, ind) {
        return i !== ind
    })
    let data1 = data
    console.log("data1:", data)
    arr = data1
    if (arr.length == 0) { 
        console.log("true")
        for (let i = 0; i < cartname.length; i++) { 
            cartname[i].style.display = "block";
        }
    }
    localStorage.setItem("cartItems", JSON.stringify(data1))
    totalData(data1)
    showcart(data1)
}

function totalData(data) {
    total = data.reduce(function (acc, cv) {
        return acc + Number(cv.price)
    }, 0)
    rupes.innerHTML = `₹ ${total}`
    console.log(total)

}


// let checksend = document.getElementById("dom2check")
// checksend.addEventListener("click", function () {
//     localStorage.setItem("checkdata", JSON.stringify(data))
// })


let linkgo = document.getElementsByClassName("li1")
let dataaaa = document.querySelector(".set")

for (var i = 0; i < linkgo.length; i++) {
    var link = linkgo[i]
    link.addEventListener("click", function () {
        console.log("here")
    })

}

showcart()
} 

export { showData, cartFunction }; 
