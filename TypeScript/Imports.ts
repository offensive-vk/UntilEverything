// Imported the exported functions and vars

import { functionA, variableA } from "./Exports";
import functionB from "./Exports";
import helloWorld from "./Exports";

console.log(variableA);
functionA();
functionB();
helloWorld();

import { absolute, phi, pi } from "./Exports";

console.log(pi);
const absPhi = absolute(phi);

import { IDog } from "./Exports";
type Animals = Cat | IDog;

import { type Cat, createCatName, type TDog } from "./Exports";

const name = createCatName();
export {};
