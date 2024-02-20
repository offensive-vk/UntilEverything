// Alert method
window.alert("This is an alert message!");

// Prompt method
const userInput = window.prompt("Enter your name:", "John Doe");
console.log("User input:", userInput);

// Confirm method
const isConfirmed = window.confirm("Are you sure?");
console.log("User confirmation:", isConfirmed);

// Open method - opens a new browser window
const newWindow = window.open("https://www.example.com", "_blank", "width=600,height=400");
newWindow.focus();

// Close method - closes the current browser window
// window.close();

// setTimeout method - executes a function after a specified delay
const timeoutId = window.setTimeout(() => {
    console.log("Timeout function executed after 2 seconds");
}, 2000);

// clearTimeout method - cancels a timeout previously established by setTimeout
// window.clearTimeout(timeoutId);

// setInterval method - executes a function repeatedly, with a fixed time delay between each execution
const intervalId = window.setInterval(() => {
    console.log("Interval function executed every second");
}, 1000);

// clearInterval method - cancels a timeout previously established by setInterval
// window.clearInterval(intervalId);
