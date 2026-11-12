# Práctica React 4: Componentes y Hooks (Temas 5 y 6)

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF.svg)](https://vitejs.dev/)
[![Git](https://img.shields.io/badge/Git-Workflow-F05032.svg)](https://git-scm.com/)
[![GitHub](https://img.shields.io/badge/GitHub-aitorino2009%2FReact--4-black.svg)](https://github.com/aitorino2009/React-4)

Repositorio oficial para las prácticas del **Tema 5 (Componentes)** y **Tema 6 (Hooks)** de la asignatura **APOF (Aplicacions Web)** en **CC Sant Josep Obrer**.

---

## Tabla de Contenidos

- [Estructura del Proyecto](#estructura-del-proyecto)
- [Ejercicios Desarrollados](#ejercicios-desarrollados)
  - [Tema 5: Componentes](#tema-5-componentes)
  - [Tema 6: Hooks](#tema-6-hooks)
- [Flujo de Trabajo Git (Ramas y Commits)](#flujo-de-trabajo-git-ramas-y-commits)
- [Instalación y Puesta en Marcha](#instalación-y-puesta-en-marcha)
- [Respuestas Teóricas](#respuestas-teóricas)

---

## Estructura del Proyecto

```text
React 4/
├── index.html
├── package.json
├── vite.config.js
├── RESPUESTAS_TEORIA.md        # Documento explicativo completo (Castellano)
├── RESPOSTES_TEORIA.md          # Document explicatiu complet (Català)
├── README.md                    # Documentación general del repositorio
├── public/
└── src/
    ├── App.jsx                  # Dashboard interactivo con navegación por pestañas
    ├── App.css                  # Estilos visuales y responsivos de todos los ejercicios
    ├── main.jsx                 # Punto de entrada de React
    └── components/
        ├── Saludo.jsx                   # Pág. 32: Demostración básica de props
        ├── ProgramaGrados.jsx           # Pág. 34: Programa A (Función JS convencional)
        ├── ProgramaGradosComponent.jsx  # Pág. 35: Programa B (Componente React con Props)
        ├── comp_Header.jsx              # Pág. 36: Componente Header reutilizable
        ├── webcompleta.jsx              # Pág. 36-37: Web modular de Ibserveis
        ├── Etiqueta.jsx                 # Pág. 38: Ej. 5.3 Componente base / badge
        ├── TarjetaServicio.jsx          # Pág. 38: Ej. 5.3 Componente intermedio
        ├── MuroServicios.jsx            # Pág. 38: Ej. 5.3 Muro de servicios IBEROSTAR
        ├── ProgramaNotas.jsx            # Pág. 41: Ej. 6.1 Condición de evaluación 'Notable'
        ├── ProgramaSaludos.jsx          # Pág. 42: Ej. 6.2 Función creardespedida y botón
        ├── ProgramaCalculadora.jsx      # Pág. 43: Ej. 6.3 passaraCelsius y formateo .toFixed(2)
        ├── Calculadora.jsx              # Pág. 44: Ej. 6.4 Máquina con suma y multiplicación
        ├── Visualizador.jsx             # Pág. 45: Ej. 6.5 Presentación con alerta Premium (>500€)
        └── CalculadoraPresupuesto.jsx   # Pág. 45: Ej. 6.5 Lógica y estado de presupuestos (30€/h)
```

---

## Ejercicios Desarrollados

### Tema 5: Componentes

1. **5.1 Introducción a Props y Comparativa de Arquitectura (Págs. 32-35):**
   - **Saludo:** Renderiza un saludo personalizado recibiendo `props.name` ("Naima", "Jezabel", "Gori").
   - **Ejercicio 5.1 (Programa A vs Programa B):** Comparativa detallada entre una función auxiliar de JavaScript (`inicio`) y un verdadero componente React modular (`<Termometro />`). Ver análisis en [RESPUESTAS_TEORIA.md](./RESPUESTAS_TEORIA.md).

2. **5.2 Ibserveis Web Completa (Págs. 36-37):**
   - Creación de `comp_Header.jsx` recibiendo `logo` y `texto`.
   - Ensamblaje en `webcompleta.jsx` con componentes `Principal` y `Footer`.
   - Comprobación del correcto renderizado y actividad del header.

3. **5.3 El "Muro de Servicios" de IBEROSTAR (Pág. 38):**
   - Arquitectura en 3 niveles jerárquicos:
     - `Etiqueta.jsx` (Hijo base): muestra badges visuales con el estado del servicio ("Nuevo", "Urgente", "Destacado").
     - `TarjetaServicio.jsx` (Intermedio): encapsula la tarjeta del servicio e incrusta a `<Etiqueta />`.
     - `MuroServicios.jsx` (Padre): renderiza 3 tarjetas con datos diferenciados para IBEROSTAR.

---

### Tema 6: Hooks (`useState`)

1. **6.1 Comprobador de Notas (Pág. 41):**
   - Uso de `useState` para capturar la nota en tiempo real.
   - Condición añadida: si la nota es mayor que 6 (`nota > 6`), muestra **"Notable"**, si es `>= 5` muestra **"Aprobada"**, y en caso contrario **"Suspendida"**.

2. **6.2 Bienvenidas Oficiales (Pág. 42):**
   - Estado para el nombre y el mensaje.
   - Añadida la función `creardespedida` y un botón dedicado para despedir cordialmente al usuario con su nombre.

3. **6.3 Conversor de Grados (Pág. 43):**
   - Añadida la función `passaraCelsius` para convertir de Fahrenheit a Celsius: `(grado - 32) / 1.8`.
   - Aplicación de buenas prácticas para formatear los números a **2 decimales** utilizando el método estándar de JavaScript `.toFixed(2)`.

4. **6.4 Máquina de Operaciones (Pág. 44):**
   - Extensión de la función `iniciar` para calcular tanto la **multiplicación** como la **suma** de los dos operandos introducidos, asegurando tipado numérico estricto con `Number()`.

5. **6.5 Calculadora de Presupuestos IBEROSTAR (Pág. 45):**
   - `CalculadoraPresupuesto.jsx`: gestión de dos estados independientes (nombre del proyecto y horas de trabajo).
   - Cálculo automático del importe a tarifa fija de **30 €/hora**.
   - `Visualizador.jsx`: componente hijo que muestra el presupuesto y añade el distintivo **"Presupuesto Premium"** si el coste supera los 500 €.

---

## Flujo de Trabajo Git (Ramas y Commits)

El proyecto se ha construido rigurosamente siguiendo la metodología de ramas de características (*feature branches*) y la convención de *Conventional Commits*:

1. **`main`**: Rama troncal principal donde se integran las funcionalidades terminadas.
2. **`feature/tema-5-components`**: Implementación de todos los componentes y ejercicios del Tema 5.
3. **`feature/tema-6-hooks`**: Implementación de todos los ejercicios con `useState` del Tema 6.
4. **`feature/ui-dashboard-integracio`**: Desarrollo del dashboard de navegación con selector interactivo de ejercicios y estilos responsivos.
5. **`docs/teoria-i-documentacio`**: Elaboración de las respuestas teóricas y documentación bilingüe.

---

## Instalación y Puesta en Marcha

Para clonar y ejecutar este proyecto en tu entorno local:

```bash
# 1. Clonar el repositorio
git clone https://github.com/aitorino2009/React-4.git

# 2. Entrar en la carpeta del proyecto
cd React-4

# 3. Instalar las dependencias
npm install

# 4. Iniciar el servidor de desarrollo local
npm run dev

# 5. Compilar para producción
npm run build
```

---

## Respuestas Teóricas

Para consultar la explicación detallada de las diferencias entre el Programa A y el Programa B (Ejercicio 5.1), revisa los archivos:
- 🇪🇸 [RESPUESTAS_TEORIA.md](./RESPUESTAS_TEORIA.md) (Castellano)
- 🏴 [RESPOSTES_TEORIA.md](./RESPOSTES_TEORIA.md) (Català)
