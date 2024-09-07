import React from "react";
import { Link } from "react-router-dom";
import { Pokemon } from "../types/pokemonTypes";
import { useFavorites } from "../context/FavoritesContext";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";

interface PokemonListProps {
  pokemon: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemon }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const handleFavoriteToggle = (poke: Pokemon) => {
    if (isFavorite(poke)) {
      removeFavorite(poke);
    } else {
      addFavorite(poke);
    }
  };

  return (
    <Grid container spacing={2} p={4}>
      {pokemon.map((poke) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={poke.id}>
          <Link
            to={`/pokemon/${poke.name}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                cursor: "pointer", // Add cursor style for visual feedback
                transition: "0.3s", // Add a smooth transition for hover effect
                "&:hover": {
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Hover effect for shadow
                },
              }}
            >
              <CardMedia
                component="img"
                sx={{ height: 140, objectFit: "contain" }}
                image={poke.image}
                alt={poke.name}
              />
              <CardContent
                sx={{
                  flex: "1 0 auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography component="div" variant="h6" align="center">
                  {poke.name}
                </Typography>
                <Button
                  variant={isFavorite(poke) ? "contained" : "outlined"}
                  color="primary"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent click event from propagating to the Link
                    handleFavoriteToggle(poke);
                  }}
                  sx={{ marginTop: 1 }}
                >
                  {isFavorite(poke)
                    ? "Remove from Favorites"
                    : "Add to Favorites"}
                </Button>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default PokemonList;
