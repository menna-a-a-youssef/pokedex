import ErrorState from "../../components/ErrorState/ErrorState";
import Header from "../../components/Header/Header";
import Pagination from "../../components/Pagination/Pagination";
import PokemonGrid from "../../components/PokemonGrid/PokemonGrid";
import PokemonListSkeleton from "../../components/PokemonListSkeleton/PokemonListSkeleton";
import { usePokemonList } from "../../features/pokemon/hooks/usePokemonList";
import { mapPokemonListItem } from "../../features/pokemon/utils";
import { PageWrapper } from "./PokemonPagination.styles";
import { useSearchParams } from "react-router-dom";

type PokemonPaginationProps = {
  subtitle: string;
};

const PokemonPagination = ({ subtitle }: PokemonPaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageParam = Number(searchParams.get("page"));
  const page = Number.isInteger(pageParam) && pageParam > 0 ? pageParam : 1;

  const { data, isLoading, isError, refetch } = usePokemonList({ page });

  const pokemon = data?.results.map(mapPokemonListItem) ?? [];

  const totalPages = Math.ceil((data?.count ?? 0) / 20);

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: String(newPage) });
  };

  if (isLoading) {
    return (
      <PageWrapper>
        <Header activeView="pagination" subtitle={subtitle} />
        <PokemonListSkeleton count={8} />
      </PageWrapper>
    );
  }

  if (isError) {
    return (
      <PageWrapper>
        <Header activeView="pagination" subtitle={subtitle} />
        <ErrorState onRetry={refetch} />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Header activeView="pagination" subtitle={subtitle} />

      <PokemonGrid pokemon={pokemon} />

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        currentItemCount={pokemon.length}
        onPageChange={handlePageChange}
      />
    </PageWrapper>
  );
};

export default PokemonPagination;
