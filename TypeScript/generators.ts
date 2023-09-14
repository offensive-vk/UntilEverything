// the yield keyword is used in the context of generators. Generators are special functions that can be paused and resumed, allowing for the generation of a sequence of values over time.
// The yield keyword is used within the generator function to specify the values that will be produced by the iterator. Each time the yield keyword is encountered, the generator function pauses and returns the yielded value.
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


// yield 
