import {
  Card,
  Details,
  Image,
  Name,
  Number,
} from './PokemonCard.styles';

type PokemonCardProps = {
  id: number;
  name: string;
  image: string;
};

const PokemonCard = ({
  id,
  name,
  image,
}: PokemonCardProps) => {
  return (
    <Card>
      <Image src={image} alt={name} />
      <Details>
        <Name>{name}</Name>
        <Number>#{String(id).padStart(3, '0')}</Number>
      </Details>
    </Card>
  );
};

export default PokemonCard;