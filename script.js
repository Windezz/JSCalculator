const buttonDiv = document.querySelector('.CButtons');

window.addEventListener('DOMContentLoaded', () => {

    for (let i = 0; i < 10; i++) {
        let newButton = document.createElement('button');
        newButton.textContent = i;
        buttonDiv.appendChild(newButton).className = `button${i}`;
    }
})


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

