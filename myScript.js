const buttons = document.querySelectorAll(".button");





    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
           button.style.cssText = 'border: solid; border-width: 3px; border-color: yellow;';
           
        });
    })

    buttons.forEach(button => {
        button.addEventListener('mouseleave', () => {
           button.style.cssText = 'border: solid; border-width: 3px; border-color: black;';
           
        });
    })
        
        
    