function navbar() {
    return`<nav>
    <div id="navcontainer">
        <div id="navleft">
            <a href="/collections">
                <img src="https://assets.faasos.io/faasos_v2/faasosLogoPurple.svg" alt="faasos logo" />
            </a>
            <div id="navlocation">
                <p>India</p>                
            </div>
        </div>
        <div id="navright">
            <p id="userName">Hi User</p>
            <p class="hamburger" onclick="openSide()">
                <i class="fas fa-bars"></i>
            </p>
        </div>
    </div>

<section id="side">
    <div id="sideMain">
        <div id="sideList">
            <span onclick="closeSide()"><i class="fas fa-times"></i></span>
            <ul id="sideNavList">
                <li>
                    <a href="#">
                        <span><img src="../images/sidebarprofile.png" alt="Profile"></span>
                        <p>Profile</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span> <img src="../images/Sidebarmanageorder.png" alt="Order"> </span>
                        <p>Manage Orders</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span> <img src="../images/sidebaraddress.png" alt="Manage Addresses"></span>
                        <p>Manage Addresses</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span> <img src="../images/sidebarpayment.png"
                        alt="Manage Payments"></span>
                        <p>Manage Payments</p>
                       
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span> <img src="../images/sidebarhelp.PNG"
                        alt="Help & Support" > </span>
                        <p>Help & Support</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span> <img src = "../images/sidebarabout.png"
                        alt="About Us" > </span>
                        <p>About Us</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span> <img src="../images/sidebarparty.png"
                        alt="Party Orders"></span>
                        <p>Party Orders</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span><img src="../images/sidebarlogout.png"
                        alt="Logout"> </span>
                        <p>Logout</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</section>
</nav>`
}

let closeSide=()=>{
    let side = document.getElementById('side');
    side.style.display = 'none';

    let sideMain = document.getElementById('sideMain');
    sideMain.classList.toggle('activeSide');
}

let openSide=()=>{
    let sidebar = document.getElementById('side');
    side.style.display = 'block';

    setTimeout(()=>{
        let sideMain = document.getElementById('sideMain');
        sideMain.classList.toggle('activeSide');
    }, 200);
}

export {navbar, closeSide, openSide}