
import { useState } from 'react'
import './App.css'
import Header from './Header'
import Board from './Board'

const PLAYERX = "Player 1-Xs"
const PLAYERO = "Player 2-Os"

function App() {
  const [turno, SetTurno] = useState(PLAYERX);
  const [values,SetValues] = useState([
    ["X","-","-"],
    ["-","-","-"],
    ["-","-","-"]
  ])

  function appClick(rowNumber,columNumber){
    console.log("Click en "+ rowNumber + columNumber);
    let valuesCopy = JSON.parse(JSON.stringify(values));
    let newMovement = turno === PLAYERX ? "X": "O";
    valuesCopy[rowNumber][columNumber] = newMovement;
    SetTurno(turno === PLAYERX ?PLAYERO:PLAYERX);
    SetValues(valuesCopy);
  }

  return (
    <div className="App">
      <h2>TicTacToe</h2>
      <Header turno = {turno}/>

     <Board values = {values} appClick = {appClick}/>
      </div>
  )
}

export default App
