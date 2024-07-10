
import React from "react"

const initialGameBoard=[[null,null,null],[null,null,null],[null,null,null]]

export default function Gameboard({onSelectSquare,turns})
{
    // console.log(turns)
    let gameBoard= initialGameBoard;
    // console.log(gameBoard)
    for(const turn of turns){
        const {square,player}=turn
        const {row,col}=square
        // console.log(square)
        // console.log(row)
        // console.log(col)
        gameBoard[row][col]=player
    }
    // const [gameBoard,setGameBoard]= React.useState(initialGameBoard)
    // function handleSelectSquare(row,col)
    // {
        

    //     setGameBoard((prevGameBoard)=>
    //     {
    //         const newArr= [...prevGameBoard.map(innerArr=>[...innerArr])]
    //         newArr[row][col]=activePlayerSymbol
    //         return newArr
    //     });
    //     onSelectSquare();
    // }


    return <ol id='game-board'>
        {gameBoard.map((row,rowIndex)=> <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol,colIndex)=><li key={colIndex}>
                    <button 
                        onClick={()=>onSelectSquare(rowIndex,colIndex)}
                        disabled={playerSymbol!=null}>
                        {playerSymbol}
                        
                    </button>
                </li>)}
            </ol>
        </li>)}
    </ol>
}