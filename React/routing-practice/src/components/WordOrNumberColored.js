import React from 'react'
import { useParams } from 'react-router-dom'

const WordOrNumberColored = () => {
    const { text, color1, color2 } = useParams();
    const pStyle = {
        color: color1,
        backgroundColor: color2
    }
    
    return (
        <div>
            {isNaN(text) ?
                <p style={pStyle}>The word is: {text}</p>
                :
                <p style={pStyle}>The number is: {text}</p>
            }
        </div>
    )
}

export default WordOrNumberColored
