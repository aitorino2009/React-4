import React, { useState } from 'react';

/**
 * Ejercicio 6.3: Conversión de grados
 * Requisitos:
 * a) Afegir funció per "passaraCelsius"
 * b) Formatejar amb 2 decimals el resultat (fent servir .toFixed(2))
 */
export default function ProgramaCalculadora() {
  const [temperatura, setTemperatura] = useState(0);

  const ConversorGrados = ({ dato }) => {
    const validar = (valor) => {
      const temp = Number(valor);
      return isNaN(temp) ? false : temp;
    };

    // Fórmulas de conversión con formateo a 2 decimales (.toFixed(2))
    const pasaraFarenheit = (grado) => ((grado * 1.8) + 32).toFixed(2);
    const passaraCelsius = (grado) => ((grado - 32) / 1.8).toFixed(2);

    const temp = validar(dato);
    if (temp === false) {
      return (
        <div className="alerta-error">
          <p>datos introducidos erróneos</p>
        </div>
      );
    }

    return (
      <div className="conversor-resultados">
        <div className="conversion-col">
          <h4>Si el dato ({temp}) son grados Celsius (°C):</h4>
          <p className="conversion-valor">
            En Fahrenheit son: <strong>{pasaraFarenheit(temp)} ºF</strong>
          </p>
        </div>
        <div className="conversion-col">
          <h4>Si el dato ({temp}) son grados Fahrenheit (°F):</h4>
          <p className="conversion-valor">
            En Celsius son: <strong>{passaraCelsius(temp)} ºC</strong>
          </p>
        </div>
        <small className="info-formateo">
          (Resultado formateado a 2 decimales mediante el método estándar de JavaScript <code>.toFixed(2)</code>)
        </small>
      </div>
    );
  };

  const onChangeNum = (event) => {
    setTemperatura(event.target.value);
  };

  return (
    <div className="ejercicio-card">
      <div className="ejercicio-tag">Ejercicio 6.3 (Hooks - Conversor Numérico)</div>
      <h2>Conversión de grados</h2>
      <p className="ejercicio-instruccion">
        Introduce el valor de temperatura a convertir:
      </p>

      <div className="input-group">
        <label htmlFor="num">Valor de temperatura:</label>
        <input
          type="number"
          step="any"
          id="num"
          value={temperatura}
          onChange={onChangeNum}
          placeholder="Ej: 25 o 98.6"
        />
      </div>

      <div className="resultado-conversor">
        {temperatura !== '' && temperatura !== undefined ? (
          <ConversorGrados dato={temperatura} />
        ) : (
          <p className="hint-text">Introduce un número para ver la conversión.</p>
        )}
      </div>
    </div>
  );
}
