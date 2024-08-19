const canvas = document.getElementById('snake');
const ctx = canvas.getContext('2d');

// Snake array
let snake = [];

// Food coordinates
let food;

// Game over flag
let dead = false;

// Direction of the snake
let dir;

// Game speed
let speed = 100;

// Score
let score = 0;

// Game dimensions
const width = canvas.width;
const height = canvas.height;
const blockSize = 10;

// Function to draw the snake
function drawSnake() {
    ctx.fillStyle = "green";
    for (let i = 0; i < snake.length; i++) {
        ctx.fillRect(snake[i].x, snake[i].y, blockSize, blockSize);
    }
}

// Function to draw the food
function drawFood() {
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, blockSize, blockSize);
}

// Function to create food
function createFood() {
    food = {
        x: Math.round(Math.random() * (width - blockSize) / blockSize) * blockSize,
        y: Math.round(Math.random() * (height - blockSize) / blockSize) * blockSize
    };
}

// Function to check for collisions
function checkCollision(x, y, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].x === x && array[i].y === y) {
            return true;
        }
    }
    return false;
}

// Game loop
function gameLoop() {
    if (dead) {
        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.fillText("Game Over! Score: " + score, width / 2 - 50, height / 2);
        return;
    }

    ctx.clearRect(0, 0, width, height);

    drawSnake();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (dir === "left") snakeX -= blockSize;
    if (dir === "right") snakeX += blockSize;
    if (dir === "up") snakeY -= blockSize;
    if (dir === "down") snakeY += blockSize;

    if (snakeX < 0 || snakeX >= width || snakeY < 0 || snakeY >= height) dead = true;

    if (checkCollision(snakeX, snakeY, snake)) dead = true;

    let newHead = { x: snakeX, y: snakeY };

    if (snakeX === food.x && snakeY === food.y) {
        score++;
        createFood();
    } else {
        snake.pop();
    }

    snake.unshift(newHead);

    ctx.fillStyle = "white";
    ctx.font = "10px Arial";
    ctx.fillText("Score: " + score, 5, 10);

    setTimeout(gameLoop, speed);
}

// Initial setup
snake = [{ x: width / 2, y: height / 2 }];
createFood();
dir = "right";

document.addEventListener('keydown', function (e) {
    if (e.keyCode === 37 && dir !== "right") dir = "left";
    if (e.keyCode === 39 && dir !== "left") dir = "right";
    if (e.keyCode === 38 && dir !== "down") dir = "up";
    if (e.keyCode === 40 && dir !== "up") dir = "down";
});

gameLoop();