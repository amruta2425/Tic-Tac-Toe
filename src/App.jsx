import { useState ,useEffect} from 'react'

import Board from './components/Board/Board'

import './App.css'

function App() {
  const [board,setBoard] = useState(Array(9).fill(null))
  const handleBoxClick = (boxIndex) => {
    const updatedBoard =board.map((value,index) =>{
      if(index === boxIndex){
        return "X";
      }else{
        return value;
      }
    })
    setBoard(updatedBoard);
  }
  
  return (
    <div className = "App">
      <Board board={board} onClick = {handleBoxClick}/>
    </div>
  )
}

export default App
