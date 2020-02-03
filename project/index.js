let box = document.querySelector('.box');
let colorInput = document.getElementById('color');
let changeColorButton = document.querySelector('.change-color');


changeColorButton.addEventListener('click', function () {
    let color = colorInput.value;
    box.style.backgroundColor = color;
});
