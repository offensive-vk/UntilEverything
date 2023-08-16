function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    } catch (error) {
        console.error("An error occurred:", error.message);
        return NaN; // Return a special value to indicate an error
    } finally {
        console.log("Division attempt completed.");
    }
}

console.log(divide(10, 2));
console.log(divide(8, 0));     
console.log(divide(15, 3));    
