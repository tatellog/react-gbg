import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokemonDetailsType } from "../types/pokemonTypes";
import { fetchPokemonDetails } from "../api/fetchDetails";

const PokemonDetails: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [pokemonDetails, setPokemonDetails] =
    useState<PokemonDetailsType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPokemonDetails = async () => {
      setLoading(true);
      try {
        const details = await fetchPokemonDetails(String(name));
        setPokemonDetails(details);
      } catch {
        setError("Failed to fetch Pokémon details.");
      } finally {
        setLoading(false);
      }
    };

    getPokemonDetails();
  }, [name]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return pokemonDetails ? (
    <div>
      <h1>{pokemonDetails.name}</h1>
      <img
        src={pokemonDetails.sprites.front_default}
        alt={pokemonDetails.name}
      />
      <p>
        <strong>Types:</strong>{" "}
        {pokemonDetails.types.map((type) => type.name).join(", ")}
      </p>
      <p>
        <strong>Abilities:</strong>{" "}
        {pokemonDetails.abilities
          .map((ability) => ability.ability.name)
          .join(", ")}
      </p>
      <p>
        <strong>Stats:</strong>
      </p>
      <ul>
        {pokemonDetails.stats.map((stat) => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

export default PokemonDetails;
