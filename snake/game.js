// Game constants
const GRID_SIZE = 20;
const GAME_SPEED = 100; // milliseconds

// Game variables
let canvas;
let ctx;
let snake;
let food;
let direction;
let gameInterval;
let score;
let gameRunning;

// Initialize the game
function init() {
    canvas = document.getElementById('game-board');
    ctx = canvas.getContext('2d');
    
    // Event listeners
    document.getElementById('start-btn').addEventListener('click', startGame);
    document.getElementById('restart-btn').addEventListener('click', restartGame);
    document.addEventListener('keydown', handleKeyPress);
    
    // Show the game board
    drawBoard();
}

// Draw the game board
function drawBoard() {
    ctx.fillStyle = '#222';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Start the game
function startGame() {
    // Hide start button, show restart button
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('restart-btn').style.display = 'inline-block';
    
    // Initialize game state
    snake = [
        {x: 10, y: 10},
        {x: 9, y: 10},
        {x: 8, y: 10}
    ];
    direction = 'right';
    score = 0;
    gameRunning = true;
    document.getElementById('score').textContent = score;
    
    // Generate initial food
    generateFood();
    
    // Start game loop
    if (gameInterval) clearInterval(gameInterval);
    gameInterval = setInterval(gameLoop, GAME_SPEED);
}

// Restart the game
function restartGame() {
    // Remove game over message if exists
    const gameOverMsg = document.querySelector('.game-over');
    if (gameOverMsg) gameOverMsg.remove();
    
    startGame();
}

// Main game loop
function gameLoop() {
    if (!gameRunning) return;
    
    // Move snake
    moveSnake();
    
    // Check collisions
    if (checkCollision()) {
        gameOver();
        return;
    }
    
    // Check if food eaten
    if (snake[0].x === food.x && snake[0].y === food.y) {
        // Don't remove tail to make snake grow
        score += 10;
        document.getElementById('score').textContent = score;
        generateFood();
    } else {
        // Remove tail segment
        snake.pop();
    }
    
    // Draw everything
    drawBoard();
    drawFood();
    drawSnake();
}

// Move the snake
function moveSnake() {
    const head = {x: snake[0].x, y: snake[0].y};
    
    // Calculate new head position based on direction
    switch(direction) {
        case 'up':
            head.y -= 1;
            break;
        case 'down':
            head.y += 1;
            break;
        case 'left':
            head.x -= 1;
            break;
        case 'right':
            head.x += 1;
            break;
    }
    
    // Add new head to the beginning of snake array
    snake.unshift(head);
}

// Check for collisions
function checkCollision() {
    const head = snake[0];
    
    // Check wall collision
    if (head.x < 0 || head.x >= canvas.width / GRID_SIZE ||
        head.y < 0 || head.y >= canvas.height / GRID_SIZE) {
        return true;
    }
    
    // Check self collision (skip the head)
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }
    
    return false;
}

// Generate food at random position
function generateFood() {
    // Generate random coordinates
    const x = Math.floor(Math.random() * (canvas.width / GRID_SIZE));
    const y = Math.floor(Math.random() * (canvas.height / GRID_SIZE));
    
    // Check if food is on snake
    const isOnSnake = snake.some(segment => segment.x === x && segment.y === y);
    
    if (isOnSnake) {
        // If food is on snake, try again
        generateFood();
    } else {
        food = {x, y};
    }
}

// Draw the snake
function drawSnake() {
    snake.forEach((segment, index) => {
        // Head is a different color
        if (index === 0) {
            ctx.fillStyle = '#4CAF50'; // Green head
        } else {
            ctx.fillStyle = '#8BC34A'; // Lighter green body
        }
        
        ctx.fillRect(segment.x * GRID_SIZE, segment.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
        
        // Add a border to make segments distinct
        ctx.strokeStyle = '#222';
        ctx.strokeRect(segment.x * GRID_SIZE, segment.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
    });
}

// Draw the food
function drawFood() {
    ctx.fillStyle = '#FF5722'; // Orange food
    ctx.fillRect(food.x * GRID_SIZE, food.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
    
    // Add a glow effect
    ctx.shadowColor = '#FF9800';
    ctx.shadowBlur = 10;
    ctx.fillRect(food.x * GRID_SIZE, food.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
    ctx.shadowBlur = 0; // Reset shadow
}

// Handle keyboard input
function handleKeyPress(event) {
    // Prevent default behavior for arrow keys
    if ([37, 38, 39, 40].includes(event.keyCode)) {
        event.preventDefault();
    }
    
    // Only change direction if game is running
    if (!gameRunning) return;
    
    // Prevent 180-degree turns
    switch(event.keyCode) {
        case 38: // Up arrow
        case 87: // W key
            if (direction !== 'down') direction = 'up';
            break;
        case 40: // Down arrow
        case 83: // S key
            if (direction !== 'up') direction = 'down';
            break;
        case 37: // Left arrow
        case 65: // A key
            if (direction !== 'right') direction = 'left';
            break;
        case 39: // Right arrow
        case 68: // D key
            if (direction !== 'left') direction = 'right';
            break;
    }
}

// Game over
function gameOver() {
    gameRunning = false;
    clearInterval(gameInterval);
    
    // Create game over message
    const gameOverDiv = document.createElement('div');
    gameOverDiv.className = 'game-over';
    gameOverDiv.innerHTML = `
        <h2>Game Over!</h2>
        <p>Your score: ${score}</p>
        <p>Press the Restart button to play again</p>
    `;
    
    document.querySelector('.game-container').appendChild(gameOverDiv);
}

// Initialize the game when the page loads
window.addEventListener('load', init);