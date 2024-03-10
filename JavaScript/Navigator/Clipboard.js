// Check if Clipboard API is supported
if (navigator.clipboard) {
    // Write text to clipboard
    navigator.clipboard.writeText('Text to copy')
        .then(() => {
            console.log('Text copied to clipboard');
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });

    // Read text from clipboard
    navigator.clipboard.readText()
        .then(text => {
            console.log('Text from clipboard:', text);
        })
        .catch(err => {
            console.error('Failed to read text: ', err);
        });
} else {
    console.error('Clipboard API not supported');
}
