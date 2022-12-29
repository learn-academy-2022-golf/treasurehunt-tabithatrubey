import React, { useState } from "react"
import "./App.css"
import Square from './components/Square'
import Button from "./components/Button"

const App = () => {
  const originalArray = [  
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?"];

  const [board, setBoard] = useState(originalArray);

  const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * board.length ))

  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length ))

    const reset = () => {
      setBoard(originalArray);
      setTreasureLocation(Math.floor(Math.random() * board.length))
      setBombLocation(Math.floor(Math.random() * board.length))
    }

    const handleGamePlay = (index) => {
      let updatedBoard = [...board];
      if (index === treasureLocation) {
        updatedBoard[index] = "🎁";
      } else if (index === bombLocation) {
        updatedBoard[index] = "😵";
      } else {
        updatedBoard[index] = "🎄";
      }
      setBoard(updatedBoard);
    };
    
 
  return (
    <>
      <h1>Christmas Treasure Hunt Game</h1>
      <div className="gameboard">
      {board.map((value, index) => {
        return (
          <Square 
          value={value} 
          key = {index}
          index={index}
          handleGamePlay={handleGamePlay}
          />
        );
      })}
      </div>
      <p>
        <Button reset={reset} />
      </p>
    </>
  )
}

export default App
