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

//General Sibling Selector (~):
// Get the element with ID "myElementId" and select all its siblings that have the class "siblingClassName"
const siblingElements = document.querySelectorAll('#myElementId ~ .siblingClassName');

//Next Sibling Selector (nextElementSibling):
// Get the element with ID "myElementId" and select its next sibling
const nextSiblingElement = document.getElementById('myElementId').nextElementSibling;

//Previous Sibling Selector (previousElementSibling):
// Get the element with ID "myElementId" and select its previous sibling
const previousSiblingElement = document.getElementById('myElementId').previousElementSibling;

//Nth Child Selector (nth-child):
// Get the parent element and select its nth child element (e.g., 3rd child)
const nthChildElement = document.getElementById('parentElementId').querySelector(':nth-child(3)');

//Nth Last Child Selector (nth-last-child):
// Get the parent element and select its nth last child element (e.g., 2nd last child)
const nthLastChildElement = document.getElementById('parentElementId').querySelector(':nth-last-child(2)');

//Last Child Selector (lastElementChild):
// Get the parent element and select its last child element
const lastChildElement = document.getElementById('parentElementId').lastElementChild;

//First Child Selector (firstElementChild):
// Get the parent element and select its first child element
const firstChildElement = document.getElementById('parentElementId').firstElementChild;
