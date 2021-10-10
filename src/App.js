import logo from './logo.svg';
import './App.css';
import Pokecard from './Pokecard'
import Pokedex from './Pokedex'
import Pokemon from './Pokemon'

function App() {

  return (
    <div className="App">
      <Pokedex pokemon={Pokemon}></Pokedex>
    </div>
  );
}

export default App;
