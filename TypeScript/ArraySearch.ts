function linearSearch(arr: number[], target: number): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the found element
        }
    }
    return -1; // Return -1 if the element is not found
}
