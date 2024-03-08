/**
 * Generates all possible permutations of an array without repetition.
 * 
 * @template T The type of elements in the array.
 * @param {T[]} arr The input array for which permutations need to be generated.
 * @returns {T[][]} An array containing all possible permutations of the input array.
 * @returns {number} The total number of permutations.
 */
export function Permute<T>(arr: T[]): T[][] {
    const result: T[][] = [];
    let count = 0;

    function backtrack(start: number, current: T[]) {
        if (start === arr.length) {
            result.push([...current]);
            count++;
            return;
        }

        for (let i = start; i < arr.length; i++) {
            Swap(arr, start, i);
            current.push(arr[start]);
            backtrack(start + 1, current);
            current.pop();
            Swap(arr, start, i);
        }
    }
    backtrack(0, []);
    console.log(`[ Total Possible Combinations: ${count} ]\n`);
    return result;
}

/**
 * Swaps two elements in an array.
 * 
 * @template T - The type of elements in the array.
 * @param {T[]} arr - The array in which elements need to be swapped.
 * @param {number} i - The index of the first element to be swapped.
 * @param {number} j - The index of the second element to be swapped.
 */
function Swap<T>(arr: T[], i: number, j: number) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

const A = [4, 3, 2];
const R = Permute<number>(A);

console.log("All Permutations:");
R.forEach((permutation) => {
    console.log(permutation);
});

/*
A permutation is an arrangement of items in a specific order. 
In mathematics and combinatorics, a permutation is a rearrangement of a set of elements without repetition. 
The concept of permutations is widely used in various fields, including mathematics, computer science, statistics, and more.
*/