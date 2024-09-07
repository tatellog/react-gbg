import React, { FC } from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Pokemon } from "../types/pokemonTypes";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="140"
        image={pokemon?.image}
        alt={pokemon?.name}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {pokemon?.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
