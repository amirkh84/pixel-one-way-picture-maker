let cube = document.querySelector(".cube");
let btn = document.querySelector(".change");
let btnadd = document.querySelector(".add");
let btnrem = document.querySelector(".remove");
let btnres = document.querySelector(".reset");
let i = -1;
let ii = 0;
let haveColor = ['red' , 'blue' , 'green' , 'yellow' , 'purple' , 'pink' , 'white' , 'black'];
function check() {
    if (i > 99) { alert("Done!") };
};
function Add() {
    cube.innerHTML+=`<div class='parts' style='background-color:${haveColor[ii]};'>
    </div>`;
    i++;
    check();
    console.log(i);
};
function moz() { 
    let parts = document.querySelectorAll(".parts");
    ii++
    if (ii == 8) { ii= 0; };
    parts[i].style.backgroundColor = haveColor[ii];
}
window.addEventListener('keydown' , (event) => {
    if (event.keyCode == 65) {
        Add();
    }
    else if (event.keyCode == 67) { moz() }
});
btnadd.addEventListener('click' , Add);
btn.addEventListener('click' , moz);
function remover() {
    cube.removeChild(cube.lastChild);
    i--;
    console.log(i);
}
btnrem.addEventListener('click' , remover)
btnres.addEventListener('click' , function(){ cube.innerHTML = ``; i = -1; })