import {navbar,closeSide,openSide} from '../components/navbar.js'
let container = document.getElementById('navbar-container')
container.innerHTML = navbar();
document.querySelectorAll("#navright p")[1].addEventListener("click", openSide);
document.querySelector("#sideList span").addEventListener("click", closeSide);