import {navbar,closeSide,openSide} from '../components/navbar.js'
let container = document.getElementById('navbar-container')
container.innerHTML = navbar();
document.querySelectorAll("#navright p")[1].addEventListener("click", openSide);
document.querySelector("#sideList span").addEventListener("click", closeSide);

let func=()=>{
    let user=JSON.parse(localStorage.getItem("user_fasoos"));
    let temp = "";
    if(user){
        document.getElementById("userName").textContent=`Hi, ${user.name}`;
        document.getElementById("sidebarProfile").style.display = "block";
        document.getElementById("sidebarManageOrder").style.display = "block";
        document.getElementById("sidebarManageAddress").style.display = "block";
        document.getElementById("sidebarManagePayment").style.display = "block";
        document.getElementById("sidebarPartyOrder").style.display = "block";
        document.getElementById("sidebarLogout").style.display = "block";
        if(user.address){
            for(let key in user.address){
                temp= temp+ `${key}: ${user.address[key]}`;
            }
        }
        else
            temp="India";
            
        document.querySelector("#navlocation p").textContent=temp;
    }
    else{
        document.getElementById("sidebarProfile").style.display="none";
        document.getElementById("sidebarManageOrder").style.display = "none";
        document.getElementById("sidebarManageAddress").style.display = "none";
        document.getElementById("sidebarManagePayment").style.display = "none";
        document.getElementById("sidebarPartyOrder").style.display = "none";
        document.getElementById("sidebarLogout").style.display = "none";
    }

    document.querySelector("#navlocation p").textContent=temp;
}

func();

const logout=()=>{
    document.getElementById("sidebarProfile").style.display = "none";
    document.getElementById("sidebarManageOrder").style.display = "none";
    document.getElementById("sidebarManageAddress").style.display = "none";
    document.getElementById("sidebarManagePayment").style.display = "none";
    document.getElementById("sidebarPartyOrder").style.display = "none";
    document.getElementById("sidebarLogout").style.display = "none";
    localStorage.removeItem("user_fasoos");
    localStorage.removeItem("token");
}

document.getElementById("sidebarLogout").addEventListener("click",logout);
export default func

