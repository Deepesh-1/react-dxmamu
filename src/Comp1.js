import { React, useContext } from 'react';
import './style.css';
import { Context } from './Usecontexthook';

export default function Comp1() {
  const name = useContext(Context);
  return (
    <div>
      <span>{name}</span>
    </div>
  );
}
