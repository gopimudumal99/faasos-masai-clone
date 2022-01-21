let login=()=>{
    return `<div class="top">
                <div>
                    <div style="display: flex;" id="close_login">
                        <h2 id="back"><i class="fas fa-chevron-left"></i></h2>
                        <h2 style="margin: 6%;">Login</h2>
                    </div>                
                    <p class="side_heading" style="margin-top: -5%; font-size: 13px;">Enter your phone number to continue</p>
                </div>
                <div id="login_logo_container">
                    <img id=login_logo src="../images/loginLogo.svg">
                </div>
        </div>
        <br><br><br><br><br>
        <div id="login_details">
            <p class="side_heading" style="margin-bottom: 0;margin-left: 12%;font-size: 15px;">Phone number</p>
            <select>
                <option>+91</option>
            </select>
            <input type="tel">
            <p style="margin-top: 0;margin-left: 12%;font-size: 10px;color: red;display: none;">Phone should contain minimum 10 digits</p><br><br>
            <button id="login_submit"><h3>CONTINUE</h3></button>
            <br><br><br><br><br><br><br>
            <p class="login_bottom">Don’t have an account? <a href="#">Sign up</a></p>
        </div>`
}

let openLogin=()=>{
    document.getElementById("login_pop").style.display = "block";
    document.getElementById("blur").style.display = "block";
}

let closeLogin=()=>{
    document.getElementById("login_pop").style.display = "none";
    document.getElementById("blur").style.display = "none";
}

let isLoggedIn=(mobile = null)=>{
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
        alert("enter correct credentials");
    }
}

let login_mobile=()=>{
    let number = document.querySelector("#login_details input").value;

    if (number.length > 9) {
        document.querySelectorAll("#login_details p")[1].style.display = "none";
        document.getElementById("login_submit").style.color = "#000000";
        document.querySelector("#login_details button").style.backgroundColor = "yellow";
        document.querySelector("#login_details button").addEventListener("click", () => {
            // isLoggedIn(document.querySelector("#login_details input").value);
            document.getElementById("login_pop").style.display = "none";
            document.getElementById("blur").style.display = "none";
        })

    } else {
        document.querySelectorAll("#login_details p")[1].style.display = "block";
    }
}

export {login, openLogin, closeLogin, login_mobile, isLoggedIn}