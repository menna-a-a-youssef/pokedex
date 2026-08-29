import type { Pokemon, PokemonListResponse } from "../types";

const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";

const fetchApi = async <T>(
  endpoint: string,
  signal?: AbortSignal,
): Promise<T> => {
  const response = await fetch(`${POKEAPI_BASE_URL}${endpoint}`, { signal });

  if (!response.ok) {
    throw new Error(`PokéAPI request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
};

export const getPokemonList = async ({
  limit = 20,
  offset = 0,
  signal,
}: {
  limit?: number;
  offset?: number;
  signal?: AbortSignal;
}): Promise<PokemonListResponse> => {
  return fetchApi<PokemonListResponse>(
    `/pokemon?limit=${limit}&offset=${offset}`,
    signal,
  );
};

export const getPokemon = async (
  id: number | string,
  signal?: AbortSignal,
): Promise<Pokemon> => {
  return fetchApi<Pokemon>(`/pokemon/${id}`, signal);
};
