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
