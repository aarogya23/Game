import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  // State for the game board (3x3 array of null, 'X', or 'O')
  const [board, setBoard] = useState(Array(9).fill(null));
  // State to track whose turn it is (X starts)
  const [isXNext, setIsXNext] = useState(true);
  // State to track game status (winner or draw)
  const [gameStatus, setGameStatus] = useState('');

  // Function to handle clicking a square
  const handleClick = (index) => {
    // If square is already filled or game is over, do nothing
    if (board[index] || gameStatus) return;

    // Create a copy of the board
    const newBoard = [...board];
    // Set the square to X or O based on whose turn it is
    newBoard[index] = isXNext ? 'X' : 'O';
    // Update the board state
    setBoard(newBoard);
    // Switch turns
    setIsXNext(!isXNext);

    // Check for winner or draw
    const winner = calculateWinner(newBoard);
    if (winner) {
      setGameStatus(`Winner: ${winner}`);
      alert(`Game Over! Winner: ${winner}`);
    } else if (!newBoard.includes(null)) {
      setGameStatus('Game ended in a draw!');
      alert('Game Over! It\'s a draw!');
    }
    
  };

  // Function to restart the game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameStatus('');
  };

  // Function to calculate winner
  const calculateWinner = (squares) => {
    // All possible winning combinations (rows, columns, diagonals)
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // Check each winning combination
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      // If all three squares in a line have the same value (X or O)
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    
    return null;
  };

  // Render a square
  const Square = ({ value, onClick }) => (
    <button 
      className="game-square"
      onClick={onClick}
    >
      {value}
    </button>
  );

  // Determine status text
  const statusText = gameStatus || `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="game-container">
      <h1 className="game-title">Tic Tac Toe</h1>
      
      <div className="game-status">{statusText}</div>
      
      <div className="game-board">
        {board.map((square, index) => (
          <Square 
            key={index} 
            value={square} 
            onClick={() => handleClick(index)} 
          />
        ))}
      </div>
      
      <button 
        className="reset-button"
        onClick={resetGame}
      >
        Restart Game
      </button>
    </div>
  );
};

export default TicTacToe;