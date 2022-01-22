let addToCart = (data) => {
    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    cart.push(data);
    localStorage.setItem("cartItems", JSON.stringify(cart));
    document.getElementById("proceedToCheckout").style.display = "block";
    document.getElementById("proceedToCheckout").addEventListener("click", () => {
        window.location.href = "checkout.html"
    })
}

let display_fasoos = () => {
    let data = JSON.parse(localStorage.getItem("fasoos_new"));    
    document.querySelectorAll("#food_name").innerText = data.name
    document.querySelector("#img img").setAttribute("src", data.img);
    document.getElementById("f1").innerText = data.name;
    if (data.cat == "nonveg")
        document.querySelector("#f2 img").setAttribute("src", "https://img.icons8.com/color/2x/non-vegetarian-food-symbol.png");

    document.querySelectorAll("#f2>div")[1].innerText = "₹" + data.price;
    document.querySelectorAll("#s div")[1].innerText = data.rate;
    document.querySelectorAll("#s1>div")[1].innerText = data.bought;
    document.getElementById("des").innerText = data.desc;
    document.querySelector("#last>div").innerText = data.cat;
    document.querySelector("#s2>div").addEventListener("click", () => {
        addToCart(data);
    })
}
console.log(document.querySelectorAll("#top>span")[2])
display_fasoos();