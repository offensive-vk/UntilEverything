/**
 * Write a function named getClassName that does the following:
 * Takes an object or any class or data type as param
 * Takes an array of ClassNames that contains the possible names of classes that the obj can belong to
 * Print the object's className and done
 * Returns the index of the className from the passed array that matches the className.
 */

class First { }
class Second { }
class Third { }

function getClassName<C, K>(obj: C, ...args: Array<K>) {
    let count: number = 0;
    if (typeof obj == "undefined") {
        return "Object must be of Some Class.";
    }
    if (typeof args == "undefined") {
        throw new Error(`Array Must be of a Valid Type.`);
    }
    if (args.length < 0) {
        throw new Error(`Array Must Contain some Data (ClassNames).`);
    }

    for (let name in args) {
        if (obj?.constructor.name === name) {
            console.log(`Matching ${name}\n`);
            return `Given Object is the Object of Class ${name}.\n`;
        }
        count++;
    }
    console.log(`Object is not Found.\n`);
}

const T = new Third();
const F = new First();
const S = new Second();

const classNames: string[] = ["First", "Second", "Third"];
console.log(getClassName(T, ...classNames));
// still Working on 