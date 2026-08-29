import styled, { css } from "styled-components";

type ChipVariant = "colored" | "outlined" | "secondary";

type ChipContainerProps = {
  variant: ChipVariant;
  color?: string;
};

export const ChipContainer = styled.span<ChipContainerProps>`
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-transform: capitalize;

  ${({ variant, color, theme }) => {
    switch (variant) {
      case "outlined":
        return css`
          background: transparent;
          color: ${theme.colors.text};
          border: 1px solid ${theme.colors.border};
        `;

      case "secondary":
        return css`
          background: ${theme.colors.surfaceSoft};
          color: ${theme.colors.text};
        `;

      case "colored":
      default:
        return css`
          background: ${color ?? theme.colors.primary};
          color: ${theme.colors.surface};
        `;
    }
  }}
`;
