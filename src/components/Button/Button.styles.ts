import styled, { css } from "styled-components";

export type ButtonSize = "md" | "lg";

export type StyledButtonProps = {
  $size?: ButtonSize;
  $active?: boolean;
};

const sizeStyles = {
  md: css<StyledButtonProps>`
    height: 36px;
    padding: 0 ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.fontSizes.md};
  `,
  lg: css<StyledButtonProps>`
    height: 40px;
    padding: 0 ${({ theme }) => theme.spacing.lg};
    font-size: ${({ theme }) => theme.fontSizes.md};
  `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  border: 1px solid
    ${({ theme, $active }) =>
      $active ? theme.colors.primary : theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.primary : "#ffffff"};
  color: ${({ theme, $active }) => ($active ? "#ffffff" : theme.colors.text)};
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.01em;
  transition:
    opacity 150ms ease,
    transform 150ms ease,
    background 150ms ease,
    color 150ms ease,
    border-color 150ms ease;

  ${({ $size = "md" }) => sizeStyles[$size]}

  &:hover:not(:disabled) {
    opacity: 0.92;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    transform: none;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;
