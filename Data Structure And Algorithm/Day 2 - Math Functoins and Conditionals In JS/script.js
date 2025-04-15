// P = 1000, r = 0.5 , t = 10, n = 4
let P = 1000;
let r = 0.5;
let t = 10;
let n = 4;

let CI = (((P * (1 + r / n) ** (n * t)) - P).toFixed(2));
console.log(CI);

// Calculate the area of triangle
let a = 3;
let b = 4;
let c = 5;
let s = (a + b + c) / 2;
let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log(area);

let area1 = (Math.PI) * Math.pow(5.2, 2);
let area2 = 2 * Math.PI * 5.2;

// Here all the DSA


function isLeapYear(year) {
    if (
        (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return console.log("Leap Year");
        ;
    } else {
        return console.log("Not a Leap Year");
        ;
    }
}

isLeapYear(2020)
console.log(2024 % 4 === 0 && 2024 % 100 !== 0);