// Define a global variable
global.globalMessage = "Hello, world!";

// Define a global function
global.globalFunction = function() {
  return "This is a global function";
};

// Import and use the global variables and functions in another module
const { showMessage, showFunctionResult } = require('./modules');

showMessage();           // Output: Hello, world!
showFunctionResult();    // Output: This is a global function

// Modify the global variable
global.globalMessage = "Goodbye, world!";
showMessage();           // Output: Goodbye, world!
