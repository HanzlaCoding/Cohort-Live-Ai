// Log Hello World to console in 3 different ways
function threeWaysForConsole() {
    console.log("Hello, Javascript");
    console.warn("Hello, Javascript");
    console.info("Hello, Javascript");
    console.error("Hello, Javascript");
}

// Perform 35 * 2 - (10 / 2) + 7 and log the result
function mathOperations() {
    const result = 35 * 2 - (10 / 2) + 7;
    console.log(result);
}

// Log the data type of 123,"123", true, null
function logDataTypes() {
    console.table([typeof 123, typeof "123", typeof true, typeof null]);
}

// Write a program which swaps two numbers
function swapNumbers() {
    let a = 10;
    let b = 20;
    console.log(`Before swapping a=${a} and b=${b}`);
    // Way 1
    [a, b] = [b, a];
    // Way 2
    a = a + b;
    b = a - b;
    a = a - b;  // This is the correct way to swap without using a temporary variable in ES6+
    console.log(`After swapping a=${a} and b=${b}`);
}

// Use console.group() to organize logs into a group.
// groupCollapsed create a collapsed group
console.groupCollapsed("Group is created successfully!");
console.log("Hello, Javascript");
console.warn("Hello, Javascript");
console.groupEnd()

//  Declare a const object, modify its properties, and log the updated object.
function modifyObject() {
    const obj = {
        name: "Hanzla",
        age: 18,
        profession: "Software Engineer",
        country: "Pakistan",
        city: "Lahore",
    };

    obj.age = 19;

    console.log(obj);
}

//  Convert "50" (string) into a number using 3 different methods.
function convertStringToNumber() {
    console.log(Number("50"));
    console.log(parseInt("50"));
    console.log(parseFloat("50"));
}

// Check if "JavaScript" contains "Script" without using .includes().
function checkIfStringContains() {
    console.log("JavaScript".indexOf("Script") !== -1);
}

// Explain the difference between undefined, null and NaN.
// Undefined: A variable that has not been assigned a value is undefined.
// null is an assignment value. It can be assigned to a variable as a representation of no value.
// NaN is a property of the global object. In other words, it is a variable in global scope.