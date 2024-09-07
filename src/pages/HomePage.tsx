import Pagination from "../components/Pagination";
import PokemonList from "../components/PokemonList";
import SearchBar from "../components/SearchBar";
import usePokemon from "../hooks/usePokemon";
import { useState } from "react";

const LIMIT = 20;

export default function HomePage() {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const { filteredPokemonList, pokemonList, loading, error } = usePokemon(
    page,
    LIMIT,
    query
  );

  if (loading) return <div>Loading...</div>;

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className="App">
      <h1>Poke Deck</h1>
      {error && <p>{error}</p>}
      <SearchBar onSearch={setQuery} />
      <PokemonList pokemon={filteredPokemonList} />
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
