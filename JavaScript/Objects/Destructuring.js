// Define an object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "New York"
};

// Destructuring assignment
const { firstName, lastName, age, city } = person;

// Display the destructured values
console.log(`First Name: ${firstName}`);
console.log(`Last Name: ${lastName}`);
console.log(`Age: ${age}`);
console.log(`City: ${city}`);

// Complex Destructuring
let options = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};

// destructuring assignment split in multiple lines for clarity
let {
    size: { // put size here
        width,
        height
    },
    items: [item1, item2], // assign items here
    title = "Menu" // not present in the object (default value is used)
} = options;

console.log(title); 
console.log(width);  
console.log(height); 
console.log(item1);  
console.log(item2);  