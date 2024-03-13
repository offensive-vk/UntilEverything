// Imported the exported functions and vars

import { variableA, functionA } from './Exports';
import functionB from './Exports';
import helloWorld from './Exports';

console.log(variableA); 
functionA(); 
functionB();
helloWorld();

import { pi, phi, absolute } from "./export";

console.log(pi);
const absPhi = absolute(phi);

import { Cat, Dog } from "./export";
type Animals = Cat | Dog;

import { createCatName, type Cat, type Dog } from "./export";

export type Animals = Cat | Dog;
const name = createCatName();