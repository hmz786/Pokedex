import React, { useEffect, useState } from "react";
import axios from "axios";

const typeTrad = {
  fire: "feu",
  water: "eau",
  grass: "plante",
  electric: "electrik",
  poison: "poison",
  flying: "vol",
  bug: "insecte",
  normal: "normal",
  ground: "sol",
  rock: "roche",
  ghost: "spectre",
  dark: "tenebres",
  steel: "acier",
  fairy: "fee",
  fighting: "combat",
  ice: "glace",
  dragon: "dragon"
};

export const PokemonDetails = ({ data }) => {
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (data && data.id) {
      axios.get(`https://pokeapi.co/api/v2/pokemon-species/${data.id}/`).then(res => {
        const entry = res.data.flavor_text_entries.find(
          e => e.language.name === "fr"
        );
        setDescription(entry ? entry.flavor_text.replace(/\f|\n/g, " ") : "");
      });
    }
  }, [data]);

  if (!data || !data.sprites)
    return (
      <div className="pokemon-details">
        <div className="pokemonScreen">
          <img
            src="https://wallpapers.com/images/hd/question-mark-pixel-art-o7bd7dg80zs5063q.jpg"
            alt="question mark"
          /> 
          <h3>Search for a pokemon</h3>
        </div>
      </div>
    );

  return (
    <div className="pokemon-details">
      <div className="pokemonScreen">
        <img 
          src={data.sprites.versions["generation-v"]["black-white"].animated.front_default || data.sprites.front_default} 
          alt={data.name}
        />
        <h3>{data.name.charAt(0).toUpperCase() + data.name.slice(1)} <span style={{color:'#ffc107'}}>#{data.id}</span></h3>
        <div className="pokemon-types">
          {data.types.map(t => {
            const typeEn = t.type.name;
            const typeFr = typeTrad[typeEn] || typeEn;
            return (
              <span key={typeEn} className={`pokemon-type ${typeFr}`}>{typeFr.charAt(0).toUpperCase() + typeFr.slice(1)}</span>
            );
          })}
        </div>
        <div className="pokemon-infos">
          <b>Taille :</b> {data.height / 10} m<br/>
          <b>Poids :</b> {data.weight / 10} kg
        </div>
        <div className="pokemon-description">
          {description}
        </div>
      </div>
    </div>
  );
};
