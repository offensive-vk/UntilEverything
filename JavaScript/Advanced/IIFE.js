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

(async () =>{
    var name = "John";
    var wrongName = "Jason";
    console.log(`Name: ${name}`);
    while(!name.match(/^[a-zA-Z]/g)){console.log(`Name is : ${wrongName}`);}
    return new Promise((resolve, reject) =>{
        resolve(console.log("The name is John"));
    });

})();