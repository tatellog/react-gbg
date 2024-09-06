import React, { FC } from "react";
import { Pokemon } from "../types/pokemonTypes";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div>
      <img src={pokemon?.image} />
      <h3>{pokemon?.name}</h3>
    </div>
  );
};
export default PokemonCard;
