import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CityContext } from './context/CityContext';
// import { LocationContext } from './context/LocationContext';

const usePosition = initialVal => {
  const [position, setPosition] = useState(initialVal);
  // const [error, setError] = useState(null);

  // Success
  const success = x => {
    console.log(x);
    setPosition({
      lat: x.coords.latitude,
      long: x.coords.longitude
    });
  };

  //Custom Error handling hook
  // const onError = () => {
  //   setError(error.message);
  // };

  //Calling useEffect Inside out custom hook

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(x => success(x));

    // console.log(geo);
    // if (!geo) {
    //   setError('Geolocation is not supported');
    //   return;
    // }

    //geo.getCurrentPosition(onChange);
  }, []);

  return { ...position };

  // navigator.geolocation.getCurrentPosition(x => {
  //   let lat = x.coords.latitude;
  //   let long = x.coords.longitude;
  // });
};

const API_KEY = 'CFk7RKSgW8erb62sTHPJyfxDbmPx1GfJ';

const initialVal = { lat: '30.333472', long: '-81.470448' };

export default function Location() {
  const { city, setCity } = useContext(CityContext);
  const { lat, long } = usePosition(initialVal);

  // Async/Await - API Call
  const url = `http://www.mapquestapi.com/geocoding/v1/reverse?key=${API_KEY}&location=${lat},${long}&includeRoadMetadata=true&includeNearestIntersection=true`;
  console.log(url);
  const sendCoordinates = async () => {
    let res = await axios.get(url);
    let data = res.data.results[0].locations[0];
    //creating obj to store location data to setState
    console.log(res.data.results[0]);
    let geoData = {
      city: data.adminArea5,
      state: data.adminArea3,
      country: data.adminArea1
    };
    setCity(geoData);
  };

  useEffect(() => {
    sendCoordinates();
  }, [lat, long]);

  return (
    <div style={styles.container}>
      {city.city}, {city.state}, {city.country}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    color: 'black',
    marginRight: '1em',
    fontWeight: 100,
    fontSize: '1.5em'
  }
};
