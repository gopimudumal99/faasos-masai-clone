document.getElementById("coupon").addEventListener("input", () => {
    if (document.getElementById("coupon").value == "masai30") {
        alert("coupoun successfully applied!")
        let totalVal = Gtotal();
        document.getElementById("GTotal").textContent = totalVal - 30;
        localStorage.setItem("total", (totalVal - 30));
    }
});

let inc = (index, str) => {
    let cart = JSON.parse(localStorage.getItem("cartItems"));
    localStorage.removeItem("cartItems");
    console.log(str);
    let flag = false;
    if (str == "+") {
        cart[index].count = +(cart[index].count) + 1;
        console.log(cart[index].count);
    } else {
        cart[index].count = cart[index].count - 1;
        if (cart[index].count == 0)
            flag = true;
    }

    let arr = []
    if (flag) {
        for (let i = 0; i < cart.length; i++) {
            if (i != index) arr.push(cart[i]);
        }
        cart = arr;
    }
    console.log(cart[index]);
    localStorage.setItem("cartItems", JSON.stringify(cart));
    orderSummary();
}

let Gtotal = () => {
    let cart = JSON.parse(localStorage.getItem("cartItems"));
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total = total + (+(cart[i].price)) * cart[i].count;
    }
    console.log(total);
    document.getElementById("GTotal").textContent = total;
    localStorage.setItem("total", total);
    return total;
}

let orderSummary = () => {
    document.querySelector("#order_summary table").innerHTML = "";
    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

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
        el["count"] = el.count || 1;
        minus.textContent = "-";
        minus.addEventListener("click", () => {
            inc(index, "-");
        });
        p = document.createElement("p");
        p.textContent = "  " + el.count + "  ";
        plus.style.display = "inline";
        p.style.display = "inline";
        minus.style.display = "inline";
        td2.append(plus, p, minus);

        let td3 = document.createElement("td");
        td3.textContent = el.count * (+(el.price));

        tr.append(td1, td2, td3);
        document.querySelector("#order_summary table").append(tr);
    });
    localStorage.setItem("cartItems", JSON.stringify(cart));
    Gtotal();
}
orderSummary();