import styled from "styled-components";

export const Grid = styled.div`
  width: min(100%, ${({ theme }) => theme.layout.maxWidth});
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xxl};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.surface};
`;

export const ImageBlock = styled.div`
  width: 100%;
  height: 190px;
  border-radius: ${({ theme }) => theme.radii.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 160px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 120px;
  }
`;

export const TextRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;
`;
