import { Character } from '@/types/api';
import * as S from './CharacterCard.styles';

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const altText = `${character.name}, ${character.status} ${character.species}`;
  
  return (
    <S.Card aria-label={`Character: ${character.name}`}>
      <S.ImageWrapper>
        <S.CharacterImage 
          src={character.image} 
          alt={altText}
          loading="lazy"
        />
      </S.ImageWrapper>
      
      <S.Name>{character.name}</S.Name>

      <S.InfoGrid>
        <S.InfoRow>
          <S.Label>ID:</S.Label>
          <S.Value>#{character.id}</S.Value>
        </S.InfoRow>

        <S.InfoRow>
          <S.Label>Status:</S.Label>
          <S.Status $status={character.status}>{character.status}</S.Status>
        </S.InfoRow>

        <S.InfoRow>
          <S.Label>Species:</S.Label>
          <S.Value>{character.species}</S.Value>
        </S.InfoRow>

        {character.type && (
          <S.InfoRow>
            <S.Label>Type:</S.Label>
            <S.Value>{character.type}</S.Value>
          </S.InfoRow>
        )}

        <S.InfoRow>
          <S.Label>Gender:</S.Label>
          <S.Value>{character.gender}</S.Value>
        </S.InfoRow>

        <S.InfoRow>
          <S.Label>Origin:</S.Label>
          <S.Value>{character.origin.name}</S.Value>
        </S.InfoRow>

        <S.InfoRow>
          <S.Label>Location:</S.Label>
          <S.Value>{character.location.name}</S.Value>
        </S.InfoRow>

        <S.InfoRow>
          <S.Label>Episodes:</S.Label>
          <S.Value>{character.episode.length}</S.Value>
        </S.InfoRow>
      </S.InfoGrid>
    </S.Card>
  );
};
