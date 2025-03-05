// map return is required and makes an blank array but in forEach return is'nt required
// Write a for loop to print numbers from 10 to 1 in reverse order
function reverse() {
    for (let i = 10; i > 0; i--) {
        console.log(i);
    }
}

// Use a while loop to print multiples of 3 from 3 to 30
function multiples() {
    let num = 3;
    while (num <= 30) {
        console.log(num);
        num += 3;
    }
}

function sum() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log("Sum:", sum); // Output: 5050
}

// Use a for...of loop to iterate over the string "JavaScript".

const str = "JavaScript";

for (let char of str){
    console.log(char);
}