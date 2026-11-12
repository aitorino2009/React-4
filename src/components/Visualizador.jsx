import React from 'react';

/**
 * Componente Visualizador (Repaso Tema 5)
 * Recibe por props: nombreProyecto y precioFinal.
 * Si precioFinal > 500, muestra el mensaje destacado: "Presupuesto Premium".
 */
export default function Visualizador(props) {
  const { nombreProyecto, precioFinal } = props;
  const esPremium = Number(precioFinal) > 500;

  return (
    <div className={`visualizador-presupuesto ${esPremium ? 'visualizador-premium' : ''}`}>
      <div className="visualizador-header">
        <h3>Resumen del Presupuesto</h3>
        {esPremium && (
          <span className="badge-premium">
            ⭐ Presupuesto Premium
          </span>
        )}
      </div>

      <div className="visualizador-body">
        <div className="fila-detalle">
          <span className="etiqueta">Proyecto:</span>
          <strong className="valor">
            {nombreProyecto && nombreProyecto.trim() ? nombreProyecto : 'Sin definir'}
          </strong>
        </div>

        <div className="fila-detalle">
          <span className="etiqueta">Precio Total Calculado:</span>
          <strong className="valor-precio">
            {Number(precioFinal || 0).toLocaleString('es-ES', {
              style: 'currency',
              currency: 'EUR'
            })}
          </strong>
        </div>

        {esPremium && (
          <div className="aviso-premium">
            <p>
              ¡Este proyecto supera los 500€! Se clasifica como <strong>Presupuesto Premium</strong> de IBEROSTAR con soporte técnico preferente.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
