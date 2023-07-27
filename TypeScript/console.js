function consoleFunctionsDemo() {
    console.log("This is a log message.");
    console.info("This is an info message.");
    console.warn("This is a warning message.");
    console.error("This is an error message.");
    var name = "John Bhaiya";
    var age = 55;
    console.log("Hello, %s! You are %d years old.", name, age);
    var fruits = ["apple", "banana", "orange"];
    console.table(fruits);
    var person = { name: "Alice", age: 25, city: "New York" };
    console.dir(person);
    console.group("Grouping example");
    console.log("This message is inside a group.");
    console.log("So is this one.");
    console.groupEnd();
    var sum;
    console.time("Time measurement");
    for (var i = 0; i < 1000000; i++) {
        sum = i * 1 / 10;
    }
    console.log("Result: " + sum);
    console.timeEnd("Time measurement");
    console.assert(2 + 2 === 5, "Assertion failed! 2 + 2 is not 5.");
    
    //console.clear(); // clears the console
}
consoleFunctionsDemo();
