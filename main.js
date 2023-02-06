

// To display content inside the calculator display

function display(content) {
    calculatorScreen.value += content
}

function allClear() {
    calculatorScreen.value = "";
}

function valuate() {
    calculatorScreen.value = eval(calculatorScreen.value)
}

function backSpace() {
    calculatorScreen.value = calculatorScreen.value.slice(0,-1)
}