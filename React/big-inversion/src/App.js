import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Jamal" lastName="Harb" age={30} hairColor="brown" />
      <PersonCard firstName="Laith" lastName="Barq" age={23} hairColor="brown" />
    </div>
  );
}

export default App;
