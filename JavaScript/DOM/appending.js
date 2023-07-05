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