// Function factory returning closures
function counterFactory() {
    let count = 0;

    function increment() {
        count++;
        console.log(`Count is now: ${count}`);
    }

    function decrement() {
        count--;
        console.log(`Count is now: ${count}`);
    }

    function getCount() {
        console.log(`Current count is: ${count}`);
    }

    return { increment, decrement, getCount };
}

// Creating multiple counters with closures
const counter1 = counterFactory();
const counter2 = counterFactory();

// Using closures to manipulate counts independently
counter1.increment(); // Output: Count is now: 1
counter1.increment(); // Output: Count is now: 2
counter1.getCount();   // Output: Current count is: 2

counter2.decrement(); // Output: Count is now: -1
counter2.getCount();   // Output: Current count is: -1

// Function returning a closure with a private variable
function createPerson(name: string) {
    let age = 0;

    function getDetails() {
        console.log(`Name: ${name}, Age: ${age}`);
    }

    function birthday() {
        age++;
        console.log(`${name} is now ${age} years old.`);
    }

    return { getDetails, birthday };
}

// Creating instances with closures for person details
const person1 = createPerson("Lissy");
const person2 = createPerson("Roy");

// Interacting with closures to access and update details
person1.getDetails(); 
person1.birthday();  
person1.getDetails();

person2.birthday();  
person2.getDetails(); 
