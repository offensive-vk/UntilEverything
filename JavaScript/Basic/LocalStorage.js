// Storing data in localStorage
localStorage.setItem('username', 'john_doe');

// Retrieving data from localStorage
var username = localStorage.getItem('username');
console.log(username); // Output: john_doe

// Storing data in sessionStorage
sessionStorage.setItem('token', 'abc123');

// Retrieving data from sessionStorage
var token = sessionStorage.getItem('token');
console.log(token); // Output: abc123