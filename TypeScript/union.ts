
// TypeScript supports union types, which allow a variable or parameter to accept multiple types. In this example, the display function can accept either a string or a number, but not a boolean.

function display(value: string | number) {
    console.log(value);
}

display("TypeScript is easy to learn");
display(142); 
//display(true); // Error: Argument of type 'boolean'.
