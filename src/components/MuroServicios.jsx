import React from 'react';
import TarjetaServicio from './TarjetaServicio';

/**
 * Componente MuroServicios - Ejercicio 5.3 IBEROSTAR
 * Renderiza tres veces el componente TarjetaServicio con datos distintos
 * para la empresa IBEROSTAR ("Páginas web y programación").
 */
export default function MuroServicios() {
  const servicios = [
    {
      id: 1,
      titulo: 'Desarrollo Web y Portal Turístico',
      descripcion: 'Página web responsive de alto rendimiento con catálogo de habitaciones, actividades e integración multimedia.',
      tipoEtiqueta: 'Nuevo'
    },
    {
      id: 2,
      titulo: 'Sistema de Reservas en Tiempo Real',
      descripcion: 'Motor transaccional seguro con pasarela de pagos integrada, gestión de disponibilidad y notificaciones automáticas.',
      tipoEtiqueta: 'Urgente'
    },
    {
      id: 3,
      titulo: 'Optimización SEO y Posicionamiento',
      descripcion: 'Estrategia integral de posicionamiento en motores de búsqueda, rendimiento Core Web Vitals y analítica avanzada.',
      tipoEtiqueta: 'Destacado'
    }
  ];

  return (
    <div className="muro-servicios-wrapper">
      <div className="muro-header">
        <span className="empresa-sub">IBEROSTAR</span>
        <h2>Muro de Servicios</h2>
        <p>Páginas web y programación profesional</p>
      </div>

      <div className="tarjetas-container">
        {servicios.map((s) => (
          <TarjetaServicio
            key={s.id}
            titulo={s.titulo}
            descripcion={s.descripcion}
            tipoEtiqueta={s.tipoEtiqueta}
          />
        ))}
      </div>
    </div>
  );
}
