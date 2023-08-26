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
