import styled from "styled-components";

export const PaginationWrap = styled.div`
  width: min(100%, ${({ theme }) => theme.layout.maxWidth});
  margin: auto;
  padding: ${({ theme }) => theme.spacing.xxl};
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

export const Chevron = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  line-height: 1;
  transform: translateY(-2px);
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
