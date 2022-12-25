import React, {useState} from 'react'

const BoxGenerator = (props) => {
    const [color, setColor] = useState("");
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [boxes, setBoxes] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.inputBoxes(boxes.concat([{color: color, width: width, height: height}]));
        setColor("");
        setWidth("");
        setHeight("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Color</label>
                    <input type="text" onChange={e => setColor(e.target.value)} value={color}></input>
                </p>
                <p>
                    <label>Width</label>
                    <input type="number" onChange={e => setWidth(e.target.value)} value={width}></input>
                </p>
                <p>
                    <label>Height</label>
                    <input type="text" onChange={e => setHeight(e.target.value)} value={height}></input>
                </p>
                <input type="submit" value="Add"></input>
            </form>
        </div>
    )
}

export default BoxGenerator
