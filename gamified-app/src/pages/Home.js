// /src/pages/Home.js
import React from 'react';
import styled from 'styled-components';
import Leaderboard from '../components/Leaderboard';
import Rewards from '../components/Rewards';
import ProgressTracker from '../components/ProgressTracker';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const dummyUsers = [
  { name: 'User 1', points: 150 },
  { name: 'User 2', points: 120 },
  { name: 'User 3', points: 90 },
];

const dummyRewards = [
  { name: 'Badge 1' },
  { name: 'Badge 2' },
  { name: 'Badge 3' },
];

const dummyProgress = [
  { name: 'Task 1', percentage: 50 },
  { name: 'Task 2', percentage: 70 },
  { name: 'Task 3', percentage: 30 },
];

const Home = () => (
  <HomePageContainer>
    <Leaderboard users={dummyUsers} />
    <Rewards rewards={dummyRewards} />
    <ProgressTracker progress={dummyProgress} />
  </HomePageContainer>
);

export default Home;
