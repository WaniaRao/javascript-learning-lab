// Function to calculate the power of a number
function power(a, b) {
    let result = 1;

    for (let i = 1; i <= b; i++) {
        result = result * a;
    }

    return result;
}

console.log(power(2, 3));
console.log(power(5, 2));


// Function to check if a year is a leap year
function leapYear(year) {
    if (year % 400 === 0 ||
        (year % 4 === 0 && year % 100 !== 0)) {
        return "Leap Year";
    } else {
        return "Not a Leap Year";
    }
}

console.log(leapYear(2024));
console.log(leapYear(2023));


// Function to calculate the area of a triangle using Heron's formula
function semiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}

function triangleArea(a, b, c) {
    let s = semiPerimeter(a, b, c);
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

console.log(triangleArea(3, 4, 5));


// Function to calculate average and percentage
function average(a, b, c) {
    return (a + b + c) / 3;
}

function percentage(a, b, c) {
    return ((a + b + c) / 300) * 100;
}

function mainFunction() {
    let a = 80;
    let b = 70;
    let c = 90;

    console.log("Average: " + average(a, b, c));
    console.log("Percentage: " + percentage(a, b, c) + "%");
}

mainFunction();


// Function to find the index of a character in a string
function myIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }

    return -1;
}

console.log(myIndexOf("JavaScript", "S"));
console.log(myIndexOf("Hello", "z"));


// Function to remove vowels from a sentence
function removeVowels(sentence) {
    let result = "";

    for (let i = 0; i < sentence.length; i++) {
        let ch = sentence[i].toLowerCase();

        if (ch !== "a" && ch !== "e" &&
            ch !== "i" && ch !== "o" &&
            ch !== "u") {
            result += sentence[i];
        }
    }

    return result;
}

console.log(removeVowels("Hello World"));


// Function to count vowel pairs in a string
function countVowelPairs(text) {
    let count = 0;

    for (let i = 0; i < text.length - 1; i++) {
        let pair = text.substring(i, i + 2).toLowerCase();

        switch (pair) {
            case "aa":
            case "ae":
            case "ai":
            case "ao":
            case "au":
            case "ea":
            case "ee":
            case "ei":
            case "eo":
            case "eu":
            case "ia":
            case "ie":
            case "ii":
            case "io":
            case "iu":
            case "oa":
            case "oe":
            case "oi":
            case "oo":
            case "ou":
            case "ua":
            case "ue":
            case "ui":
            case "uo":
            case "uu":
                count++;
                console.log(pair);
                break;
        }
    }

    return count;
}

let sentence = "Pleases read this application and give me gratuity";
console.log("Total pairs: " + countVowelPairs(sentence));


// Function to convert kilometers to meters, feet, inches, and centimeters
function meters(km) {
    return km * 1000;
}

function feet(km) {
    return km * 3280.84;
}

function inches(km) {
    return km * 39370.08;
}

function centimeters(km) {
    return km * 100000;
}

let km = 5;

console.log("Meters: " + meters(km));
console.log("Feet: " + feet(km));
console.log("Inches: " + inches(km));
console.log("Centimeters: " + centimeters(km));



// Function to calculate overtime pay
function overtimePay(hours) {
    if (hours > 40) {
        return (hours - 40) * 12;
    } else {
        return 0;
    }
}

console.log("Overtime Pay: Rs. " + overtimePay(45));
console.log("Overtime Pay: Rs. " + overtimePay(35));


// Function to calculate the number of currency notes for a given amount
function currencyNotes(amount) {
    let hundred = Math.floor(amount / 100);
    amount = amount % 100;

    let fifty = Math.floor(amount / 50);
    amount = amount % 50;

    let ten = Math.floor(amount / 10);

    console.log("100 rupee notes: " + hundred);
    console.log("50 rupee notes: " + fifty);
    console.log("10 rupee notes: " + ten);
}

currencyNotes(560);