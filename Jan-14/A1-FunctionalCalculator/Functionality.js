console.log("Functional Calculator: ");
var num1 = "";
var num2 = "";
var operator = " ";
function display(n) {
    var para = document.getElementById('output');
    para.innerText = n;
}

function setOperator(new_opertor) {
    operator = new_opertor;
    if (operator == "*") {
        display("x");
    }
    else {
        display(operator);
    }
}

function concatNum(single_digit) {
    if (operator == "") {
        num1 = num1 + single_digit;
        display(num1);
    } else {
        num2 = num2 + single_digit;
        display(num2);
    }
}
function back() {
    if (operator == "") {
        num1 = num1.slice(0, -1);
        display(num1);
    }
    else {
        num2 = num2.slice(0, -1);
        display(num2);
    }
}
function clrAll() {
    if (operator == "") {
        num1 = "";
        display(num1);
    }
    else {
        num2 = "";
        display(num2);
    }
}

function addition(n1, n2) {
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    return n1 + n2;

}
function multiplication(n1, n2) {
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    return n1 * n2;
}
function substraction(n1, n2) {
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    return n1 - n2;
}
function division(n1, n2) {
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    return n1 / n2;
}
function percentage(n1, n2) {
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    return (n1 / 100) * n2;
}

function equals() {
    if (operator == "+") {
        num1 = addition(num1, num2);
        num2 = "";
        operator = "";
        display(num1);
    } else if (operator == "*") {
        num1 = multiplication(num1, num2);
        num2 = "";
        operator = "";
        display(num1);
    } else if (operator == "-") {
        num1 = substraction(num1, num2);
        num2 = "";
        operator = "";
        display(num1);
    } else if (operator == "/") {
        num1 = division(num1, num2);
        num2 = "";
        operator = "";
        display(num1);
    } else if (operator == "%") {
        num1 = percentage(num1, num2);
        num2 = "";
        operator = "";
        display(num1);
    }
}