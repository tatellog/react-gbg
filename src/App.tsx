import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import PokemonList from "./components/PokemonList";
import { Pokemon } from "./pokemonTypes";

export default function App() {
  const [pokemon, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = 20;

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const offset = (currentPage - 1) * itemsPerPage;
        const data = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
        );
        setPokemons(data.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(true);
      }
    };
    fetchApi();
  }, []);

  if (loading) return <div>Loading...</div>;
  console.log({ pokemons: pokemon });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <PokemonList pokemon={pokemon} />
    </div>
  );
}
