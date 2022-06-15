let box = document.querySelector('.box');
let colorInput = document.getElementById('color');
let changeColorButton = document.querySelector('.change-color');

changeColorButton.addEventListener('click', function () {
    let color = colorInput.value;
    box.style.backgroundColor = color;       
});

let div1 = document.createElement('div');
let div2 = document.createElement('div');
let div3 = document.createElement('div');

div1.appendChild(colorInput); 
div1.appendChild(changeColorButton); 

div1.style.marginTop = '20px';
div1.style.display = 'flex';
div2.style.marginTop = '20px';
div2.style.display = 'flex';
div3.style.marginTop = '20px';
div3.style.display = 'flex';

document.body.appendChild(div1); 
document.body.appendChild(div2); 
document.body.appendChild(div3); 

let importantInput = document.createElement('input');
importantInput.id = 'very-important-message';
div2.appendChild(importantInput); 

let importantButton = document.createElement('button');
importantButton.id = 'very-important-button';
importantButton.innerText = 'Очень важное сообщение';
div2.appendChild(importantButton); 

importantButton.addEventListener('click', () => {
    let message = importantInput.value;
    box.innerText = message;
    box.style.color = 'white'; 
});

let propertyInput = document.createElement('input');
propertyInput.id = 'property-message';
document.body.appendChild(propertyInput);
div3.appendChild(propertyInput); 

let valueInput = document.createElement('input');
valueInput.id = 'value-input';
document.body.appendChild(valueInput);
div3.appendChild(valueInput); 

let cssButton = document.createElement('button');
cssButton.id = 'css-button';
cssButton.innerText = 'CSS Magic';
document.body.appendChild(cssButton);
div3.appendChild(cssButton); 

cssButton.addEventListener('click', function (){
    let cssProperty = document.querySelector('#property-message').value;
    let cssValue = valueInput.value;                                
    box.style[cssProperty] = cssValue;                         
});











