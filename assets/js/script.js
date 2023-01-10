

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

// let cardHeader = document.querySelector(".card-header")
// cardHeader.addEventListener("click", function () {
//     let chevron = document.querySelector(".i").classList.toggle("iactive")

// })

const card= document.getElementById('PizzaCard')
const breadTitles = document.querySelectorAll(".span__bread__title")
console.log(breadTitles);
// let text = 'salamma dadasd asd  asd  asf asd ajsdjk asdkjasd  ajkksdj jnfdddddddd jdddd djjjjjjjjj djjjjjjjjj djjjjjjjj'

breadTitles.forEach(breadTitle => {
    let text = breadTitle.innerText;
    if(text.length>50){
        breadTitle.innerHTML = `${text.substring(0, 50) + '...'}`
    }
   
    breadTitle.addEventListener("mouseover", function () {
        breadTitle.innerHTML = `${text}`


    })
    breadTitle.addEventListener("mouseout", function(){
        breadTitle.innerHTML = `${text.substring(0, 50) + '...'}`    
    })
})









// breadTitle.addEventListener("mouseout", function () {
//     breadTitle.innerHTML = `${text.substring(0, 10) + '...'}`
    //  if(text.length>10){
    //     breadTitle.innerHTML = `${text.substring(0, 10) + '...'}`  
    //  } 
    //  else{
    //     breadTitle.innerHTML = `${text}`
    //  }

// })

