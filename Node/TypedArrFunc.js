// Uint8Array
const uint8Array = Uint8Array.of(10, 20, 30, 40);
console.log(uint8Array); // Output: Uint8Array [ 10, 20, 30, 40 ]

console.log(uint8Array.length); // Output: 4
console.log(uint8Array.byteLength); // Output: 4
console.log(uint8Array.buffer); // Output: ArrayBuffer { byteLength: 4 }

// Int16Array
const int16Array = Int16Array.of(100, 200, 300);
console.log(int16Array); // Output: Int16Array [ 100, 200, 300 ]

console.log(int16Array.length); // Output: 3
console.log(int16Array.byteLength); // Output: 6
console.log(int16Array.buffer); // Output: ArrayBuffer { byteLength: 6 }

// Float32Array
const float32Array = Float32Array.of(3.14, 2.718, 1.618);
console.log(float32Array); // Output: Float32Array [ 3.14, 2.718, 1.618 ]

console.log(float32Array.length); // Output: 3
console.log(float32Array.byteLength); // Output: 12
console.log(float32Array.buffer); // Output: ArrayBuffer { byteLength: 12 }

// Uint32Array
const uint32Array = Uint32Array.from([10, 20, 30, 40], value => value * 2);
console.log(uint32Array); // Output: Uint32Array [ 20, 40, 60, 80 ]

const sum = uint32Array.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 200

const max = Math.max(...uint32Array);
console.log(max); // Output: 80
