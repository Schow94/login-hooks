import React, { createContext, useState, useEffect } from 'react';

export const LocationContext = createContext();

const initialVal = { lat: '30.333472', long: '-81.470448' };

export function LocationProvider(props) {
  // should change to a custom hook at some point
  const usePosition = initialVal => {
    const [position, setPosition] = useState(initialVal);

    // Success
    const success = x => {
      setPosition({
        lat: x.coords.latitude,
        long: x.coords.longitude
      });
    };

    useEffect(() => {
      navigator.geolocation.getCurrentPosition(x => success(x));
    }, []);

    return { ...position };
  };
  const [city, setCity] = useState(initialVal);

  return (
    <LocationContext.Provider value={{ usePosition }}>
      {props.children}
    </LocationContext.Provider>
  );
}
