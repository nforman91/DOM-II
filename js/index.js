// Your code goes here
const navChg = document.querySelector('.nav-link');
// const headerChg = document.querySelector('.h2');
// const buttonChg = document.querySelector('.btn');
// const imgChg = document.querySelector('.img-fluid-rounded')
// const textChg = document.querySelector('.destination');
const footerChg = document.querySelector('.footer');

//1.
navChg.addEventListener('mouseover', function(event){
    navChg.style.color = "white";
    navChg.style.backgroundColor = "black";
})

//2.
function rKey(event){
    if(event.key === 'r'){
        alert('Ready!')
    }
}
document.addEventListener('keydown', rKey)

//3.
// headerChg.addEventListener('ondragstart', function(event){
//     console.log("Wheel works");
//     headerChg.style.backgroundColor = "black";
// })

//4.
// buttonChg.addEventListener('load', function(event){
//     buttonChg.style.width = "100px";
// })

//5.
// textChg.addEventListener('focus', function(event){
//     console.log("Text works")
//     textChg.textContent = "Crazy stuff";
// })

//6.
// Chg.addEventListener('resize', function (event) {
//     Chg.style. = "";
// })

//7.
// Chg.addEventListener('scroll', function (event) {
//     Chg.style. = "";
// })

//8.
// imgChg.addEventListener('select', function (event) {
//     imgChg.style.width = "20px";
// })

//9.
footerChg.addEventListener('dblclick', function (event) {
    footerChg.style.backgroundColor = "green";
})

//10.
// Chg.addEventListener('drag', function (event) {
//     Chg.style. = "";
// })




//TESTSTUFF
const txt = document.querySelector('inverse-content .text-content')
txt.addEventListener('mousemove', event => {
    txt.style.backgroundColor = "red";
    txt.style.color = "white";
})