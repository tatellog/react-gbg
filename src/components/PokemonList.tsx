import React, { FC } from "react";
import { Pokemon } from "../types/pokemonTypes";
import PokemonCard from "./PokemonCard";
import "../../src/styles.css";

interface PokemonProps {
  pokemon: Pokemon[];
}

const PokemonList: FC<PokemonProps> = ({ pokemon }) => {
  console.log({ pokemon });
  return (
    <div className="pokemon-grid">
      {pokemon.map((item) => (
        <PokemonCard key={item.name} pokemon={item} />
      ))}
    </div>
  );
};

export default PokemonList;
