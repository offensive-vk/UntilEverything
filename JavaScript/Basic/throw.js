// Uses of throw keyword and errors
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

try {
    const result = divide(10, 2);
    console.log("Result:", result);

    const zeroResult = divide(5, 0); // This will throw an error
    console.log("Zero Result:", zeroResult);
} catch (error) {
    console.error("Caught an error:", error.message);
}

function validateInput(input) {
    if (typeof input !== "number") {
        throw new TypeError("Input must be a number.");
    }
    if (input < 0) {
        throw new RangeError("Input must be a positive number.");
    }
    return input;
}

try {
    const validInput = validateInput(42);
    console.log("Valid Input:", validInput);

    const invalidInput = validateInput(-10); // This will throw a range error
    console.log("Invalid Input:", invalidInput);
} catch (error) {
    console.error("Caught an error:", error.message);
}

function throwError() {
    throw "pls help im stuck!"; // Throwing a string
}

try {
    throwError();
} catch (error) {
    console.error("Caught an error:", error);
}
