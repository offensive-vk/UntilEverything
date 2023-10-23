// Create a custom method to shuffle an array using global augmentation
declare global {
    interface Array<T> {
        shuffle(): void;
        reset(): void;
    }
    interface HashMap<TKey, TValue>{
        key: TKey;
        value: TValue;

        resolveHashValue(key: TKey): {}[];
        resolveHashKey(key: TValue): {}[];
    }
}

// Implement the shuffle method
Array.prototype.shuffle = function () {
    for (let i = this.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this[i], this[j]] = [this[j], this[i]];
    }
};
Array.prototype.reset = function () {
    this.length = 0;
}
// Usage
const myArray: number[] = [1, 2, 3, 4, 5];
console.log("Original Array:", myArray);

myArray.shuffle();
console.log("Shuffled Array:", myArray);

myArray.reset();
console.log("Reset The Array:", myArray);
