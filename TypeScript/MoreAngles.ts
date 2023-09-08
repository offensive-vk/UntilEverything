// Function that returns a promise that resolves to void after a delay
function delay(ms: number): Promise<void> {
    return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

// Function that returns a promise that resolves to an array of promises
function promiseWithArrayOfPromises(): Promise<Array<Promise<void>>> {
    const promises: Array<Promise<void>> = [];

    // Add three asynchronous operations to the array
    promises.push(delay(1000));
    promises.push(delay(2000));
    promises.push(delay(1500));

    return Promise.resolve(promises);
}
