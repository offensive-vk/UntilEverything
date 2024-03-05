// 1. Linear Search:
function linearSearch(arr: number[], target: number): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the found element
        }
    }
    return -1; // Return -1 if the element is not found
}
//  2. Binary Search (for Sorted Arrays):
function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // Return the index of the found element
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1; // Return -1 if the element is not found
}

// 3. Array Methods (indexOf, includes, find, findIndex):
const arr = [1, 2, 3, 4, 5];

// indexOf: Returns the index of the first occurrence of an element, or -1 if not found
const index = arr.indexOf(3);

// includes: Returns true if an element is found in the array, false otherwise
const hasValue = arr.includes(4);

// find: Returns the first element that satisfies a condition, or undefined if not found
const foundValue = arr.find((item) => item === 2);

// findIndex: Returns the index of the first element that satisfies a condition, or -1 if not found
const foundIndex = arr.findIndex((item) => item === 5);

export {}