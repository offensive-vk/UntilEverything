// Create a new element
const newElement = document.createElement('div');
newElement.textContent = 'New element';

// Append as child node
elementById.appendChild(newElement);

// Insert before another element
const siblingElement = document.getElementById('siblingElementId');
elementById.insertBefore(newElement, siblingElement);

// Insert HTML using insertAdjacentHTML
elementById.insertAdjacentHTML('beforeend', '<p>New HTML content</p>');

// Creating a paragraph element
var paragraph = document.createElement('p');
// Creating a text node
var textNode = document.createTextNode('This is a paragraph');
// Appending the text node to the paragraph element
paragraph.appendChild(textNode);

// Appending the paragraph element to a div with id 'container'
document.getElementById('container').append(paragraph);
