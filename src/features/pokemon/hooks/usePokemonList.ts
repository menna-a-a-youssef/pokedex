import { useQuery } from "@tanstack/react-query";

import { getPokemonList } from "../api/pokemonApi";

const DEFAULT_LIMIT = 20;

type UsePokemonListParams = {
  page: number;
  limit?: number;
};

export const usePokemonList = ({
  page,
  limit = DEFAULT_LIMIT,
}: UsePokemonListParams) => {
  const offset = (page - 1) * limit;

  return useQuery({
    queryKey: ["pokemon", "list", page, limit],
    queryFn: ({ signal }) =>
      getPokemonList({
        limit,
        offset,
        signal,
      }),
  });
};
