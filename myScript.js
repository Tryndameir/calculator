const buttons = document.querySelectorAll(".button");





    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
           button.classList.add('hovered');
           //button.style.cssText = 'border: solid; border-width: 3px; border-color: yellow;';
           
        });
    })

    //function myFunction (e) {
       // if (e.propertyName !== 'mouseover') return;
       // this.classList.remove('hovered');
   // }

    buttons.forEach(button => {
        button.addEventListener('mouseout', () => {
            button.classList.remove('hovered');   
        });
    })
        
        
    