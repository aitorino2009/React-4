import React from 'react';

/**
 * Componente Etiqueta (Nivel más bajo de la jerarquía)
 * Muestra un pequeño recuadro / badge con el texto proporcionado (ej: "Nuevo", "Urgente", "Destacado").
 */
export default function Etiqueta(props) {
  const { texto } = props;

  return (
    <span className={`etiqueta-badge etiqueta-${String(texto || '').toLowerCase().trim()}`}>
      {texto}
    </span>
  );
}
