import React, { useState, useEffect } from "react";
import axios from "axios";
import { PokemonDetails } from "./PokemonDetails";

export const PokedexBook = () => {
  const [search, setSearch] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    // Récupérer la liste des 151 premiers Pokémon
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151").then(res => {
      setPokemonList(res.data.results);
      setFilteredList(res.data.results);
    });
  }, []);

  useEffect(() => {
    if (search === "") {
      setFilteredList(pokemonList);
    } else {
      setFilteredList(
        pokemonList.filter(p => p.name.toLowerCase().startsWith(search.toLowerCase()))
      );
    }
  }, [search, pokemonList]);

  useEffect(() => {
    if (selectedPokemon) {
      axios.get(selectedPokemon.url).then(res => setSelectedData(res.data));
    } else {
      setSelectedData(null);
    }
  }, [selectedPokemon]);

  return (
    <div className="pokedex-book pokedex-animated">
      <div className="pokedex-page pokedex-left">
        <h2>Recherche</h2>
        <input
          type="text"
          placeholder="Nom du Pokémon"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <ul className="pokemon-list">
          {filteredList.map(p => (
            <li
              key={p.name}
              className={selectedPokemon && selectedPokemon.name === p.name ? "selected" : ""}
              onClick={() => setSelectedPokemon(p)}
            >
              {p.name.charAt(0).toUpperCase() + p.name.slice(1)}
            </li>
          ))}
        </ul>
      </div>
      <div className="pokedex-page pokedex-right">
        {selectedData ? (
          <PokemonDetails data={selectedData} />
        ) : (
          <div className="pokemon-details">
            <div className="pokemonScreen">
              <img
                src="https://wallpapers.com/images/hd/question-mark-pixel-art-o7bd7dg80zs5063q.jpg"
                alt="question mark"
              />
              <h3>Sélectionne un Pokémon</h3>
            </div>
          </div>
        )}
      </div>
      <h1 className="signature">MADE BY HAMZA</h1>
    </div>
  );
}; 