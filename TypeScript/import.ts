// Imported the exported functions and vars

import { variableA, functionA } from './export';
import functionB from './export';
import helloWorld from './export';

console.log(variableA); 
functionA(); 
functionB();
helloWorld();

import { pi, phi, absolute } from "./export";

console.log(pi);
const absPhi = absolute(phi);