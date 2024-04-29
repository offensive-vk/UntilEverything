// Use Case 1: Callback for Array.forEach()
const Numbers = [1, 2, 3, 4, 5];
Numbers.forEach((num) => {
    console.log(num);
});

// Use Case 2: Callback for Array.map()
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);

// Use Case 3: Callback for setTimeout()
function delayedGreeting(name: string, callback: () => void) {
    setTimeout(() => {
        console.log(`Hello, ${name}!`);
        callback();
    }, 2000);
}

delayedGreeting("Vedansh", () => {
    console.log("Greeting displayed after 2 seconds.");
});

// Use Case 4: Callback for event handling
function handleClick(callback: () => void) {
    console.log("Button clicked!");
    callback();
}

handleClick(() => {
    console.log("Callback executed after button click.");
});

// Use Case 5: Callback for asynchronous operations
function fetchData(callback: (data: string) => void) {
    // Simulating an asynchronous API call
    setTimeout(() => {
        const data = "Sample data";
        callback(data);
    }, 3000);
}

fetchData((data) => {
    console.log(`Fetched data: ${data}`);
});
export { };