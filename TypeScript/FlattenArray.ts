/**
 * @description This TypeScript program defines a function flattenArray that takes an array as input and returns a new array with all nested arrays flattened. The example usage demonstrates how to flatten a nested array.
 * @param arr Array to flatten
 * @returns a new array
 */
function flattenArray(arr: any[]): any[] {
    let flattened: any[] = [];

    arr.forEach((item) => {
        if (Array.isArray(item)) {
            flattened = flattened.concat(flattenArray(item));
        } else {
            flattened.push(item);
        }
    });

    return flattened;
}

// Example usage:
const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];
const flattenedArray = flattenArray(nestedArray);

console.log(flattenedArray);
