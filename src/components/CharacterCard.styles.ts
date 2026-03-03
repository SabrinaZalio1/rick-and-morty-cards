import styled from 'styled-components';
import { Character } from '@/types/api';

export const Card = styled.article`
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

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${props => props.theme.spacing.sm};
`;

export const CharacterImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: ${props => props.theme.borderRadius.full};
  object-fit: cover;
  border: 3px solid ${props => props.theme.colors.border};
`;

export const Name = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text.title};
  margin: 0;
  text-align: center;
`;

export const InfoGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
`;

export const InfoRow = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.sm};
`;

export const Label = styled.span`
  color: ${props => props.theme.colors.text.label};
  font-weight: 600;
  min-width: 80px;
`;

export const Value = styled.span`
  color: ${props => props.theme.colors.text.primary};
`;

export const Status = styled.span<{ $status: Character['status'] }>`
  color: ${props => {
    if (props.$status === 'Alive') return props.theme.colors.status.alive;
    if (props.$status === 'Dead') return props.theme.colors.status.dead;
    return props.theme.colors.status.unknown;
  }};
  font-weight: 600;
`;
