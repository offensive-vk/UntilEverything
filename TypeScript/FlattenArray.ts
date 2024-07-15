/**
 * Flattens a nested array by recursively flattening all nested arrays.
 * 
 * @param arr Array to flatten
 * @returns A new array with all nested arrays flattened
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

// Print data.
console.log(flattenedArray);