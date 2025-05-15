import { useState, useEffect } from 'react';
import axios from 'axios';

const usePokemon = (pokemonName) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      if (!pokemonName) return;
      
      setLoading(true);
      setError(null);
      
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
        setData(response.data);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [pokemonName]);

  return { data, loading, error };
};

export default usePokemon; 