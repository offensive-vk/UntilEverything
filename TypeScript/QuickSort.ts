/**
 * Sorts an array of numbers using the QuickSort algorithm asynchronously.

 * @template T The type of the array, which must be an array of numbers.
 * @param arr The array of numbers to be sorted.
 * @returns A Promise that resolves to the sorted array if successful, or undefined if the input array is empty.
 */
async function QuickSort<T extends Array<number>>(arr: T): Promise<Array<number> | void> {
    if(Array.isArray(arr)) {
        if(arr.length < 1) {
            console.log(`Array is Too Small to be Sorted.`);
            return;
        }
        else {
            let pivot: number = arr[0];
            let smaller: Array<number> = [];
            let greater: Array<number> = [];
            for(let x = 1; x < arr.length; x++) {
                if(x <= pivot) {
                    smaller.push(x);
                }
                if(x > pivot) {
                    greater.push(x);
                }
            }
            return [...smaller, pivot, ...greater];
        }
    }
    console.log(`\n Function Terminated. \n`)
}

( async() => {
    const test: Array<number> = [11, 90, 34, 44, 99, 21];
    const Result = await QuickSort(test).then(res => console.log(res));
    console.log(`The Results are here: ${Result}\n`);
})();