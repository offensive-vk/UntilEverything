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
