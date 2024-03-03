const matrixContainer = document.getElementById('matrix-container');
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:\'",.<>/?`~';

function generateRandomCharacter() {
    return characters[Math.floor(Math.random() * characters.length)];
}

function generateMatrix(rows, columns) {
    let matrix = '';
    for (let i = 0; i < rows * columns; i++) {
        matrix += `<div class="character color-change">${generateRandomCharacter()}</div>`;
    }
    return matrix;
}

function updateMatrix() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const characterSize = 20; // Adjust as needed
    const columns = Math.floor(viewportWidth / characterSize);
    const rows = Math.floor(viewportHeight / characterSize);

    matrixContainer.innerHTML = generateMatrix(rows, columns);
}

// Initial update
updateMatrix();

// Update on window resize
window.addEventListener('resize', updateMatrix);

// Update matrix every 5 seconds with smooth transition
setInterval(() => {
    // Generate a random color
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

    // Update the matrix with the new color
    matrixContainer.classList.add('smooth-transition');
    updateMatrix();

    // Delay the color change to match the CSS transition duration
    setTimeout(() => {
        matrixContainer.classList.remove('smooth-transition');

        // Update the color of all characters
        const characters = document.querySelectorAll('.character');
        characters.forEach(character => {
            character.style.color = randomColor;
            void character.offsetWidth; // Trigger reflow to apply transition smoothly
        });
    }, 500); // Duration of the CSS transition
}, 5000); // Refresh the matrix every 5 seconds