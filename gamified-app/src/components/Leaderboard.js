// /src/components/Leaderboard.js
import React from 'react';
import styled from 'styled-components';

const LeaderboardContainer = styled.div`
  padding: 20px;
`;

const LeaderboardItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const Leaderboard = ({ users }) => (
  <LeaderboardContainer>
    <h2>Leaderboard</h2>
    {users.map((user, index) => (
      <LeaderboardItem key={index}>
        <span>{user.name}</span>
        <span>{user.points} points</span>
      </LeaderboardItem>
    ))}
  </LeaderboardContainer>
);

export default Leaderboard;
