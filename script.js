function calculator() {
    // Start calculator with 0 on screen
    const display = document.querySelector('.calculator-display');
    let displayState = 0; // max digits on display is 10
    function startDisplay() {
        display.textContent = 0;
    };
    startDisplay();

    // Number buttons
    const buttonOne = document.querySelector('.button.one');
    buttonOne.addEventListener('click', function(){
        if(displayState === 0) {
            display.textContent = 1;
            displayState++;
        } else if(displayState <= 10) {
            display.textContent += 1;
            displayState++;
        }
    });
    const buttonTwo = document.querySelector('.button.two');
    buttonTwo.addEventListener('click', function(){
        if(displayState === 0) {
            display.textContent = 2;
            displayState++;
        } else if(displayState <= 10) {
            display.textContent += 2;
            displayState++;
        }
    });
    const buttonThree = document.querySelector('.button.three');
    buttonThree.addEventListener('click', function(){
        if(displayState === 0) {
            display.textContent = 3;
            displayState++;
        } else if(displayState <= 10) {
            display.textContent += 3;
            displayState++;
        }
    });
    const buttonFour = document.querySelector('.button.four');
    buttonFour.addEventListener('click', function(){
        if(displayState === 0) {
            display.textContent = 4;
            displayState++;
        } else if(displayState <= 10) {
            display.textContent += 4;
            displayState++;
        }
    });
    const buttonFive = document.querySelector('.button.five');
    buttonFive.addEventListener('click', function(){
        if(displayState === 0) {
            display.textContent = 5;
            displayState++;
        } else if(displayState <= 10) {
            display.textContent += 5;
            displayState++;
        }
    });
    const buttonSix = document.querySelector('.button.six');
    buttonSix.addEventListener('click', function(){
        if(displayState === 0) {
            display.textContent = 6;
            displayState++;
        } else if(displayState <= 10) {
            display.textContent += 6;
            displayState++;
        }
    });
    const buttonSeven = document.querySelector('.button.seven');
    buttonSeven.addEventListener('click', function(){
        if(displayState === 0) {
            display.textContent = 7;
            displayState++;
        } else if(displayState <= 10) {
            display.textContent += 7;
            displayState++;
        }
    });
    const buttonEight = document.querySelector('.button.eight');
    buttonEight.addEventListener('click', function(){
        if(displayState === 0) {
            display.textContent = 8;
            displayState++;
        } else if(displayState <= 10) {
            display.textContent += 8;
            displayState++;
        }
    });
    const buttonNine = document.querySelector('.button.nine');
    buttonNine.addEventListener('click', function(){
        if(displayState === 0) {
            display.textContent = 9;
            displayState++;
        } else if(displayState <= 10) {
            display.textContent += 9;
            displayState++;
        }
    });

    // Operating function
    function operate(num1, op, num2) {
        switch(op) {
            case 'add':
                return(num1 + num2);
                break;
            case 'sub':
                return(num1 - num2);
                break;
            case 'mult':
                return(num1 * num2);
                break;
            case 'div':
                return(num1 / num2);
                break;
        }
    }
    console.log(operate(4, 'sub', 2))
}
calculator();