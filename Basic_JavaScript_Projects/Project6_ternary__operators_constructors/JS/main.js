//This is a Ternary Operators
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//This is a Ternary Operators
function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to" : "You are old enough to";
    document.getElementById("Vote").innerHTML = Can_vote + " vote!";
}

//This is a Constructor Function
function Airsoft(Make, Model, Color) {
    this.Airsoft_Make = Make;
    this.Airsoft_Model = Model;
    this.Airsoft_Color = Color;
}
var Jose = new Airsoft("CYMA", "Sniper", "Tan");
var Paublo = new Airsoft("KWA", "AEG Rilfe", "Black and Light Blue");
var Billy = new Airsoft("G&G", "Gas Pistol", "Gold");
function myAirsoftFunction() {
    document.getElementById("New_and_This").innerHTML = "Jose has a  " + Jose.Airsoft_Color + " colored " + Jose.Airsoft_Model +" made by " + Jose.Airsoft_Make ; 
}

//This Function displays a constructor function wintin HTML.
function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}
var abstract = new Person("Jose", "Hernandez", "30");
function myPeronal() {
    document.getElementById("New").innerHTML = "My name is " + abstract.firstName + " A " +  abstract.lastName + " my age is " + abstract.age;
}

//This is a Nested Function
function Nested_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var counter = 20;
        function Plus_one() {counter += 1;}
        Plus_one();   
        return counter
    }
}