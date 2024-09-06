import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import PokemonList from "./components/PokemonList";
import { Pokemon } from "./types/pokemonTypes";
import usePokemon from "./hooks/usePokemon";

export default function App() {
  const [page, setPage] = useState<number>(1);
  const { pokemonList, loading, error } = usePokemon(page);

  if (loading) return <div>Loading...</div>;
  console.log({ pokemonList });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
