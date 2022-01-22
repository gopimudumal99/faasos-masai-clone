var card = document.getElementById("card").value;
var cvv = document.getElementById("cvv").value;
var owner = document.getElementById("owner").value;
var date = document.getElementById("date").value;
var button = document.querySelector("button");
button.addEventListener("click", ()=>{
    if (card.length === 16) {
        alert("Enter Valid Card Number");
    } else if (cvv.length == 3) {
        alert("Enter CVV");
    } else if (owner.length > 4) {
        alert("Enter Your Name");
    } else if (date.length > 0) {
        alert("Enter Expiration Date");
    } else {
        alert("Payment Successfull");        
        alert("Thanks for order");
        localStorage.removeItem("cartItems");
        window.location.href = "Home.html";
    }
});
var total = localStorage.getItem("total");
document.getElementById("bill").textContent = `The Total Amount to be deducted is ₹${total}`;