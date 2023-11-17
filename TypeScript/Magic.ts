
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
