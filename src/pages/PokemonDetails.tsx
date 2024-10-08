import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokemonDetailsType } from "../types/pokemonTypes";
import { fetchPokemonDetails } from "../api/fetchDetails";
import {
  Container,
  Typography,
  CircularProgress,
  Alert,
  Box,
  Button,
} from "@mui/material";

const PokemonDetails: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [pokemonDetails, setPokemonDetails] =
    useState<PokemonDetailsType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState<number>(0);

  useEffect(() => {
    const getPokemonDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const details = await fetchPokemonDetails(String(name));
        setPokemonDetails(details);
      } catch {
        if (retryCount < 3) {
          setTimeout(() => setRetryCount((prev) => prev + 1), 1000);
        } else {
          setError("Failed to fetch Pokémon details after multiple attempts.");
        }
      } finally {
        setLoading(false);
      }
    };

    getPokemonDetails();
  }, [name, retryCount]);

  const handleRetry = () => {
    setRetryCount(0);
    setError(null);
  };

  if (loading) return <CircularProgress />;
  if (error)
    return (
      <Container>
        <Alert severity="error">{error}</Alert>
        <Button variant="contained" onClick={handleRetry}>
          Retry
        </Button>
      </Container>
    );

  return pokemonDetails ? (
    <Container>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ textTransform: "capitalize" }}
      >
        {pokemonDetails.name}
      </Typography>
      <Box mb={2}>
        <img
          src={pokemonDetails.sprites.front_default}
          alt={pokemonDetails.name}
          style={{ width: "200px", height: "200px" }}
        />
      </Box>
      <Typography variant="h6">
        Types: {pokemonDetails.types.map((type) => type.name).join(", ")}
      </Typography>
      <Typography variant="h6">
        Abilities:{" "}
        {pokemonDetails.abilities
          .map((ability) => ability.ability.name)
          .join(", ")}
      </Typography>
      <Typography variant="h6">Stats:</Typography>
      <ul>
        {pokemonDetails.stats.map((stat) => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </Container>
  ) : null;
};

export default PokemonDetails;
