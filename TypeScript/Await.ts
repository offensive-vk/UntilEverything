/* 
Exploring different scenarios of 'await' keyword in async functions.
*/

// Scenario 1: Waiting for a Promise to Resolve
async function waitOneSecond(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Waited for 1 second.");
}

// Scenario 2: Handling Promise Rejection
async function rejectPromise(): Promise<void> {
    try {
        await Promise.reject(new Error("Promise rejection"));
    } catch (error: any) {
        console.error("Caught an error:", error.message);
    }
}

// Scenario 3: Using async/await with a Regular Function
async function fetchData(): Promise<string> {
    async function fetchFromServer(): Promise<string> {
        await waitOneSecond();
        return "Data from the server";
    }

    const data = await fetchFromServer();
    return data;
}

// Scenario 4: Sequential Asynchronous Operations
async function sequentialOperations(): Promise<void> {
    const result1 = await waitOneSecond();
    const result2 = await fetchData();
    console.log("Results:", result1, result2);
}

// Scenario 5: Concurrent Asynchronous Operations
async function concurrentOperations(): Promise<void> {
    const promise1 = waitOneSecond();
    const promise2 = fetchData();

    const [result1, result2] = await Promise.all([promise1, promise2]);
    console.log("Results:", result1, result2);
}

// Scenario 6: Using async/await with for...of Loop
async function iterateOverArray(): Promise<void> {
    const items = [11, 22, 33, 44, 55];
    for (const item of items) {
        await waitOneSecond();
        console.log("Item:", item);
    }
}

// Scenario 7: Using async/await with Promises
async function asyncWithPromises(): Promise<void> {
    const result = await new Promise<string>((resolve) => {
        setTimeout(() => resolve("Promise resolved"), 1000);
    });
    console.log("Result:", result);
}

// Scenario 8: Using async/await with async Functions
async function asyncWithAsyncFunction(): Promise<void> {
    async function innerAsyncFunction(): Promise<string> {
        await waitOneSecond();
        return "Data from inner async function";
    }

    const result = await innerAsyncFunction();
    console.log("Result:", result);
}

// Scenario 9: Using async/await with Other async Functions
async function asyncWithOtherAsyncFunction(): Promise<void> {
    const result = await fetchData();
    console.log("Result:", result);
}

// Execute scenarios
(async () => {
    console.log("Scenario 1:");
    await waitOneSecond();

    console.log("\nScenario 2:");
    await rejectPromise();

    console.log("\nScenario 3:");
    await fetchData();

    console.log("\nScenario 4:");
    await sequentialOperations();

    console.log("\nScenario 5:");
    await concurrentOperations();

    console.log("\nScenario 6:");
    await iterateOverArray();

    console.log("\nScenario 7:");
    await asyncWithPromises();

    console.log("\nScenario 8:");
    await asyncWithAsyncFunction();

    console.log("\nScenario 9:");
    await asyncWithOtherAsyncFunction();
})();
/* The End of Await.ts */