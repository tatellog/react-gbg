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
  Grid,
  Card,
  CardContent,
  CardMedia,
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

  if (loading)
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  if (error)
    return (
      <Container>
        <Alert severity="error">{error}</Alert>
        <Button variant="contained" onClick={handleRetry} sx={{ mt: 2 }}>
          Retry
        </Button>
      </Container>
    );

  return pokemonDetails ? (
    <Container sx={{ padding: "1rem" }}>
      <Typography
        variant="h3"
        gutterBottom
        align="center"
        sx={{ textTransform: "capitalize", mb: 2 }}
      >
        {pokemonDetails.name}
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={pokemonDetails.sprites.front_default}
              alt={pokemonDetails.name}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Types
              </Typography>
              <Typography variant="body1">
                {pokemonDetails.types.map((type) => type.name).join(", ")}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Abilities
              </Typography>
              <Typography variant="body1">
                {pokemonDetails.abilities
                  .map((ability) => ability.ability.name)
                  .join(", ")}
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Stats
              </Typography>
              <Box>
                {pokemonDetails.stats.map((stat) => (
                  <Typography variant="body1" key={stat.stat.name}>
                    {stat.stat.name}: {stat.base_stat}
                  </Typography>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  ) : null;
};

export default PokemonDetails;
