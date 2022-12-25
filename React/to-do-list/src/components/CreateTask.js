import React, {useState} from 'react'

const CreateTask = (props) => {
    const [taskName, setTaskName] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        props.onNewTask(taskName);
        setTaskName("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={e => setTaskName(e.target.value)} value={taskName}></input>
                <input type={"submit"} value="Add"></input>
            </form>
            
        </div>
    )
}

export default CreateTask
