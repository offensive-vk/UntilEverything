// Modules to export some stuff.

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

export var pi = 3.14;
export let squareTwo = 1.41;
export const phi = 1.61;

export class RandomNumberGenerator { }

export function absolute(num: number) {
    if (num < 0) return num * -1;
    return num;
}

export type Cat = { breed: string; yearOfBirth: number };
export interface Dog {
    breeds: string[];
    yearOfBirth: number;
}
export type Dog = { breeds: string[]; yearOfBirth: number };
export const createCatName = () => "fluffy";