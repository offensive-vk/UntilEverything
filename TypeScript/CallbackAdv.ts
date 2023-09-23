// Use Case 1: Callback with parameters
function calculate(a: number, b: number, callback: (result: number) => void) {
    const result = a + b;
    callback(result);
}

calculate(5, 3, (result) => {
    console.log("The result is:", result);
});

// Use Case 2: Callback with error handling
function divide(a: number, b: number, onSuccess: (result: number) => void, onError: (error: string) => void) {
    if (b === 0) {
        onError("Cannot divide by zero!");
    } else {
        const result = a / b;
        onSuccess(result);
    }
}

divide(10, 2, (result) => {
    console.log("The result of division is:", result);
}, (error) => {
    console.error("Error:", error);
});
