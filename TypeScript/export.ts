// moduleA.ts
export const variableA = "This is variable A.";

const variableB = "This is variable B.";

export function functionA() {
    console.log("Function A is called.");
}

function functionB() {
    console.log("Function B is called.");
}
export default function helloWorld() {
    console.log("Hello, world from another file !");
}
export default functionB;
