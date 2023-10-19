function appendStringToProperty<T, K extends keyof T>(obj: T, prop: K, appendString: string): T {
    const updatedObj = { ...obj };
    updatedObj[prop] += appendString;
    return updatedObj;
}

// Example usage:
const person = { name: 'John', age: 30 };
const product = { name: 'Widget', price: 19.99 };

const personWithSuffix = appendStringToProperty(person, 'name', ' Doe');
const productWithSuffix = appendStringToProperty(product, 'name', ' Plus');

console.log(personWithSuffix); // { name: 'John Doe', age: 30 }
console.log(productWithSuffix); // { name: 'Widget Plus', price: 19.99 }
