import React, { useState, useEffect } from 'react';

function useClock(initialVal) {
  const [time, setTime] = useState(initialVal);

  const getTime = () => {
    let date = Date().slice(16, 24);
    setTime(date);
  };
  return [time, getTime];
}

export default function Clock() {
  const [time, getTime] = useClock(Date().slice(16, 21));

  useEffect(() => {
    const interval = setInterval(() => {
      getTime();
    }, 60000);

    // CLEANUP STEP - below is essentially same as componentWillUnmount
    // safer to clean up and unmount or at least handle for it for errors
    // useEffect allows you to return a fxn - optional
    return () => clearInterval(interval);
  }, [time]);

  return <h1 style={styles}>{time}</h1>;
}

const styles = {
  display: 'flex',
  justifyContent: 'center',
  fontSize: '15rem',
  color: 'black',
  marginTop: 0,
  marginBottom: 0
};

//Could create a timeContext to keep track of time to say good morning, evening
