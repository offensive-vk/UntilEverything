import React, { useEffect } from 'react';

function Animation() {
    const runAnimation = async () => {
        const spans: NodeListOf<HTMLSpanElement> = document.querySelectorAll('span');
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
        await new Promise<string>((resolve) => {
            setTimeout(() => resolve('Done'), totalDuration * 1000);
        });
    };

    const startAnimation = async () => {
        await runAnimation();
        // Call startAnimation recursively to repeat the animation
        startAnimation();
    };

    useEffect(() => {
        window.addEventListener('DOMContentLoaded', startAnimation);

        return () => {
            // Clean up event listeners if needed
            window.removeEventListener('DOMContentLoaded', startAnimation);
        };
    }, []);
}

export default Animation;