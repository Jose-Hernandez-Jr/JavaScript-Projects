function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function length_function() {
    var text = "I am here to just say hola, and to keep writing code.";
    var length = text.length;
    document.getElementById("lengthy").innerHTML =length;
}


var Instruments = ["Guitar", "Drums", "Piano", "Bass"]
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_instruments").innerHTML = Content;
}

function array_Function() {
    var Car = [];
    Car[0] = "Van";
    Car[1] = "Truck";
    Car[2] = "Sport Car";
    Car[3] = "Suv";
    document.getElementById("Array").innerHTML = "The car I drive is " + Car[1] + ".";

}

function constant_function() {
    const Airsoft = {Type:"Sniper", Model:"MSR300", Color:"Tan", Brand:"Ares"};
    Airsoft.Color = "Black";
    Airsoft.Price = "$350";
    document.getElementById("Constant").innerHTML = "The Airsoft " + Airsoft.Type + " shown here is the new " + Airsoft.Model + " made by " + Airsoft.Brand + " that is priced at " + Airsoft.Price;
}

var J = 24;
document.write(J);
{
    let J = 28;
    document.write("<br>" + J);
}
document.write("<br>" + J);

let airsoft = {
    type: "Sniper ",
    model: "MSR300 ",
    year: " 2024 ",
    color: "Tan ",
    description: function() {
        return "This airsoft weapon is a " + this.color + this.model + this.type + " made in " + this.year;
        }
};
document.write("<br>" + airsoft.description());
