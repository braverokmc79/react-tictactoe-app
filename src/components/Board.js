import React, { useEffect, useState } from 'react'
import Square from './Square'
import "./Board.css"


const Board = () => {
const [status, setStatus]=useState(0);

 function  renderSquare(i){
    return   <Square  value={i}  />;
 }

  return (
    <div>
        <div>{status}</div>

        <div className='board-row'>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className='board-row'>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className='board-row'>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
    </div>
  )
}



export default Board