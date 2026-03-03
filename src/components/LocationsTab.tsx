import styled from 'styled-components';
import { useLocations } from '@/hooks/useLocations';
import { LocationCard } from './LocationCard';

const Container = styled.section`
  padding: ${props => props.theme.spacing.xl} 0;
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.text.title};
  margin-bottom: ${props => props.theme.spacing.lg};
  text-shadow: 0 0 15px ${props => props.theme.colors.accent},
               0 0 30px ${props => props.theme.colors.accent};
`;

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing.xl};
`;

const Message = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 1.2rem;
  text-align: center;
  padding: ${props => props.theme.spacing.xxl};
`;

const LoadingSpinner = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.xxl};
  color: ${props => props.theme.colors.primary};
  font-size: 1.2rem;
`;

const ErrorMessage = styled.div`
  background: ${props => props.theme.colors.status.error};
  color: white;
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.sm};
  text-align: center;
`;

export const LocationsTab: React.FC = () => {
  const { data: locations, isLoading, error } = useLocations();

  if (isLoading) {
    return (
      <Container>
        <Title>Locations</Title>
        <LoadingSpinner role="status" aria-live="polite" aria-busy="true">
          Loading locations...
        </LoadingSpinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Title>Locations</Title>
        <ErrorMessage role="alert">
          Error loading locations: {error instanceof Error ? error.message : 'Unknown error'}
        </ErrorMessage>
      </Container>
    );
  }

  if (!locations || locations.length === 0) {
    return (
      <Container>
        <Title>Locations</Title>
        <Message>No locations found</Message>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Locations ({locations.length})</Title>
      <Grid aria-label="Locations list">
        {locations.map(location => (
          <LocationCard key={location.id} location={location} />
        ))}
      </Grid>
    </Container>
  );
};
