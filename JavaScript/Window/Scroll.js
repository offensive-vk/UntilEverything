// Scroll to the specified position (x, y) in pixels
function scrollToPosition(x, y) {
    window.scrollTo(x, y);
}

// Scroll to the top of the page
function scrollToTop() {
    window.scrollTo(0, 0);
}

// Scroll to the bottom of the page
function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}

// Scroll by the specified amount (deltaX, deltaY) in pixels
function scrollByAmount(deltaX, deltaY) {
    window.scrollBy(deltaX, deltaY);
}

// Check if the browser window has a horizontal scrollbar
function hasHorizontalScrollbar() {
    return document.documentElement.scrollWidth > window.innerWidth;
}

// Check if the browser window has a vertical scrollbar
function hasVerticalScrollbar() {
    return document.documentElement.scrollHeight > window.innerHeight;
}

// Get the horizontal scroll position of the window
function getScrollX() {
    return window.scrollX || window.pageXOffset;
}

// Get the vertical scroll position of the window
function getScrollY() {
    return window.scrollY || window.pageYOffset;
}

// Example usage
scrollToPosition(0, 200);
console.log("Scroll position (x, y):", getScrollX(), getScrollY());

scrollToTop();
console.log("Scrolled to top:", getScrollX(), getScrollY());

scrollToBottom();
console.log("Scrolled to bottom:", getScrollX(), getScrollY());

scrollByAmount(100, -50);
console.log("Scrolled by amount (100, -50):", getScrollX(), getScrollY());

console.log("Has horizontal scrollbar:", hasHorizontalScrollbar());
console.log("Has vertical scrollbar:", hasVerticalScrollbar());
window.performance