document.addEventListener('click', function (event) {
    var eventType = event.type;
    var targetElement = event.target;
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    console.log('Event type:', eventType);
    console.log('Target element:', targetElement);
    console.log('Mouse coordinates:', mouseX, mouseY);
});

//more