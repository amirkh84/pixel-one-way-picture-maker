let cube = document.querySelector(".cube");
let btn = document.querySelector(".change");
let btnadd = document.querySelector(".add");
let i = -1;
let ii = 0;
let haveColor = ['red' , 'blue' , 'green'];
function Add() {
    cube.innerHTML+=`<div class='parts' style='background-color:${haveColor[ii]};'>
    </div>`;
    i++;
    check();
};
btnadd.addEventListener('click' , Add);
function check() {
    if (i == 24) { btnadd.removeEventListener('click' , Add) };
};
btn.addEventListener('click' , function(){
    let parts = document.querySelectorAll(".parts");
    ii++
    if (ii == 3) { ii= 0; };
    parts[i].style.backgroundColor = haveColor[ii];
    
})