document.getElementById("coupon").addEventListener("input", () => {
    if (document.getElementById("coupon").value == "masai30") {
        alert("coupoun successfully applied!")
        let totalVal = Gtotal();
        document.getElementById("GTotal").textContent = totalVal * 0.7;
        localStorage.setItem("total", (totalVal * 0.7));
    }
});

let inc = (index, str) => {
    let cart = JSON.parse(localStorage.getItem("cartItems"));
    let quantity = JSON.parse(localStorage.getItem("quantity"));
    localStorage.removeItem("quantity");
    console.log(str);
    let flag = false;
    localStorage.setItem("token", data.token);
    if (str == "+") {
        quantity[index] = +(quantity[index]) + 1;
        console.log(quantity[index]);
    } else {
        quantity[index] = quantity[index] - 1;
        if (quantity[index] == 0)
            flag = true;
    }

    let arr = [];
    let array = [];
    if (flag) {
        for (let i = 0; i < cart.length; i++) {
            if (i != index) {
                arr.push(cart[i]);
                array.push(quantity[i]);
            }
        }
        cart = arr;
        quantity = array;
    }
    localStorage.setItem("cartItems", JSON.stringify(cart));
    localStorage.setItem("quantity", JSON.stringify(quantity));
    orderSummary();
}

let Gtotal = () => {
    let quantity = JSON.parse(localStorage.getItem("quantity"));
    let cart = JSON.parse(localStorage.getItem("cartItems"));
    let total = 0;
    for (let i = 0; i < quantity.length; i++) {
        total = total + (+(cart[i].price)) * quantity[i];
    }
    console.log(total);
    document.getElementById("GTotal").textContent = total;
    localStorage.setItem("total", total);
    return total;
}

let orderSummary = () => {
    document.querySelector("#order_summary table").innerHTML = "";
    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    let quantity = JSON > parse(localStorage.getItem("quantity")) || [];

    cart.map((el, index) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.textContent = el.name;

        let td2 = document.createElement("td");
        let plus = document.createElement("button");
        plus.textContent = "+";
        plus.addEventListener("click", () => {
            inc(index, "+");
        });
        let minus = document.createElement("button");
        minus.textContent = "-";
        minus.addEventListener("click", () => {
            inc(index, "-");
        });
        p = document.createElement("p");
        p.textContent = "  " + quantity[index] + "  ";
        plus.style.display = "inline";
        p.style.display = "inline";
        minus.style.display = "inline";
        td2.append(plus, p, minus);

        let td3 = document.createElement("td");
        td3.textContent = quantity[index] * (+(el.price));

        tr.append(td1, td2, td3);
        document.querySelector("#order_summary table").append(tr);
    });
    localStorage.setItem("cartItems", JSON.stringify(cart));
    Gtotal();
}
orderSummary();