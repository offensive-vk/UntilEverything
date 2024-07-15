/**
 * the yield keyword is used in the context of generators. Generators are special functions that can be paused and resumed, allowing for the generation of a sequence of values over time.
 * The yield keyword is used within the generator function to specify the values that will be produced by the iterator. Each time the yield keyword is encountered, the generator function pauses and returns the yielded value.
*/
function* numberGenerator(): Generator<number> {
    let num = 0;
    while (true) {
        yield num;
        num++;
    }
}

const generator = numberGenerator();

console.log(generator.next().value); // Output: 0
console.log(generator.next().value); // Output: 1
console.log(generator.next().value); // Output: 2

/* 
In TypeScript (TS), generators are a feature that allows you to define functions that can be paused and resumed. 
They are defined using a special syntax with an asterisk (*) after the function keyword. When a generator function is called, 
it returns an iterator object that can be used to control the execution of the generator.
*/

function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

// Define a iterator.
const iterator = generateSequence();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

export { };