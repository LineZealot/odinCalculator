function calculator() {

    // Start calculator with 0 on screen
    const display = document.querySelector('.display.bottom');
    const displayTop = document.querySelector('.display.top');
    let displayState = 0; // max digits on display is 10
    function startDisplay() {
        display.textContent = 0;
    };
    startDisplay();

    // Input values
    const numArr = [];
    let opSelector = '';

    const equation = [];

    // Number buttons
    const buttonOne = document.querySelector('.button.one');
    buttonOne.addEventListener('click', function(){
        const value = 1;
        const pushVal = (n) => numArr.push(n);

        if(displayState === 0) {
            display.textContent = value;
            displayState++;
            pushVal(value);
        } else if(displayState < 10) {
            display.textContent += value;
            displayState++;
            pushVal(value);
        }
    });
    const buttonTwo = document.querySelector('.button.two');
    buttonTwo.addEventListener('click', function(){
        const value = 2;
        const pushVal = (n) => numArr.push(n);
        
        if(displayState === 0) {
            display.textContent = value;
            displayState++;
            pushVal(value);
        } else if(displayState < 10) {
            display.textContent += value;
            displayState++;
            pushVal(value);
        }
    });
    const buttonThree = document.querySelector('.button.three');
    buttonThree.addEventListener('click', function(){
        const value = 3;
        const pushVal = (n) => numArr.push(n);
        
        if(displayState === 0) {
            display.textContent = value;
            displayState++;
            pushVal(value);
        } else if(displayState < 10) {
            display.textContent += value;
            displayState++;
            pushVal(value);
        }
    });
    const buttonFour = document.querySelector('.button.four');
    buttonFour.addEventListener('click', function(){
        const value = 4;
        const pushVal = (n) => numArr.push(n);
        
        if(displayState === 0) {
            display.textContent = value;
            displayState++;
            pushVal(value);
        } else if(displayState < 10) {
            display.textContent += value;
            displayState++;
            pushVal(value);
        }
    });
    const buttonFive = document.querySelector('.button.five');
    buttonFive.addEventListener('click', function(){
        const value = 5;
        const pushVal = (n) => numArr.push(n);
        
        if(displayState === 0) {
            display.textContent = value;
            displayState++;
            pushVal(value);
        } else if(displayState < 10) {
            display.textContent += value;
            displayState++;
            pushVal(value);
        }
    });
    const buttonSix = document.querySelector('.button.six');
    buttonSix.addEventListener('click', function(){
        const value = 6;
        const pushVal = (n) => numArr.push(n);

        if(displayState === 0) {
            display.textContent = value;
            displayState++;
            pushVal(value);
        } else if(displayState < 10) {
            display.textContent += value;
            displayState++;
            pushVal(value);
        }
    });
    const buttonSeven = document.querySelector('.button.seven');
    buttonSeven.addEventListener('click', function(){
        const value = 7;
        const pushVal = (n) => numArr.push(n);

        if(displayState === 0) {
            display.textContent = value;
            displayState++;
            pushVal(value);
        } else if(displayState < 10) {
            display.textContent += value;
            displayState++;
            pushVal(value);
        }
    });
    const buttonEight = document.querySelector('.button.eight');
    buttonEight.addEventListener('click', function(){
        const value = 8;
        const pushVal = (n) => numArr.push(n);

        if(displayState === 0) {
            display.textContent = value;
            displayState++;
            pushVal(value);
        } else if(displayState < 10) {
            display.textContent += value;
            displayState++;
            pushVal(value);
        }
    });
    const buttonNine = document.querySelector('.button.nine');
    buttonNine.addEventListener('click', function(){
        const value = 9;
        const pushVal = (n) => numArr.push(n);

        if(displayState === 0) {
            display.textContent = value;
            displayState++;
            pushVal(value);
        } else if(displayState < 10) {
            display.textContent += value;
            displayState++;
            pushVal(value);
        }
    });
    const buttonZero = document.querySelector('.button.zero');
    buttonZero.addEventListener('click', function(){
        const value = 0;
        const pushVal = (n) => numArr.push(n);
        
        if(displayState === 0) {
            return;
        } else if(displayState < 10) {
            display.textContent += value;
            displayState++;
            pushVal(value);
        }
    });

    // Reset Display Function
    function resetDisplay (x) {
        if(x === undefined) {
            display.textContent = 0;
            displayState = 0;
        } else if(x === 'top') {
            displayTop.textContent = '';
        }
    }

    // Operator Buttons
    function setOperator(op, symb) {
        if(numArr.length > 0) {
            equation.push(parseInt(numArr.join('')));
            equation.push(op);
            displayTop.textContent += numArr.join('') + symb;
            numArr.length = 0;
        }
    }

    const buttonAdd = document.querySelector('.button.add');
    buttonAdd.addEventListener('click', () => {
        resetDisplay();
        setOperator('add', ' + ');
    });
    const buttonSubtract = document.querySelector('.button.subtract');
    buttonSubtract.addEventListener('click', () => {
        resetDisplay();
        setOperator('sub', ' - ');
    });
    const buttonMultiply = document.querySelector('.button.multiply');
    buttonMultiply.addEventListener('click', () => {
        resetDisplay();
        setOperator('mult', ' x ');
    });
    const buttonDivide = document.querySelector('.button.divide');
    buttonDivide.addEventListener('click', () => {
        resetDisplay();
        setOperator('div', ' / ');
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

    // Equals Button
    const buttonEquals = document.querySelector('.button.equal');
    buttonEquals.addEventListener('click', () => {
        if(numArr.length > 0) {
            equation.push(parseInt(numArr.join('')));
            displayTop.textContent += numArr.join('') + ' =';
            numArr.length = 0;
            }
        const result = equation.reduce((acc, curr) => {
            
        })
        console.log(result);
        }
    );

    // Clear Button
    const buttonClear = document.querySelector('.button.clear');
    buttonClear.addEventListener('click', () => {
        resetDisplay();
        resetDisplay('top');
        numArr.length = 0;
        equation.length = 0;
    });
    console.log(equation);
}
calculator();