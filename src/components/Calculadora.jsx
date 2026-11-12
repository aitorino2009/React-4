import React, { useState } from 'react';

/**
 * Ejercicio 6.4: Máquina de operaciones
 * Requisito: Afegir codi, a la funció d'inici, que mostri la suma dels dos números introduïts.
 */
export default function Calculadora() {
  const [numero1, setnumero1] = useState(0);
  const [numero2, setnumero2] = useState(0);
  const [resultado, setresultado] = useState(null);

  const iniciar = () => {
    // Aseguramos conversión numérica estricta para evitar concatenaciones de texto al sumar
    const n1 = Number(numero1);
    const n2 = Number(numero2);

    const multiplica = n1 * n2;
    const suma = n1 + n2;

    setresultado({
      multiplica,
      suma
    });
  };

  const onChangeNum1 = (event) => {
    setnumero1(event.target.value);
  };

  const onChangeNum2 = (event) => {
    setnumero2(event.target.value);
  };

  return (
    <div className="ejercicio-card">
      <div className="ejercicio-tag">Ejercicio 6.4 (Hooks - Operaciones Matemáticas)</div>
      <h2>Máquina de multiplicar y sumar</h2>
      <p className="ejercicio-instruccion">
        Introduce dos números y pulsa el botón "Calcula" para obtener la multiplicación y la suma:
      </p>

      <div className="inputs-dual">
        <div className="input-group">
          <label htmlFor="num1">Primer número:</label>
          <input
            type="number"
            id="num1"
            value={numero1}
            onChange={onChangeNum1}
            placeholder="Número 1"
          />
        </div>

        <div className="input-group">
          <label htmlFor="num2">Segundo número:</label>
          <input
            type="number"
            id="num2"
            value={numero2}
            onChange={onChangeNum2}
            placeholder="Número 2"
          />
        </div>
      </div>

      <button type="button" className="btn btn-primary" onClick={iniciar}>
        Calcula
      </button>

      {resultado !== null && (
        <div className="resultados-operaciones">
          <div className="resultado-item mult">
            <h3>Resultado de la multiplicación:</h3>
            <span className="res-valor">{resultado.multiplica}</span>
          </div>
          <div className="resultado-item sum">
            <h3>Resultado de la suma (añadido en la función de inicio):</h3>
            <span className="res-valor">{resultado.suma}</span>
          </div>
        </div>
      )}
    </div>
  );
}
