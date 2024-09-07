import { useState, useEffect } from "react";
import axios from "axios";
import { Pokemon, PokemonPaginatedResponse } from "../types/pokemonTypes";

const usePokemon = (page: number, limit: number) => {
  const [pokemonList, setPokemonList] = useState<PokemonPaginatedResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      setError(null);
      try {
        const offset = (page - 1) * limit;
        const response = await axios.get<PokemonPaginatedResponse>(
          `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        );

        const updatedResults = response.data.results.map((pokemon: Pokemon) => {
          console.log({pokemon})
          const pokemonId = pokemon?.url.split('/').filter(Boolean).pop(); // Extract the Pokémon ID from the URL
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

          return {
            ...pokemon,
            image: imageUrl, // Add the image URL directly
          };
        });

        setPokemonList({
          ...response.data,
          results: updatedResults, 
        });
      } catch (err) {
        setError("Error fetching Pokémon data.");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [page, limit]);

  return { pokemonList, loading, error };
};

export default usePokemon;
