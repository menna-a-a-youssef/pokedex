import styled from "styled-components";

export const PageWrapper = styled.div`
  background: ${({ theme }) => theme.colors.pageBackgrounds.details};
  min-height: 100vh;
`;

export const HeaderBar = styled.div`
  background: linear-gradient(90deg, #8b5cf6, #ec4899);
  color: white;
  padding: ${({ theme }) => `${theme.spacing.xxl} `};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  justify-content: space-between;
  grid-column: 1 / -1;
  text-transform: capitalize;
  h1 {
    margin: 0;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const Arrow = styled.span`
  font-weight: 100;
  font-size: 20px;
  transform: scaleX(-1);
  background: linear-gradient(
    to left,
    ${({ theme }) => theme.colors.text} 0%,
    ${({ theme }) => theme.colors.text} 65%,
    transparent 66%,
    transparent 100%
  );
  background-clip: text;
  color: transparent;
`;
export const Content = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: ${({ theme }) => theme.spacing.xxxl};
  padding: ${({ theme }) => `${theme.spacing.xxxl} ${theme.spacing.xxl}`};
`;
export const DetailsCard = styled.div`
  width: 900px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;
export const LeftColumn = styled.div`
  padding: ${({ theme }) => theme.spacing.xxxl}
    ${({ theme }) => theme.spacing.xxl};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxl};
`;
export const TypesRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;
export const SpriteWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.surfaceSoft};
  border-radius: 999px;
  padding: ${({ theme }) => theme.spacing.xxl};
  width: 320px;
  height: 320px;
  margin: 0 ${({ theme }) => theme.spacing.xxxl};

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 240px;
    height: 240px;
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 180px;
    height: 180px;
  }
`;

export const MetaGrid = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;
export const MetaItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.surfaceSoft};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.spacing.lg}
    ${({ theme }) => theme.spacing.xxxxl};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;
export const MetaTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;
export const MetaValue = styled.div`
  font-weight: 900;
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;
export const RightColumn = styled.div`
  padding: ${({ theme }) => theme.spacing.xxxl}
    ${({ theme }) => theme.spacing.xxl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxl};
  section {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.lg};

    h3 {
      margin: 0;
      font-weight: 900;
    }
  }
`;
export const AbilitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: ${({ theme }) => theme.spacing.md};
`;
export const AbilityItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;
export const Experience = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: 900;
  color: ${({ theme }) => theme.colors.textTertiary};
  line-height: 1;
`;
