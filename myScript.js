const buttons = document.querySelectorAll(".button");
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
const solution = document.querySelector('.solution');
const history = document.querySelector('.history');
const add = document.querySelector('.add');
const num = document.querySelectorAll('.num');
let  = document.createElement('p');


// This section is for mouse hovering style changes
//////////////////////////////////////////////////////////////////////////////////////////////
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
           button.classList.add('hovered');
        });
        clear.addEventListener('click', () => {
            solution.innerText = "";
            history.innerText = "";
        })
    })

    buttons.forEach(button => {
        button.addEventListener('mouseout', () => {
            button.classList.remove('hovered');   
        });
        clear.addEventListener('click', () => {
            solution.innerText = "";
            history.innerText = "";
        })
    })
///////////////////////////////////////////////////////////////////////////////////////////////    


        
// Clear display button event listener when clicked
///////////////////////////////////////////
clear.addEventListener('click', () => {
    solution.innerText = "";
    history.innerText = "";
})
///////////////////////////////////////////


// function to add numbers
///////////////////////////////////////////
const sum = function (...args) {
    let sum = 0;
    for (let i = 0; i < args; i++)
    {
        sum += args[i];
    }
    return sum;
}
//////////////////////////////////////////

// Event Listener for when a number is clicked
///////////////////////////////////////////
num.forEach(num => {
    num.addEventListener('click', () => {
        let temp = num.innerText;
        console.log(temp);
        let p = document.createElement('p');
        p = temp;
        display.appendChild(p);
        })
})

///////////////////////////////////////////