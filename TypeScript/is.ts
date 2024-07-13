function isString(value: any): value is string {
    return typeof value === "string";
}

function printLength(value: string | number) {
    if (isString(value)) {
        console.log(value.length); // TypeScript knows value is a string here
    } else {
        console.log("Not a string");
    }
}

printLength("hello"); // Output: 5
printLength(42); // Output: Not a string

function isStringv2(value: unknown): value is string {
    return typeof value === "string";
}

function example(x: unknown): void  {
    if (isStringv2(x)) {
        // We can now call any 'string' method on 'x'.
        x.toUpperCase();
        console.log(x);
    } else {
        console.log(x);
    }
}

example("Crazy");
example(3.4);
export { };