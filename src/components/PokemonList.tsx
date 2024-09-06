import React, { FC } from "react";
import { Pokemon } from "../pokemonTypes";

interface PokemonProps {
  pokemon: Pokemon[];
}

const PokemonList: FC<PokemonProps> = ({ pokemon }) => {
  return <div>PokemonList</div>;
};

export default PokemonList;
