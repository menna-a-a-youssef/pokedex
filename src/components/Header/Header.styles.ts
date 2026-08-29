import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.xxl}`};
  gap: ${({ theme }) => theme.spacing.xl};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) =>
      `${theme.spacing.lg} ${theme.spacing.md} ${theme.spacing.sm}`};
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const LogoMark = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const LogoText = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.h1};
  line-height: 1;
  letter-spacing: -0.05em;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

export const Description = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
  line-height: 1.5;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;
