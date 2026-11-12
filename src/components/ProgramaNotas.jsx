import React, { useState } from 'react';

/**
 * Ejercicio 6.1: Comprobador de notas
 * Requisito: Afegir condició per fer que, si la nota és més gran que 6, surti la paraula 'Notable'
 */
export default function ProgramaNotas() {
  const valor_inicial = 0;
  const [nota, setNota] = useState(valor_inicial);

  const asignaNota = (event) => {
    const { value } = event.target;
    setNota(value);
  };

  // Convertimos a número para evaluar numéricamente
  const numNota = Number(nota);
  const calificacion = isNaN(numNota)
    ? 'Valor no válido'
    : numNota > 6
      ? 'Notable'
      : numNota >= 5
        ? 'Aprobada'
        : 'Suspendida';

  return (
    <div className="ejercicio-card">
      <div className="ejercicio-tag">Ejercicio 6.1 (Hooks - useState)</div>
      <h2>Comprobador de notas</h2>
      <p className="ejercicio-instruccion">
        Introduce una nota numérica (escribe o haz doble clic según la guía):
      </p>

      <div className="input-group">
        <label htmlFor="nota">Nota del alumno:</label>
        <input
          type="number"
          step="0.1"
          min="0"
          max="10"
          id="nota"
          value={nota}
          onChange={asignaNota}
          onDoubleClick={asignaNota}
          placeholder="Escribe la nota..."
        />
      </div>

      <div className="resultado-card">
        <p>
          La nota es ahora: <strong className="valor-destacado">{nota}</strong>
        </p>
        <p>
          Y esa nota es:{' '}
          <span
            className={`estado-nota ${
              calificacion === 'Notable'
                ? 'estado-notable'
                : calificacion === 'Aprobada'
                  ? 'estado-aprobada'
                  : 'estado-suspendida'
            }`}
          >
            {calificacion}
          </span>
        </p>
      </div>

      <div className="regla-info">
        <small>
          Condición implementada: <code>nota &gt; 6 ? 'Notable' : (nota &gt;= 5 ? 'Aprobada' : 'Suspendida')</code>
        </small>
      </div>
    </div>
  );
}
