// Find the second largest number in an array
const arr = [5, 2, 4, 2, 1, 4, 5, 2, 2, 3];

// Rearrange the array in ascending order
const sortNum = arr.sort((a, b) => b - a);
const secondLargest = [...new Set(sortNum)];
console.log(secondLargest[1])

// Reverse the array without using reverse method
const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reverseArr = [];

for (let i = newArr.length - 1; i >= 0; i--) {
    reverseArr.push(newArr[i]);
}

// Find the most frequent element in an array.
const arr2 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 5];
let obj = {};

arr2.forEach((elem) => {
    obj[elem] === undefined ? obj[elem] = 1 : obj[elem]++;
})