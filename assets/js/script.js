$(document).ready(function () {
    $('.owl-carousel').owlCarousel();
});

let burger = document.querySelector(".burger");
console.log("ggg");
let hamburgerDrop = document.getElementById("hamburgerDrop");
let xburger = document.getElementById("x-burger");

console.log("vvv");

burger.addEventListener("click", function () {

    hamburgerDrop.style.transform = "TranslateX(0rem)"
    hamburgerDrop.style.transition = "1s";


})
xburger.addEventListener("click", function () {

    hamburgerDrop.style.transform = "TranslateX(-100rem)"
    hamburgerDrop.style.transition = "2s";

})

