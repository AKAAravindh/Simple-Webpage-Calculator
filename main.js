

// To display content inside the calculator display

function display(content) {
    calculatorScreen.value += content
}

function allClear() {
    calculatorScreen.value = ""
}

function evaluat() {
    calculatorScreen.value = eval
    (calculatorScreen)

}

function backSpace() {
    calculatorScreen.value = calculatorScreen.value.slice(0,-1)
}