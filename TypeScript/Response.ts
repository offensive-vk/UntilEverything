async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Accessing properties
        console.log('Response status:', response.status);
        console.log('Response status text:', response.statusText);
        console.log('Response URL:', response.url);

        // Accessing headers
        const contentType = response.headers.get('content-type');
        console.log('Content-Type:', contentType);

        // Using methods
        const text = await response.text();
        console.log('Response body as text:', text);

        const json = await response.json();
        console.log('Response body as JSON:', json);

        const blob = await response.blob();
        console.log('Response body as Blob:', blob);

        const arrayBuffer = await response.arrayBuffer();
        console.log('Response body as ArrayBuffer:', arrayBuffer);

        const formData = await response.formData();
        console.log('Response body as FormData:', formData);
    } catch (error: any) {
        console.error('Error:', error.message);
    }
}

fetchData();