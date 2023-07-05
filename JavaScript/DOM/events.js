// Get the element by ID
const button = document.getElementById('myButton');

// Add a click event listener
button.addEventListener('click', function () {
    // Code to be executed when the button is clicked
    console.log('Button clicked!');
});

// Add a key press event listener to the document
document.addEventListener('keypress', function (event) {
    // Code to be executed when a key is pressed
    console.log('Key pressed: ' + event.key);
});
