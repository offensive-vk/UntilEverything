// IIFE - Immediately-Invoked Function Expression is a function that is executed immediately after it is created.

(function() {
    const firstName = "John";
    const lastName = "Wick";

    function getFullName() {
        return firstName + " " + lastName;
    }

    console.log("Hello from JavaScript IIFE!");
    console.log("Full Name:", getFullName());
})();
