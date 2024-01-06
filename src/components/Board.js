import React, { useState } from 'react'
import Square from './Square'
import "./Board.css"


export default function Board(){
    const [squares, setSquares]=useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const status=`Next Player : ${xIsNext ? 'X' : 'O'}`;

    const handleClick=(no)=>{ 
        //slice 깊은 복사
        const newSquares=squares.slice();
        newSquares[no]=xIsNext ? 'X' :'O';
        setSquares(newSquares);
        setXIsNext(prev=>!prev);
    };


    const  renderSquares=(i)=>{          
        return   <Square value={squares[i]} onClick={()=>handleClick(i)}   />;
    }


 return (
    <div>
        <div className='status'>{status}</div>

        <div className='board-row'>
            {renderSquares(0)}
            {renderSquares(1)}
            {renderSquares(2)}
        </div>
        <div className='board-row'>
            {renderSquares(3)}
            {renderSquares(4)}
            {renderSquares(5)}
        </div>
        <div className='board-row'>
            {renderSquares(6)}
            {renderSquares(7)}
            {renderSquares(8)}
        </div>
    </div>
  )
}



