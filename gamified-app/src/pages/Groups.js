// /src/pages/Groups.js
import React from 'react';
import MapView from '../components/MapView';

const dummyLocations = [
  { name: 'Group 1', coords: [51.505, -0.09] },
  { name: 'Group 2', coords: [51.515, -0.1] },
  { name: 'Group 3', coords: [51.52, -0.08] },
];

const Groups = () => (
  <div>
    <h2>Find Support Groups Nearby</h2>
    <MapView locations={dummyLocations} />
  </div>
);

export default Groups;
