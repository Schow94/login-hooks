import React from 'react';
import './index.css';

import { NameProvider } from './context/NameContext';
import { CityProvider } from './context/CityContext';
// import { LocationProvider } from './context/LocationContext';

import LandingApp from './LandingApp';

function App() {
  return (
    <NameProvider>
      <CityProvider>
        <LandingApp />;
      </CityProvider>
    </NameProvider>
  );
}

export default App;
