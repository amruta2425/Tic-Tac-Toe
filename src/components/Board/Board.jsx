import React from 'react'
import Box from '../Box/Box'
import "./Board.css"

const Board = ({board}) => {
  return (
    <div>
        {board.map((value,index) => {
        return <Box value = "x" onClick = {null}/>
    })}
        
    </div>
  )
}

export default Board