import { insertionSort } from "./InsertionSort";
import { bubbleSort } from "./BubbleSort";


function fillArray(arr: number[]): void {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        arr[i] = (1000 + Math.random() * 9000);
    }
}

var newArray = new Array<number>(10000);
fillArray(newArray);
console.time();

bubbleSort(newArray);

console.table(newArray);
console.timeEnd();

