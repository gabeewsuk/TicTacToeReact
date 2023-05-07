# Tic Tac Toe Game

This is a simple Tic Tac Toe game built using React.

## How to Play

The game is played on a 3x3 board. Players take turns placing their mark (either X or O) on an empty square. The first player to get 3 of their marks in a row (horizontally, vertically, or diagonally) wins the game.

To run the game, navigate to the project directory and run `npm install` then `npm start` in the terminal.

## Code Overview

### `Board` Component

The `Board` component handles the state of the game and renders the game board. It contains the following state variables:

- `xIsNext`: A boolean indicating whether it's X's turn to play.
- `squares`: An array representing the current state of the board.

The `handleClick` function is called when a square is clicked. It updates the state of the board and changes the turn to the other player.

The `calculateWinner` function checks whether there is a winner and returns their mark. If there is no winner, it returns null.

### `Square` Component

The `Square` component is a simple button that receives a `value` and `onSquareClick` prop from the `Board` component. When the button is clicked, the `onSquareClick` function is called.

### `index.js` file

This file renders the `Board` component.

## Technologies Used

- React

## Acknowledgments

This project was built following the React tutorial on the official React website.

This project is for learning purposes
