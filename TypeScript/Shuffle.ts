/**
 * Shuffles the elements of an array in place.
 * 
 * @param array - The array to be shuffled.
 * @returns void
 */
function shuffleArray<T>(array: T[]): void {
    const size = array.length;
    for (let i = size - 1; i > 0; --i) {
        const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
        // Swap array[i] and array[j]
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const arr: number[] = [16, 22, 39, 44, 51];

// Shuffle the array
shuffleArray(arr);

// Output shuffled array
console.log("Shuffled array:", arr);

export {};