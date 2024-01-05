import React from 'react'
import "./Square.css"

const Square = ({value}) => {
  return (
    <button className='square'>
        {value}    
    </button>
  )
}

export default Square