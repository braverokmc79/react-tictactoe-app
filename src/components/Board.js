import React, { useState } from 'react'
import Square from './Square'
import "./Board.css"


export default function Board(){
    const [squares, setSquares]=useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    //const status=`Next Player : ${xIsNext ? 'X' : 'O'}`;


    const calculateWinner=(squares)=>{
        const lines=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]            
        ]
        for(let i=0; i<lines.length; i++){
            const [a,b,c]=lines[i];
            if(squares[a]&&squares[a]===squares[b]&&squares[a]===squares[c]){
                return squares[a];
            }
        }
        
        return null;
    }


    const winner =calculateWinner(squares);
    let status;
    if(winner){
        status=`Winner is ${winner}`;
    }else{
        status=`Next Player : ${xIsNext? 'X' : 'O'}`;
    }



    const handleClick=(no)=>{ 
        //slice 깊은 복사
        const newSquares=squares.slice();

        if(calculateWinner(newSquares) || newSquares[no]){
             return;
        }

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



