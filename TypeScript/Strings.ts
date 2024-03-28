// Sample string
const sampleString = "Hello, world! This is a sample string.";

// Using string methods directly
console.log("Original String:", sampleString);
console.log("Length:", sampleString.length);
console.log("Uppercase:", sampleString.toUpperCase());
console.log("Lowercase:", sampleString.toLowerCase());
console.log("Substring from index 7 to 12:", sampleString.substring(7, 12));
console.log("Index of 'world':", sampleString.indexOf("world"));
console.log("Replace 'sample' with 'modified':", sampleString.replace("sample", "modified"));
console.log("Split by space:", sampleString.split(" "));
console.log("Trimmed:", sampleString.trim());
console.log("Concatenated with ' - appended string':", sampleString.concat(" - appended string"));
console.log("Includes 'world'?", sampleString.includes("world"));
console.log("Starts with 'Hello'?", sampleString.startsWith("Hello"));
console.log("Ends with 'string'?", sampleString.endsWith("string"));
console.log("Character at index 4:", sampleString.charAt(4));
console.log("Code unit value at index 4:", sampleString.charCodeAt(4));
console.log("Last index of 'i':", sampleString.lastIndexOf("i"));

// ======= Functional Usage =============
// Function to count the occurrences of a substring in a string
function countOccurrences(str: string, subStr: string): number {
    return str.split(subStr).length - 1;
}

// Function to reverse a string
function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

// Function to check if a string is a palindrome
function isPalindrome(str: string): boolean {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

// Function to truncate a string
function truncateString(str: string, maxLength: number): string {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + '...';
    }
    return str;
}

// Function to capitalize the first letter of each word in a string
function capitalizeWords(str: string): string {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Sample usage
const sample = "hello world";
console.log("Original String:", sample);
console.log("Number of 'l' occurrences:", countOccurrences(sample, 'l'));
console.log("Reversed String:", reverseString(sample));
console.log("Is palindrome?", isPalindrome(sample));
console.log("Truncated String (max length 5):", truncateString(sample, 5));
console.log("Capitalized Words:", capitalizeWords(sample));
