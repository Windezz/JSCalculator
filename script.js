// Select all the buttons that are located at .NButtons div
const numbs = document.querySelectorAll('.NButtons button');
const expression = document.querySelector('.expression');
const inout = document.querySelector('.inout');
const divideButt = document.querySelector('#divide');
const multiplyButt = document.querySelector('#multiply');
const minusButt = document.querySelector('#minus');
const addButt = document.querySelector('#add');
const clearButt = document.querySelector('#clear');
const equalButt = document.querySelector('#equal');
const deleteButt = document.querySelector('#delete');

// variable for the chosen operator
let chosenOp;

// variable for the input value
let inputArray;

// variable for the computed result
let output;

function addition(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division (a, b) {
    if (b === 0) {
        alert('cannot divide by 0')
    } else {
        return a / b;
    }
}

function operate(operator, number1, number2) {
    output = 0;
    output = operator(number1, number2);
    if (output === NaN) {
        output = 0;
    } else if (Number.isInteger(output)) {
        return output;
    } else {
        output = Number(output.toFixed(3));
        return output;
    }
}

function populate(numButton) {
    numButton.forEach((button) => {
        if(button.id != 'equal' && button.id != '.') {
            button.addEventListener('click', (event) => {
                if (inout.textContent === '0') {
                    inout.textContent = '';
                    inout.textContent += button.id;
                } else {
                    inout.textContent += button.id;
                }
            })
        } else if (button.id === '.') {
            button.addEventListener('click', (event) => {
                // check if there has been . typed
                let lenCon = inout.textContent.length;
                let dotCount = 0;
                for (let i = 0; i < lenCon; i++) {
                    if (inout.textContent[i] === '.') {
                        dotCount += 1;
                    } else {
                        continue;
                    }
                }
                
                // user can't type more than one comma
                if (dotCount === 0) {
                    if (inout.textContent === '0') {
                        inout.textContent += button.id;
                    } else if (inout.textContent === '') {
                        inout.textContent += '0' + button.id;
                    } else {
                        inout.textContent += button.id;
                    }
                } else {
                    return;
                }
            })
        }
    })
}

// run the populate function
populate(numbs);

// divide button function
function divide() {
    // check if the expression's textContent is empty
    if (expression.textContent === '') {
        inputArray = Number(inout.textContent);
        inout.textContent = '';
        expression.textContent = inputArray + " \u00F7"
        chosenOp = division;
    } else {
        // check if the inout's textContent is not empty
        if (inout.textContent !== '') {
            operate(chosenOp, inputArray, Number(inout.textContent));
        } 
        chosenOp = division;
        expression.textContent = output + " \u00F7";
        inputArray = output;
        inout.textContent = "";
    }    
}
divideButt.addEventListener('click', (event) => divide())

// multiply button function
function multiply() {
    if (expression.textContent === '') {       
        inputArray = Number(inout.textContent);
        inout.textContent = '';
        expression.textContent = inputArray + " \u00D7";
        chosenOp = multiplication;
    } else {
        if(inout.textContent !== '') {
            operate(chosenOp, inputArray, Number(inout.textContent));
        }
        chosenOp = multiplication;
        expression.textContent = output + " \u00D7";
        inputArray = output;
        inout.textContent = '';        
    }
}

multiplyButt.addEventListener('click', (event) => multiply())

// minus button
function minus() {
    if (expression.textContent === '') {
        inputArray = Number(inout.textContent);
        inout.textContent = '';
        expression.textContent = inputArray + " \u2212"
        chosenOp = subtract;
    } else {
        if(inout.textContent !== '') {
            operate(chosenOp, inputArray, Number(inout.textContent));
        }
        chosenOp = subtract;
        expression.textContent = output + " \u2212";
        inputArray = output;
        inout.textContent = ''; 
    }
}
minusButt.addEventListener('click', (event) => minus())

// addition button
function add() {
    if (expression.textContent === '') {
        inputArray = Number(inout.textContent);
        inout.textContent = '';
        expression.textContent = inputArray + " \u002B";
        chosenOp = addition;
    } else {
        if (inout.textContent !== '') {
            operate(chosenOp, inputArray, Number(inout.textContent));
        } 
        chosenOp = addition;
        expression.textContent = output + " \u002B";
        inputArray = output;
        inout.textContent = '';
    }
}
addButt.addEventListener('click', (event) => add())

// equal button function
function equal() {
    if (inout.textContent !== '') {
        operate(chosenOp, inputArray, Number(inout.textContent));
        expression.textContent = '';
        inout.textContent = output;
    } else {
        inout.textContent = output;
    }
}
equalButt.addEventListener('click', (event) => equal())

// clear button's function
function clear() {
    inputArray = 0;
    output = 0;
    expression.textContent = '';
    inout.textContent = '0';
}
clearButt.addEventListener('click', (event) => clear())

// delete button's function
function del() {
    let contentLen = inout.textContent.length;
    let delOut = '';
    for (let i = 0; i < contentLen-1; i++) {
        delOut += inout.textContent[i];
    }
    if (delOut === '') {
        inout.textContent = '0';
    } else {
        inout.textContent = delOut;
    }
}
deleteButt.addEventListener('click', (event) => del())

// Keyboard Functionality
window.addEventListener('keydown', (event) => {
    if (isFinite(event.key)) {
        if (inout.textContent === '0') {
            inout.textContent = '';
            inout.textContent += event.key;
        } else {
            inout.textContent += event.key;
        } 
    } else if (event.key === 'Delete') {
        del();
    } else if (event.key === 'Escape') {
        clear();
    } else if (event.key === '+') {
        add();
    } else if (event.key === '-') {
        minus();
    } else if (event.key === '*') {
        multiply();
    } else if (event.key === '/') {
        divide();
    } else if (event.key === 'Enter') {
        equal();
    } else if (event.key === 'Backspace') {
        del();
    }
})