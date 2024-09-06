import axios from "axios";
import { useEffect, useState } from "react";
import { Pokemon } from "../types/pokemonTypes";

const usePokemon = (page: number) => {

  const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

    useEffect(() => {
      const fetchApi = async () => {
      setLoading(true);
      setError("Error")
      try {
        const limit = 20;
        const offset = (page - 1) * limit;
        const result = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`); 
        setPokemonList(result?.data )
        
      } catch (error) {
        setError("Failed to fetch Pokemon.")
      } finally {
        setLoading(false)
      }
      };
      fetchApi();
    }, [page]);

    return { pokemonList, loading, error}
};

export default usePokemon;
