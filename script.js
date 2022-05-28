// const buttonDiv = document.querySelector('.NButtons');

// create the number buttons when the window has been loaded
// window.addEventListener('DOMContentLoaded', () => {

//     for (let i = 0; i < 10; i++) {
//         let newButton = document.createElement('button');
//         newButton.textContent = i;
//         newButton.setAttribute('style', 'width: 40px; height: 40px;');
//         buttonDiv.appendChild(newButton).className = `button`;
//     }


//     // Test if the button works
//     let allButton = document.querySelectorAll('.button');
//     allButton.forEach((but) => {
//         but.addEventListener('click', () => console.log(but.textContent));
//     })
// })


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide (a, b ) {
    return a / b;
}

function operate(operator, number1, number2) {
    let output = 0;
    output = operator(number1, number2);
    return output;
}

