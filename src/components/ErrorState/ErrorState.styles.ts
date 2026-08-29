import styled from "styled-components";

export const ErrorWrap = styled.div`
  width: min(100%, ${({ theme }) => theme.layout.maxWidth});
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.xxxl} ${theme.spacing.xl}`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  background: ${({ theme }) => theme.colors.errorBg};
  border: 1px solid ${({ theme }) => theme.colors.errorBorder};
  border-radius: ${({ theme }) => theme.radii.md};
`;

export const ErrorTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
`;

export const ErrorMessage = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.md};
`;
