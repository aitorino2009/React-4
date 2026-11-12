import React, { useState } from 'react';
import './App.css';

// Componentes Tema 5
import Saludo from './components/Saludo';
import ProgramaGrados from './components/ProgramaGrados';
import ProgramaGradosComponent from './components/ProgramaGradosComponent';
import WebCompleta from './components/webcompleta';
import MuroServicios from './components/MuroServicios';

// Componentes Tema 6
import ProgramaNotas from './components/ProgramaNotas';
import ProgramaSaludos from './components/ProgramaSaludos';
import ProgramaCalculadora from './components/ProgramaCalculadora';
import Calculadora from './components/Calculadora';
import CalculadoraPresupuesto from './components/CalculadoraPresupuesto';

export default function App() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'Todos los ejercicios' },
    { id: 't5-1', label: '5.1 Saludo y Comparativa A/B' },
    { id: 't5-2', label: '5.2 Ibserveis Web Completa' },
    { id: 't5-3', label: '5.3 Muro IBEROSTAR' },
    { id: 't6-1', label: '6.1 Comprobador Notas' },
    { id: 't6-2', label: '6.2 Saludos y Despedida' },
    { id: 't6-3', label: '6.3 Conversor Grados' },
    { id: 't6-4', label: '6.4 Multiplicar y Sumar' },
    { id: 't6-5', label: '6.5 Presupuestos IBEROSTAR' },
    { id: 'teoria', label: 'Teoría: Ejercicio 5.1' }
  ];

  return (
    <div className="app-container">
      {/* Header Principal */}
      <header className="app-header">
        <div className="header-content">
          <div className="header-badge">Práctica React 4 | APOF</div>
          <h1>Tema 5: Componentes & Tema 6: Hooks</h1>
          <p className="subtitle">
            CC Sant Josep Obrer · Desarrollo modular con React 19, Vite, Git & GitHub
          </p>
        </div>
      </header>

      {/* Navegación por pestañas */}
      <nav className="tabs-nav" aria-label="Navegación de ejercicios">
        <div className="tabs-list">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Contenido Principal */}
      <main className="app-main">
        {/* VISTA: 5.1 SALUDO Y COMPARATIVA */}
        {(activeTab === 'all' || activeTab === 't5-1') && (
          <section className="section-block">
            <div className="section-title">
              <span className="unit-badge">Tema 5.1</span>
              <h2>Saludo con Props y Comparativa de Arquitectura (Programa A vs B)</h2>
            </div>

            {/* Demostración Saludo.js (Pág. 32) */}
            <div className="demo-subblock">
              <h3>Demostración Componente Saludo (props.name)</h3>
              <p className="desc-text">
                Renderizado del componente <code>Saludo</code> con diferentes valores de props ("Naima", "Jezabel", "Gori") según la página 32:
              </p>
              <div className="saludos-row">
                <Saludo name=" Naima" />
                <Saludo name=" Jezabel" />
                <Saludo name=" Gori" />
              </div>
            </div>

            {/* Comparativa Programa A vs Programa B (Pág. 34-35) */}
            <div className="demo-subblock">
              <h3>Ejercicio 5.1: Comparativa entre Programa A y Programa B</h3>
              <div className="comparativa-grid">
                <div className="comparativa-col">
                  <h4>Programa A (Función JS que retorna JSX)</h4>
                  <ProgramaGrados />
                </div>
                <div className="comparativa-col">
                  <h4>Programa B (Componente React con Props)</h4>
                  <ProgramaGradosComponent />
                </div>
              </div>
              <div className="diferencias-resumen">
                <h4>Principales diferencias técnicas:</h4>
                <ul>
                  <li>
                    <strong>Programa A:</strong> <code>inicio(dato)</code> es solo una función JavaScript invocada directamente en la expresión <code>{'{inicio(temperatura)}'}</code>. No crea un nodo de componente independiente en el Virtual DOM de React.
                  </li>
                  <li>
                    <strong>Programa B:</strong> <code>Termometro</code> es un auténtico Componente Funcional de React (con mayúscula inicial), recibe un objeto <code>props</code> formalmente y se renderiza con sintaxis JSX <code>{'<Termometro dato={temperatura} />'}</code>, permitiendo aislamiento de ciclo de vida y optimizaciones de renderizado.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* VISTA: 5.2 COMPONENTS IBSERVEIS */}
        {(activeTab === 'all' || activeTab === 't5-2') && (
          <section className="section-block">
            <div className="section-title">
              <span className="unit-badge">Tema 5.2</span>
              <h2>Ejercicio 5.2: Arquitectura Modular (comp_Header, Principal, Footer)</h2>
            </div>
            <p className="desc-text">
              Construcción de la página web modular de la empresa <strong>Ibserveis</strong>, comprobando la actividad del componente <code>comp_Header</code>:
            </p>
            <div className="webcompleta-wrapper">
              <WebCompleta />
            </div>
          </section>
        )}

        {/* VISTA: 5.3 MURO IBEROSTAR */}
        {(activeTab === 'all' || activeTab === 't5-3') && (
          <section className="section-block">
            <div className="section-title">
              <span className="unit-badge">Tema 5.3</span>
              <h2>Ejercicio 5.3: El "Muro de Servicios" de IBEROSTAR</h2>
            </div>
            <p className="desc-text">
              Jerarquía de tres niveles: <strong>MuroServicios (Padre)</strong> &rarr; <strong>TarjetaServicio (Intermedio)</strong> &rarr; <strong>Etiqueta (Hijo)</strong>.
            </p>
            <MuroServicios />
          </section>
        )}

        {/* VISTA: 6.1 COMPROBADOR DE NOTAS */}
        {(activeTab === 'all' || activeTab === 't6-1') && (
          <section className="section-block">
            <div className="section-title">
              <span className="unit-badge">Tema 6.1</span>
              <h2>Ejercicio 6.1: Comprobador de Notas (useState)</h2>
            </div>
            <ProgramaNotas />
          </section>
        )}

        {/* VISTA: 6.2 SALUDOS Y DESPEDIDA */}
        {(activeTab === 'all' || activeTab === 't6-2') && (
          <section className="section-block">
            <div className="section-title">
              <span className="unit-badge">Tema 6.2</span>
              <h2>Ejercicio 6.2: Bienvenidas Oficiales y Función creardespedida</h2>
            </div>
            <ProgramaSaludos />
          </section>
        )}

        {/* VISTA: 6.3 CONVERSOR DE GRADOS */}
        {(activeTab === 'all' || activeTab === 't6-3') && (
          <section className="section-block">
            <div className="section-title">
              <span className="unit-badge">Tema 6.3</span>
              <h2>Ejercicio 6.3: Conversor de Grados (Fahrenheit & Celsius con .toFixed(2))</h2>
            </div>
            <ProgramaCalculadora />
          </section>
        )}

        {/* VISTA: 6.4 MULTIPLICAR Y SUMAR */}
        {(activeTab === 'all' || activeTab === 't6-4') && (
          <section className="section-block">
            <div className="section-title">
              <span className="unit-badge">Tema 6.4</span>
              <h2>Ejercicio 6.4: Máquina de Operaciones (Multiplicación y Suma)</h2>
            </div>
            <Calculadora />
          </section>
        )}

        {/* VISTA: 6.5 PRESUPUESTOS IBEROSTAR */}
        {(activeTab === 'all' || activeTab === 't6-5') && (
          <section className="section-block">
            <div className="section-title">
              <span className="unit-badge">Tema 6.5</span>
              <h2>Ejercicio 6.5: Calculadora de Presupuestos IBEROSTAR</h2>
            </div>
            <CalculadoraPresupuesto />
          </section>
        )}

        {/* VISTA: TEORÍA EJERCICIO 5.1 */}
        {(activeTab === 'all' || activeTab === 'teoria') && (
          <section className="section-block teoria-section">
            <div className="section-title">
              <span className="unit-badge">Teoría</span>
              <h2>Resolución Teórica: Ejercicio 5.1 (Programa A vs Programa B)</h2>
            </div>
            <div className="teoria-card">
              <h3>¿Cuáles son las diferencias fundamentales entre el Programa A y el Programa B?</h3>

              <div className="teoria-grid">
                <div className="teoria-box">
                  <h4>1. Naturaleza y Convención del Código</h4>
                  <p>
                    <strong>Programa A:</strong> Define una función auxiliar común de JavaScript llamada <code>inicio(dato)</code> en minúscula. No sigue la convención de componentes de React.
                  </p>
                  <p>
                    <strong>Programa B:</strong> Define <code>Termometro</code> en PascalCase (mayúscula inicial), que es la convención obligatoria en React para que el transpilador JSX (Babel/SWC) lo identifique como un componente y no como una etiqueta HTML estándar.
                  </p>
                </div>

                <div className="teoria-box">
                  <h4>2. Paso de Datos (Argumentos vs Props)</h4>
                  <p>
                    <strong>Programa A:</strong> Pasa el parámetro por llamada de función JavaScript estándar: <code>inicio(temperatura)</code>.
                  </p>
                  <p>
                    <strong>Programa B:</strong> Utiliza el mecanismo nativo de comunicación padre-hijo de React: el objeto <strong>props</strong> mediante atributos JSX: <code>&lt;Termometro dato={'{temperatura}'} /&gt;</code>. Dentro del hijo se accede a <code>props.dato</code>.
                  </p>
                </div>

                <div className="teoria-box">
                  <h4>3. Árbol de Renderizado y Virtual DOM</h4>
                  <p>
                    <strong>Programa A:</strong> La llamada <code>inicio()</code> se evalúa directamente dentro del cuerpo del componente padre. Para React, el JSX resultante forma parte del mismo componente padre sin entidad propia.
                  </p>
                  <p>
                    <strong>Programa B:</strong> <code>&lt;Termometro /&gt;</code> crea un nodo propio en el árbol de componentes (React Fiber / Virtual DOM). Esto permite que aparezca en las <em>React Developer Tools</em> y que React pueda optimizar su renderizado de forma aislada (por ejemplo con <code>React.memo</code>).
                  </p>
                </div>

                <div className="teoria-box">
                  <h4>4. Reutilización y Mantenibilidad</h4>
                  <p>
                    <strong>Programa A:</strong> Acopla la lógica a una función interna de un solo archivo.
                  </p>
                  <p>
                    <strong>Programa B:</strong> Cumple el principio de modularidad y responsabilidad única de React. <code>Termometro</code> puede exportarse a su propio archivo (<code>Termometro.jsx</code>) y reutilizarse en cualquier otra vista de la aplicación pasándole cualquier valor en la prop <code>dato</code>.
                  </p>
                </div>
              </div>

              <div className="teoria-doc-link">
                <p>
                  Documentación completa redactada en los archivos markdown:{' '}
                  <code>RESPUESTAS_TEORIA.md</code> (Castellano) y <code>RESPOSTES_TEORIA.md</code> (Català).
                </p>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer del Proyecto */}
      <footer className="app-footer">
        <p>Práctica de React 4 · Tema 5 (Componentes) y Tema 6 (Hooks) · CIFP / CC Sant Josep Obrer</p>
        <p className="repo-info">Repositorio GitHub: <code>aitorino2009/React-4</code></p>
      </footer>
    </div>
  );
}
