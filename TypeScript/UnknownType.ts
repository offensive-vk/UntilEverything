// Define a function to transform an array of unknown values using a mapper function
function mapUnknownArray<T, U>(
    arr: unknown[],
    mapper: (value: T) => U
): U[] {
    if (!Array.isArray(arr)) {
        throw new Error('Input is not an array');
    }
    return arr.map((item) => {
        if (typeof item === 'undefined') {
            throw new Error('Array contains undefined values');
        }
        return mapper(item as T);
    });
}
// Define a function to filter an array of unknown values using a predicate function
function filterUnknownArray<T>(
    arr: unknown[],
    predicate: (value: T) => boolean
): T[] {
    if (!Array.isArray(arr)) {
        throw new Error('Input is not an array');
    }
    return arr.reduce((filtered: any, item) => {
        if (typeof item !== 'undefined' && predicate(item as T)) {
            filtered?.push(item as T);
        }
        return filtered;
    }, [] as T[]) as T[];
}
// Define a function to asynchronously process an array of unknown values using promises
async function processUnknownArray<T, U>(
    arr: unknown[],
    asyncProcessor: (value: T) => Promise<U>
): Promise<U[]> {
    if (!Array.isArray(arr)) {
        throw new Error('Input is not an array');
    }
    const resultPromises = arr.map(async (item) => {
        if (typeof item === 'undefined') {
            throw new Error('Array contains undefined values');
        }
        return asyncProcessor(item as T);
    });

    return Promise.all(resultPromises);
}

// Example usage of the functions
const inputArray: unknown[] = [1, 2, 3, '4', '5', 6, undefined, 7];

const mappedArray = mapUnknownArray<number, string>(inputArray, (value) => `Value: ${value}`);
console.log('Mapped Array:', mappedArray);

const filteredArray = filterUnknownArray<string>(inputArray, (value) => typeof value === 'string');
console.log('Filtered Array:', filteredArray);

const asyncProcessor = (value: number) => new Promise<string>((resolve) => {
    setTimeout(() => resolve(`Processed: ${value}`), 100);
});

processUnknownArray<number, string>(inputArray, asyncProcessor)
    .then((result) => {
        console.log('Async Processed Array:', result);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });

export { };