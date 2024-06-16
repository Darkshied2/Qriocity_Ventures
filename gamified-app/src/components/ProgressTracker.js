// /src/components/ProgressTracker.js
import React from 'react';
import styled from 'styled-components';

const ProgressContainer = styled.div`
  padding: 20px;
`;

const ProgressBar = styled.div`
  width: 100%;
  background-color: #ddd;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 10px;
`;

const Filler = styled.div`
  height: 20px;
  width: ${props => props.percentage}%;
  background-color: #4caf50;
`;

const ProgressTracker = ({ progress }) => (
  <ProgressContainer>
    <h2>Progress Tracker</h2>
    {progress.map((task, index) => (
      <div key={index}>
        <span>{task.name}</span>
        <ProgressBar>
          <Filler percentage={task.percentage} />
        </ProgressBar>
      </div>
    ))}
  </ProgressContainer>
);

export default ProgressTracker;
