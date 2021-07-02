let firstNum = ""; //string value of the numbers picked
let secondNum = "";//string value of the numbers picked after operator
let operator = "0"; //set up a listener to store which function to run
var result = 0;





function display() {

    //run the function in operator with the values from first&second
    if (operator == "add") {
        add(firstNum, secondNum)
    }
    if (operator == "sub") {
        subtract(firstNum, secondNum)
    }
    if (operator == "mul") {
        multiply(firstNum, secondNum)
    }
    if (operator == "divide") {

        div(firstNum, secondNum)
    }



    document.getElementById("display").innerHTML = result;
}


document.addEventListener("DOMContentLoaded", buttonClickHandler)


function buttonClickHandler() {
    let buttons = document.getElementsByClassName('button');
    let operators = document.getElementsByClassName('operator');




    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {

            if (operator == "0") {
                firstNum += this.value;
                document.getElementById("display").innerHTML = firstNum;
            } else {
                secondNum += this.value;
                document.getElementById("display").innerHTML = secondNum;
            }
        });
    }

    for (var i = 0; i < operators.length; i++) {
        operators[i].addEventListener('click', function () {

            if (this.value != "Clear") {

                operator = this.value;
                document.getElementById("display").innerHTML = operator;

            } else if (this.value == "Clear") {
                firstNum = ""; //string value of the numbers picked
                secondNum = "";//string value of the numbers picked after operator
                operator = "0";
                document.getElementById("display").innerHTML = operator;
            }



        });


    }



}




const add = function (a, b) {
    result = Number(a) + Number(b);
};

const subtract = function (a, b) {
    result = Number(a) - Number(b);
};
const div = function (a, b) {
    if (a == "0" || b == "0") {
        result = "You Can't Divide by Zero Numpty";
    } else {

        result = Number(a) / Number(b);
    }


};

const multiply = function (a, b) {

    result = Number(a) * Number(b)
};


