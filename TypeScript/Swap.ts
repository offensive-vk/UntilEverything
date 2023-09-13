function swap<T>(a: T, b: T): void {
    let temp: T = a;
    a = b;
    b = temp;
    console.log(`After swapping: a = ${a}, b = ${b}`);
}

let num1: number = 5;
let num2: number = 10;

console.log(`Before swapping: num1 = ${num1}, num2 = ${num2}`);
swap<number>(num1, num2);

let str1: string = "hello";
let str2: string = "world";

console.log(`Before swapping: str1 = ${str1}, str2 = ${str2}`);
swap(str1, str2);


let [val1 , val2] = ['value1', 'value2'];
console.log(`\n\n Before swapping: val1 = ${val1}, val2 = ${val2}`);

[val1, val2] = [val2, val1];
console.log(`\n After swapping: val1 = ${val1}, val2 = ${val2}`);