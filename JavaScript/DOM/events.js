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


// Get the form element by ID
const form = document.getElementById('myForm');

// Add a submit event listener
form.addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Code to be executed when the form is submitted
    console.log('Form submitted!');
});

// Get all elements with a specific class name
const elements = document.getElementsByClassName('myClassName');

// Loop through the elements and add a mouseover event listener
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseover', function () {
        // Code to be executed when the mouse is over an element
        console.log('Mouse over element ' + i);
    });
}
