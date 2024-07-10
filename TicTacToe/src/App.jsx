import React from "react"
import Log from "./components/log";

import Player from "./components/Player"
import Gameboard from "./components/Gameboard"
import { WINNING_COMBINATIONS } from "./winning-combinations";

function getActivePlayer(gameTurns)
{
  let currentPlayer='X'
  if(gameTurns.length>0&&gameTurns[0].player=='X')
    {
      currentPlayer="O"
    }
  return currentPlayer;
}

function App() {
  // const [activePlayer,setActivePlayer]=React.useState('X');
  const [gameTurns,setGameTurns]=React.useState([])
  
  const activePlayer=getActivePlayer(gameTurns)

  function handleSelectSquare(rowIndex,colIndex)
  {
    // setActivePlayer((active)=>
    // {
    //  return( active=="X")? "O":"X"
    // })
    setGameTurns(prevTurns => 
    {
      const currentPlayer=getActivePlayer(prevTurns)
      const updatedTurns=[{square:{row:rowIndex,col:colIndex},player:currentPlayer},...prevTurns]
      return updatedTurns
    }
    );
  }
  return <main>
    <div id="game-container">
    <ol id='players' className="highlight-player">
      <Player isSelected={(activePlayer=='X')}  initialName={"joe"} symbol={"x"}/>
      <Player  isSelected={(activePlayer=='O')} initialName={"Jane"} symbol={"o"}/>

      
    </ol>
    <Gameboard 
    onSelectSquare={handleSelectSquare} 
    turns ={gameTurns}
    />
    </div>
    <Log turns={gameTurns}/>

  </main>
}

export default App
