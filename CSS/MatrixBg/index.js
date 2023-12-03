// const matrixContainer = document.getElementById('matrix-container');
// const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:\'",.<>/?`~';

// function generateRandomCharacter() {
//   return characters[Math.floor(Math.random() * characters.length)];
// }

// function generateMatrix(rows, columns) {
//   let matrix = '';
//   for (let i = 0; i < rows * columns; i++) {
//     matrix += `<div class="character">${generateRandomCharacter()}</div>`;
//   }
//   return matrix;
// }

// function updateMatrix() {
//   const viewportWidth = window.innerWidth;
//   const viewportHeight = window.innerHeight;
//   const characterSize = 20; // Adjust as needed
//   const columns = Math.floor(viewportWidth / characterSize);
//   const rows = Math.floor(viewportHeight / characterSize);

//   matrixContainer.innerHTML = generateMatrix(rows, columns);
// }

// // Initial update
// updateMatrix();

// // Update on window resize
// window.addEventListener('resize', updateMatrix);


/**Update */
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
    matrixContainer.classList.add('smooth-transition');
    updateMatrix();
    setTimeout(() => {
        matrixContainer.classList.remove('smooth-transition');
        const characters = document.querySelectorAll('.character');
        characters.forEach(character => {
            character.classList.remove('color-change');
            void character.offsetWidth; // Trigger reflow to apply transition smoothly
            character.classList.add('color-change');
        });
    }, 500); // The same duration as the CSS transition
}, 5000);
