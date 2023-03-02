function calculator() {
    // Start calculator with 0 on screen
    const display = document.querySelector('.calculator-display');
    function startDisplay() {
        display.textContent = 0;
    };
    startDisplay();

    const btnOne = document.querySelector('.button.one');
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