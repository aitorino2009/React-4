import React, { useState } from 'react';

/**
 * PROGRAMA A:
 * La función 'inicio' es una función JavaScript común que retorna JSX.
 * No es un componente React propiamente dicho (no recibe props formalmente como objeto React,
 * no tiene ciclo de vida ni se renderiza con sintaxis de etiqueta JSX <inicio />).
 */
export default function ProgramaGrados() {
  const [temperatura, setTemperatura] = useState(20);

  const validar = (dato) => {
    const valor = Number(dato);
    return isNaN(valor) ? false : valor;
  };

  const pasaraFarenheit = (grado) => (grado * 1.8) + 32;

  const inicio = (dato) => {
    const temp = validar(dato);
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

  return (
    <div className="programa-demo">
      <div className="badge-type badge-warning">PROGRAMA A (Función JS Normal)</div>
      <h2>Termómetro digital</h2>
      <div className="input-group">
        <label htmlFor="temp-a">Temperatura en Celsius (°C):</label>
        <input
          id="temp-a"
          type="number"
          value={temperatura}
          onChange={(e) => setTemperatura(e.target.value)}
        />
      </div>
      <div className="render-slot">
        {inicio(temperatura)}
      </div>
      <p className="nota-tecnica">
        <em>Invocado como función JS convencional: <code>{'{inicio(temperatura)}'}</code></em>
      </p>
    </div>
  );
}
