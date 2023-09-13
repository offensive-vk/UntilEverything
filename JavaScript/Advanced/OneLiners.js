const arr = [90, 99, 97, 95, 94, 92, 91, 98];

// 1. Get the last element of the array

const lastItem = arr => arr[arr.length - 1];

// 2. Check if all the array elements are same

const allSame = arr => arr.every(val => val === arr[0]);

// 3. Remove duplicates from an array

const dup = arr => [...new Set(arr)];

// 4. Deeply Clone an object

const clone = obj => JSON.parse(JSON.stringify(obj));

// 5. 