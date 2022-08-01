
//Variables
const numButtons = document.querySelectorAll('[data-number]');
const opButtons = document.querySelectorAll('[data-operation]');
//const posNegButton = document.querySelector('[data-pos-neg]');
const clearScreenButton = document.querySelector('[data-clear]');
//const percentButton = document.querySelector('[data-percent]');
const equalsButton = document.querySelector('[data-equals]');
const previousNumText = document.querySelector('[data-display-previous]');
const currentNumText = document.querySelector('[data-display-current]');

//Creating a new Calculator with various functions
class Calculator {

    //Constructor
    constructor(previousNumText, currentNumText) {
        this.previousNumText = previousNumText;
        this.currentNumText = currentNumText;
        this.clear();
    }

    //Clears the screen when user hits "C"   
    clear() {
        this.previousNum = '';
        this.currentNum = '0';
        this.opButtons = undefined;
    }

    //Appends numbers so user can type more than one digit
    appendNum(number) {
        if (number === '.' && this.currentNum.includes('.')) {
            return;
        }
        this.currentNum = this.currentNum.toString() + number.toString();
    }
/* Could not get these functions to work quite yet----Not in instructions to do so------
    posNeg(number) {
        number = parseFloat(this.currentNum);
        number = number * -1;
    }

    percentage(number) {
        number = parseFloat(this.currentNum);
        number = number / 100;
    }
*/
    //Chooses which operand user clicked
    chooseOperator(operation) {
        if (this.currentNum === '') {
            return;
        }
        if (this.previousNum !== '') {
            this.calculate();
        }
        this.operation = operation;
        this.previousNum = this.currentNum;
        this.currentNum = '';
    }

    //Performs the calculations for the Calculator
    calculate() {
        let calculations;
        const previous = parseFloat(this.previousNum);
        const current = parseFloat(this.currentNum);
        if (isNaN(previous) || isNaN(current)) {
            return;
        } 
        switch (this.operation) {
            case '+': calculations = previous + current
                break;
            case '-': calculations = previous - current
                break;
            case 'x': calculations = previous * current
                break;
            case '÷': calculations = previous / current
                break;
            default: return;
        }
        
        this.currentNum = calculations;
        this.previousNum = '';
        this.operation = undefined;
    }

    //Gets display number to update from string and formats properly
    displayNum(number) {
        const stringNum = number.toString();
        const floatNum = parseFloat(stringNum.split('.')[0]);
        const decNum = stringNum.split('.')[1];
        let display;
        if (isNaN(floatNum)) {
            display = '';
        } else {
            display = floatNum.toLocaleString('en', { maximumFractionDigits: 0 });
        }
        if (decNum != null) {
            return `${display}.${decNum}`;
        } else {
            return display;
        }
    }
    //Updates Display
    updateDisplay() {
        this.currentNumText.innerText = this.displayNum(this.currentNum);
        if (this.operation != null) {
            this.previousNumText.innerText = `${this.displayNum(this.previousNum)} ${this.operation}`
        } else {
            this.previousNumText.innerText = '';
        }
    }
}

const calculator = new Calculator(previousNumText, currentNumText);

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNum(button.innerText);
        calculator.updateDisplay();
    });
});

opButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperator(button.innerText);
        calculator.updateDisplay();
    });
});

equalsButton.addEventListener('click', () => {
    calculator.calculate();
    calculator.updateDisplay();
});
/* Non-functioning buttons at this time--------Not in instructions to do so--------
posNegButton.addEventListener('click', () => {
    calculator.posNeg();
});

percentButton.addEventListener('click', () => {
    calculator.percentage();
});
*/
clearScreenButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});
