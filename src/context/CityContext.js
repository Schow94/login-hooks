import React, { createContext, useState } from 'react';

export const CityContext = createContext();

export function CityProvider(props) {
  // should change to a custom hook at some point

  const initialVal = {
    city: 'Honololu',
    state: 'HI',
    country: 'USA'
  };

  const [city, setCity] = useState(initialVal);

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {props.children}
    </CityContext.Provider>
  );
}
