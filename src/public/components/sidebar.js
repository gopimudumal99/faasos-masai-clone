
function sidebar(location,location1){ 
     return`function closeSide() {
    let side = document.getElementById(location);
    side.style.display = 'none';
    
    let sideMain = document.getElementById(location1);
    sideMain.classList.toggle('activeSide');
    }
    
    function openSide() {
    let sidebar = document.getElementById(location);
    side.style.display = 'block';
    
    setTimeout(function () {
    let sideMain = document.getElementById(location1);
    sideMain.classList.toggle('activeSide');
    }, 200);
    }`}
  


export default sidebar