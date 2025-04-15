//  Age Category Message – Ask the user for their age. If they are under 18, print “You are a minor.” If they are between 18 and 60, print “You are an adult.” If they are above 60, print “You are a senior citizen.

/*const age = Number(prompt('Enter your age'));

if (age < 18) {
    console.log('You are minor.');
}
else if (age >= 18 && age <= 60) {
    console.log("You're and adult");
}
else {
    console.log("You are a senior citizen");
}*/

// Question No#2

/*const num1 = Number(prompt("Enter 1st number:"));
const num2 = Number(prompt("Enter 2nd number:"));
const sum = num1 + num2;

if (sum % 2 === 0) {
    alert('Your sum is EVEN.')
}
else {
    alert("Your sum is ODD.")
}*/

// Question No#3

/*const letter = prompt('Enter an letter by your choice eg. a,b c,d etc.');

if (letter === letter.toUpperCase()) {
    alert("This letter is Uppercase.");
} else if (letter === letter.toLowerCase()) {
    alert("This letter is Lowercase.");
}
else {
    alert("Not a letter")
}*/

// Question No#4

/*let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let num3 = Number(prompt("Enter the third number:"));
let largest;

if (num1 >= num2 && num1 >= num3) {
    largest = num1;
    alert(largest);
} else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
    alert(largest);
} else {
    largest = num3;
    alert(largest);
}*/

/* const leapYear = Number(prompt('Enter your year eg. 2016, 2017 etc'));

if (leapYear / 4 === 0) {
    alert("This year is leap year")
} else {
    alert("This isn't leap year")
}*/

/* const num1 = Number(prompt("Enter 1st Number:"));
const num2 = Number(prompt("Enter 2nd Number:"));
const operand = prompt('What you want to do:');

if (operand === "+") {
    alert(num1 + num2);
} else if (operand === "-") {
    alert(num1 - num2)
} else if (operand === "/") {
    alert(num1 / num2)
} else if (operand === "*") {
    alert(num1 * num2)
} */

/* const checkNum = Number(prompt("Check the number:"));

if (checkNum > 0) {
    alert("Positive")
} else if (checkNum < 0) {
    alert("Negative")
}
else {
    alert("zero")
} */

/* const userName = prompt("Enter your name:");
const timeIn24Hrs = Number(prompt("Enter time in 24 Hr format:"));

if (timeIn24Hrs >= 5 && timeIn24Hrs <= 12) {
    alert(`Good Morning, ${userName}`)
} else if (timeIn24Hrs >= 12 && timeIn24Hrs <= 17) {
    alert(`Good Afternoon, ${userName}`)
} else if (timeIn24Hrs >= 17 && timeIn24Hrs <= 21) {
    alert(`Good Evening , ${userName}`)
}
else {
    alert(`Good Night , ${userName}`)
} */

/* const guessIt = prompt("Enter any of them Red,Green & Yellow:");

if (guessIt == "Red" || "red") {
    alert("Stop!")
} else if (guessIt == "Yellow" || "yellow") {
    alert("Get Ready!")
} else (
    alert("Go!")
) */

/* const multiTableNum = Number(prompt("Enter the number:"));

if ( multiTableNum > 0){
    for (let i = 0; i <= 10; i++) {
        const num = multiTableNum * i;
        console.log(num);
    }
}
else{
    alert("Rolaa pe gye ay!")
} */

/* const gradeNum = Number(prompt("Enter your number between 0-100"));

if (gradeNum >= 90 && gradeNum <= 100) {
    alert("Congratulation, you got A grade")
} else if (gradeNum >= 80 && gradeNum <= 89) {
    alert("Amazing, you got B grade")
} else if (gradeNum >= 70 && gradeNum <= 79) {
    alert("Nice, you got C grade")
} else if (gradeNum >= 60 && gradeNum <= 69) {
    alert("You got D grade")
} else (
    alert("Try Again! You failed!")
) */

/*const username = "Hanzla";
const password = 123123;
const loginName = prompt("Enter the Username");
const loginPass = Number(prompt("Enter Password:"));


if (username == loginName && password === loginPass) {
    alert("Login Successful!")
} else (
    alert("Incorrect Login or Password")
)*/

/* let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));

[a, b] = [b, a]

console.log("First Number is:", a, "Second Number is:", b); */

/*const num1 = Number(prompt("Enter 1st number:"));

if (num1 % 3 === 0 && num1 % 5 === 0) {
    alert("Fizzbuzz");
} else if (num1 % 3 === 0) {
    alert("Fizz");
} else if (num1 % 5 === 0) {
    alert("Buzz");
} else {
    alert("You have entered this number:", num1)
} */

function reversedNumber() {
    const num1 = prompt("Enter three number:");

    const reversedNumber = num1.split("").reverse().join("");

    console.log(reversedNumber);
}

function unfinished() {
    const numbers = Number(prompt("Enter the numbers"));

    const sumOfNumbers = numbers.toString().split("");

    const convertedNumbers = sumOfNumbers.forEach((num) => Number(num));
}

function checkPalindorme() {
    const word = prompt("Check palindrome");

    if (word.split("").reverse().join("") === word) {
        console.log("This is palindrome");
    } else {
        console.log("This isn't palindrome");
    }
}

function reverseWithoutReverse() {
    const number = prompt("Enter the number:");

    if (number) {
        const arr = [...number];
        for (let index = arr.length; index > 0; index--) {
            console.log(index);
        }
    } else { alert("Phadda!!!!!!!") }
}

// Second Largest Number

function secondLargest() {
    const num1 = Number(prompt("Enter first number:"));
    const num2 = Number(prompt("Enter first number:"));
    const num3 = Number(prompt("Enter first number:"));

    let largest;

    if (num1 >= num2 && num1 >= num3) {
        largest = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        largest = num2;
    } else {
        largest = num3;
    }

    alert(largest)

}

// Find 1st non-repeating character.

// function nonRepeating() {
//     const str = prompt("Enter the string");
//     const arr = str.split("");

//     for (let i = 0; i < arr.length; i++) {
//         if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
//             console.log(arr[i]);
//             break;
//         }
//     }
// }


const num1 =prompt("Enter 1st number:");

const splittedNumber = num1.split("");

splittedNumber.forEach((value)=>{
    Number(value)
    console.log(value);
})