import { useLocations } from '@/hooks/useLocations';
import { LocationCard } from './LocationCard';
import * as S from './LocationsTab.styles';

export const LocationsTab: React.FC = () => {
  const { data: locations, isLoading, error } = useLocations();

  if (isLoading) {
    return (
      <S.Container>
        <S.Title>Locations</S.Title>
        <S.LoadingSpinner role="status" aria-live="polite" aria-busy="true">
          Loading locations...
        </S.LoadingSpinner>
      </S.Container>
    );
  }

  if (error) {
    return (
      <S.Container>
        <S.Title>Locations</S.Title>
        <S.ErrorMessage role="alert">
          Error loading locations: {error instanceof Error ? error.message : 'Unknown error'}
        </S.ErrorMessage>
      </S.Container>
    );
  }

  if (!locations || locations.length === 0) {
    return (
      <S.Container>
        <S.Title>Locations</S.Title>
        <S.Message>No locations found</S.Message>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Title>Locations ({locations.length})</S.Title>
      <S.Grid aria-label="Locations list">
        {locations.map(location => (
          <LocationCard key={location.id} location={location} />
        ))}
      </S.Grid>
    </S.Container>
  );
};
