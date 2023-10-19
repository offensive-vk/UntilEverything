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
function appendStringToProperty<T, K extends keyof T>(obj: T, prop: K, appendString: string): T {
    const updatedObj = { ...obj };
    updatedObj[prop] = updatedObj[prop] + appendString as T[K];
    return updatedObj;
}

// Example usage:
const Boi = { name: 'John', age: 30 };
const Item = { name: 'Pizza', price: 19.99 };
const Index = { start : 1, end: 99, distance: 55, nullable: true };

const personWithSuffix = appendStringToProperty(Boi, 'name', ' Wick');
const productWithSuffix = appendStringToProperty(Item, 'price', '$');

console.log(personWithSuffix); // { name: 'John Doe', age: 30 }
console.log(productWithSuffix); // { name: 'Widget Plus', price: 19.99 }

console.log(appendStringToProperty(Index, 'distance', ' km'));