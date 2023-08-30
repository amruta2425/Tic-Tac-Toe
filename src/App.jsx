import { useState } from 'react'

import Board from './components/Board/Board'

import './App.css'

function App() {
  const board = ["X","X","X","X","X","X","X","X","X"]

  return (
    <div className = "App">
      <Board board={board} onClick = {null}/>
    </div>
  )
}

export default App
