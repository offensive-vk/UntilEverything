export class SimpleClass {
    private value: number = 0;

    setValue(value: number): this {
        this.value = value;
        return this;
    }

    increment(): this {
        this.value++;
        return this;
    }

    getValue(): number {
        return this.value;
    }
}

// Example usage:
const myObject = new SimpleClass();

const result = myObject
    .setValue(42)
    .increment()
    .getValue();

console.log(result); // Output: 43
