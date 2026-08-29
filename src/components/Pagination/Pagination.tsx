import Button from "../Button/Button";
import {
  Chevron,
  PaginationContainer,
  PaginationEllipsis,
  PaginationSummary,
  PaginationWrap,
} from "./Pagination.styles";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  currentItemCount: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  currentItemCount,
  onPageChange,
}: PaginationProps) => {
  const getVisiblePages = () => {
    // Show all pages when there are 7 or fewer
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    // First 5 pages
    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, "...", totalPages];
    }

    // Last 5 pages
    if (currentPage >= totalPages - 3) {
      return [
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    // Middle pages
    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  const visiblePages = getVisiblePages();

  return (
    <PaginationWrap>
      <PaginationContainer>
        <Button
          type="button"
          size="md"
          disabled={currentPage === 1}
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        >
          <Chevron aria-hidden="true">&#8249;</Chevron>
          Previous
        </Button>

        {visiblePages.map((page, index) =>
          typeof page !== "number" ? (
            <PaginationEllipsis key={`ellipsis-${index}`}>
              ...
            </PaginationEllipsis>
          ) : (
            <Button
              key={page}
              type="button"
              size="md"
              active={page === currentPage}
              onClick={() => onPageChange(page)}
            >
              {page}
            </Button>
          ),
        )}

        <Button
          type="button"
          size="md"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        >
          Next
          <Chevron aria-hidden="true">&#8250;</Chevron>
        </Button>
      </PaginationContainer>

      <PaginationSummary>
        Page {currentPage} of {totalPages} ({currentItemCount} Pokemon shown)
      </PaginationSummary>
    </PaginationWrap>
  );
};

export default Pagination;
