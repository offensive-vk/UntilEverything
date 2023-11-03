function ensureEmptyObject(value: unknown): never {
    throw new Error(`Value is not an empty object: ${value}`);
}

function processEmptyObject(obj: never): void {
    // This function can only be called with values of type 'never'
    // This ensures that 'obj' can only be an empty object
    console.log('Processing an empty object');
}

function validateAndProcess(value: unknown): void {
    if (typeof value === 'object' && Object.keys(value).length === 0) {
        // The value is an empty object
        processEmptyObject(value as never);
    } else {
        ensureEmptyObject(value);
    }
}

const emptyObj: {} = {};

validateAndProcess(emptyObj); // This will work

const nonEmptyObj = { key: 'value' };

// Uncommenting this line would cause a compile-time error
// validateAndProcess(nonEmptyObj);
