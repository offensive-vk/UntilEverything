// Event Loop Example

// Simulating an asynchronous operation
function asyncOperation(callback: () => void) {
    setTimeout(() => {
        callback();
    }, 1000); // Simulating a delay of 1000ms (1 second)
}

// Function to demonstrate Event Loop handling
function eventLoopDemo() {
    console.log('Start');
    
    asyncOperation(() => {
        console.log('Async operation completed');
    });

    console.log('End');
}

// Calling the function to see the Event Loop in action
eventLoopDemo();
