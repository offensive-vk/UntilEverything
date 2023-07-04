// Get element by ID
const elementById = document.getElementById('myElementId');

// Get elements by class name
const elementsByClassName = document.getElementsByClassName('ClassName');

// Get elements by tag name
const elementsByTagName = document.getElementsByTagName('div');

// Query selector
const elementByQuerySelector = document.querySelector('#myElementId');
const elementsByQuerySelectorAll = document.querySelectorAll('.myClassName');

//manipulation 

// Change text content
elementById.textContent = 'New text content';

// Modify attribute
elementById.setAttribute('href', 'https://example.com');

// Update HTML structure
elementById.innerHTML = '<h1>New HTML structure</h1>';
