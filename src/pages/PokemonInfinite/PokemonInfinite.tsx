import { useMemo } from "react";
import Header from "../../components/Header/Header";
import PokemonGrid from "../../components/PokemonGrid/PokemonGrid";
import PokemonListSkeleton from "../../components/PokemonListSkeleton/PokemonListSkeleton";
import { usePokemonInfiniteList } from "../../features/pokemon/hooks/usePokemonInfiniteList";
import { mapPokemonListItem } from "../../features/pokemon/utils";
import {
  CountText,
  InfiniteLoading,
  LoadingRow,
  PageWrapper,
  Spinner,
} from "./PokemonInfinite.styles";
import Button from "../../components/Button/Button";
import ErrorState from "../../components/ErrorState/ErrorState";

type PokemonInfiniteProps = {
  subtitle: string;
};

const PokemonInfinite = ({ subtitle }: PokemonInfiniteProps) => {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = usePokemonInfiniteList();

  const pokemon = useMemo(
    () =>
      data?.pages.flatMap((page) => page.results.map(mapPokemonListItem)) ?? [],
    [data],
  );

  const hasInitialData = Boolean(data && data.pages.length > 0);
  const totalLoaded = pokemon.length;

  if (isLoading) {
    return (
      <PageWrapper>
        <Header activeView="infinite" subtitle={subtitle} />
        <PokemonListSkeleton count={8} />
      </PageWrapper>
    );
  }

  if (isError && !hasInitialData) {
    return (
      <PageWrapper>
        <Header activeView="infinite" subtitle={subtitle} />
        <ErrorState onRetry={refetch} />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Header activeView="infinite" subtitle={subtitle} />
      <PokemonGrid pokemon={pokemon} />
      <InfiniteLoading>
        {isFetchingNextPage ? (
          <LoadingRow>
            <Spinner aria-label="Loading more Pokémon" />
            <span>Loading more Pokémon...</span>
          </LoadingRow>
        ) : isError && hasInitialData ? (
          <ErrorState onRetry={() => fetchNextPage({ throwOnError: false })} />
        ) : hasNextPage ? (
          <Button onClick={() => fetchNextPage()}>Load More</Button>
        ) : null}

        <CountText>Showing {totalLoaded} Pokémon</CountText>
      </InfiniteLoading>
    </PageWrapper>
  );
};

export default PokemonInfinite;
