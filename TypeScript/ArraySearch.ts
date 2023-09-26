function linearSearch(Arr: number[], target: number): number {
    for (let i = 0; i < Arr.length; i++) {
        if (Arr[i] === target) {
            return i; // Return the index of the found element
        }
    }
    return -1; // Return -1 if the element is not found
}
function binarySearch(Arr: number[], target: number): number {
    let left = 0;
    let right = Arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (Arr[mid] === target) {
            return mid; // Return the index of the found element
        } else if (Arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1; // Return -1 if the element is not found
}

const Arr = [1, 2, 3, 4, 5];

// indexOf: Returns the index of the first occurrence of an element, or -1 if not found
const index = Arr.indexOf(3);

// includes: Returns true if an element is found in the array, false otherwise
const hasValue = Arr.includes(4);

// find: Returns the first element that satisfies a condition, or undefined if not found
const foundValue = Arr.find((item) => item === 2);

// findIndex: Returns the index of the first element that satisfies a condition, or -1 if not found
const foundIndex = Arr.findIndex((item) => item === 5);
