import Header from "../../components/Header/Header";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";
import PokemonGrid from "../../components/PokemonGrid/PokemonGrid";
import { PageWrapper } from "./PokemonInfinite.styles";

const mockPokemon = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  name: [
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "charmander",
    "charmeleon",
    "charizard",
    "squirtle",
    "wartortle",
    "blastoise",
    "caterpie",
    "metapod",
    "butterfree",
    "weedle",
    "kakuna",
    "beedrill",
    "pidgey",
    "pidgeotto",
    "pidgeot",
    "rattata",
    "raticate",
  ][index],
  image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
}));

type PokemonInfiniteProps = {
  subtitle: string;
};

const PokemonInfinite = ({ subtitle }: PokemonInfiniteProps) => {
  return (
    <PageWrapper>
      <Header activeView="infinite" subtitle={subtitle} />
      <PokemonGrid pokemon={mockPokemon} />
      <LoadMoreButton />
    </PageWrapper>
  );
};

export default PokemonInfinite;
