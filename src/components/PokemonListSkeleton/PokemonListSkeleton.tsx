import Skeleton from "../Skeleton/Skeleton";
import { Card, Grid, ImageBlock, TextRow } from "./PokemonListSkeleton.styles";

type PokemonListSkeletonProps = {
  count?: number;
};

const PokemonListSkeleton = ({ count = 8 }: PokemonListSkeletonProps) => {
  return (
    <Grid>
      {Array.from({ length: count }, (_, index) => (
        <Card key={index}>
          <ImageBlock>
            <Skeleton height="100%" radius="8px" />
          </ImageBlock>

          <TextRow>
            <Skeleton width="70%" height="18px" radius="6px" />
            <Skeleton width="42%" height="12px" radius="6px" />
          </TextRow>
        </Card>
      ))}
    </Grid>
  );
};

export default PokemonListSkeleton;
