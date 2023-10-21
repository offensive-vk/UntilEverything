var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/**
 * Generates all possible permutations of an array without repetition.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} arr - The input array for which permutations need to be generated.
 * @returns {T[][]} - An array containing all possible permutations of the input array.
 * @example
 * const arr = [1, 2, 3];
 * const result = permute(arr);
 * console.log(result);
 * // Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 2, 1], [3, 1, 2]]
 */
function permute(arr) {
    var result = [];
    function backtrack(start, current) {
        var _a, _b;
        if (start === arr.length) {
            result.push(__spreadArray([], current, true));
            return;
        }
        for (var i = start; i < arr.length; i++) {
            _a = [arr[i], arr[start]], arr[start] = _a[0], arr[i] = _a[1]; // Swap elements
            current.push(arr[start]);
            backtrack(start + 1, current);
            current.pop();
            _b = [arr[i], arr[start]], arr[start] = _b[0], arr[i] = _b[1]; // Revert the swap
        }
    }
    backtrack(0, []);
    return result;
}
// Example usage:
var test = [1, 2, 3];
var permutations = permute(test);
console.log("All Permutations:");
permutations.forEach(function (permutation) {
    console.log(permutation);
});
/*
A permutation is an arrangement of items in a specific order. In mathematics and combinatorics, a permutation is a rearrangement of a set of elements without repetition. The concept of permutations is widely used in various fields, including mathematics, computer science, statistics, and more.
*/ 
