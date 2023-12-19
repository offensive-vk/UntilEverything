// The non-null assertion operator (!) is a type assertion in TypeScript that allows you to tell the compiler that a value will never be null or undefined.

// Function that may return a string or null
function getStringOrNull(): string | null {
    const randomValue = Math.random();

    // Return a string 70% of the time, otherwise return null
    return randomValue < 0.7 ? 'Hello, TypeScript!' : null;
}

// Get the result from the function
const result = getStringOrNull();

// Use the non-null assertion operator to tell TypeScript that result is not null
// Note: Use this operator when you are sure that the value is not null or undefined
const length = result!.length;

// Print the result
console.log(result);
console.log(`Length of the string: ${length}`);

export {};