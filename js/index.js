// Your code goes here

//1.
const navChg = document.querySelector('.nav-link');
navChg.addEventListener('mouseover', function(event){
    navChg.style.color = "white";
    navChg.style.backgroundColor = "black";
    navChg.style.transform = "rotate(20deg)"
})

//2.
function rKey(event){
    if(event.key === 'r'){
        alert('Ready!')
    }
}
document.addEventListener('keydown', rKey)

//3.
const footerChg = document.querySelector('.footer');
footerChg.addEventListener('dblclick', function (event) {
    footerChg.style.backgroundColor = "green";
})

//4.
const headerChg = document.querySelector('h2');
headerChg.addEventListener('click', function(event){
    headerChg.style.transform = "rotate(20deg)";
})

//5.
function wKey(event) {
    if (event.key === 'w') {
        alert('Winning!')
    }
}
document.addEventListener('keyup', wKey)

//6.
const imgChg = document.querySelector('img')
imgChg.addEventListener('mouseenter', function (event) {
    imgChg.style.width = "50%";
})

//7.
const titleChg = document.querySelector('h1')
titleChg.addEventListener('hover', function (event) {
    console.log(titleChg)
    titleChg.style.textContent = "Changing title works";
})

//8.
// Chg.addEventListener('', function (event) {
//     Chg.style. = "";
// })

//9.
// Chg.addEventListener('', function (event) {
//     Chg.style. = "";
// })

//10.
// Chg.addEventListener('', function (event) {
//     Chg.style. = "";
// })

//X. Stop Propagation
const textChg = document.querySelector('.text-content');
textChg.addEventListener('click', function(event){
    console.log("Inside text change on click")
    textChg.textContent = "Text change works";
    event.stopPropagation();
})

//Y. Prevent Default
// const navChg = document.querySelector('a');
// navChg.addEventListener('', function(event){
//      navChg.stoprefresh
//      event.preventDefault();
// })


















//TESTSTUFF
// const txt = document.querySelector('inverse-content .text-content')
// txt.addEventListener('mousemove', event => {
//     txt.style.backgroundColor = "red";
//     txt.style.color = "white";
// })