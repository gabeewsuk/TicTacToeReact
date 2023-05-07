import React from 'react';
import { useState } from 'react';

//setting the square as a unit to use later
function Square({ value, onSquareClick }) {
  return (
    //returning onclickvalue to call onSquareClick
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

//creating a board class to store the functions, game score and display the square
export default function Board() {
  //defining state for who is next
  const [xIsNext, setXIsNext] = useState(true);

  //defining state for the board, the array of plays...
  const [squares, setSquares] = useState(Array(9).fill(null));

  //function for handling click
  function handleClick(i) {
    //if there is already a piece in the place it won't execute and if there is a winner it wonn't execute
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    //creating a new array for the board
    const nextSquares = squares.slice();
    //setting square based on who is next
    if (xIsNext) {
      //setting place of play based on index i provided
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    //calling setSquares to input values
    setSquares(nextSquares);    
    //flopping the state
    setXIsNext(!xIsNext);

  }
  //checking for winner
  const winner = calculateWinner(squares);
  //setting game status variable
  let status;
  //conditional for declaring status
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div>
      {/* adding div for status */}

      <div className="status">{status}</div>
  
            {/* adding div for each board row with squares that send their indices*/}

       <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>

  );
}

//function for calculating winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}