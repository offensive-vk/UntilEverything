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
