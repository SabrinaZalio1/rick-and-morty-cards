import styled from 'styled-components';
import { useCharacters } from '@/hooks/useCharacters';
import { CharacterCard } from './CharacterCard';

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

export const CharactersTab: React.FC = () => {
  const { data: characters, isLoading, error } = useCharacters();

  if (isLoading) {
    return (
      <Container>
        <Title>Characters</Title>
        <LoadingSpinner role="status" aria-live="polite" aria-busy="true">
          Loading characters...
        </LoadingSpinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Title>Characters</Title>
        <ErrorMessage role="alert">
          Error loading characters: {error instanceof Error ? error.message : 'Unknown error'}
        </ErrorMessage>
      </Container>
    );
  }

  if (!characters || characters.length === 0) {
    return (
      <Container>
        <Title>Characters</Title>
        <Message>No characters found</Message>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Characters ({characters.length})</Title>
      <Grid aria-label="Characters list">
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </Grid>
    </Container>
  );
};
