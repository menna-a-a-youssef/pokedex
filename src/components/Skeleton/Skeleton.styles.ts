import styled, { css, keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

export const SkeletonBase = styled.div<{
  width?: string;
  height?: string;
  radius?: string;
  padding?: string;
  margin?: string;
}>`
  ${({ width }) =>
    width
      ? css`
          width: ${width};
        `
      : css`
          width: 100%;
        `}

  height: ${({ height }) => height || "16px"};
  border-radius: ${({ radius }) => radius || "8px"};
  padding: ${({ padding }) => padding || "0"};
  margin: ${({ margin }) => margin || "0"};
  background: ${({ theme }) => theme.colors.border};
  background-image: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.border} 0%,
    ${({ theme }) => theme.colors.surfaceSoft} 50%,
    ${({ theme }) => theme.colors.border} 100%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.4s linear infinite;
`;
