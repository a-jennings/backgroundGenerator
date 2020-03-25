// init variables
var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var random1 = document.getElementById('random1');
var random2 = document.getElementById('random2');

//create copy and paste css
function setGradient() {
    body.style.background = 'linear-gradient(to right, ' + color1.value + ',' + color2.value + ')';
    css.textContent = body.style.background + ';'
}

//Random color generator
function getRandomColor() {
    var chars = '0123456789abcdef'.split('');
    var hex = '#';
    for (var i = 0; i < 6; i++) {
        hex += chars[Math.floor(Math.random() * 16)];
    }
    return hex;
 }

 //Assign random colors on button click
function assignRandomColor1(){
    color1.value = getRandomColor();
    setGradient();
}

function assignRandomColor2(){
    color2.value = getRandomColor();
    setGradient();
}

setGradient(); //show initial css color

//update colors after color wheel
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);