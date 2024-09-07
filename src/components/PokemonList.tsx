import React from "react";
import { Pokemon } from "../types/pokemonTypes";
import PokemonCard from "./PokemonCard";
import "../../src/styles.css";

interface PokemonListProps {
  pokemon: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemon }) => {
  return (
    <div className="pokemon-list">
      {pokemon.map((p: Pokemon) => (
        <div key={p.name} className="pokemon-item">
          <h3>{p.name}</h3>
          <img src={p.image} alt={p.name} />
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
