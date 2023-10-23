/**
 * Appends a string to a property of an object and returns the updated object.
 * 
 * @template T - The type of the object.
 * @template K - The type of the property.
 * @param {T} obj - The object to update.
 * @param {K} prop - The property of the object to append the string to.
 * @param {string} appendString - The string to append to the property.
 * @returns {T} - The updated object with the string appended to the specified property.
 */
function appendDataToProperty<T, K extends keyof T>(obj: T, prop: K, append: any | string): T {
    const updatedObj = { ...obj };
    updatedObj[prop] = updatedObj[prop] + append as T[K];
    return updatedObj;
}

// Example usage:
const Boi = { name: 'John', age: 30 };
const Item = { name: 'Pizza', price: 19.99 };
const Index = { start : 1, end: 99, distance: 55, nullable: true };

const personWithSuffix = appendDataToProperty(Boi, 'name', ' Wick');
const productWithSuffix = appendDataToProperty(Item, 'price', '$');

console.log(personWithSuffix);
console.log(productWithSuffix);

console.log(appendDataToProperty(Index, 'distance', ' km'));
console.log(appendDataToProperty(Index, 'nullable', false));
