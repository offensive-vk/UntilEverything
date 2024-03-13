/**
 * @description Traditional Bubble Sort Algorithm.
 * @param arr Array to be sorted
 * @returns new sorted array
 */
function bubbleSort(arr: number[]): number[] {
    const n = arr.length;

    // Outer loop - controls the number of passes
    for (let i = 0; i < n - 1; i++) {
        // Inner loop - compares and swaps elements
        for (let j = 0; j < n - 1 - i; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                // Swap if they are in the wrong order
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(unsortedArray.slice());

console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array:", sortedArray);
export {bubbleSort};