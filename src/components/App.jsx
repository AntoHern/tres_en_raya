
import { useState,useEffect } from 'react'
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
  const[loading,setLoading] = useState(true);
  
  useEffect (() => {
    async function fetchData() {
      const res = await fetch("https://api.npoint.io/c734e05e43c5b87dd971");
      const myjson = await res.json()
      console.log(myjson);
      setTurno(myjson.turno);
      setValues(myjson.values);
      setMoves(myjson.moves);
      setLoading(false);
    }
    fetchData();
  }, [])

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
      {loading ? "LOADING...": <div>
      <Header turno={turno} />

      <Board values={values} appClick={appClick} />
      <h3>Numero de movimientos: {moves}</h3>
      <Reset resetClick = {resetClick}/> </div>}
    </div>
  )
}

export default App
