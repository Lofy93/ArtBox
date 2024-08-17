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
        Key = false;
        if (Key == false) {
            html.style.cursor = 'none';
            let i = 3;
            interval = setInterval((e) => {
                if (i > 0) {
                    i--;
                    Timer.innerHTML = i;
                } else {
                    Timer.innerHTML = 3;
                    html.style.cursor = 'pointer';
                    Key = true;
                    clearInterval(interval);
                }
            }, 1000);
        };

    };
};