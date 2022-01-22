let addNewAddress=()=>{
    return `<h2 id="back"><i class="fas fa-chevron-left"></i></h2>
        <div id="googleMap">
            <iframe style="border:0" loading="lazy" allowfullscreen
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD5d3M5fcr9BIb8ATMWqAt7qkgv-LdHRrA
                &q=delhi">
            </iframe>
        </div>
        <button id="currentLocation">
            <h3><i class="fas fa-map-marker-alt" style="color: red;"></i></h3>
        </button>
        <form>
            <input id="house" placeholder="HOUSE NO & STREET">
            <br>
            <input id="landmark" placeholder="LANDMARK">
            <br>
            <button>
                <p><i class="fas fa-briefcase"></i> WORK</p>
            </button>
            <button>
                <p><i class="fas fa-home"></i> HOME</p>
            </button>
            <button>
                <p><i class="fas fa-map-marker side_heading"></i> OTHER</p>
            </button>
            <br>
            <br>
            <button id="addAddress_submit" type="submit">SAVE</button>
        </form>`
}

let myMap=(position)=>{
    document.querySelector("#googleMap>iframe").setAttribute("src", `https://www.google.com/maps/embed/v1/view?key=AIzaSyD5d3M5fcr9BIb8ATMWqAt7qkgv-LdHRrA&center=${position.coords.latitude},${position.coords.longitude}&zoom=15`)
}

let getLocation=()=>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(myMap);;
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

let close_pop=()=>{
    console.log("here");
    document.getElementById("add_new_address").style.display = "none";
    document.getElementById("blur").style.display = "none";
}

let type_address_form=(data)=>{
    let form = document.querySelectorAll("#add_new_address form>button");
    localStorage.setItem("type_address", JSON.stringify(data))
    if (data.work) {
        form[0].style.backgroundColor = "#3C286C";
        form[0].style.color = "white";
        form[2].style.backgroundColor = "white";
        form[2].style.color = "grey";
        form[1].style.backgroundColor = "white";
        form[1].style.color = "grey";
    } else if (data.home) {
        form[1].style.backgroundColor = "#3C286C";
        form[1].style.color = "white";
        form[2].style.backgroundColor = "white";
        form[2].style.color = "grey";
        form[0].style.backgroundColor = "white";
        form[0].style.color = "grey";
    } else {
        form[2].style.backgroundColor = "#3C286C";
        form[2].style.color = "white";
        form[1].style.backgroundColor = "white";
        form[1].style.color = "grey";
        form[0].style.backgroundColor = "white";
        form[0].style.color = "grey";
    }
}

let type_address=(n = 3)=> {
    let data = {
        work: false,
        home: false,
        other: true
    }
    switch (n) {
        case 1:
            data = {
                work: true,
                home: false,
                other: false
            };
            type_address_form(data);
            return;
        case 2:
            data = {
                work: false,
                home: true,
                other: false
            };
            type_address_form(data);
            return;
    }

    type_address_form(data);
    return;
}

let addAddress=()=>{
    document.getElementById("add_new_address").style.display = "block";
    document.getElementById("blur").style.display = "block";
    console.log(document.querySelectorAll("#add_new_address form>button"))
    document.querySelectorAll("#add_new_address form>button")[0].addEventListener("click", () => {
        type_address(1);
    });
    document.querySelectorAll("#add_new_address form>button")[1].addEventListener("click", () => {
        type_address(2);
    });
    document.querySelectorAll("#add_new_address form>button")[2].addEventListener("click", () => {
        type_address();
    });
    type_address();
    getLocation();
}

let check_address_present=()=>{
    let address = JSON.parse(localStorage.getItem("address")) || null;

    if (address == null) {
        document.getElementById("delivery_gotAddress").style.display = "none";
    } else {

        document.getElementById("delivery_gotAddress").style.display = "block";
        document.querySelector("#delivery_gotAddress h4").innerHTML = "";

        let temp = `House NO:${address.houseNo} landmark:${address.landmark}`;


        document.querySelector("#delivery_gotAddress h4").innerHTML = temp;
    }
}

let save_address=(e)=>{
    e.preventDefault();
    let form = document.querySelector("#add_new_address form");
    let address_needed = {
        houseNo: form.house.value,
        landmark: form.landmark.value
    }

    localStorage.setItem("address", JSON.stringify(address_needed));
    check_address_present();
    close_pop();
}

export {addNewAddress, getLocation, close_pop, addAddress, save_address}