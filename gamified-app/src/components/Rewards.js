// /src/components/Rewards.js
import React from 'react';
import styled from 'styled-components';

const RewardsContainer = styled.div`
  padding: 20px;
`;

const RewardItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Badge = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f0ad4e;
  border-radius: 50%;
  margin-right: 10px;
`;

const Rewards = ({ rewards }) => (
  <RewardsContainer>
    <h2>Rewards and Badges</h2>
    {rewards.map((reward, index) => (
      <RewardItem key={index}>
        <Badge />
        <span>{reward.name}</span>
      </RewardItem>
    ))}
  </RewardsContainer>
);

export default Rewards;
