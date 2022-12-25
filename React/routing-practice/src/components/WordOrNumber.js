import React from 'react'
import { useParams } from "react-router-dom";

const WordOrNumber = () => {
    const {text} = useParams();
  return (
    <div>
        {isNaN(text)?
          <p>The word is: {text}</p>
          :
          <p>The number is: {text}</p>
        }
    </div>
  )
}

export default WordOrNumber
