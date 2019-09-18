import React from 'react';
import Form from './Form';
import Clock from './Clock';
import Background from './Background';
import Navbar from './Navbar';
import Location from './Location';
import Weather from './Weather';

const styles = {
  color: 'white',
  height: '100vh'
};

export default function LandingApp() {
  return (
    <div style={styles}>
      <Background>
        <Navbar />
        <Location />
        <Weather />
        <Clock />
        <Form />
      </Background>
    </div>
  );
}
