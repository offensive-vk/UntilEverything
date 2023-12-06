function permute(nums: number[]): number[][] {
    const result: number[][] = [];

    function backtrack(start: number): void {
        // If we reach the end of the array, add the current permutation to the result
        if (start === nums.length) {
            result.push([...nums]);
            return;
        }

        // Explore different options by swapping elements
        for (let i = start; i < nums.length; i++) {
            // Swap elements at positions 'start' and 'i'
            [nums[start], nums[i]] = [nums[i], nums[start]];

            // Recursively explore the next position
            backtrack(start + 1);

            // Undo the swap (backtrack) to explore other possibilities
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }

    // Start the backtracking from the beginning of the array
    backtrack(0);

    return result;
}

// Example usage:
// const nums = ['m', 'v', 's'];
const nums = [645,8354,282]
// const permutations = permute(nums as unknown as number[]);
const permutations = permute(nums);
console.log(permutations);
