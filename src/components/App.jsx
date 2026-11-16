
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

  return (
    <div className="App">
      <h2>TicTacToe</h2>
      <Header turno = {turno}/>

     <Board values = {values}/>
      </div>
  )
}

export default App
