import "./styles.css";
import { useState } from "react";
import PokemonList from "./components/PokemonList";
import usePokemon from "./hooks/usePokemon";
import Pagination from "./components/Pagination";

const LIMIT = 20;

export default function App() {
  const [page, setPage] = useState<number>(1);
  const { pokemonList, loading, error } = usePokemon(page, LIMIT);

  if (loading) return <div>Loading...</div>;

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className="App">
      <h1>Poke Deck</h1>
      {error && <p>{error}</p>}
      {pokemonList?.results && <PokemonList pokemon={pokemonList.results} />}
      {pokemonList && (
        <Pagination
          currentPage={page}
          totalPage={Math.ceil(pokemonList.count / LIMIT)}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
