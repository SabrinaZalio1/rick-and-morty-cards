import { Location } from '@/types/api';
import * as S from './LocationCard.styles';

interface LocationCardProps {
  location: Location;
}

export const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
  return (
    <S.Card aria-label={`Location: ${location.name} in ${location.dimension}`}>
      <S.Name>{location.name}</S.Name>

      <S.InfoGrid>
        <S.InfoRow>
          <S.Label>ID:</S.Label>
          <S.Value>#{location.id}</S.Value>
        </S.InfoRow>

        <S.InfoRow>
          <S.Label>Type:</S.Label>
          <S.Value>{location.type}</S.Value>
        </S.InfoRow>

        <S.InfoRow>
          <S.Label>Dimension:</S.Label>
          <S.Value>{location.dimension}</S.Value>
        </S.InfoRow>

        <S.InfoRow>
          <S.Label>Residents:</S.Label>
          <S.Badge>{location.residents.length} residents</S.Badge>
        </S.InfoRow>
      </S.InfoGrid>
    </S.Card>
  );
};
