function addition_function() {
    var addition = 40 + 5;
    document.getElementById("Math").innerHTML = " 40 + 5 = " + addition
}

function subtraction_function() {
    var subtraction = 90 - 5;
    document.getElementById("Math2").innerHTML = " 90 - 5 = " + subtraction
}


function multiplication_function() {
    var multiplication = 9 * 5;
    document.getElementById("Math3").innerHTML = " 9 x 5 = " + multiplication
}


function division_function() {
    var division = 55 / 5;
    document.getElementById("Math4").innerHTML = " 55 / 5 = " + division
}

function modulus_operator() {
    var simple_math = 200 % 60;
    document.getElementById("Math5").innerHTML = "When you divide 200 by 60 you have a remainder of: " + simple_math;
}


function negation_operator() {
    var x = 20;
    document.getElementById("Math6").innerHTML = -x;
}

// Increment operator
var X = 55;
X++;
document.write(X);

// Decrement operator
var X = 55;
X--;
document.write(X);

//Random operator
window.alert(Math.random());

//Math 
var a = 90;
var answer = Math.round(a);
document.write("<h1>"+answer+"</h1>");















