function swap<T>(a: T, b: T): void {
    let temp: T = a;
    a = b;
    b = temp;
    console.log(`After swapping: a = ${a}, b = ${b}`);
}

let num1: number = 5;
let num2: number = 10;

console.log(`Before swapping: num1 = ${num1}, num2 = ${num2}`);
swap(num1, num2);

let str1: string = "hello";
let str2: string = "world";

console.log(`Before swapping: str1 = ${str1}, str2 = ${str2}`);
swap(str1, str2);
