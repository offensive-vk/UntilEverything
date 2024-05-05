function fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched successfully');
        }, 2000);
    });
}

// Define an async function to fetch and process data
async function fetchAndProcessData() {
    console.log('Fetching data...');

    try {
        const data = await fetchData(); // Use 'await' to wait for the Promise to resolve
        console.log('Received data:', data);
        console.log('Processing data...');
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log('Data processing complete');
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchAndProcessData();
export { fetchData, fetchAndProcessData };