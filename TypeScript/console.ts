function callFunctionsDemo() {

    console.log("This is a log message.");
    console.info("This is an info message.");
    console.warn("This is a warning message.");
    console.error("This is an error message.");

    const name = "John Bhaiya";
    const age = 55;

    console.log("Hello, %s! You are %d years old.", name, age);

    const fruits = ["apple", "banana", "orange"];
    console.table(fruits);

    const person = { name: "Lissy", age: 25, city: "New York" };
    console.dir(person);

    console.group("Grouping example");
    console.log("This message is inside a group.");
    console.log("So is this one.");
    console.groupEnd();

    var sum: number;
    console.time("Time measurement");
    for (let i = 0; i < 1000000; i++) {
        sum = i*1/10;
    }
    console.timeEnd("Time measurement");

    console.assert(2 + 2 === 5, "Assertion failed! 2 + 2 is not 5.");
    //console.clear(); // clears the console
}

callFunctionsDemo();