import styled from "styled-components";

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.pageBackgrounds.infinite};
`;
export const InfiniteLoading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: min(100%, ${({ theme }) => theme.layout.maxWidth});
  margin: auto;
  padding: ${({ theme }) => theme.spacing.xxxxl}
    ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xxl};
  gap: ${({ theme }) => theme.spacing.xxxxl};
`;
export const LoadingRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
`;

export const Spinner = styled.span`
  width: 28px;
  height: 28px;
  border: 3px solid ${({ theme }) => theme.colors.success};
  border-top-color: transparent;
  border-radius: 50%;
  display: inline-block;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const CountText = styled.p`
  margin: 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
`;
