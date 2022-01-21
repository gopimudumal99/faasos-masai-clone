import {login, openLogin, closeLogin,isLoggedIn} from "../components/login.js";
import {signup, signupOpen, signupClose,checkEmail} from "../components/signup.js";
import {addNewAddress, getLocation, close_pop, addAddress,save_address} from "../components/add_new_address.js";

let login_mobile = () => {
    let number = document.querySelector("#login_details input").value;

    if (number.length > 9) {
        document.querySelectorAll("#login_details p")[1].style.display = "none";
        document.getElementById("login_submit").style.color = "#000000";
        document.querySelector("#login_details button").style.backgroundColor = "yellow";
        document.querySelector("#login_details button").addEventListener("click", () => {
            isLoggedIn(document.querySelector("#login_details input").value);
            document.getElementById("login_pop").style.display = "none";
            document.getElementById("blur").style.display = "none";
        })

    } else {
        document.querySelectorAll("#login_details p")[1].style.display = "block";
    }
}

document.getElementById("login_pop").innerHTML=login();
document.getElementById("signup_pop").innerHTML=signup();
document.getElementById("add_new_address").innerHTML=addNewAddress();

document.querySelector("#delivery_addAddress button").addEventListener("click",addAddress)
document.getElementById("currentLocation").addEventListener("click",getLocation);    
document.getElementById("addAddress_submit").addEventListener("click",save_address);
    
//login
document.querySelector("#login_details input").addEventListener("input",login_mobile)
document.getElementById("login").addEventListener("click",openLogin);

document.getElementById("back").addEventListener("click",close_pop);
document.getElementById("close_login").addEventListener("click",closeLogin);

//signup
document.getElementById("signup").addEventListener("click",signupOpen);
document.getElementById("close_signup").addEventListener("click",signupClose);
document.querySelectorAll("#signup_details input")[2].addEventListener("input",checkEmail);

//payment
document.querySelector("#payment_choose>button").addEventListener("click",()=>{
    document.getElementById("payment_options").style.display="flex";
    document.querySelector("#payment_choose").style.display="none";
})