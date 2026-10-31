
 // Q1: Marks Checker

function checkMarks() {
    var marks = Number(document.getElementById("marks").value);

    if (marks >= 50 && marks <= 100) {
        document.getElementById("marksResult").innerHTML = "Pass";
    }
    else if (marks >= 0 && marks < 50) {
        document.getElementById("marksResult").innerHTML = "Fail";
    }
    else {
        document.getElementById("marksResult").innerHTML = "Enter marks between 0 and 100";
    }
}


// Q2: Multiplication Table

function makeTable() {
    var num = Number(document.getElementById("tableNum").value);
    var result = "";

    for (var i = 1; i <= 10; i++) {
        result += num + " x " + i + " = " + (num * i) + "<br>";
    }

    document.getElementById("tableResult").innerHTML = result;
}


// Q3: Character Counter

function countCharacters() {
    var sentence = document.getElementById("sentence").value;

    document.getElementById("charResult").innerHTML =
        "Total Characters: " + sentence.length;
}


// Q4: Background Changer

function changeBackground(color) {
    document.body.style.backgroundColor = color;
}


// Q5: Simple Login

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("userPassword").value;

    if (username === "admin" && password === "12345") {
        document.getElementById("loginResult").innerHTML = "Login Successful!";
    }
    else {
        document.getElementById("loginResult").innerHTML = "Invalid Login!";
    }
}
