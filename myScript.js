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
        let temp = num.innerText;
        let div = document.createElement('div');
        solution.innerText += temp;
        history.innerText += temp;
        })
})
///////////////////////////////////////////


// function to add numbers
////////////////////////////////////////////////////////////////////////////////////////////////////
const sum = function (...args) {
    let total = 0;
    let x = solution.innerText;
    let y = history.innerText;
    
    x = solution.innerText.replaceAll("+", ","); // Replaces the '+' sign with a comma
    //y = solution.innerText.replaceAll("+", ","); // Replaces the '+' sign with a comma

    x = x.split(",");
    //y = y.split(",");

    x = x.map(Number);
    //y = y.map(Number);
    console.log(x);

    l = x.length;
    for (let i = 0; i < l; i++)
    {
        total += x[i];
    }
    solution.innerText = total;
    history.innerText += " = " + total;
    console.log(total);
}
////////////////////////////////////////////////////////////////////////////////////////////////////


// Event listener for the add button
//////////////////////////////////////////
add.addEventListener('click', () => {
    operator = "add";
    solution.innerText += add.innerText;
    history.innerText += add.innerText;
})
//////////////////////////////////////////


// Function for equal sign to execute operator
//////////////////////////////////////////
equal.addEventListener('click', () => {
    if (operator == 'add')
    { sum(); }
})