$(document).ready(function () {
    $('.owl-carousel').owlCarousel();
});

let burger = document.querySelector(".burger");
let hamburgerDrop = document.getElementById("hamburgerDrop");
let xburger = document.getElementById("x-burger");


burger.addEventListener("click", function () {

    hamburgerDrop.style.transform = "TranslateX(0rem)"
    hamburgerDrop.style.transition = "1s";


})
xburger.addEventListener("click", function () {

    hamburgerDrop.style.transform = "TranslateX(-100rem)"
    hamburgerDrop.style.transition = "2s";

})

function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
}

let cardHeader = document.querySelector(".card-header")
console.log(cardHeader);
cardHeader.addEventListener("click", function () {
    let chevron=document.querySelector(".i").classList.toggle("iactive")

})


