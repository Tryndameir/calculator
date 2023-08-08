const buttons = document.querySelectorAll(".button");
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
const solution = document.querySelector('.solution');
const history = document.querySelector('.history');
const add = document.querySelector('.add');
const num = document.querySelectorAll('.num');
let operator = "";
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
        })
    })
///////////////////////////////////////////////////////////////////////////////////////////////    


        
// Clear display button event listener when clicked
///////////////////////////////////////////
clear.addEventListener('click', () => {
    solution.innerText = "";
    history.innerText = "";
    temp = "";
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
    
    x = solution.innerText.replaceAll("+", ","); // Replaces the '+' sign with a comma
    y = solution.innerText.replaceAll("", ",");
    x = x.split(","); //turns the string into an array
    y = y.split(",");
    console.log(y);
    console.log("Length: " + y.length);
    x = x.map(Number); //turns an array of strings into an array of integers
    l = x.length;
    for (let i = 0; i < l; i++)
    {
        total += x[i];
    }
    solution.innerText = total;
    y = y.toString();
    y = y.replaceAll(",", "");
    console.log("Y is now: " + y);
    history.innerText = y + " = " + total;
}
////////////////////////////////////////////////////////////////////////////////////////////////////


// Event listener for the add button
//////////////////////////////////////////
add.addEventListener('click', () => {
    operator = "add";
    let arr = solution.innerText.split("");
    if (arr[arr.length-1] == "+") {return;}
    
        else {
            solution.innerText += add.innerText;
            history.innerText += add.innerText;
            }
})
//////////////////////////////////////////


// Function for equal sign to execute operator
//////////////////////////////////////////////
equal.addEventListener('click', () => {
    if (operator == 'add')
    { sum(); }
})
//////////////////////////////////////////////