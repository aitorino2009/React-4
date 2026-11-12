import React, { useState } from 'react';

/**
 * Componente hijo Termometro:
 * Es un verdadero Componente Funcional de React:
 * - Comienza por mayúscula (Termometro).
 * - Recibe como parámetro un objeto de 'props' (props.dato).
 * - Se instancia en el JSX utilizando sintaxis de componente: <Termometro dato={temperatura} />.
 * - Tiene identidad propia en el árbol de componentes de React (Virtual DOM / React Fiber).
 */
export const Termometro = (props) => {
  const validar = (dato) => {
    const valor = Number(dato);
    return isNaN(valor) ? false : valor;
  };

  const pasaraFarenheit = (grado) => (grado * 1.8) + 32;

  const temp = validar(props.dato);
  const grados = temp !== false
    ? pasaraFarenheit(temp)
    : 'datos introducidos erróneos';

  return (
    <div className="calculos-box">
      <h3>cálculos realizados</h3>
      <p> En Farenheit son: {grados} º</p>
    </div>
  );
};

export default function ProgramaGradosComponent() {
  const [temperatura, setTemperatura] = useState(10);

  return (
    <div className="programa-demo">
      <div className="badge-type badge-success">PROGRAMA B (Componente React Modular)</div>
      <h2>Termómetro digital</h2>
      <div className="input-group">
        <label htmlFor="temp-b">Temperatura en Celsius (°C):</label>
        <input
          id="temp-b"
          type="number"
          value={temperatura}
          onChange={(e) => setTemperatura(e.target.value)}
        />
      </div>
      <div className="render-slot">
        <Termometro dato={temperatura} />
      </div>
      <p className="nota-tecnica">
        <em>Renderizado como Componente React con props: <code>{'<Termometro dato={temperatura} />'}</code></em>
      </p>
    </div>
  );
}
