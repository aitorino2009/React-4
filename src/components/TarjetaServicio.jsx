import React from 'react';
import Etiqueta from './Etiqueta';

/**
 * Componente intermedio: TarjetaServicio
 * Representa un servicio individual.
 * Estructura:
 * - Un título <h2>
 * - Un párrafo <p>
 * - El componente hijo <Etiqueta texto={props.tipoEtiqueta} />
 */
export default function TarjetaServicio(props) {
  const { titulo, descripcion, tipoEtiqueta } = props;

  return (
    <article className="tarjeta-servicio-card">
      <div className="tarjeta-top">
        <h2>{titulo}</h2>
        <Etiqueta texto={tipoEtiqueta} />
      </div>
      <p>{descripcion}</p>
    </article>
  );
}
