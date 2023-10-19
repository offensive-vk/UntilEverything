// Define a generic function to find the greatest value in an object
function findGreatestValue<T extends Record<string, number>>(obj: T): number | undefined {
    let greatest: number | undefined = undefined;

    // Iterate through the object's values and find the greatest value
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (typeof value === 'number') {
                if (greatest === undefined || value > greatest) {
                    greatest = value;
                }
            }
        }
    }
    return greatest;
}

// Example usage:
const numericObject = {
    a: 42,
    b: 17,
    c: 99,
    // d: 'not a number', // This value will be ignored
};

const greatestValue = findGreatestValue(numericObject);
if (greatestValue !== undefined) {
    console.log(`The greatest value in the object is: ${greatestValue}`);
} else {
    console.log(`The object does not contain any valid numbers.`);
}
