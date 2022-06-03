// Select all the buttons that are located at .NButtons div
const numbs = document.querySelectorAll('.NButtons button');
const expression = document.querySelector('.expression');
const inout = document.querySelector('.inout');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const minus = document.querySelector('#minus');
const add = document.querySelector('#add');
const clear = document.querySelector('#clear');
const equal = document.querySelector('#equal');
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
            button.addEventListener('click', () => {
                if (inout.textContent === '0') {
                    inout.textContent = '';
                    inout.textContent += button.id;
                } else {
                    inout.textContent += button.id;
                }
            })
        } else if (button.id === '.') {
            button.addEventListener('click', () => {
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

// divide button
divide.addEventListener('click', () => {
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
})

// multiply button
multiply.addEventListener('click', () => {
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
})

// minus button
minus.addEventListener('click', () => {
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
})

// addition button
add.addEventListener('click', () => {
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
})

// equal button
equal.addEventListener('click', () => {
    if (inout.textContent !== '') {
        operate(chosenOp, inputArray, Number(inout.textContent));
        expression.textContent = '';
        inout.textContent = output;
    } else {
        inout.textContent = output;
    }
})

// clear button
clear.addEventListener('click', () => {
    inputArray = 0;
    output = 0;
    expression.textContent = '';
    inout.textContent = '0';
})

// delete button
deleteButt.addEventListener('click', () => {
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
})