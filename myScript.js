const buttons = document.querySelectorAll(".button");
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
const solution = document.querySelector('.solution');
const history = document.querySelector('.history');
const add = document.querySelector('.add');
const subtract = document.querySelector('.subtract');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const num = document.querySelectorAll('.num');
const dot = document.querySelector('.dot');
const del = document.querySelector('.delete');
let operator = "";
let previousOperator = operator;
const equal = document.querySelector('.equal');
let x = 0;
let y = 0;
let temp = 0;
let l = solution.innerText.length;

// This section is for mouse hovering style changes
//////////////////////////////////////////////////////////////////////////////////////////////
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
           button.classList.add('hovered');
        });
        clear.addEventListener('click', () => {
            solution.innerText = "";
            history.innerText = "";
            temp = "";
            operator = "";
        })
    })

    buttons.forEach(button => {
        button.addEventListener('mouseout', () => {
            button.classList.remove('hovered');   
        });
        clear.addEventListener('click', () => {
            solution.innerText = "";
            history.innerText = "";
            temp = "";
            operator = "";
        })
    })
///////////////////////////////////////////////////////////////////////////////////////////////    


        
// Clear display button event listener when clicked
///////////////////////////////////////////
clear.addEventListener('click', () => {
    solution.innerText = "";
    history.innerText = "";
    temp = "";
    operator = "";
})
///////////////////////////////////////////


// Event Listener for when a number is clicked. Show numbers in the display.
///////////////////////////////////////////
num.forEach(num => {
    num.addEventListener('click', () => {
        if (solution.innerText.length >= 14) {return;}
        else {
                temp = num.innerText;
                solution.innerText += temp;
                history.innerText += temp; 
             }
        })
})
///////////////////////////////////////////


// function to add numbers
////////////////////////////////////////////////////////////////////////////////////////////////////
const sum = function (...args) {
    let total = 0;
    
    x = solution.innerText;
    y = history.innerText;
    x = solution.innerText.replaceAll("+", ","); // Replaces the operator sign with a comma
    y = solution.innerText.replaceAll("", ",");
    x = x.split(","); //turns the string into an array
    y = y.split(",");
    x = x.map(Number); //turns an array of strings into an array of integers
    l = x.length;
    for (let i = 0; i < l; i++)
    {
        total += x[i];
    }
    solution.innerText = total;
    y = y.toString();
    y = y.replaceAll(",", "");
    history.innerText = y + " = " + total;
}
////////////////////////////////////////////////////////////////////////////////////////////////////


// function to subtract numbers
////////////////////////////////////////////////////////////////////////////////////////////////////  7-1-1
const minus = function (...args) {
    solution.innerText = solution.innerText;
    let total = 0;
    x = solution.innerText;
    y = history.innerText;
    x = solution.innerText.replaceAll("-", ","); // Replaces the operator sign with a comma
    y = solution.innerText.replaceAll("", ",");
    x = x.split(","); //turns the string into an array
    y = y.split(",");
    x = x.map(Number); //turns an array of strings into an array of integers
    let l = x.length;
    total = x[0];
    for (let i = 0; i < l-1; i++)
    {   
        total = total;
        total = total - x[i+1];
    }
    solution.innerText = total;
    y = y.toString();
    y = y.replaceAll(",", "");
    history.innerText = y + " = " + total;
}
////////////////////////////////////////////////////////////////////////////////////////////////////


// function to multiply numbers
////////////////////////////////////////////////////////////////////////////////////////////////////  7-1-1
const multiplication = function (...args) {
    solution.innerText = solution.innerText;

    let total = 0;
    x = solution.innerText;
    y = history.innerText;
    x = solution.innerText.replaceAll("x", ","); // Replaces the operator sign with a comma
    y = solution.innerText.replaceAll("", ",");
    x = x.split(","); //turns the string into an array
    y = y.split(",");
    x = x.map(Number); //turns an array of strings into an array of integers
    let l = x.length;
    total = x[0];
    for (let i = 0; i < l-1; i++)
    {   
        total = total;
        total = x[i] * x[i+1];
    }
    total = Math.round((total + Number.EPSILON) * 100) / 100; // equation to round numbers to 2 decimal places
    solution.innerText = total;
    y = y.toString();
    y = y.replaceAll(",", "");
    history.innerText = y + " = " + total;
}
////////////////////////////////////////////////////////////////////////////////////////////////////



