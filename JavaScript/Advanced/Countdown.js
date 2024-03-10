"use strict";
let intervalId;

function printCountdown(count) {
    console.log(count);
    if (count === 0) {
        clearInterval(intervalId);
        console.log("Countdown finished!");
    }
}

function startCountdown(seconds) {
    let count = seconds;
    intervalId = setInterval(function() {
        printCountdown(count);
        count--;
    }, 1000);
}
function delayedMessage() {
    console.log("This message is delayed by 3 seconds.");
}

console.log("Starting countdown:");
startCountdown(7);

setTimeout(delayedMessage, 3000);