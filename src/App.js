import { useState } from "react";
import "./App.css"
import Board from "./components/Board";


function App() {

 const [history, setHistory] = useState([{squares:Array(9).fill(null)}]) ;
 const [xIsNext, setXIsNext] = useState(true);
 const [stepNumber, setStepNumber] = useState(0) ;

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

   //const current=history[stepNumber];
   const current=history[history.length-1];
   const winner =calculateWinner(current.squares);

    let status;    
    if(winner){
        status=`Winner is ${winner}`;
    }else{
        status=`Next Player : ${xIsNext? 'X' : 'O'}`;
    }


   const handleClick=(i)=>{ 
    // const newHistory= history.slice(0,stepNumber+1);
    // const newCurrent=newHistory[stepNumber.length-1];   
    // const newSquares=newCurrent.squares.slice();

      //slice 깊은 복사
      const newSquares=current.squares.slice();
      if(calculateWinner(newSquares) || newSquares[i]){
           return;
      }

      newSquares[i]=xIsNext ? 'X' :'O';
      //setHistory([...newHistory, {squares:newSquares}]);
      setHistory([...history, {squares:newSquares}]);
      setXIsNext(prev=>!prev);
     // setStepNumber(newHistory.length);  
  }; 

  const moves=history.map((step, move)=>{
    const desc =move ? 'Go to move #' + move : 'Go to game start';
    
    return (
      <li key={move} ><button  className="move-button"   onClick={()=>jumpTo(move)}>{desc}</button></li>
    )
  }); 

  const jumpTo=(step)=>{
    setStepNumber(step);
    setXIsNext((step%2)===0);

    const updateHistory=  history.filter((square, move) => {
      if(move <=step){
         return square;
      }
    });
    setHistory(updateHistory);
  }


  return (
    <div className="game">
                    
        <Board  squares={current.squares}  onClick={(i)=>handleClick(i)}     />
      

        <div className="game-info">
          {/* game-info */}
          <div>{status}</div>

          <ol style={{listStyle:"none"}}>{moves}</ol>        
        </div>
    </div>
  );
}

export default App;
