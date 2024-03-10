// Check if data is cached in LocalStorage
var cachedData = localStorage.getItem('cachedData');
if (cachedData) {
    // Data is cached, use it
    var data = JSON.parse(cachedData);
    // Use the cached data
    processData(data);
} else {
    // Data is not cached, make a network request to fetch data from the server
    fetchDataFromServer();
}

function fetchDataFromServer() {
    // Make a network request to fetch data from the server
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
            // Cache the fetched data in LocalStorage
            localStorage.setItem('cachedData', JSON.stringify(data));
            // Process the fetched data
            processData(data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function processData(data) {
    // Process the data (e.g., display it in the UI)
    console.log('Processed data:', data);
}
