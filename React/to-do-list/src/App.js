import React, {useState} from 'react';
import './App.css';
import CreateTask from './components/CreateTask';
import DisplayTasks from './components/DisplayTasks';

function App() {
  const [tasks, setTasks] = useState([]);

  const getTask = (task) => {
    setTasks(tasks.concat({taskName: task, completed: false}));
  }

  return (
    <div className="App">
      <CreateTask onNewTask={getTask} />
      <br></br>
      <hr></hr>
      <br></br>
      <DisplayTasks inheritedTasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
