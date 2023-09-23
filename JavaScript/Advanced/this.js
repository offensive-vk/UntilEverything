// Example 1: Global scope
console.log(this); // 'this' refers to the global object (window in a browser, global in Node.js)

// Example 2: Object method
const person = {
    name: 'John',
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};
person.greet(); // 'this' refers to the object that owns the method (person)

// Example 3: Constructor function
function Car(make, model) {
    this.make = make;
    this.model = model;
    this.getDetails = function () {
        console.log(`Make: ${this.make}, Model: ${this.model}`);
    };
}
const myCar = new Car('Toyota', 'Camry');
myCar.getDetails(); // 'this' refers to the instance of the object created by the constructor (myCar)

// Example 4: Event handler
const button = document.querySelector('button');
button.addEventListener('click', function () {
    console.log(this); // 'this' refers to the element that triggered the event (button)
});

// Example 5: Arrow function
const arrowFunc = () => {
    console.log(this); // 'this' retains the value from the enclosing scope (lexical this)
};
arrowFunc(); // 'this' refers to the value of 'this' in the surrounding scope

// Example 6: Function with explicit 'this'
function explicitThisFunc() {
    console.log(`Hello, my name is ${this.name}`);
}
explicitThisFunc.call({ name: 'John' }); // 'this' refers to the object passed to 'call'

// Example 7: 'this' in a nested function
const nestedFuncObj = {
    name: 'Jane',
    outerFunc: function () {
        console.log(`Outer function: ${this.name}`);
        const innerFunc = function () {
            console.log(`Inner function: ${this.name}`);
        };
        innerFunc();
    }
};
nestedFuncObj.outerFunc(); // 'this' in innerFunc is undefined because it refers to the global object

// Example 8: 'this' in a nested arrow function
const nestedArrowFuncObj = {
    name: 'Jane',
    outerFunc: function () {
        console.log(`Outer function: ${this.name}`);
        const innerFunc = () => {
            console.log(`Inner function: ${this.name}`);
        };
        innerFunc();
    }
};
nestedArrowFuncObj.outerFunc(); // 'this' in innerFunc refers to 'this' in outerFunc due to lexical scoping
