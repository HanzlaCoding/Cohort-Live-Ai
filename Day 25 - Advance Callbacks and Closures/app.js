// Create a function that takes a callback and executes it after every `n` seconds indefinitely.

function executeAfterDealy(cb, n) {
    setTimeout(cb, n * 1000);
}

// executeAfterDealy(() => console.log("Executed after 3 seconds"), 3);

function closureGreeting(greeting) {
    return function (name) {
        console.log(`${greeting}, ${name}!`);
    }
}

const greet = closureGreeting("Hello");
greet("Hanzla");

// Implement a function that takes a callback and only executes it once (HOF + Closure).

function executeOnce(cb) {
    let executed = false;
    return function () {
        if (!executed) {
            executed = true;
            cb();
        }
    }
}

const executeOnceCallback = executeOnce(() => console.log("Executed only once!"));

executeOnceCallback();

// Implement a function that throttles another function (HOF + Closures).

function throttle(cb, delay) {
    let lastCallTime = 0;
    return function () {
        let current = Date.now();
        if (current - lastCallTime >= delay) {
            lastCallTime = current;
            cb();
        }
    }
}

const fn = throttle(() => console.log("Executed after 3 seconds"), 3000);

fn()