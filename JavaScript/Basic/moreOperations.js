const car = {
    name: "Dodge Charger",
    age: 2010,
    price: 890229,
};

if ("name" in person) {
    console.log("Name property exists.");
} else {
    console.log("Name property does not exist.");
}

//copy a object 
const clonedPerson = { ...person };
console.log(clonedPerson);


const propertyCount = Object.keys(person).length;
console.log("Number of properties:", propertyCount);

const obj1 = {
    name: "Kiddo",
    age: 12,
};

const obj2 = {
    name: "Kiddo",
    age: 12,
};

const isEqual = JSON.stringify(obj1) === JSON.stringify(obj2);
console.log("Objects are equal:", isEqual);
