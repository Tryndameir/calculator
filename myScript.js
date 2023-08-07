const buttons = document.querySelectorAll(".button");
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
const solution = document.querySelector('.solution');
const history = document.querySelector('.history');
const add = document.querySelector('.add');
const num = document.querySelectorAll('.num');
let operator = "";
const equal = document.querySelector('.equal');


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
        console.log(temp);
        let div = document.createElement('div');
        div.innerText = temp;
        solution.innerText += temp;
        history.innerText += temp;
        console.log(temp);
        })
})
///////////////////////////////////////////


// function to add numbers
////////////////////////////////////////////////////////////////////////////////////////////////////
const sum = function (a, b) {
    let sum = 0;
    solution.innerText = solution.innerText.replace("+", ","); // Replaces the '+' sign with a comma
    let solutionArray = solution.innerText.split(",");
    l = solutionArray.length;
    for (let i = 0; i < l; i++)
    {
        sum += solutionArray[i];
    }
    solution.innerText = sum;
    history.innerText = (history.innerText + " = " + sum);
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