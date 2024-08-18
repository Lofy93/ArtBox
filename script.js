let Pixels = document.getElementsByClassName("Pixels");
let parent = document.getElementById("parent");
let html = document.getElementById('html')
let Timer = document.querySelector('.Timer')
let color = document.querySelector('.color')
let x = 2500;
let Key;
let interval;



for (let i = 0; i < x; i++) {
    parent.innerHTML += `<div class="Pixels"></div> `;
}

for (let i = 0; i < x; i++) {
    Pixels[i].onclick = function () {
        Pixels[i].style.background = color.value;
    }};
       
