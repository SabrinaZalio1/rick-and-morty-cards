import { useCharacters } from '@/hooks/useCharacters';
import { CharacterCard } from './CharacterCard';
import * as S from './CharactersTab.styles';

export const CharactersTab: React.FC = () => {
  const { data: characters, isLoading, error } = useCharacters();

  if (isLoading) {
    return (
      <S.Container>
        <S.Title>Characters</S.Title>
        <S.LoadingSpinner role="status" aria-live="polite" aria-busy="true">
          Loading characters...
        </S.LoadingSpinner>
      </S.Container>
    );
  }

  if (error) {
    return (
      <S.Container>
        <S.Title>Characters</S.Title>
        <S.ErrorMessage role="alert">
          Error loading characters: {error instanceof Error ? error.message : 'Unknown error'}
        </S.ErrorMessage>
      </S.Container>
    );
  }

  if (!characters || characters.length === 0) {
    return (
      <S.Container>
        <S.Title>Characters</S.Title>
        <S.Message>No characters found</S.Message>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Title>Characters ({characters.length})</S.Title>
      <S.Grid aria-label="Characters list">
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </S.Grid>
    </S.Container>
  );
};
