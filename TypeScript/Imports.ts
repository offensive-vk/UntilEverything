// Imported the exported functions and vars

import { variableA, functionA } from './Exports';
import functionB from './Exports';
import helloWorld from './Exports';

console.log(variableA); 
functionA(); 
functionB();
helloWorld();

import { pi, phi, absolute } from "./Exports";

console.log(pi);
const absPhi = absolute(phi);

import { IDog } from "./Exports";
type Animals = Cat | IDog;

import { createCatName, type Cat, type TDog } from "./Exports";

const name = createCatName();
export { }