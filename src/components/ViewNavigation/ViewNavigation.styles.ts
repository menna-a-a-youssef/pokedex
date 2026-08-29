import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const NavigationLink = styled.a<{ $active?: boolean }>`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};

  color: ${({ theme, $active }) =>
    $active ? '#ffffff' : theme.colors.textSecondary};

  background: ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.surface};

  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  line-height: 1.5;
  transition: all 150ms ease;

  &:hover {
    color: ${({ theme, $active }) =>
      $active ? '#ffffff' : theme.colors.text};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;