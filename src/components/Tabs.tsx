import * as S from './Tabs.styles';

interface TabsProps {
  activeTab: 'characters' | 'locations';
  onTabChange: (tab: 'characters' | 'locations') => void;
}

export const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <S.TabsContainer role="tablist" aria-label="Rick and Morty data tabs">
      <S.TabButton
        role="tab"
        $isActive={activeTab === 'characters'}
        aria-selected={activeTab === 'characters'}
        aria-controls="characters-panel"
        onClick={() => onTabChange('characters')}
      >
        Characters
      </S.TabButton>
      <S.TabButton
        role="tab"
        $isActive={activeTab === 'locations'}
        aria-selected={activeTab === 'locations'}
        aria-controls="locations-panel"
        onClick={() => onTabChange('locations')}
      >
        Locations
      </S.TabButton>
    </S.TabsContainer>
  );
};