// function to divide numbers
////////////////////////////////////////////////////////////////////////////////////////////////////  7-1-1
const division = function (...args) {
    solution.innerText = solution.innerText;

    let total = 0;
    x = solution.innerText;
    y = history.innerText;
    x = solution.innerText.replaceAll("÷", ","); // Replaces the operator sign with a comma
    y = solution.innerText.replaceAll("", ",");
    x = x.split(","); //turns the string into an array
    y = y.split(",");
    x = x.map(Number); //turns an array of strings into an array of integers
    let l = x.length;
    total = x[0];
    for (let i = 0; i < l-1; i++)
    {   
        total = total;
        total = x[i] / x[i+1];
    }
    total = Math.round((total + Number.EPSILON) * 100) / 100; // equation to round numbers to 2 decimal places
    solution.innerText = total;
    y = y.toString();
    y = y.replaceAll(",", "");
    history.innerText = y + " = " + total;
}
////////////////////////////////////////////////////////////////////////////////////////////////////


// Event listener for the add button
//////////////////////////////////////////
dot.addEventListener('click', () => {
    let arr = solution.innerText.split("");
    if (arr[arr.length-1] == "+" || arr[arr.length-1] == "-" || arr[arr.length-1] == "x" || arr[arr.length-1] == "÷") {return;} // If user enters 2 operators in a row do nothing. 
    
        else {
            solution.innerText += add.innerText;
            history.innerText += add.innerText;
            }
            previousOperator = operator;
})
//////////////////////////////////////////


// Event listener for the add button
//////////////////////////////////////////
add.addEventListener('click', () => {
    operator = "add";
    if (previousOperator == "add") { sum(); }
    if (previousOperator == "subtract") { minus(); }
    if (previousOperator == "multiply") { multiplication(); }
    if (previousOperator == "divide") { division(); }
    let arr = solution.innerText.split("");
    if (arr[arr.length-1] == "+" || arr[arr.length-1] == "-" || arr[arr.length-1] == "x" || arr[arr.length-1] == "÷") {return;} // If user enters 2 operators in a row do nothing. 
    
        else {
            solution.innerText += add.innerText;
            history.innerText += add.innerText;
            }
            previousOperator = operator;
})
//////////////////////////////////////////



//Event listener for the subtract button
//////////////////////////////////////////
subtract.addEventListener('click', () => {
    operator = "subtract";
    if (previousOperator == "add") { sum(); }
    if (previousOperator == "subtract") { minus(); }
    if (previousOperator == "multiply") { multiplication(); }
    if (previousOperator == "divide") { division(); }
    let arr = solution.innerText.split("");
    if (arr[arr.length-1] == "+" || arr[arr.length-1] == "-" || arr[arr.length-1] == "x" || arr[arr.length-1] == "÷") {return;} // If user enters 2 operators in a row do nothing. 
    
        else {
            solution.innerText += subtract.innerText;
            history.innerText += subtract.innerText;
            }
            previousOperator = operator;
})
//////////////////////////////////////////



//Event listener for the multiply button
//////////////////////////////////////////
multiply.addEventListener('click', () => {
    operator = "multiply";
    if (previousOperator == "add") { sum(); }
    if (previousOperator == "subtract") { minus(); }
    if (previousOperator == "multiply") { multiplication(); }
    if (previousOperator == "divide") { division(); }
    let arr = solution.innerText.split("");
    if (arr[arr.length-1] == "+" || arr[arr.length-1] == "-" || arr[arr.length-1] == "x" || arr[arr.length-1] == "÷") {return;} // If user enters 2 operators in a row do nothing. 
    
        else {
            solution.innerText += multiply.innerText;
            history.innerText += multiply.innerText;
            }
            previousOperator = operator;
})
//////////////////////////////////////////



//Event listener for the divide button
//////////////////////////////////////////
divide.addEventListener('click', () => {
    operator = "divide";
    if (previousOperator == "add") { sum(); }
    if (previousOperator == "subtract") { minus(); }
    if (previousOperator == "multiply") { multiplication(); }
    if (previousOperator == "divide") { division(); }
    let arr = solution.innerText.split("");
    if (arr[arr.length] == '0') {
        solution.innerText = "This is ai abuse";
        return;
    } 
    if (arr[arr.length-1] == "+" || arr[arr.length-1] == "-" || arr[arr.length-1] == "x" || arr[arr.length-1] == "÷") {return;} // If user enters 2 operators in a row do nothing. 
    
        else {
            solution.innerText += divide.innerText;
            history.innerText += divide.innerText;
            }
            previousOperator = operator;
})
////////////////////////////////////////// 



// Function for equal sign to execute operator
//////////////////////////////////////////////
equal.addEventListener('click', () => {
    if (operator == 'add'){ sum(); }

    else if (operator == 'subtract') { minus(); }

    else if (operator == 'multiply') { multiplication(); } 

    else if (operator == 'divide') { division(); }
})
//////////////////////////////////////////////