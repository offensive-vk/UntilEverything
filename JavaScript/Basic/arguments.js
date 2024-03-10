// `arguments` is an array-like object accessible inside functions that contains the values of the arguments passed to that function.

function args(a , b, c) {  
    console.log(`-> Total Possible Indices :[${arguments.length - 1}]`);
    console.log(arguments[0]); // a
    console.log(arguments[1]); // b
    console.log(arguments[2]); // c
    console.log("Function Terminated\n");
    return a + b + c;
}

args(90,80,70);

// we can also change the values of the arguments
function func(a) {
    arguments[0] = 99; // updating arguments[0] also updates a
    console.log(a);
}
func(10); // 99

function func2(a) {
    a = 99; // updating a also updates arguments[0]
    console.log(arguments[0]);
}
func2(10); // 99


// Cool stuff
function _concat(separator) {
    const args = Array.prototype.slice.call(arguments, 1);
    return args.join(separator);
}
console.log(_concat(" | ","Manish","is very" ,"good boy"));