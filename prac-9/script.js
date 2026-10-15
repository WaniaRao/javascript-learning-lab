
console.log("===== Q1: Temperature Converter =====");

function convertToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

console.log(convertToFahrenheit(25));
console.log(convertToFahrenheit(0));


console.log("\n===== Q2: Even or Odd =====");

function checkNumber(num) {
    if (num % 2 === 0) {
        return "Even Number";
    } else {
        return "Odd Number";
    }
}

console.log(checkNumber(12));
console.log(checkNumber(7));


console.log("\n===== Q3: Discount Calculator =====");

function calculateDiscount(price, discount) {
    let discountAmount = price * discount / 100;
    return price - discountAmount;
}

console.log(calculateDiscount(2000, 20));
console.log(calculateDiscount(5000, 10));


console.log("\n===== Q4: Age Category =====");

function ageCategory(age) {
    if (age < 13) {
        return "Child";
    } else if (age < 20) {
        return "Teenager";
    } else {
        return "Adult";
    }
}

console.log(ageCategory(10));
console.log(ageCategory(16));
console.log(ageCategory(22));


console.log("\n===== Q5: Simple Calculator =====");

function calculator(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return b !== 0 ? a / b : "Cannot divide by zero";
        default:
            return "Invalid operator";
    }
}

console.log(calculator(10, 5, "+"));
console.log(calculator(10, 5, "*"));
console.log(calculator(10, 0, "/"));


console.log("\n===== Q6: Day Name Finder =====");

function getDay(day) {
    switch (day) {
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        case 7: return "Sunday";
        default: return "Invalid Day";
    }
}

console.log(getDay(3));
console.log(getDay(7));


console.log("\n===== Q7: Multiplication Table =====");

function printTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}

printTable(5);


console.log("\n===== Q8: Sum of Digits =====");

function sumDigits(num) {
    let sum = 0;

    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    return sum;
}

console.log(sumDigits(1234));
console.log(sumDigits(567));


console.log("\n===== Q9: Factorial =====");

function factorial(num) {
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5));
console.log(factorial(4));


console.log("\n===== Q10: Find Largest Number =====");

function findLargest(numbers) {
    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    return largest;
}

console.log(findLargest([12, 45, 7, 89, 23]));


console.log("\n===== Q11: Count Even Numbers =====");

function countEven(numbers) {
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            count++;
        }
    }

    return count;
}

console.log(countEven([2, 5, 8, 11, 14, 17]));


console.log("\n===== Q12: Reverse an Array =====");

function reverseArray(arr) {
    let result = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }

    return result;
}

console.log(reverseArray([1, 2, 3, 4, 5]));


console.log("\n===== Q13: Count Vowels =====");

function countVowels(text) {
    let count = 0;
    let vowels = "aeiou";

    for (let i = 0; i < text.length; i++) {
        if (vowels.includes(text[i].toLowerCase())) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("JavaScript is fun"));


console.log("\n===== Q14: Palindrome Checker =====");

function isPalindrome(word) {
    let reversed = "";

    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }

    return word.toLowerCase() === reversed.toLowerCase();
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));


console.log("\n===== Q15: Student Object =====");

let student ={
    name: "Wania",
    marks: 85,
    grade: "A"
};

function showStudent(student) {
    console.log("Name: " + student.name);
    console.log("Marks: " + student.marks);
    console.log("Grade: " + student.grade);
}

showStudent(student);


console.log("===== Q1: Temperature Converter =====");

function convertToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

console.log(convertToFahrenheit(25));
console.log(convertToFahrenheit(0));


console.log("\n===== Q2: Even or Odd =====");

function checkNumber(num) {
    if (num % 2 === 0) {
        return "Even Number";
    } else {
        return "Odd Number";
    }
}

console.log(checkNumber(12));
console.log(checkNumber(7));


console.log("\n===== Q3: Discount Calculator =====");

function calculateDiscount(price, discount) {
    let discountAmount = price * discount / 100;
    return price - discountAmount;
}

console.log(calculateDiscount(2000, 20));
console.log(calculateDiscount(5000, 10));


console.log("\n===== Q4: Age Category =====");

function ageCategory(age) {
    if (age < 13) {
        return "Child";
    } else if (age < 20) {
        return "Teenager";
    } else {
        return "Adult";
    }
}

console.log(ageCategory(10));
console.log(ageCategory(16));
console.log(ageCategory(22));


console.log("\n===== Q5: Calculator Using Switch =====");

function calculator(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return b !== 0 ? a / b : "Cannot divide by zero";
        default:
            return "Invalid operator";
    }
}

console.log(calculator(10, 5, "+"));
console.log(calculator(10, 5, "*"));
console.log(calculator(10, 0, "/"));


console.log("\n===== Q6: Day Name Finder =====");

function getDay(day) {
    switch (day) {
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        case 7: return "Sunday";
        default: return "Invalid Day";
    }
}

console.log(getDay(3));
console.log(getDay(7));


console.log("\n===== Q7: Multiplication Table =====");

function printTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + num * i);
    }
}

printTable(5);


console.log("\n===== Q8: Sum of Digits =====");

function sumDigits(num) {
    let sum = 0;

    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    return sum;
}

console.log(sumDigits(1234));
console.log(sumDigits(567));


console.log("\n===== Q9: Factorial =====");

function factorial(num) {
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5));
console.log(factorial(4));


console.log("\n===== Q10: Find Largest Number =====");

function findLargest(numbers) {
    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    return largest;
}

console.log(findLargest([12, 45, 7, 89, 23]));


console.log("\n===== Q11: Count Even Numbers =====");

function countEven(numbers) {
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            count++;
        }
    }

    return count;
}

console.log(countEven([2, 5, 8, 11, 14, 17]));


console.log("\n===== Q12: Reverse an Array =====");

function reverseArray(arr) {
    let result = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }

    return result;
}

console.log(reverseArray([1, 2, 3, 4, 5]));


console.log("\n===== Q13: Count Vowels =====");

function countVowels(text) {
    let count = 0;
    let vowels = "aeiou";

    for (let i = 0; i < text.length; i++) {
        if (vowels.includes(text[i].toLowerCase())) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("JavaScript is fun"));


console.log("\n===== Q14: Palindrome Checker =====");

function isPalindrome(word) {
    let reversed = "";

    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }

    return word.toLowerCase() === reversed.toLowerCase();
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));


console.log("\n===== Q15: Student Object =====");


console.log("\n===== Q15: Student Object =====");

let studentInfo = {
    name: "Wania",
    marks: 85,
    grade: "A"
};

function showStudent(student) {
    console.log("Name: " + student.name);
    console.log("Marks: " + student.marks);
    console.log("Grade: " + student.grade);
}

showStudent(studentInfo);



console.log("\n===== Q16: Break Statement =====");

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}


console.log("\n===== Q17: Continue Statement =====");

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }

    console.log(i);
}


console.log("\n===== Q18: Break with While Loop =====");

let i = 1;

while (i <= 10) {
    if (i === 6) {
        break;
    }

    console.log(i);
    i++;
}


console.log("\n===== Q19: Continue with Odd Numbers =====");

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }

    console.log(i);
}


console.log("\n===== Q20: Break in Switch =====");

let fruit = "apple";

switch (fruit) {
    case "apple":
        console.log("Apple");
        break;

    case "banana":
        console.log("Banana");
        break;

    case "mango":
        console.log("Mango");
        break;

    default:
        console.log("Fruit not found");
}
