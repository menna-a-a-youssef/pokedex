import styled from "styled-components";

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing.xxl} `};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: 0 1px 0 rgba(17, 17, 17, 0.03);
  gap: ${({ theme }) => theme.spacing.md};
  transition:
    transform 150ms ease,
    box-shadow 150ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.04);
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 190px;
  background: ${({ theme }) => theme.colors.surfaceSoft};
  object-fit: contain;
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 160px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 120px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const Name = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: 700;
  text-transform: capitalize;
  text-align: center;
  letter-spacing: -0.05em;
  color: ${({ theme }) => theme.colors.text};
`;

export const Number = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textSecondary};
`;
