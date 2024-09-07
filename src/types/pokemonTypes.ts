export interface Pokemon {
  name: string;
  image: string;
  url: string;
}

export interface PokemonPaginatedResponse {
  count: number; 
  previous: string | null; 
  results: Pokemon[]; 
}
