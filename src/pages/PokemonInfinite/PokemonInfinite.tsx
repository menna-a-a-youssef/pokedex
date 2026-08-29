import { useMemo } from "react";
import Header from "../../components/Header/Header";
import PokemonGrid from "../../components/PokemonGrid/PokemonGrid";
import PokemonListState from "../../components/PokemonListState/PokemonListState";
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
        <PokemonListState variant="loading" count={8} />
      </PageWrapper>
    );
  }

  if (isError && !hasInitialData) {
    return (
      <PageWrapper>
        <Header activeView="infinite" subtitle={subtitle} />
        <PokemonListState variant="error" onRetry={() => refetch()} />
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
          <PokemonListState
            variant="error"
            onRetry={() => fetchNextPage({ throwOnError: false })}
          />
        ) : hasNextPage ? (
          <Button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            Load More
          </Button>
        ) : null}

        <CountText>Showing {totalLoaded} Pokémon</CountText>
      </InfiniteLoading>
    </PageWrapper>
  );
};

export default PokemonInfinite;
