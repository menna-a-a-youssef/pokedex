import styled from "styled-components";

export const PaginationWrap = styled.div`
  width: min(100%, ${({ theme }) => theme.layout.maxWidth});
  margin: auto;
  padding: ${({ theme }) => theme.spacing.xxl}
    ${({ theme }) => theme.spacing.xxl};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 700;
`;

export const PageButton = styled.button`
  min-width: 88px;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: #ffffff;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 700;
  transition: opacity 150ms ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};

  &:hover:not(:disabled) {
    opacity: 0.92;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
export const Chevron = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  line-height: 1;
  transform: translateY(-2px);
`;
export const PageNumber = styled.button<{ $active?: boolean }>`
  width: 36px;
  height: 40px;
  padding: 0;
  border: 1px solid
    ${({ $active, theme }) =>
      $active ? theme.colors.primary : theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.primary : "#ffffff"};
  color: ${({ $active }) => ($active ? "#ffffff" : "#111111")};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 700;
`;

export const PaginationSummary = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  text-align: center;
`;
export const PaginationEllipsis = styled.span`
  margin: 0 ${({ theme }) => theme.spacing.md};
`;
