import React from 'react'

const DisplayTasks = (props) => {
    const chnageCompleted = (index) => {
        const update = props.inheritedTasks.map((items, i) => {
            if (index === i) {
                items.completed = !items.completed;
            }
            return items;
        })
        props.setTasks(update);
    }

    const deleteItems = (index) => {
        const update = props.inheritedTasks.filter((items, i) => {
            return i !== index;
        })
        props.setTasks(update);
    }

    return (
        <div>
            {props.inheritedTasks.map((task, i) => {
                if (task.completed) {
                    return (
                        <del>
                            <div>
                                <input type={"checkbox"} checked={task.completed} onChange={() => chnageCompleted(i)}></input>
                                {task.taskName}
                                <button onClick={() => deleteItems(i)}>Delete</button>
                            </div>
                        </del>
                    )
                }
                else {
                    return (
                        <div>
                            <input type={"checkbox"} checked={task.completed} onChange={() => chnageCompleted(i)}></input>
                            {task.taskName}
                            <button onClick={() => deleteItems(i)}>Delete</button>
                        </div>

                    )
                }
            })}
        </div>
    )
}

export default DisplayTasks
