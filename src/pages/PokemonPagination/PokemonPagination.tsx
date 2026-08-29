import { useState } from "react";
import styled from "styled-components";

import Header from "../../components/Header/Header";
import Pagination from "../../components/Pagination/Pagination";
import PokemonGrid from "../../components/PokemonGrid/PokemonGrid";
import { usePokemonList } from "../../features/pokemon/hooks/usePokemonList";
import { mapPokemonListItem } from "../../features/pokemon/utils";

const PageWrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.pageBackgrounds.pagination};
`;

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
        <div>Loading Pokémon…</div>
      </PageWrapper>
    );
  }

  if (isError) {
    return (
      <PageWrapper>
        <Header activeView="pagination" subtitle={subtitle} />
        <div>
          Unable to load Pokémon.
          <button type="button" onClick={() => refetch()}>
            Try Again
          </button>
        </div>
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
