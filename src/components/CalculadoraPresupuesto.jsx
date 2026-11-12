import React, { useState } from 'react';
import Visualizador from './Visualizador';

/**
 * Componente principal CalculadoraPresupuesto (Tema 6)
 * Empresa: IBEROSTAR
 * Controla la lógica de estado (nombre y horas) y renderiza el componente Visualizador pasando las props calculadas.
 */
export default function CalculadoraPresupuesto() {
  const PRECIO_HORA_FIJO = 30; // 30 €/hora según el enunciado

  // Definir el Estado usando useState:
  // 1) Uno para el nombre (texto vacío)
  // 2) Otro para las horas (valor inicial 0)
  const [nombre, setNombre] = useState('');
  const [horas, setHoras] = useState(0);

  // Funciones de Cambio usando e.target.value
  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleHorasChange = (e) => {
    const valor = Number(e.target.value);
    setHoras(valor < 0 ? 0 : valor);
  };

  // Lógica: Calcula una constante total multiplicando las horas por el precio fijo (30€/hora)
  const total = Number(horas || 0) * PRECIO_HORA_FIJO;

  return (
    <div className="ejercicio-card presupuesto-card">
      <div className="ejercicio-tag">Ejercicio 6.5 (Calculadora de Presupuestos IBEROSTAR)</div>
      <h2>Calculadora de Presupuestos - IBEROSTAR</h2>
      <p className="ejercicio-instruccion">
        Calcula el presupuesto estimado para desarrollos de "Páginas web y programación" a una tarifa fija de <strong>{PRECIO_HORA_FIJO}€/hora</strong>.
      </p>

      <form className="presupuesto-form" onSubmit={(e) => e.preventDefault()}>
        <div className="input-group">
          <label htmlFor="nombre-proyecto">Nombre del proyecto:</label>
          <input
            id="nombre-proyecto"
            type="text"
            value={nombre}
            onChange={handleNombreChange}
            placeholder="Ej: Nuevo portal de reservas IBEROSTAR"
          />
        </div>

        <div className="input-group">
          <label htmlFor="horas-trabajo">Horas estimadas de trabajo:</label>
          <input
            id="horas-trabajo"
            type="number"
            min="0"
            step="1"
            value={horas}
            onChange={handleHorasChange}
            placeholder="0"
          />
        </div>
      </form>

      {/* Llamada al componente Visualizador pasándole los datos calculados como props */}
      <Visualizador
        nombreProyecto={nombre}
        precioFinal={total}
      />
    </div>
  );
}
