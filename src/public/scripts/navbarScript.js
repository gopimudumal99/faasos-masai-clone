import {navbar,closeSide,openSide} from '../components/navbar.js'
let container = document.getElementById('navbar-container')
container.innerHTML = navbar();
document.querySelectorAll("#navright p")[1].addEventListener("click", openSide);
document.querySelector("#sideList span").addEventListener("click", closeSide);

let user=JSON.parse(localStorage.getItem("user_fasoos"));
let temp = "";
if(user){
    document.getElementById("userName").textContent=`Hi, ${user.name}`;    
    if(user.address){
        for(let key in user.address){
            temp= temp+ `${key}: ${user.address[key]}`;
        }
    }
    else
        temp="India";
}

document.querySelector("#navlocation p").textContent=temp;

