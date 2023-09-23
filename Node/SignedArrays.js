// Int8Array
const int8Array = new Int8Array(4);
int8Array[0] = -10;
int8Array[1] = 20;
int8Array[2] = -30;
int8Array[3] = 40;
console.log(int8Array); // Output: Int8Array [ -10, 20, -30, 40 ]

// Int16Array
const int16Array = new Int16Array(3);
int16Array[0] = -100;
int16Array[1] = 200;
int16Array[2] = -300;
console.log(int16Array); // Output: Int16Array [ -100, 200, -300 ]

// Int32Array
const int32Array = new Int32Array(2);
int32Array[0] = -1000;
int32Array[1] = 2000;
console.log(int32Array); // Output: Int32Array [ -1000, 2000 ]

// Float32Array
const float32Array = new Float32Array(3);
float32Array[0] = -3.14;
float32Array[1] = 2.718;
float32Array[2] = -1.618;
console.log(float32Array); // Output: Float32Array [ -3.14, 2.718, -1.618 ]

// Float64Array
const float64Array = new Float64Array(2);
float64Array[0] = -3.14159;
float64Array[1] = 2.71828;
console.log(float64Array); // Output: Float64Array [ -3.14159, 2.71828 ]
