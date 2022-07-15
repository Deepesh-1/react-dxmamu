import React from 'react';
import { useState } from 'react';
import './style.css';

export default function Contextexample() {
  const [user, setUser] = useState('Deepesh');
  return (
    <>
      <h1>{`We are rendering this component, user name is ${user}`}</h1>
      <Component1 user={user} />
    </>
  );
}

function Component1({ user }) {
  return (
    <>
      <Component2 user={user} />
    </>
  );
}

function Component2({ user }) {
  return (
    <>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }) {
  return <>{`This is the last component, user name is ${user}`}</>;
}
