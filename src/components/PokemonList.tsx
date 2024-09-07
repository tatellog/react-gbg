import React from "react";
import { Link } from "react-router-dom";
import { Pokemon } from "../types/pokemonTypes";

interface PokemonListProps {
  pokemon: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemon }) => {
  return (
    <ul>
      {pokemon.map((poke) => (
        <li key={poke.name}>
          <Link to={`/pokemon/${poke.name}`}>
            <img src={poke.image} alt={poke.name} />
            {poke.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;
