import styled from 'styled-components';

export const Container = styled.section`
  padding: ${props => props.theme.spacing.xl} 0;
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.text.title};
  margin-bottom: ${props => props.theme.spacing.lg};
  text-shadow: 0 0 15px ${props => props.theme.colors.accent},
               0 0 30px ${props => props.theme.colors.accent};
`;

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing.xl};
`;

export const Message = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 1.2rem;
  text-align: center;
  padding: ${props => props.theme.spacing.xxl};
`;

export const LoadingSpinner = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.xxl};
  color: ${props => props.theme.colors.primary};
  font-size: 1.2rem;
`;

export const ErrorMessage = styled.div`
  background: ${props => props.theme.colors.status.error};
  color: white;
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.sm};
  text-align: center;
`;
