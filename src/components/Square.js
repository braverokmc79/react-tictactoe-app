import React, { useEffect, useState } from 'react'
import "./Square.css"

const Square = ({value}) => {
  const [squareValue, setSquareValue]=useState(null);

  useEffect(()=>{
    setSquareValue(value);
  },[value]);
  
  // function updateState(){
  //   setSquareValue({v:value, v2:'x'});
  //   console.log("statusV :",squareValue);
  // }

  return (
    <button className='square' onClick={()=>setSquareValue('x')}>
        {squareValue}    
    </button>
  )
}

export default Square