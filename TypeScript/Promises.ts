// Function to simulate fetching data from an API
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

// Using async/await to fetch data from two APIs sequentially
async function fetchDataSequentially() {
    try {
        const data1 = await fetchDataFromAPI('API-1', true);
        console.log(data1);

        const data2 = await fetchDataFromAPI('API-2', true);
        console.log(data2);

        const data3 = await fetchDataFromAPI('API-3', true);
        console.log(data3);
    } catch (error) {
        console.error(error);
    }
}

// Using Promise.all to fetch data from multiple APIs in parallel
function fetchDataInParallel() {
    const promises = [
        fetchDataFromAPI('API-1', true),
        fetchDataFromAPI('API-2', true),
        fetchDataFromAPI('API-3', true),
    ];

    Promise.all(promises)
        .then((results) => {
            results.forEach((data) => {
                console.log(data);
            });
        })
        .catch((error) => {
            console.error(error);
        });
}

// Using Promise.race to fetch data and get the result/error of the first API to respond
function fetchDataUsingRace() {
    const promises = [
        fetchDataFromAPI('API-1', false),
        fetchDataFromAPI('API-2', true),
        fetchDataFromAPI('API-3', true),
    ];

    Promise.race(promises)
        .then((result) => {
            console.log('First API to respond:', result);
        })
        .catch((error) => {
            console.error('First API to respond with an error:', error);
        });
}

// Main function to demonstrate Promise usage
async function main() {
    console.log('--- Fetch Data Sequentially ---');
    await fetchDataSequentially();

    console.log('\n--- Fetch Data in Parallel ---');
    fetchDataInParallel();

    console.log('\n--- Fetch Data Using Race ---');
    fetchDataUsingRace();
}

main();
