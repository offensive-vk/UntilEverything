// setTimeout and setInterval() functions

// Use Case 1: setTimeout for Delayed Execution
console.log("Use Case 1: setTimeout for Delayed Execution");

function delayedFunction() {
    console.log("This function was executed after a delay of 2 seconds.");
}

setTimeout(delayedFunction, 2000);

// Use Case 2: setInterval for Repeated Execution
console.log("\nUse Case 2: setInterval for Repeated Execution");

let count = 0;

function repeatedFunction() {
    count++;
    console.log(`This function has been executed ${count} times.`);
    if (count === 5) {
        clearInterval(intervalId);
        console.log("Execution stopped after 5 times.");
    }
}

const intervalId = setInterval(repeatedFunction, 1000);

// Use Case 3: Clearing a setTimeout
console.log("\nUse Case 3: Clearing a setTimeout");

function clearTimeoutExample() {
    console.log("This function won't be executed because the timeout is cleared.");
}

const timeoutId = setTimeout(clearTimeoutExample, 3000);
clearTimeout(timeoutId);

// Use Case 4: Clearing an Interval
console.log("\nUse Case 4: Clearing an Interval");

function clearIntervalExample() {
    console.log("This function won't be executed more than 2 times.");
}

const intervalToClear = setInterval(clearIntervalExample, 1000);

setTimeout(() => {
    clearInterval(intervalToClear);
    console.log("Interval cleared after 2 seconds.");
}, 2000);
