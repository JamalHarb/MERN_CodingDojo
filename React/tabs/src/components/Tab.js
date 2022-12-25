import React, {useState} from 'react'

const Tab = () => {
    const [numTabs, setNumTabs] = useState(0);
    const [msg, setMsg] = useState("");
    const tabs = [];

    for(let i=0; i<numTabs; i++){
        tabs.push({i: "Tab " + (i+1) + " content is showing."})
    }

    const tabStyle = {
        display: "flex",
        justifyContent: "space-evenly",
        width: "40%",
        marginLeft: "30%"
    }


    return (
        <div>
            <p>
                <span style={{marginRight:"1%"}}>Specify number of tabs</span>
                <input type={"number"} name="num-of-tabs" onChange={(e) => setNumTabs(e.target.valueAsNumber)}></input>
            </p>
            <div style={tabStyle}>
                {tabs.map((item, i) => <div onClick={() => setMsg(item.i)}>Tab {i+1}</div>)}
            </div>
            <div>
                {msg}
            </div>
        </div>
    )
}

export default Tab
