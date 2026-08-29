import { useState } from "react";

import Header from "../../components/Header/Header";
import Pagination from "../../components/Pagination/Pagination";
import PokemonGrid from "../../components/PokemonGrid/PokemonGrid";
import PokemonListState from "../../components/PokemonListState/PokemonListState";
import { usePokemonList } from "../../features/pokemon/hooks/usePokemonList";
import { mapPokemonListItem } from "../../features/pokemon/utils";
import { PageWrapper } from "./PokemonPagination.styles";

type PokemonPaginationProps = {
  subtitle: string;
};

const PokemonPagination = ({ subtitle }: PokemonPaginationProps) => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, refetch } = usePokemonList({ page });

  const pokemon = data?.results.map(mapPokemonListItem) ?? [];

  if (isLoading) {
    return (
      <PageWrapper>
        <Header activeView="pagination" subtitle={subtitle} />
        <PokemonListState variant="loading" count={8} />
      </PageWrapper>
    );
  }

  if (isError) {
    return (
      <PageWrapper>
        <Header activeView="pagination" subtitle={subtitle} />
        <PokemonListState variant="error" onRetry={() => refetch()} />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Header activeView="pagination" subtitle={subtitle} />
      <PokemonGrid pokemon={pokemon} />
      <Pagination
        currentPage={page}
        totalPages={Math.ceil((data?.count ?? 0) / 20)}
        currentItemCount={pokemon.length}
        onPageChange={setPage}
      />
    </PageWrapper>
  );
};

export default PokemonPagination;
