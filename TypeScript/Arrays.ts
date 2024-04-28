// Array is a data structure which is a contigious block of elements that contains elements of same datatype.

var arr = []; // Array of Any type
var x: number[] = [] // Array of number type
var y: boolean[] = [] // Array of boolean type
var z: string[] = [] // Array of string type

var arr2: (number | string | boolean )[] = [900, "bro", true];
var arr3: any[]; // Array of any data type.

for (let x in arr2) {
    console.log(arr2[x]);
}

export { }