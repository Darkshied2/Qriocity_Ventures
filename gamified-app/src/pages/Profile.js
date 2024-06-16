// /src/pages/Profile.js
import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  padding: 20px;
`;

const Profile = () => (
  <ProfileContainer>
    <h2>Hello Username!</h2>
    <p>Total Badges: 12</p>
    <p>New Groups found: 02</p>
    <p>Recent Activities: ___</p>
  </ProfileContainer>
);

export default Profile;
