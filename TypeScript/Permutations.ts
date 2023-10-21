/* 
A permutation is an arrangement of items in a specific order. In mathematics and combinatorics, a permutation is a rearrangement of a set of elements without repetition. The concept of permutations is widely used in various fields, including mathematics, computer science, statistics, and more.
*/
function permute<T>(arr: T[]): T[][] {
    const result: T[][] = [];

    function backtrack(start: number, current: T[]) {
        if (start === arr.length) {
            result.push([...current]);
            return;
        }

        for (let i = start; i < arr.length; i++) {
            [arr[start], arr[i]] = [arr[i], arr[start]]; // Swap elements
            current.push(arr[start]);
            backtrack(start + 1, current);
            current.pop();
            [arr[start], arr[i]] = [arr[i], arr[start]]; // Revert the swap
        }
    }

    backtrack(0, []);
    return result;
}
// Example usage:
const test = [1, 2, 3];
const permutations = permute(test);

console.log("All Permutations:");
permutations.forEach((permutation) => {
    console.log(permutation);
});
