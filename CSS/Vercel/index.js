async function runAnimation() {
    const spans = document.querySelectorAll('span');
    let delay = 0;
    
    for (let i = 0; i < spans.length; i++) {
        spans[i].style.animation = `code 5s ${delay}s ease`;
        delay += 5;
        
        // Clear the animation for the current span when it's done
        spans[i].addEventListener('animationend', () => {
            spans[i].style.animation = 'none';
        });
    }
    
    // Calculate the total animation duration
    const totalDuration = (spans.length - 1) * 5 + 5;
    
    // Wait for the total duration before resolving
    await new Promise((resolve) => {
        setTimeout(() => resolve('Done'), totalDuration * 1000);
    });
}

async function startAnimation() {
    await runAnimation();
    // Call startAnimation recursively to repeat the animation
    startAnimation();
}

window.addEventListener("DOMContentLoaded", startAnimation);