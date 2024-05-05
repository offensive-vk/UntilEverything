// Use Case 1: Callback with parameters
function calculate(a: number, b: number, callback: (result: number) => void) {
    const result = a + b;
    callback(result);
}

calculate(5, 3, (result) => {
    console.log("The result is:", result);
});

// Use Case 2: Callback with error handling
function divide(a: number, b: number, onSuccess: (result: number) => void, onError: (error: string) => void) {
    if (b === 0) {
        onError("Cannot divide by zero!");
    } else {
        const result = a / b;
        onSuccess(result);
    }
}

divide(10, 2, (result) => {
    console.log("The result of division is:", result);
}, (error) => {
    console.error("Error:", error);
});

// Use Case 3: Callback chaining
function fetchData(callback: (data: string) => void) {
    setTimeout(() => {
        const data = "First data";
        callback(data);
    }, 2000);
}

function processData(data: string, callback: (processedData: string) => void) {
    setTimeout(() => {
        const processedData = data.toUpperCase();
        callback(processedData);
    }, 1000);
}

fetchData((data) => {
    processData(data, (processedData) => {
        console.log("Processed data:", processedData);
    });
});

// Use Case 4: Callback with context binding
class Counter {
    private count = 0;

    increment(callback: () => void) {
        setTimeout(() => {
            this.count++;
            callback();
        }, 1000);
    }

    getCount() {
        console.log("Count:", this.count);
    }
}

const counter = new Counter();
counter.increment(counter.getCount.bind(counter));

// Use Case 5: Callback for asynchronous iteration
function asyncForEach<T>(array: T[], callback: (item: T, index: number, array: T[]) => Promise<void>) {
    array.reduce((promise, item, index) => {
        return promise.then(() => callback(item, index, array));
    }, Promise.resolve());
}

const items = [1, 2, 3, 4, 5];
asyncForEach(items, async (item) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Processed item:", item);
});
export { };
