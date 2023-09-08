// Function that returns a resolved promise with a string
function resolvedPromise(): Promise<string> {
    return Promise.resolve("This is a resolved promise.");
}

// Function that returns a rejected promise with an error
function rejectedPromise(): Promise<Error> {
    return Promise.reject(new Error("This is a rejected promise."));
}

// Async function that returns a promise with a number
async function asyncPromise(): Promise<number> {
    const result = await resolvedPromise();
    return result.length; // Returns the length of the resolved string
}

// Using the promises
resolvedPromise()
    .then((result) => {
        console.log(result); // This is a resolved promise.
    })
    .catch((error) => {
        console.error(error.message);
    });

rejectedPromise()
    .then((result) => {
        // This block won't be executed due to the rejection.
    })
    .catch((error) => {
        console.error("Error: " + error.message); // Error: This is a rejected promise.
    });

asyncPromise()
    .then((result) => {
        console.log("Length of resolved promise:", result); // Length of resolved promise: 24
    })
    .catch((error) => {
        console.error(error.message);
    });


// Complex Promise returns a array
// Function that returns a resolved promise with an array of numbers
function promiseWithArray(): Promise<Array<number>> {
    const numbers = [1, 2, 3, 4, 5];
    return Promise.resolve(numbers);
}

// Using the promise with Array<number> return type
promiseWithArray()
    .then((result) => {
        console.log("Array of numbers:", result);
    })
    .catch((error) => {
        console.error(error);
    });
