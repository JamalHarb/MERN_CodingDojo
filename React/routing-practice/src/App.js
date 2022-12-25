import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import WordOrNumber from './components/WordOrNumber';
import WordOrNumberColored from './components/WordOrNumberColored';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/:text' element={<WordOrNumber />} />
        <Route path='/:text/:color1/:color2' element={<WordOrNumberColored />} />
      </Routes>
    </div>
  );
}

export default App;
