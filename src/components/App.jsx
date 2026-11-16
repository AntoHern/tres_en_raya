
import { useState } from 'react'
import './App.css'
import Header from './Header'
import Board from './Board'
import Reset from './Reset'

const PLAYERX = "Player 1-Xs"
const PLAYERO = "Player 2-Os"

function App() {
  const [turno, setTurno] = useState(PLAYERX);
  const [values, setValues] = useState([
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
  ])

  const [moves, setMoves] = useState(0);

  function appClick(rowNumber, columNumber) {
    console.log("Click en " + rowNumber + columNumber);
    let valuesCopy = JSON.parse(JSON.stringify(values));
    let newMovement = turno === PLAYERX ? "X" : "O";
    valuesCopy[rowNumber][columNumber] = newMovement;
    setTurno(turno === PLAYERX ? PLAYERO : PLAYERX);
    setValues(valuesCopy);
    setMoves(moves => moves + 1)
  }

  function resetClick(){
    console.log ("Reset");
    setTurno(PLAYERX)
    setValues([
      ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
    ])
    setMoves(0);
  }

  return (
    <div className="App">
      <h2>TicTacToe</h2>
      <Header turno={turno} />

      <Board values={values} appClick={appClick} />
      <h3>Numero de movimientos: {moves}</h3>
      <Reset resetClick = {resetClick}/>
    </div>
  )
}

export default App
