document.addEventListener('click', function (event) {
    var eventType = event.type;
    var targetElement = event.target;
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    console.log('Event type:', eventType);
    console.log('Target element:', targetElement);
    console.log('Mouse coordinates:', mouseX, mouseY);
});

document.addEventListener('click', function (event) {
    console.log('Event type:', event.type);
    console.log('Target element:', event.target);
    console.log('Current phase:', event.eventPhase);
    console.log('Timestamp:', event.timeStamp);
    console.log('Bubbles:', event.bubbles);
    console.log('Cancelable:', event.cancelable);
    console.log('Default prevented:', event.defaultPrevented);

    if (event.type === 'keydown') {
        console.log('Key code:', event.keyCode || event.which);
        console.log('Shift key pressed:', event.shiftKey);
        console.log('Ctrl key pressed:', event.ctrlKey);
        console.log('Alt key pressed:', event.altKey);
        console.log('Meta key pressed:', event.metaKey);
    }

    if (event.type === 'mousemove' || event.type === 'click') {
        console.log('Mouse coordinates (clientX, clientY):', event.clientX, event.clientY);
        console.log('Mouse coordinates (pageX, pageY):', event.pageX, event.pageY);
    }

    console.log('------------------------');
});
