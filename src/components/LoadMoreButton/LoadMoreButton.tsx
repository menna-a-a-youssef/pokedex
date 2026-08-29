import Button from "../Button/Button";
import { ButtonWrap } from "./LoadMoreButton.styles";

type LoadMoreButtonProps = {
  onClick?: () => void;
  loading?: boolean;
};

const LoadMoreButton = ({ onClick, loading = false }: LoadMoreButtonProps) => {
  return (
    <ButtonWrap>
      <Button type="button" onClick={onClick} disabled={loading} size="md">
        {loading ? "Loading..." : "Load More"}
      </Button>
    </ButtonWrap>
  );
};

export default LoadMoreButton;
