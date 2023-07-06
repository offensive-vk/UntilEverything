const ElementById = document.getElementById('element');
// Modify styles
elementById.style.backgroundColor = 'red';
elementById.style.fontSize = '20px';

// Add, remove, or toggle classes
elementById.classList.add('newClass');
elementById.classList.remove('oldClass');
elementById.classList.toggle('active');

//css
document.body.style.backgroundColor = 'red';
document.body.style.fontSize = '20px';
document.body.style.color = 'blue';
document.body.style.overflow = 'hidden';
document.body.style.margin = '20px';
document.body.style.border = '1px solid black';
document.body.style.textAlign = 'center';

const className = document.body.className; // Returns the class attribute value
document.body.className = 'my-class'; // Sets the class attribute value

//contentEditable: Gets or sets whether the content of the <body> element is editable.
const contentEditable = document.body.contentEditable; // Returns "true" or "false"
document.body.contentEditable = 'true'; // Enables editing of the content

const offsetHeight = document.body.offsetHeight; // Returns the height of the body element
const offsetWidth = document.body.offsetWidth; // Returns the width of the body element
const scrollHeight = document.body.scrollHeight; // Returns the scrollable height of the body element
const scrollWidth = document.body.scrollWidth; // Returns the scrollable width of the body element
