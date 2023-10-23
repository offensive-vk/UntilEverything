/**
 * @author Vedansh
 * @param  undefined
 * @returns {abstract}
 * @description Demonstrates the use of Augmentation in TypeScript.
 */
declare global {
    interface Array<T> {
        shuffle(): void;
        reset(): void;
    }
    interface HashMap<TKey, TValue>{
        key: TKey;
        value: TValue;

        resolveHashValue(key: TKey): [TKey, TValue] | void;
        resolveHashKey(value: TValue): [TKey, TValue] | void;
    }
}

Array.prototype.shuffle = function () {
    for (let i = this.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this[i], this[j]] = [this[j], this[i]];
    }
};
Array.prototype.reset = function () {
    this.length = 0;
}

const myArray: number[] = [11, 22, 33, 44, 55];
console.log("Original Array:", myArray);

myArray.shuffle();
console.log("Shuffled Array:", myArray);

myArray.reset();
console.log("Reset The Array:", myArray);