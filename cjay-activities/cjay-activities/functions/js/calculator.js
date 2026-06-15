const display = document.getElementById("display");
const operatorBox = document.getElementById("operatorBox");

let firstValue = "";
let operator = "";

function press(value) {
    if (display.value === "0") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function pressOperator(op) {
    firstValue = display.value;
    operator = op;
    operatorBox.value = operator;
    display.value = "0";
}

function calculate() {
    if (firstValue === "" || display.value === "") return;
    
    // Evaluate calculation safely (basic arithmetic values only)
    try {
        const num1 = parseFloat(firstValue);
        const num2 = parseFloat(display.value);
        let result = 0;
        
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num2 !== 0 ? num1 / num2 : "Error";
                break;
            default:
                return;
        }
        
        display.value = result;
        operatorBox.value = "";
        firstValue = "";
        operator = "";
    } catch (e) {
        display.value = "Error";
    }
}

function allClear() {
    display.value = "0";
    operatorBox.value = "";
    firstValue = "";
    operator = "";
}

function clearLast() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "0";
    }
}
