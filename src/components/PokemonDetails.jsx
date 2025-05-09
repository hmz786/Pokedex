import React from "react";

export const PokemonDetails = ({ data }) => {
  if (!data || !data.sprites)
    return (
      <div className="pokemon-details">
        <div className="pokemonScreen">
          <img
            src="https://wallpapers.com/images/hd/question-mark-pixel-art-o7bd7dg80zs5063q.jpg"
            alt={data.name}
          /> 
          <h3>Search for a pokemon</h3>
        </div>
      </div>
    );

  return (
    <div className="pokemon-details">
      <div className="pokemonScreen">
        <img src={data.sprites.versions["generation-v"]["black-white"].animated.front_default} alt={data.name}/>
        <h3>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h3>
      </div>
    </div>
  );
};
