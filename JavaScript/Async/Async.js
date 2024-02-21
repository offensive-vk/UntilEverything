// Simulating an async function using setTimeout
async function fetchData(i) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Data ${i}`);
        }, 1000); // Simulate a 1-second delay
    });
}

// Using async/await to fetch and display data
async function fetchDataAndDisplay() {
    try {
        console.log('Fetching data...');
        for (let i = 1; i <= 5; i++) {
            const data = await fetchData(i);
            console.log('Data received:', data);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Calling the async function
fetchDataAndDisplay();
console.log('Calling the async function:...');