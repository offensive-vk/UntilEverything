import './first.js'
// TypeScript supports union types, which allow a variable or parameter to accept multiple types. In this example, the display function can accept either a string or a number, but not a boolean.
type Anything = string | number | boolean;
var id: string | number;

function display(value: string | number) {
    log(value);
}

display("TypeScript is easy to learn");
display(142); 

//display(true); // Error: Argument of type 'boolean'.
// union types are defined directly using the | (pipe) symbol, without using the type keyword. The type keyword is used to create type aliases, which provide a way to give a name to a specific type or combination of types.
