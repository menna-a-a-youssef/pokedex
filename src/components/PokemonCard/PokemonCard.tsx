import { Card, Details, Image, Name, Number } from "./PokemonCard.styles";
import { Link } from "react-router-dom";
import placeholderImage from "../../assets/pokemon-placeholder.png";

type PokemonCardProps = {
  id: number;
  name: string;
  image: string;
};

const PokemonCard = ({ id, name, image }: PokemonCardProps) => {
  return (
    <Link to={`/pokemon/${id}`} style={{ textDecoration: "none" }}>
      <Card>
        <Image
          src={image}
          alt={name}
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = placeholderImage;
          }}
        />
        <Details>
          <Name>{name}</Name>
          <Number>#{String(id).padStart(3, "0")}</Number>
        </Details>
      </Card>
    </Link>
  );
};

export default PokemonCard;
