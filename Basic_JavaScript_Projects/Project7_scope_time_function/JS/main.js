var X = 55;
function Add_numbers_1() {
    document.write(25 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 10);
}
Add_numbers_1();
Add_numbers_2();

document.write("<br>")

function Add_numbers_3() {
    var A = 25;
    document.write(25 + A);
}
Add_numbers_3();

document.write("<br>")

function Add_numbers_4() {
    var B = 21;
    console.log(24 + B);
}
function Add_numbers_5() {
    console.log(B + 54);
}
Add_numbers_4();
Add_numbers_5();

function getting_Date() {
    if(new Date().getHours() < 19) {
        document.getElementById("Get_Time").innerHTML = "How are you today?";
    }
}

function my_date(){
    if (new Date().getHours() < 19) {
    document.getElementById("My_Time").innerHTML = "Good day";
    }
}

//ELSE 
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

//Else IF 
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon."
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}