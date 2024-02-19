// Load event
window.addEventListener('load', function() {
    console.log('Page loaded');
});

// Unload event
window.addEventListener('unload', function() {
    console.log('Page unloaded');
});

// Beforeunload event
window.addEventListener('beforeunload', function(event) {
    // Cancel the event to prevent the browser from navigating away immediately
    event.preventDefault();
    // Prompt the user with a confirmation dialog
    event.returnValue = '';
});

// Resize event
window.addEventListener('resize', function() {
    console.log('Window resized');
});

// Scroll event
window.addEventListener('scroll', function() {
    console.log('Page scrolled');
});

// DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event fired');
});

// Hashchange event
window.addEventListener('hashchange', function() {
    console.log('Hash changed');
});

// Set an example of DOMContentLoaded event to see its behavior
document.addEventListener('DOMContentLoaded', function() {
    var paragraph = document.createElement('p');
    paragraph.textContent = 'DOMContentLoaded event example';
    document.body.appendChild(paragraph);
});
