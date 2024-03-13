/**
The number 1089 is an integer. It is not commonly referred to as a "magic number" in the programming context. Instead, it's a positive integer that has some interesting mathematical properties.

One notable property is related to a mathematical trick known as the "1089 magic trick" or "number reversal trick." Here's how it works:

1. Choose a three-digit number where the digits are not all the same (e.g., 123).
2. Reverse the digits to form a new number (e.g., 321).
3. Subtract the smaller number from the larger one (321 - 123 = 198).
4. Reverse the result and add it to the original result (198 + 891 = 1089).
5. No matter what three-digit number you start with (as long as the digits are not all the same), 
    following these steps will always lead to the result 1089. It's a fun mathematical curiosity! 
 */
function reverseNumber(num: number): number {
    return parseInt(num.toString().split('').reverse().join(''));
}

function magicTrick(originalNumber: number): number {
    const reversedNumber = reverseNumber(originalNumber);
    const difference = Math.abs(originalNumber - reversedNumber);
    const reversedDifference = reverseNumber(difference);

    const result = difference + reversedDifference;
    return result;
}

function getNumber(): number {
    return Math.floor(Math.random() * (999 - 100 + 1)) + 100;
}

// Example usage:
const originalNumber = getNumber();
const r = magicTrick(originalNumber);

console.log(`Original Number: ${originalNumber}`);
console.log(`Reversed Number: ${reverseNumber(originalNumber)}`);
console.log(`Difference: ${Math.abs(originalNumber - reverseNumber(originalNumber))}`);
console.log(`Reversed Difference: ${reverseNumber(Math.abs(originalNumber - reverseNumber(originalNumber)))}`);
console.log(`Sum: ${r}`);
