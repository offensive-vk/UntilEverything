function showConfetti() {
    // You can implement your confetti animation or any other special effects here
    alert('Yay! 🎉 Happy New Year!');
}

function setGreeting() {
    const greetingElement = document.getElementById('greeting');
    const currentTime = new Date().getHours();

    let greeting;

    if (currentTime < 12) {
        greeting = 'Good morning';
    } else if (currentTime < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }

    greetingElement.textContent = `${greeting}, [Friend's Name]!`;
}

// Set the initial greeting
setGreeting();
