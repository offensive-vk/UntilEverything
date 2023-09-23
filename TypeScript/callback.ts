// Use Case 1: Callback for Array.forEach()
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
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

