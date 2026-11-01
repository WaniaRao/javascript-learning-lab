
// Question 1: Vowel Checker

function checkVowel() {
 
    var alphabet = document.getElementById("alphabet").value.toLowerCase();

    if (alphabet.length !== 1 || alphabet < "a" || alphabet > "z") {
        document.getElementById("vowelResult").innerHTML = "Please enter one alphabet.";
    }
    else if (
        alphabet === "a" ||
        alphabet === "e" ||
        alphabet === "i" ||
        alphabet === "o" ||
        alphabet === "u"
    ) {
        document.getElementById("vowelResult").innerHTML = "It is a Vowel!";
    }
    else {
        document.getElementById("vowelResult").innerHTML = "It is a Consonant!";
    }
}

      
// Question 2: Even Numbers

function showEven() {

    var result = "";

    for (var i = 1; i <= 50; i++) {

        if (i % 2 === 0) {
            result = result + i + " ";
        }
    }

    document.getElementById("evenResult").innerHTML = result;
}


// Question 3: Largest Number

function findLargest() {

    var a = Number(document.getElementById("num1").value);
    var b = Number(document.getElementById("num2").value);
    var c = Number(document.getElementById("num3").value);

    if (
        document.getElementById("num1").value === "" ||
        document.getElementById("num2").value === "" ||
        document.getElementById("num3").value === ""
    ) {
        document.getElementById("largestResult").innerHTML = "Enter all three numbers.";
    }
    else if (a >= b && a >= c) {
        document.getElementById("largestResult").innerHTML = "Largest Number is: " + a;
    }
    else if (b >= a && b >= c) {
        document.getElementById("largestResult").innerHTML = "Largest Number is: " + b;
    }
    else {
        document.getElementById("largestResult").innerHTML = "Largest Number is: " + c;
    }
}


// Question 4: Password Length

function checkPassword() {

    var password = document.getElementById("password").value;

    if (password.length >= 8) {
        document.getElementById("passwordResult").innerHTML = "Strong Password!";
    }
    else {
        document.getElementById("passwordResult").innerHTML = "Weak Password! Use at least 8 characters.";
    }
}


// Question 5: Shopping Discount

function calculateDiscount() {

    var amount = Number(document.getElementById("amount").value);

    if (document.getElementById("amount").value === "" || amount < 0) {
        document.getElementById("discountResult").innerHTML = "Enter a valid amount.";
    }
    else if (amount >= 5000) {

        var discount = amount * 10 / 100;
        var finalAmount = amount - discount;

        document.getElementById("discountResult").innerHTML =
            "Discount: Rs. " + discount +
            "<br>Final Amount: Rs. " + finalAmount;
    }
    else {
        document.getElementById("discountResult").innerHTML =
            "No Discount. Total: Rs. " + amount;
    }
}
 
