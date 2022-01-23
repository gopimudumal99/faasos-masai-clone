import carouselSupport from "../components/carouselSupport.js";
document.getElementsByClassName("main-carousel")[0].innerHTML = carouselSupport();
$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    wrapAround: true,
    //   freeScroll: true
});
