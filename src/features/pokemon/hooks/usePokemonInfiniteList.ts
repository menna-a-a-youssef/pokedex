import { useInfiniteQuery } from "@tanstack/react-query";

import { getPokemonList } from "../api/pokemonApi";

const DEFAULT_LIMIT = 20;

type UsePokemonInfiniteListParams = {
  limit?: number;
};

export const usePokemonInfiniteList = ({
  limit = DEFAULT_LIMIT,
}: UsePokemonInfiniteListParams = {}) => {
  return useInfiniteQuery({
    queryKey: ["pokemon", "list", "infinite", limit],
    queryFn: ({ pageParam = 0, signal }) =>
      getPokemonList({
        limit,
        offset: pageParam,
        signal,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const fetchedCount = allPages.reduce(
        (total, page) => total + page.results.length,
        0,
      );

      return fetchedCount < lastPage.count ? fetchedCount : undefined;
    },
  });
};
