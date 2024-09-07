import React from "react";
import { Link } from "react-router-dom";
import { Pokemon } from "../types/pokemonTypes";
import { useFavorites } from "../context/FavoritesContext";

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
    <ul>
      {pokemon.map((poke) => (
        <li key={poke.id}>
          <Link to={`/pokemon/${poke.name}`}>
            <img src={poke.image} alt={poke.name} />
            {poke.name}
          </Link>
          <button onClick={() => handleFavoriteToggle(poke)}>
            {isFavorite(poke) ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;
