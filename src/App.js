import "./App.css";
import Horloge from "./components/Horloge";
import useFetch from "./hooks/useFetch";
import { useState } from "react";
import { PokemonDetails } from "./components/PokemonDetails";

function App() {
  const [nom, setNom] = useState("");
  const { data } = useFetch("https://pokeapi.co/api/v2/pokemon/" + nom);

  return (
    <div className="App">
      <Horloge />
      <div className="pokedex-content">
        {data && <PokemonDetails data={data} />}
        <div className='pokedexForm'>

            <div className='decoration'>
              <div className='markModel'>
                <p> Hamza </p>
              </div>
              <div className='sensors'>
                <div className='Camera'></div>
                <div className='lightBtns'>
                  <span></span>
                  <span></span>
                </div>
            </div>
              </div>
        </div>
        <form>
          <label>Name or Number of pokemon</label>
          <div className="input-group">
            <input onChange={(e) => setNom(e.target.value.toLowerCase())} type='text' placeholder='Search for a pokemon' />
          </div>
        </form>
        <div className="errorHolder">
              <p>Nom ou Numéro</p>
              <p>{nom}</p>
            </div>
      </div>
    </div>
  );
}

export default App;
