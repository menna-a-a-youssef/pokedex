import Button from '../Button/Button';
import {
  Chevron,
  PaginationContainer,
  PaginationEllipsis,
  PaginationSummary,
  PaginationWrap,
} from './Pagination.styles';

const Pagination = () => {
  return (
    <PaginationWrap>
      <PaginationContainer>
        <Button type="button" size="md" active={false} disabled>
          <Chevron aria-hidden="true">&#8249;</Chevron>
          Previous
        </Button>

        <Button type="button" size="md" active>
          1
        </Button>
        <Button type="button" size="md">
          2
        </Button>
        <Button type="button" size="md">
          3
        </Button>
        <Button type="button" size="md">
          4
        </Button>
        <Button type="button" size="md">
          5
        </Button>

        <PaginationEllipsis>...</PaginationEllipsis>

        <Button type="button" size="md">
          66
        </Button>

        <Button type="button" size="md">
          Next
          <Chevron aria-hidden="true">&#8250;</Chevron>
        </Button>
      </PaginationContainer>

      <PaginationSummary>Page 1 of 66 (20 Pokemon shown)</PaginationSummary>
    </PaginationWrap>
  );
};

export default Pagination;
