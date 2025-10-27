# Snake Game

A classic Snake game implemented using HTML5 Canvas, CSS, and JavaScript.

## Features

- Smooth snake movement with keyboard controls
- Food generation and scoring system
- Collision detection for walls and self
- Game over screen with restart functionality
- Responsive design

## How to Play

1. Open `index.html` in your web browser
2. Click the "Start Game" button to begin
3. Use the arrow keys or WASD to control the snake:
   - Up: Arrow Up or W
   - Down: Arrow Down or S
   - Left: Arrow Left or A
   - Right: Arrow Right or D
4. Eat the food (orange squares) to grow the snake and increase your score
5. Avoid hitting the walls or the snake's own body
6. When the game is over, click "Restart" to play again

## Game Rules

- Each food eaten increases your score by 10 points
- The game ends when the snake hits a wall or itself
- The snake cannot move directly opposite to its current direction

## Implementation Details

- The game board is rendered using HTML5 Canvas
- The snake and food are drawn as colored squares on a grid
- Game logic is implemented in JavaScript
- Styling is done with CSS

## Files

- `index.html`: Main HTML structure
- `style.css`: CSS styling for the game
- `game.js`: JavaScript game logic
- `README.md`: This documentation file