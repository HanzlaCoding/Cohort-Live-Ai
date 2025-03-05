// Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback).

function afterThreeSeconds(cb) {
    setTimeout(cb, 3000);
}

// afterThreeSeconds(() => console.log("Executed after 3 seconds"));

// Implement your own version of `.map()` as a higher-order function.

function myOwnMap(arr, cb) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(cb(arr[i]))
    }
    return newArr;
}

const result = myOwnMap([1, 2, 3, 4, 5], (num) => num * 2)

console.log(result);

// Write a function that uses closures to create a counter.
function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

const count = createCounter();

// Implement a function that limits how many times another function can be called (Closure + HOF)
function limitedFunction(cb, limit) {
    let calledTimes = 0;
    return function () {
        if (calledTimes < limit) {
            calledTimes++;
            cb();
        }
        else {
            console.warn("You have exceeded the limit");
        }
    }
}

const fn = limitedFunction(function () { console.log("1") }, 3);