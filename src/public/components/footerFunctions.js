let footer=()=>{
    return `<div id="f1"><p>Cities we deliver to</p></div>

      <div id="f2">
        <div id="f21">
          <p>Pune</p>
          <p>Gurgaon</p>
          <p>Indore</p>
          <p>Ghaziabad</p>
          <p>Bhopal</p>
          <p>Pondicherry</p>
          <p>Mohali</p>
          <p>Zirakpur</p>
          <p>Tirupati</p>
        </div>
        <div>
          <p>Mumbai</p>
          <p>New Delhi</p>
          <p>Nagpur</p>
          <p>Coimbatore</p>
          <p>Kolkata</p>
          <p>Nasik</p>
          <p>Chandigarh</p>
          <p>Lucknow</p>
          <p>Tiruppur</p>
        </div>
        <div>
          <p>Banglore</p>
          <p>Hyderabad</p>
          <p>Faridabad</p>
          <p>Dubai</p>
          <p>Surat</p>
          <p>Jaipur</p>
          <p>Vijaywada</p>
          <p>Kochi</p>
          <p>Kota</p>
        </div>
        <div>
          <p>Noida</p>
          <p>Chennai</p>
          <p>Ahemdabad</p>
          <p>Vadodra</p>
          <p>Mysore</p>
          <p>Panchkula</p>
          <p>Vellore</p>
          <p>Vizag</p>
          <p>Many More...</p>
        </div>
      </div>

      <div id="f3">
        <div id="f31">
          <p style="font-size: 22px; color: rgb(196, 196, 196)">Legal</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          <p style="font-size: 22px; color: rgb(196, 196, 196)">Contact</p>
          <div style="display: flex; gap: 2%">
            <div>
              <img
                style="width: 25px; height: 25px; margin-top: 2%"
                src="https://cdn-icons-png.flaticon.com/128/526/526901.png"
              />
            </div>
            <div style="padding-top: 2%">crm@faasos.com</div>
          </div>
        </div>
      </div>

      <div id="f4"><hr style="color: blue" /></div>

      <div id="f5">
        <div id="f51"><p>2020 @ Faasos. All rights reserved</p></div>
        <div style="display: flex; margin-top: -1%">
          <div style="color: grey; padding-top: 13%">Follow us on &nbsp</div>
          <div>
            <p id="f52">
              <img
                id="img1"
                src = "../images/fb.svg"
              />
              <img
                id="img2"
        src="../images/twitter.svg" />
              <img
                id="img3"
                src="../images/insta.svg"
              />
            </p>
          </div>
        </div>
      </div>`
}

let sizeFun=()=>{
    document.getElementById("img1").style.marginBottom = "5%";
}

let sizeLess=()=>{
    document.getElementById("img1").style.marginBottom = "0%";
}

let sizeTFun=()=>{
    document.getElementById("img2").style.marginBottom = "5%";
}

let sizeTLess=()=>{
    document.getElementById("img2").style.marginBottom = "0%";
}

let sizeSFun=()=>{
    document.getElementById("img3").style.marginBottom = "5%";
}

let sizeSLess=()=>{
    document.getElementById("img3").style.marginBottom = "0%";
}
export {footer, sizeFun, sizeLess, sizeTFun, sizeTLess, sizeSFun, sizeSLess};