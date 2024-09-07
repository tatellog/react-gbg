import axios from 'axios';
import { PokemonAbility, PokemonDetailsType, PokemonStat } from '../types/pokemonTypes';

export const fetchPokemonDetails = async (name: string): Promise<PokemonDetailsType> => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = response.data;

  return {
    name: data.name,
    sprites: {
      front_default: data.sprites.front_default
    },
    types: data.types.map((t: { type: { name: string } }) => ({
      name: t.type.name
    })),
    abilities: data.abilities.map((a: PokemonAbility) => ({
      ability: {
        name: a.ability.name
      }
    })),
    stats: data.stats.map((s: PokemonStat) => ({
      stat: {
        name: s.stat.name
      },
      base_stat: s.base_stat
    })),
  };
};
