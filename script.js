let Pixels = document.getElementsByClassName("Pixels");
let Box = document.getElementById("parent");
let Color = document.querySelector('.color');
let x = 2500;

for (let i = 0; i < x; i++) {
    Box.innerHTML += `<div class="Pixels"></div> `;
}

for (let i = 0; i < x; i++) {
    Pixels[i].onclick = function () {
    Pixels[i].style.background = Color.value;
}};
