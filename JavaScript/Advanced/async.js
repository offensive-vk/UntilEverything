// // it is next level 
// async function fetchData() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             const data = "Async Function Called, Fetching Data...\n";
//             resolve(data);
//         }, 2000);
//     });
// }

// async function main() {
//     console.log("Start of program");
//     try {
//         const result = await fetchData();
//         console.log("Fetched data:", result);
//     } catch (error) {
//         console.error("An error occurred:", error);
//     }

//     console.log("End of program");
// }

// main();

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
console.log('After calling fetchDataAndDisplay');
