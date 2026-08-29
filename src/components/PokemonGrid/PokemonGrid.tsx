import PokemonCard from '../PokemonCard/PokemonCard';
import { Grid } from './PokemonGrid.styles';

type Pokemon = {
  id: number;
  name: string;
  image: string;
};

type PokemonGridProps = {
  pokemon: Pokemon[];
};

const formatName = (name: string) =>
  name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

const PokemonGrid = ({ pokemon }: PokemonGridProps) => {
  return (
    <Grid>
      {pokemon.map((item) => (
        <PokemonCard
          key={item.id}
          id={item.id}
          name={formatName(item.name)}
          image={item.image}
        />
      ))}
    </Grid>
  );
};

export default PokemonGrid;