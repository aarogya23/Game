import React from "react";
import './App.css';
import TicTacToe from "./TicTacToe";

const App = () => {
  return(
    <div className="app">
      <header className="app-header">
        <h1>React Tic-tac-toe</h1>
      </header>
      <main className="app-main">
        < TicTacToe />
      </main>
    </div>
  )
}

export default App;