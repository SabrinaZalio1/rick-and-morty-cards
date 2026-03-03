import styled from 'styled-components';
import { Location } from '@/types/api';

interface LocationCardProps {
  location: Location;
}

const Card = styled.article`
  background: ${props => props.theme.colors.backgroundCard};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px ${props => props.theme.colors.shadow};
  }

  &:focus-within {
    outline: 2px solid ${props => props.theme.colors.accent};
    outline-offset: 4px;
  }
`;

const Name = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text.title};
  margin: 0;
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const InfoGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
`;

const InfoRow = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.sm};
`;

const Label = styled.span`
  color: ${props => props.theme.colors.text.label};
  font-weight: 600;
  min-width: 100px;
`;

const Value = styled.span`
  color: ${props => props.theme.colors.text.primary};
`;

const Badge = styled.span`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.xs} 0.75rem;
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 0.9rem;
  font-weight: 600;
  align-self: flex-start;
`;

export const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
  return (
    <Card aria-label={`Location: ${location.name} in ${location.dimension}`}>
      <Name>{location.name}</Name>

      <InfoGrid>
        <InfoRow>
          <Label>ID:</Label>
          <Value>#{location.id}</Value>
        </InfoRow>

        <InfoRow>
          <Label>Type:</Label>
          <Value>{location.type}</Value>
        </InfoRow>

        <InfoRow>
          <Label>Dimension:</Label>
          <Value>{location.dimension}</Value>
        </InfoRow>

        <InfoRow>
          <Label>Residents:</Label>
          <Badge>{location.residents.length} residents</Badge>
        </InfoRow>
      </InfoGrid>
    </Card>
  );
};
