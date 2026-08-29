import styled from "styled-components";

export const StatBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;
export const StatRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const StatLabel = styled.div`
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BarContainer = styled.div`
  flex: 1;
  height: 8px;
  background: ${({ theme }) => theme.colors.surfaceSoft};
  border-radius: 8px;
  overflow: hidden;
`;

export const BarFill = styled.div<{ $width: string }>`
  width: ${({ $width }) => $width};
  height: 100%;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: inherit;
  transition: width 800ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const StatValue = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 600;
`;
