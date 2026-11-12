import React, { useState } from 'react';

/**
 * Ejercicio 6.2: Bienvenidas oficiales
 * Requisito: Afegir funció anomenada "creardespedida" i també un botó al programa per acomiadar-se de l'usuari.
 */
export default function ProgramaSaludos() {
  const valor_inicial = '';
  const [mensaje, setMensaje] = useState(valor_inicial);
  const [nombre, setNombre] = useState('');

  const crearSaludo = () => {
    if (!nombre.trim()) {
      setMensaje('Por favor, escribe un nombre primero.');
      return;
    }
    setMensaje(`Hola, ¿cómo estás ${nombre}? ¡Bienvenido/a a la aplicación!`);
  };

  const creardespedida = () => {
    if (!nombre.trim()) {
      setMensaje('Por favor, escribe un nombre primero.');
      return;
    }
    setMensaje(`¡Adiós, hasta pronto ${nombre}! Esperamos verte de nuevo muy pronto.`);
  };

  const onChangeHandler = (event) => {
    setNombre(event.target.value);
  };

  return (
    <div className="ejercicio-card">
      <div className="ejercicio-tag">Ejercicio 6.2 (Hooks - useState y Eventos)</div>
      <h2>Bienvenidas oficiales</h2>
      <p className="ejercicio-instruccion">
        Introduce tu nombre y haz clic en los botones de interacción:
      </p>

      <div className="input-group">
        <label htmlFor="campo_nombre">Nombre del usuario:</label>
        <input
          type="text"
          id="campo_nombre"
          name="campo_nombre"
          value={nombre}
          onChange={onChangeHandler}
          placeholder="Escribe tu nombre aquí..."
        />
      </div>

      <div className="button-group">
        <button
          type="button"
          className="btn btn-saludo"
          onClick={crearSaludo}
        >
          Enviar saludo
        </button>
        <button
          type="button"
          className="btn btn-despedida"
          onClick={creardespedida}
        >
          Enviar despedida
        </button>
      </div>

      {mensaje && (
        <div className="mensaje-feedback">
          <p>{mensaje}</p>
        </div>
      )}
    </div>
  );
}
