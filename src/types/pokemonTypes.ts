export interface Pokemon {
  types: any;
  stats: any;
  id: string |number;
  name: string;
  image: string;
  url: string;
}

export interface PokemonPaginatedResponse {
  count: number; 
  previous: string | null; 
  results: Pokemon[]; 
}


export type PokemonType = {
  name: string;
};

export type PokemonAbility = {
  ability: {
    name: string;
  };
};

export type PokemonStat = {
  stat: {
    name: string;
  };
  base_stat: number;
};

export type PokemonDetailsType = {
  name: string;
  sprites: {
    front_default: string;
  };
  types: PokemonType[];
  abilities: PokemonAbility[];
  stats: PokemonStat[];
};
