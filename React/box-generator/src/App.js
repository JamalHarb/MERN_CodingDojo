import './App.css';
import React, {useState} from 'react';
import BoxGenerator from './components/BoxGenerator';
import DisplayBoxes from './components/DisplayBoxes';

function App() {
  const [liftedBoxes, setLiftedBoxes] = useState([]);

  const getBoxes = (box) => {
    setLiftedBoxes(liftedBoxes.concat(box));
  }

  return (
    <div className="App">
      <BoxGenerator inputBoxes = {getBoxes} />
      <br></br>
      <DisplayBoxes inheritedBoxes = {liftedBoxes} />
    </div>
  );
}

export default App;
