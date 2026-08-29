import Button from "../Button/Button";
import { ErrorMessage, ErrorTitle, ErrorWrap } from "./ErrorState.styles";

type ErrorStateProps = {
  title?: string;
  message?: string;
  buttonLabel?: string;
  onRetry: () => void;
};

const ErrorState = ({
  title = "Unable to load Pokémon",
  message = "Something went wrong while fetching the data. Please try again.",
  buttonLabel = "Try Again",
  onRetry,
}: ErrorStateProps) => {
  return (
    <ErrorWrap>
      <ErrorTitle>{title}</ErrorTitle>
      <ErrorMessage>{message}</ErrorMessage>
      <Button onClick={onRetry}>{buttonLabel}</Button>
    </ErrorWrap>
  );
};

export default ErrorState;
