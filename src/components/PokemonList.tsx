import React, { FC } from "react";
import { Pokemon } from "../types/pokemonTypes";
import PokemonCard from "./PokemonCard";

interface PokemonProps {
  pokemon: Pokemon[];
}

const PokemonList: FC<PokemonProps> = ({ pokemon }) => {
  console.log({ pokemon });
  return (
    <div>
      {pokemon.map((item) => (
        <PokemonCard key={item.name} pokemon={item} />
      ))}
    </div>
  );
};

export default PokemonList;
