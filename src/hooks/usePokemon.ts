import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Pokemon, PokemonPaginatedResponse } from "../types/pokemonTypes";

const usePokemon = (
  page: number,
  limit: number,
  query: string,
  sortBy: string,
  filterByType: string
) => {
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

        const updatedResults = await Promise.all(response.data.results.map(async (pokemon) => {
          const pokemonId = pokemon.url.split('/').filter(Boolean).pop(); // Extract the Pokémon ID from the URL
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

          const detailsResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
          const pokemonDetails = detailsResponse.data;

          return {
            ...pokemon,
            image: imageUrl,
            types: pokemonDetails.types.map((typeInfo: any) => typeInfo.type.name),
            stats: pokemonDetails.stats.reduce((acc: any, stat: any) => {
              acc[stat.stat.name] = stat.base_stat;
              return acc;
            }, {}),
          };
        }));

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

  const filteredAndSortedPokemonList = useMemo(() => {
    if (!pokemonList?.results) return [];
    
    const filteredList = pokemonList.results.filter(pokemon => {
      const matchesName = pokemon.name.toLowerCase().includes(query.toLowerCase());
      const matchesType = filterByType ? pokemon.types.includes(filterByType) : true;
      return matchesName && matchesType;
    });

    const sortedList = [...filteredList].sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === "hp") {
        return (b.stats.hp || 0) - (a.stats.hp || 0);
      }
      if (sortBy === "attack") {
        return (b.stats.attack || 0) - (a.stats.attack || 0);
      }
      if (sortBy === "defense") {
        return (b.stats.defense || 0) - (a.stats.defense || 0);
      }
      return 0; // Default sorting (by name)
    });

    return sortedList;
  }, [query, filterByType, sortBy, pokemonList]);

  return { pokemonList, filteredPokemonList: filteredAndSortedPokemonList, loading, error };
};

export default usePokemon;
