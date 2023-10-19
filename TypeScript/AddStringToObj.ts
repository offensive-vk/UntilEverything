function appendStringToProperty<T, K extends keyof T>(obj: T, prop: K, appendString: string): T {
    const updatedObj = { ...obj };
    updatedObj[prop] = updatedObj[prop] + appendString as T[K];
    return updatedObj;
}

// Example usage:
const Banana = { name: 'John', age: 30 };
const Item = { name: 'Widget', price: 19.99 };
const Index = { start : 1, end: 99, distance: 55, nullable: true };

const personWithSuffix = appendStringToProperty(Banana, 'name', ' Doe');
const productWithSuffix = appendStringToProperty(Item, 'name', ' Plus');

console.log(personWithSuffix); // { name: 'John Doe', age: 30 }
console.log(productWithSuffix); // { name: 'Widget Plus', price: 19.99 }
