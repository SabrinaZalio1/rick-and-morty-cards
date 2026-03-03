import styled from 'styled-components';

export const TabsContainer = styled.nav`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.xl} 0 ${props => props.theme.spacing.md};
  border-bottom: 2px solid ${props => props.theme.colors.borderSecondary};
`;

export const TabButton = styled.button<{ $isActive: boolean }>`
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: ${props => props.$isActive ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.$isActive ? '#fff' : props.theme.colors.text.secondary};
  border: none;
  border-radius: ${props => props.theme.borderRadius.sm} ${props => props.theme.borderRadius.sm} 0 0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.$isActive ? props.theme.colors.primary : props.theme.colors.backgroundCard};
    color: #fff;
  }

  &:focus-visible {
    outline: 3px solid ${props => props.theme.colors.accent};
    outline-offset: 2px;
  }
`;
