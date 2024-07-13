export {};
// Creating a 2D array and initializing it with values
const matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Accessing elements in a 2D array
console.log(matrix[0][0]); // Output: 1
console.log(matrix[1][2]); // Output: 6

// Modifying elements in a 2D array
matrix[1][1] = 55;
console.log(matrix[1][1]); // Output: 55

// Iterating through a 2D array
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

// Creating an empty 2D array and filling it
const rows = 3;
const cols = 4;
const emptyMatrix: number[][] = new Array(rows);

for (let i = 0; i < rows; i++) {
    emptyMatrix[i] = new Array(cols);
}

// Filling the empty matrix with values
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        emptyMatrix[i][j] = i * cols + j;
    }
}

console.log(emptyMatrix);