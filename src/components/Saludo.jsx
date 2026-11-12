import React from 'react';

export default function Saludo(props) {
  return (
    <div className="saludo-card">
      <h1>Hola: {props.name}</h1>
    </div>
  );
}
