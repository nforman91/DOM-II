// Event listeners for 10 different types of events

//1. mouseover
const navChg = document.querySelector('.nav-link');
navChg.addEventListener('mouseover', function(event){
    navChg.style.color = "white";
    navChg.style.backgroundColor = "black";
    navChg.style.transform = "rotate(20deg)"
})

//2. keydown
function rKey(event){
    if(event.key === 'r'){
        alert('Ready!')
    }
}
document.addEventListener('keydown', rKey)

//3.dblclick
const footerChg = document.querySelector('.footer');
footerChg.addEventListener('dblclick', function (event) {
    footerChg.style.backgroundColor = "green";
})

//4. click
const heading2Chg = document.querySelector('h2');
heading2Chg.addEventListener('click', function(event){
    heading2Chg.style.transform = "rotate(20deg)";
})

//5. keyup
function wKey(event) {
    if (event.key === 'w') {
        alert('Winning!')
    }
}
document.addEventListener('keyup', wKey)

//6. mouseenter
const imgChg = document.querySelector('img')
imgChg.addEventListener('mouseenter', function (event) {
    imgChg.style.width = "50%";
})

//7. mousemove
const buttonChg = document.querySelector('.btn')
buttonChg.addEventListener('mousemove', function (event) {
    buttonChg.style.transform = "rotate(20deg)";
})

//8. keypress
function eKey(event) {
    if (event.key === 'e') {
        alert('Exciting!')
    }
}
document.addEventListener('keypress', eKey)

//9. mouseleave
const heading1Chg = document.querySelector('h1')
heading1Chg.addEventListener('mouseleave', function (event) {
    heading1Chg.style.fontSize = "150%";
})

//10. copy
const headerChg = document.querySelector('header')
headerChg.addEventListener('copy', function (event) {
    headerChg.style.backgroundColor = "red";
})


//X. Stop Propagation
const textChg = document.querySelector('.text-content');
textChg.addEventListener('click', function(event){
    textChg.textContent = "Text change works";
    event.stopPropagation();
})

//Y. Prevent Default
const navsChg = document.querySelector('.nav');
navsChg.addEventListener('click', function (event) {
    navsChg.textContent = "Text change works";
    event.preventDefault();
})