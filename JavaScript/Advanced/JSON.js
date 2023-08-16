// All JSON related functions.

const originalObject = {
    name: "John Wick",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding", "destroying"],
    address: {
        street: "123 Main Street",
        city: "Anthony Street",
        country: "USA"
    }
};

// JSON.stringify(): Convert JavaScript object to JSON string
const jsonString = JSON.stringify(originalObject);
console.log("JSON String:", jsonString);

// JSON.parse(): Convert JSON string back to JavaScript object
const parsedObject = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObject);

// JSON.stringify() with a custom replacer function
const customJsonString = JSON.stringify(originalObject, (key, value) => {
    if (key === "age") {
        return value + 5;
    }
    return value;
});
console.log("Custom JSON String:", customJsonString);

// JSON.parse() with a custom reviver function
const customParsedObject = JSON.parse(customJsonString, (key, value) => {
    if (key === "age") {
        return value - 5;
    }
    return value;
});
console.log("Custom Parsed Object:", customParsedObject);

// JSON.stringify() with pretty printing (spacing)
const prettyJsonString = JSON.stringify(originalObject, null, 2);
console.log("Pretty JSON String:", prettyJsonString);

// JSON.stringify() with pretty printing and custom sorting
const sortedJsonString = JSON.stringify(originalObject, Object.keys(originalObject).sort(), 4);
console.log("Sorted JSON String:", sortedJsonString);

// JSON.parse() error handling
const invalidJsonString = '{"name": "Alice", "age":}';
try {
    const parsedInvalidJson = JSON.parse(invalidJsonString);
    console.log(parsedInvalidJson);
} catch (error) {
    console.error("Error parsing JSON:", error.message);
}
