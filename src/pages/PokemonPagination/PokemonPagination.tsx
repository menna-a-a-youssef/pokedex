import styled from 'styled-components';

import Header from '../../components/Header/Header';
import Pagination from '../../components/Pagination/Pagination';
import PokemonGrid from '../../components/PokemonGrid/PokemonGrid';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.pageBackgrounds.pagination};
`;

const mockPokemon = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  name: [
    'bulbasaur',
    'ivysaur',
    'venusaur',
    'charmander',
    'charmeleon',
    'charizard',
    'squirtle',
    'wartortle',
    'blastoise',
    'caterpie',
    'metapod',
    'butterfree',
    'weedle',
    'kakuna',
    'beedrill',
    'pidgey',
    'pidgeotto',
    'pidgeot',
    'rattata',
    'raticate',
  ][index],
  image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
}));

type PokemonPaginationProps = {
  subtitle: string;
};

const PokemonPagination = ({ subtitle }: PokemonPaginationProps) => {
  return (
    <PageWrapper>
      <Header activeView="pagination" subtitle={subtitle} />
      <PokemonGrid pokemon={mockPokemon} />
      <Pagination />
    </PageWrapper>
  );
};

export default PokemonPagination;