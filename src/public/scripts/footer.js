import {footer, sizeFun,sizeLess,sizeTFun,sizeTLess,sizeSFun,sizeSLess} from "../components/footerFunctions.js"
document.getElementById("mainFooter").innerHTML = footer();
document.getElementById("img1").addEventListener("mouseenter", sizeFun);
document.getElementById("img1").addEventListener("mouseleave", sizeLess);
document.getElementById("img2").addEventListener("mouseenter", sizeTFun);
document.getElementById("img2").addEventListener("mouseleave", sizeTLess);
document.getElementById("img3").addEventListener("mouseenter", sizeSFun);
document.getElementById("img3").addEventListener("mouseleave", sizeSLess);
