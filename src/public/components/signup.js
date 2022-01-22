let signup=()=>{
    return ` <div>
            <div class="top">
                <div style="display: flex;" id="close_signup">
                    <h2><i class="fas fa-chevron-left"></i></h2>
                    <h2 style="margin: 6%;">Sign Up</h2>
                </div>
                <p class="side_heading" style="margin-top: -5%; font-size: 13px;">Create a account with new phone number</p>
            </div>
            <div id="signup_logo_container">
                <img src= "../images/loginLogo.svg" >
            </div>
        </div>
        <div id="signup_details">
            <form>
                <select>
                    <option>+91</option>
                </select>
                <input placeholder="Phone number" type="tel" style="width: 79%;">
                <br><br>
                <input placeholder="Name" type="text">
                <br><br>
                <input placeholder="Email Address">
                <p style="margin-top: 0;font-size: 10px;color: red;display: none;">Please enter a valid email</p>
                <br>
                <br>
                <button type="submit">
                    <h3>CREATE ACCOUNT</h3>
                </button>
                <br>
                <p class="login_bottom" style="background-color: white;">By creating an account, I accept the <a href="#">Terms & Conditions</a></p>
                <br><br><br><br><br>
                <p class="login_bottom">Already have an account? <a href="#">Log in</a></p>
            </form>
        </div>`
}

let signupOpen=()=>{
    document.getElementById("signup_pop").style.display = "block";
    document.getElementById("blur").style.display = "block";
}

let signupClose=()=>{
     document.getElementById("signup_pop").style.display = "none";
     document.getElementById("blur").style.display = "none";
}

let isLoggedIn = (mobile = null) => {
    let user = JSON.parse(localStorage.getItem("user_fasoos")) || [];
    let flag = null;
    for (let i = 0; i < user.length; i++) {
        if (user[i].phone.includes(mobile)) {
            user[i].logedin = true;
            flag = i
        }
        user[i].logedin = false;
    }
    if (flag != null) {
        document.getElementById("account_notLogin").style.display = "none";
        document.getElementById("account_LoggedIn").style.display = "block";
        document.getElementById("name_when_logeedIn").innerText = user[flag].name;
        document.getElementById("mobile_when_logeedIn").innerText = user[flag].phone;
    } else {
        alert("user signed up");
    }
}


let storeUser=(e)=>{
    e.preventDefault();
    console.log("here");
    let user = JSON.parse(localStorage.getItem("user_fasoos")) || [];
    let data = {
        name: document.querySelectorAll("#signup_details input")[1].value,
        phone: document.querySelectorAll("#signup_details input")[0].value,
        email: document.querySelectorAll("#signup_details input")[2].value,
        address: null,
        type: JSON.stringify(localStorage.getItem("type_address")),
        logedin: true
    }

    for (let i = 0; i < user.length; i++) {
        if (user[i].phone.includes(data.phone)) {
            alert("enter a phone number that has not been used");
            return;
        }
        user[i].logedin = false;
    }
    user.push(data);
    localStorage.setItem("user_fasoos", JSON.stringify(user));
    isLoggedIn(document.querySelectorAll("#signup_details input")[1].value)
    document.getElementById("signup_pop").style.display = "none";
    document.getElementById("blur").style.display = "none";
}

let checkEmail=()=>{
    let email = document.querySelectorAll("#signup_details input")[2].value;
    if (email.includes(".") && email.includes("@")) {
        document.querySelector("#signup_details p").style.display = "none";
        document.querySelector("#signup_details button").style.backgroundColor = "yellow";
        document.querySelector("#signup_details button").style.color = "#000000";
        document.querySelector("#signup_details>form").addEventListener("submit", storeUser);
    } else {
        document.querySelector("#signup_details p").style.display = "block";
    }
}

export {signup, signupOpen, signupClose, checkEmail}