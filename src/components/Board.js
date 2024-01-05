import React, { useEffect, useState } from 'react'
import Square from './Square'
import "./Board.css"


const Board = () => {
 const [status, setStatus]=useState();

  return (
    <div>
        <div className='status'>{status}</div>
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

export function renderSquare(i){
    return   <Square  key={i} />;
}


export default Board