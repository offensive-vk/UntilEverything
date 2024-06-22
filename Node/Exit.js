// Function to perform arithmetic operation
function performOperation(operation, num1, num2) {
    switch (operation) {
        case 'add':
        return num1 + num2;
        case 'subtract':
        return num1 - num2;
        case 'multiply':
        return num1 * num2;
        case 'divide':
        if (num2 === 0) {
            throw new Error('Division by zero');
        }
        return num1 / num2;
        default:
        throw new Error('Invalid operation');
    }
}
  
// Main function to handle input and output
function main() {
const [operation, num1, num2] = process.argv.slice(2);

if (!operation || isNaN(num1) || isNaN(num2)) {
    console.error('Usage: node exitCodeExample.js <operation> <num1> <num2>');
    process.exit(1); // Exit code 1 for incorrect usage
}

try {
    const result = performOperation(operation, parseFloat(num1), parseFloat(num2));
    console.log(`Result: ${result}`);
    process.exit(0); // Exit code 0 for success
} catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(2); // Exit code 2 for runtime errors
}
}
  
// Call the main function
main();