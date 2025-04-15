// // Discounted Condition
// let amount = 6000;
// let discount;

// if (amount >= 0 && amount <= 5000) {
//     discount = 0;
// } else if (amount >= 5001 && amount <= 7000) {
//     discount = 5;
// } else if (amount >= 7001 && amount <= 9000) {
//     discount = 10;
// } else {
//     discount = 20;
// }
// discount = amount - ((discount / 100) * amount);
// console.table({ amount, discount });

// Bijli Bill
let unit = Number(prompt("enter units"));
let bijliBill = 0;

if (unit >= 0 && unit <= 100) {
    bijliBill = unit * 4.2;
} else if (unit >= 101 && unit <= 200) {
    bijliBill = 100 * 4.2 + (unit - 100) * 6
} else if (unit >= 201 && unit <= 400) {
    bijliBill = (100 * 4.2) + (100 * 6) + (unit - 200) * 8
} else {
    bijliBill = (100 * 4.2) + (100 * 6) + (200 * 8) + (unit - 400) * 13
}

console.table({ bijliBill });

document.querySelector(".bill").innerText = `${bijliBill}₹`;


// Loops are of two types 
// Entry Control
// for while
// Exit Control
// do while

// Hello I am hanzla and hope so you're enjoying live coding!