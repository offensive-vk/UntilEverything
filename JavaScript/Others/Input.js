const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for input
rl.question('Enter something: ', (userInput) => {
    console.log(`You entered: ${userInput}`);

    // Close the interface, as we don't need to take more input
    rl.close();
});

// Event listener for when the interface is closed
rl.on('close', () => {
    console.log('Input stream closed. Exiting.');
});
