/**
 * @author Vedansh
 * @param input Any type of object to be modified.
 * @returns new object of Type with added Id
 */
function addRandomId<T>(input: T): T & { id: string } {
    const randomId = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return {
        ...input,
        id: randomId,
    };
}

// Example usage:
const person = { name: 'John', age: 30 };
const product = { name: 'Widget', price: 19.99 };

const personWithId = addRandomId(person);
const productWithId = addRandomId(product);

console.log(personWithId); // { name: 'John', age: 30, id: '1234' } (ID will be different)
console.log(productWithId); // { name: 'Widget', price: 19.99, id: '5678' } (ID will be different)
