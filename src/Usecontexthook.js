//Create Context
//To create context, you must Import createContext and initialize it:

import React from 'react';
import { useState, createContext } from 'react';
import Comp1 from './Comp1';

//initialize it:

const Context = createContext(null);

function Usecontexthook() {
  const [name, setName] = useState('Deepesh');
  //const value = 'HARSHA!';
  return (
    //For single value use: value={value}
    //Example: <Context.Provider value={value}>
    //<Context.Provider value={{ value, name }}>
    <Context.Provider value={name}>
      <Comp1 />
    </Context.Provider>
  );
}
export { Usecontexthook, Context };
