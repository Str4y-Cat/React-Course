import React from "react"
import Log from "./components/log";

import Player from "./components/Player"
import Gameboard from "./components/Gameboard"
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const INITIAL_GAME_BOARD=[[null,null,null],[null,null,null],[null,null,null]]
const PLAYERS=
{
  X:'Player 1',
  O:'Player 2'
}

function getActivePlayer(gameTurns)
{
  let currentPlayer='X'
  if(gameTurns.length>0&&gameTurns[0].player=='X')
    {
      currentPlayer="O"
    }
    // console.log(currentPlayer)
  return currentPlayer;
}

function deriveWinner(gameBoard,players)
{
  let winner=null;
  // console.log(players)
  // console.log(gameBoard)
  for (const combination of WINNING_COMBINATIONS)
  {
    const first = gameBoard[combination[0].row][combination[0].column]
    const second = gameBoard[combination[1].row][combination[1].column]
    const third =gameBoard[combination[2].row][combination[2].column]

    if(
      first&&
      first===second&&
      first===third
    ){
      winner=players[first]
      console.log(winner)
    }
  }
  return winner

}

function deriveGameBoard(gameTurns)
{
  let gameBoard= [...INITIAL_GAME_BOARD.map(each=>[...each])];
  for(const turn of gameTurns){
    const {square,player}=turn
    const {row,col}=square
    // console.log(square)
    // console.log(row)
    // console.log(col)
    gameBoard[row][col]=player
  }
  return gameBoard
}

function App() {
  const [players,setPlayers]=React.useState(PLAYERS)
  // const [activePlayer,setActivePlayer]=React.useState('X');
  const [gameTurns,setGameTurns]=React.useState([])
  function onReset()
  {
    setGameTurns([])
  }
  function handlePlayerNameChange(symbol,name)
  {
    const copy= {...players}
    copy[symbol]=name
    console.log(copy)
    setPlayers(copy)
  }

  
  const activePlayer=getActivePlayer(gameTurns)
  const gameBoard= deriveGameBoard(gameTurns)

  const winner = deriveWinner(gameBoard,players)
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
      <Player onChangeName={handlePlayerNameChange} isSelected={(activePlayer=='X')}  initialName={"Player 1"} symbol={"X"}/>
      <Player onChangeName={handlePlayerNameChange} isSelected={(activePlayer=='O')} initialName={"Player 2"} symbol={"O"}/>

      
    </ol>
    {(winner|| hasDraw) && <GameOver winner={winner} onReset={onReset}/>}
    <Gameboard 
    onSelectSquare={handleSelectSquare} 
    board ={gameBoard}
    />
    </div>
    <Log turns={gameTurns}/>

  </main>
}

export default App
