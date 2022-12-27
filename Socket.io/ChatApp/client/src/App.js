import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Chat from './components/Chat';
import NameForm from './components/NameForm';

function App() {
  const [name, setName] = useState("");

  const getName = liftedName => {
    setName(liftedName);
  }

  return (
    <div className="App">
      <h1>Mern Chat</h1>
      <Routes>
        <Route path='/' element={ <NameForm liftName={getName} /> } />
        <Route path='/chat' element={ <Chat name={name} /> } />
      </Routes>
    </div>
  );
}

export default App;
