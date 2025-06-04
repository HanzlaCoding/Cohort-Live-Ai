// callback hell , Christmas tree effect aur christmas tree problem

function stepOne(cb) {
    console.log("Step 1 done");
    cb();
}

function stepTwo(cb) {
    console.log("Step 2 done");
    cb();
}

function stepThree(cb) {
    console.log("Step 3 done");
    cb();
}

stepOne(() => {
    stepTwo(() => {
        stepThree(() => {
            console.log("All steps done");
        })
    })
})

// Ye ha christmas tree effect

// Promises

function stepOnePromise() {
    return new Promise((resolve, reject) => {
        console.log("Step 1 done");
        resolve();
    })
}

function stepTwoPromise() {
    return new Promise((resolve, reject) => {
        console.log("Step 2 done");
        resolve();
    })
}

function stepThreePromise() {
    return new Promise((resolve, reject) => {
        console.log("Step 3 done");
        resolve();
    })
}

stepOnePromise()
    .then(() => {
    stepTwoPromise()
    .then(() => {
    stepThreePromise()
    .then(() => {console.log("All steps done");})
        })
    })