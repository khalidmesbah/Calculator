class Calculator {
    constructor(previousOperand, currentOperand) {
        this.previousOperandEl = previousOperand;
        this.currentOperandEl = currentOperand;
        this.clear();

    }
    clear() {
        this.previousOperand = ``;
        this.currentOperand = ``;
        this.operation = undefined;
    }
    delete() {

    }
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    chooseOperation(operation) {
        if(this.currentOperand === '') return;
        if(this.previousOperand !== '') this.compute();
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = ``;
    }
    compute() {
        // this.
    }
    updateDisplay() {
        this.currentOperandEl.textContent = this.currentOperand;
        this.previousOperandEl.textContent = this.previousOperand;
    }
}



const numbersBtns = document.querySelectorAll(`[data-number]`);
const operationsBtns = document.querySelectorAll(`[data-operation]`);
const output = document.getElementById(`output`);
const equalsButton = document.getElementById(`equal`);
const previousOperandEl = document.getElementById(`previous-operand`);
const currentOperandEl = document.getElementById(`current-operand`);
const clearAllButton = document.querySelector(`[data-clear-all]`);


const calculator = new Calculator(previousOperandEl, currentOperandEl);

numbersBtns.forEach(number => {
    number.addEventListener(`click`, () => {
        calculator.appendNumber(number.textContent);
        calculator.updateDisplay();
    });
});
operationsBtns.forEach(operation => {
    operation.addEventListener(`click`, () => {
        calculator.chooseOperation(operation.textContent);
        calculator.updateDisplay();
    });
});
