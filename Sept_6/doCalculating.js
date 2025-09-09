const display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    if (operator === '=') {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = 'Error';
        }
    } else {
        display.value += operator;
    }
}

function clearDisplay() {
    display.value = '';
}
