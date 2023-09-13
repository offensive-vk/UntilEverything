// Various Methods to Empty an Array

// Redeclare the array as empty
let myArray = [10,20,30,40,50];
myArray = [];

// Setting length to zero
let myArray2 = [10,20,30,40,50];
myArray.length = 0;

// looping from back and removing elements
let myArray3 = [10,20,30,40,50];
for(let i = myArray3.length; i>=0; i--){
    myArray3.pop();
}

// Removing elements with splice()
let myArray4 = [10,20,30,40,50];
myArray4.splice(0, myArray4.length);

// Deleting each element with forEach
let myArray5 = [100,200,300,400,500];
myArray5.forEach(item, () => myArray5.pop());