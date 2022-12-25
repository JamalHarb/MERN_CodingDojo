import React from 'react'

const DisplayBoxes = (props) => {
    return (
        <div style={{display: "flex", justifyContent: "space-evenly", flexWrap: "wrap"}}>
            {props.inheritedBoxes.map((box, i) => <div key={i} style={{width: box.width+"px", height: box.height+"px", backgroundColor: box.color}}></div>)}
        </div>
    )
}

export default DisplayBoxes
