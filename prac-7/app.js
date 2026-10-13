// Function to greet a user
function hello(user,password) {
    console.log(`hello ${user},your password is ${password}`);
}
hello("John","223190");
hello("Jane","223191");
hello("Bob","223192");

console.log();

// Function to calculate the sum of two numbers
function sum(num1,num2) {
    var calculation = num1 + num2;
    alert("The sum of " + num1 + " and " + num2 + " is: " + calculation);
    return calculation;
}
console.log(sum(5,10));
alert(sum(20,30));


// Function to demonstrate variable scope
var user ="jane";
function test() {
var user = "bob";
console.log(user);
}
test();
console.log(user);


function greet(user,org) {
    console.log(`Hello ${user}, welcome to ${org}`);
}

greet("Alice","OpenAI");
greet("Bob","Google");
greet("Charlie","Microsoft");
greet("David","Amazon");
greet("Eve","Facebook");
greet("Frank","Twitter");

console.log("Alice","OpenAi");
console.log("Charlie","Microsoft");
console.log("David","Amazon");

// Function to calculate the hypotenuse of a right triangle
function hyp(base,perp){
    function square(a) {
        return a * a;
    }
    var hypotenuse = square(base) + square(perp);
    return hypotenuse;
}
console.log(hyp(3,6));

// Function to check if a word is a palindrome
var word = prompt("Enter a word:");

var reverse = word.split("").reverse().join("");

document.write("Original Word: " + word + "<br>");
document.write("Reverse Word: " + reverse + "<br>");

if (word.toLowerCase() === reverse.toLowerCase()) {
    document.write("This is a Palindrome");
} else {
    document.write("This is not a Palindrome");
}
