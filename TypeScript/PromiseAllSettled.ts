// Simulate fetching data from an API
function fetchDataFromAPI(apiName: string, success: boolean) {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve(`Data from ${apiName}`);
            } else {
                reject(`Error from ${apiName}`);
            }
        }, Math.random() * 2000); // Simulate network delay
    });
}

// Using Promise.allSettled to fetch data from multiple APIs
function fetchDataUsingAllSettled() {
    const promises = [
        fetchDataFromAPI('API-1', true),
        fetchDataFromAPI('API-2', false),
        fetchDataFromAPI('API-3', true),
    ];
    Promise.allSettled(promises)
        .then((results) => {
            results.forEach((result, index) => {
                if (result.status === 'fulfilled') {
                    console.log(`API ${index + 1} resolved: ${result.value}`);
                } else if (result.status === 'rejected') {
                    console.error(`API ${index + 1} rejected: ${result.reason}`);
                }
            });
        });
}

// Main function to demonstrate Promise.allSettled usage
function main() {
    console.log('--- Fetch Data Using allSettled ---');
    fetchDataUsingAllSettled();
}

main();
export { }