document.write(typeof "Hola");
document.write("<br>");

document.write( 7 + "UP");
document.write("<br>");

//This is a NaN (“Not a Number”) False
function my_false_function() {
    document.getElementById("False").innerHTML = isNaN('141');
}

//This is a NaN (“Not a Number”) True
function my_true_function() {
    document.getElementById("True").innerHTML = isNaN('This is True');
}

//This is Negative Infinity Function
function the_neg_infinity_function() {
    document.getElementById("-infinity").innerHTML = (-3E3333);
}

//This is Infinity Function
function the_infinity_function() {
    document.getElementById("infinity").innerHTML = (3E3333);
}

//Boolean Greater than Operator
function my_greater_function() {
    document.getElementById("greater").innerHTML = (15 > 5);
}

//Boolean Lesser than Operator
function my_lesser_function() {
    document.getElementById("lesser").innerHTML = (15 < 5);
}
//Math operation woht console.log() function
console.log(5 * 22);

// Double Equal Sign True statement
function my_function1() {
    document.getElementById("equal1").innerHTML = (5 == 5);
}

// Double Equal Sign False statement
function my_function2() {
    document.getElementById("equal2").innerHTML = (50 == 5);
}

x= 55;
y= 55;
document.write(x===y);
document.write("<br>");

x= 55;
y= "hi";
document.write(x===y);
document.write("<br>");

x= 55;
y= "55";
document.write(x===y);
document.write("<br>");

x= "Hi";
y= "Hola";
document.write(x===y);
document.write("<br>");

//AND Operator True
document.write(50 > 45 && 100 > 85);
document.write("<br>");

//AND Operator False
document.write(50 > 45 && 10 > 85);
document.write("<br>");

//OR Operator True
document.write(50 > 45 && 100 > 85);
document.write("<br>");

//OR Operator False
document.write(10 > 45 || 10 > 85);
document.write("<br>");

function not_function1() {
    document.getElementById("Not1").innerHTML = !(2 > 10);
}

function not_function2() {
    document.getElementById("Not2").innerHTML = !(20 > 10);
}