var box = document.querySelector('.box');
var colorInput = document.getElementById('color');
var changeColorButton = document.querySelector('.change-color');


changeColorButton.addEventListener('click', function () {
    var color = colorInput.value;
    box.style.backgroundColor = color;
});