import React from "react"
import Log from "./components/log";

import Player from "./components/Player"
import Gameboard from "./components/Gameboard"
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialGameBoard=[[null,null,null],[null,null,null],[null,null,null]]

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
  let gameBoard= initialGameBoard;

  
  
  const activePlayer=getActivePlayer(gameTurns)
  for(const turn of gameTurns){
    const {square,player}=turn
    const {row,col}=square
    // console.log(square)
    // console.log(row)
    // console.log(col)
    gameBoard[row][col]=player
  }

  let winner=null;
  
  for (const combination of WINNING_COMBINATIONS)
  {
    const first = gameBoard[combination[0].row][combination[0].column]
    const second = gameBoard[combination[1].row][combination[1].column]
    const third =gameBoard[combination[2].row][combination[2].column]
    // console.log(first)
    // console.log(second)
    // console.log(third)
    if(
      first&&
      first===second&&
      first===third
    ){
      winner=first
      console.log(winner)
    }

  }
  const hasDraw= gameTurns.length ===9 && !winner

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
    {(winner|| hasDraw) && <GameOver winner={winner}/>}
    <Gameboard 
    onSelectSquare={handleSelectSquare} 
    board ={gameBoard}
    />
    </div>
    <Log turns={gameTurns}/>

  </main>
}

export default App
