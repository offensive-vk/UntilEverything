// Access parent and child elements
const parentElement = elementById.parentNode;
const firstChild = elementById.firstChild;
const nextSibling = elementById.nextSibling;

// Find elements based on relationships or criteria
const nextElement = elementById.nextElementSibling;
const previousElement = elementById.previousElementSibling;
const elementBySelector = elementById.querySelector('.childElement');
const elementsBySelectorAll = elementById.querySelectorAll('.childElements');

//Adjacent Sibling Selector (+):
// Get the element with ID "myElementId" and select its adjacent sibling
const siblingElement = document.querySelector('#myElementId + .siblingClassName');
