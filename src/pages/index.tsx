import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Tabs } from '@/components/Tabs';
import { CharactersTab } from '@/components/CharactersTab';
import { LocationsTab } from '@/components/LocationsTab';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xl};
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text.title};
  margin-bottom: ${props => props.theme.spacing.sm};
  text-shadow: 0 0 30px ${props => props.theme.colors.accent},
               0 0 20px ${props => props.theme.colors.accent};
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.text.secondary};
`;

const LoadingScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
`;

export default function Home() {
  const [activeTab, setActiveTab] = useState<'characters' | 'locations'>('characters');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <LoadingScreen>Loading...</LoadingScreen>;
  }

  return (
    <Container>
      <Header role="banner">
        <Title>Rick and Morty</Title>
        <Subtitle>Explore the multiverse</Subtitle>
      </Header>

      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

      <main id="main-content">
        {activeTab === 'characters' && (
          <div role="tabpanel" id="characters-panel" aria-labelledby="characters-tab">
            <CharactersTab />
          </div>
        )}
        {activeTab === 'locations' && (
          <div role="tabpanel" id="locations-panel" aria-labelledby="locations-tab">
            <LocationsTab />
          </div>
        )}
      </main>
    </Container>
  );
}
