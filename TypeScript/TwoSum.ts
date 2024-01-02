/**
 * The Two Sum problem is a classic coding interview question that goes like this:

 * Problem Statement: Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to the target.

 * You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: nums[0] + nums[1] equals 9, so the answer is [0, 1].

 */

function twoSum(nums: number[], target: number): number[] {
    const numIndicesMap: { [key: number]: number } = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (complement in numIndicesMap) {
            return [numIndicesMap[complement], i];
        }

        numIndicesMap[nums[i]] = i;
    }

    // If no solution is found
    return [];
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);

console.log(result); // Output: [0, 1]
export {};