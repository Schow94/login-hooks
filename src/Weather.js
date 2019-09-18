import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';

import { CityContext } from './context/CityContext';

const API_KEY = '1c60e921144758c4e3567547d6091837';

let lat = 37.7755534;
let long = -122.4264467;

const url = `/forecast/${API_KEY}/${lat},${long}`;

export default function Weather() {
  const { city, setCity } = useContext(CityContext);
  const [temp, setTemp] = useState('');

  const getWeather = async () => {
    let res = await axios.get(url);
    let currentTemp = res.data.currently.apparentTemperature;
    setTemp(currentTemp);
    console.log(temp);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return <div style={styles}>{temp}F</div>;
}

const styles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  color: 'black',
  marginRight: '1em',
  fontSize: '1.5em'
};
