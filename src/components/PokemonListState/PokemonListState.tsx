import Button from "../Button/Button";
import Skeleton from "../Skeleton/Skeleton";
import {
  Card,
  ErrorMessage,
  ErrorTitle,
  ErrorWrap,
  Grid,
  ImageBlock,
  TextRow,
} from "./PokemonListState.styles";

type PokemonListStateProps =
  | {
      variant: "loading";
      count?: number;
    }
  | {
      variant: "error";
      onRetry: () => void;
    };

const PokemonListState = (props: PokemonListStateProps) => {
  if (props.variant === "loading") {
    return (
      <Grid>
        {Array.from({ length: props.count ?? 8 }, (_, index) => (
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
  }

  return (
    <ErrorWrap>
      <ErrorTitle>Unable to load Pokémon</ErrorTitle>
      <ErrorMessage>
        Something went wrong while fetching the list. Please try again.
      </ErrorMessage>

      <Button onClick={props.onRetry}>Try Again</Button>
    </ErrorWrap>
  );
};

export default PokemonListState;
