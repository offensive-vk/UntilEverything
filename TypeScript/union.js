"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./first.js");
var id;
function display(value) {
    console.log(value);
}
display("TypeScript is easy to learn");
display(142);
id = 2203;
id = "234";
console.log(id);
//display(true); // Error: Argument of type 'boolean'.
// union types are defined directly using the | (pipe) symbol, without using the type keyword. The type keyword is used to create type aliases, which provide a way to give a name to a specific type or combination of types.
