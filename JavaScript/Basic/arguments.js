
// arguments is an array-like object accessible inside functions that contains the values of the arguments passed to that function.

function args(a , b, c) {  
    console.log(`-> Total Possible Indices :[${arguments.length - 1}]`);
    console.log(arguments[0]); // a
    console.log(arguments[1]); // b
    console.log(arguments[2]); // c
    console.log("Function Terminated");
}

args(90,80,70);