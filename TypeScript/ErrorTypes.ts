// Simple error catching 
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

try {
    const result = divide(10, 0);
    console.log("Result:", result);
} catch (error) {
    console.error("Caught an error:", error);
}

// with classes
class CustomError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "CustomError";
    }
}

function doSomething(): void {
    throw new CustomError("Something went wrong!");
}

try {
    doSomething();
} catch (error) {
    if (error instanceof CustomError) {
        console.error("Caught a CustomError:", error.message);
    } else {
        console.error("Caught an unknown error:", error instanceof Error ? error : error);
    }
}

// Multiple errors with try and catch.
function processNumbers(a: number, b: number): void {
    try {
        const result = divide(a, b);
        console.log("Result:", result);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Caught a general error:", error.message);
        } else {
            console.error("Caught an unknown error:", error);
        }
    }
}

try {
    processNumbers(10, 0);
    processNumbers(20, 5);
} catch (error) {
    console.error("Caught an error outside the function:", error);
}