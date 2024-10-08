import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Alert,
} from "@mui/material";
import Pagination from "../components/Pagination";
import PokemonList from "../components/PokemonList";
import SearchBar from "../components/SearchBar";
import usePokemon from "../hooks/usePokemon";
import FilterComponent from "../components/Filter";
import { usePokemonFilter } from "../context/PokemonFilterContext";

const LIMIT = 20;

const HomePage: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const { sortBy, filterByType } = usePokemonFilter();
  const { filteredPokemonList, pokemonList, loading, error } = usePokemon(
    page,
    LIMIT,
    query,
    sortBy,
    filterByType
  );

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Poke Deck
      </Typography>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      <SearchBar onSearch={setQuery} />
      <FilterComponent />
      <PokemonList pokemon={filteredPokemonList} />
      {pokemonList && (
        <Box mt={2}>
          <Pagination
            currentPage={page}
            totalPage={Math.ceil(pokemonList.count / LIMIT)}
            onPageChange={handlePageChange}
          />
        </Box>
      )}
    </Container>
  );
};

export default HomePage;
