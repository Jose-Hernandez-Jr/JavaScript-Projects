//Slice Method
function Slice_Method() {
    var Sentence = "All work and no play Jose.";
    var Section = Sentence.slice(21,25);
    document.getElementById("Slice").innerHTML =Section;
}

//toUpperCase() Method
function myUpperCase_Function() {
    var text = document.getElementById("Uppercase").innerHTML;
    document.getElementById("Uppercase").innerHTML = text.toUpperCase();
}

//Search() Method
function search_function() {
    var text = "Please locate where 'hola' occurs!";
    var index = text.search("hola");
    document.getElementById("searching").innerHTML =index;
}

//Number Method
function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_String").innerHTML = X.toString();
}

//toPrecision() method
function precision_Method() {
    var X = 12345.67890;
    document.getElementById("Precision").innerHTML = X.toPrecision(6);
}

//toFixed()
function fixed_function() {
    var num = 7.23459;
    var n = num.toFixed(3);
    document.getElementById("fixed_numbers").innerHTML =n;
}