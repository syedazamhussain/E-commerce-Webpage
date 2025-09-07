// Initialize Lenis
const lenis = new Lenis();

lenis.on('scroll', (e) => {
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
// color image change in js -------------------------------------------------------------------------------------------------- start----------------------------------------------------------------------------------------------------------------------------------------------------//

let changeColor = document.querySelector(".img-popular");
let black = document.querySelector(".colors");

black.addEventListener("click", function () {
    changeColor.src = "img/1st-black-img.jpg"
})

let green = document.querySelector(".color1");
green.addEventListener("click", function () {
    changeColor.src = "img/1st-green-img.jpg"
})

let red = document.querySelector(".color2");
red.addEventListener("click", function(){
    changeColor.src = "img/1st-red-1-img.jpg"
})

let white = document.querySelector(".color3");
white.addEventListener("click", function(){
    changeColor.src = "img/1st-white-img.jpg"
})

let popularImg = document.querySelector(".popular-img-gal");
let colorC = document.querySelectorAll("#color-c");

colorC.forEach(function(Cbtn){
    Cbtn.addEventListener("click", function(){
        let NewPick = Cbtn.getAttribute("data-img");
        popularImg.src = NewPick;
    })
})

let popularImg3 = document.querySelector(".popular-img-gal-3");
let colorC3 = document.querySelectorAll("#color-c3");

colorC3.forEach(function(Cbtn3){
    Cbtn3.addEventListener("click", function(){
        let NewPick3 = Cbtn3.getAttribute("data-img");
        popularImg3.src = NewPick3;
    })
})

let popularImg4 = document.querySelector(".popular-img-gal-4");
let colorC4 = document.querySelectorAll("#color-c4");

colorC4.forEach(function(Cbtn4){
    Cbtn4.addEventListener("click", function(){
        let NewPick4 = Cbtn4.getAttribute("data-img");
        popularImg4.src = NewPick4;
    })
})

// color image change in js --------------------------------------------------------------------------- end--------------------------------- ------------------------//


// size slector work in js //
let liA = document.querySelectorAll("#li-aa13");

liA.forEach(function (listItem) {

    listItem.addEventListener("click", function () {

        liA.forEach(function (removeBTN) {
            removeBTN.classList.remove("new-li")

        });

        listItem.classList.add("new-li");
    });

});