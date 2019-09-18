import React, { createContext, useState } from 'react';

export const NameContext = createContext();

export function NameProvider(props) {
  const [name, setName] = useState('');

  //setName
  const changeName = val => setName(val);

  //Clear input from useInputState hook inside <Form />

  return (
    <NameContext.Provider value={{ name, changeName }}>
      {props.children}
    </NameContext.Provider>
  );
}
