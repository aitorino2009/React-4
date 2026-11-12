# Respuestas Teóricas y Prácticas - React 4: Componentes y Hooks

**Asignatura:** Aplicacions Web / APOF  
**Curso:** 2º SMX / DAW - CC Sant Josep Obrer  
**Temas:** Tema 5 (Componentes) & Tema 6 (Hooks)  
**Autor:** Aitor Portales Crespí  
**Repositorio:** [github.com/aitorino2009/React-4](https://github.com/aitorino2009/React-4)

---

## 5.2 EXERCICIS COMPONENTS

### 5.1) EXERCICI: EXPLICAR diferencias entre los dos siguientes programas

A continuación se analizan en profundidad los programas propuestos en el enunciado:

#### Código de los dos programas:

##### PROGRAMA A:
```javascript
export default function ProgramaGrados () {
  const temperatura = 20
  const validar = (dato) =>{
    const valor = Number(dato) 
    return isNaN(valor) ? false: valor 
  }
  const pasaraFarenheit = (grado) => (grado * 1.8) + 32
  const inicio = (dato) => {
    const temp = validar(dato) 
    const grados = temp ? pasaraFarenheit(temp) 
                        : 'datos introducidos erróneos'
    return ( 
      <div>
        <h3>cálculos realizados</h3>
        <p> En Farenheit son: {grados} º</p>
      </div>
    ) 
  }
  return ( 
    <div>
      <h2>Termómetro digital</h2>
      <p>
        {
          inicio(temperatura) 
        }
      </p>
    </div>
  );
}
```

##### PROGRAMA B:
```javascript
export default function ProgramaGradosComponent () {
  const temperatura = 10
  const validar = (dato) =>{
    const valor = Number(dato) 
    return isNaN(valor) ? false: valor 
  }
  const pasaraFarenheit = (grado) => (grado * 1.8) + 32
  const Termometro = (props) => {
    const temp = validar(props.dato) 
    const grados = temp ? pasaraFarenheit(temp) 
                        : 'datos introducidos erróneos'
    return ( 
      <div>
        <h3>cálculos realizados</h3>
        <p> En Farenheit son: {grados} º</p>
      </div>
    ) 
  }
  return ( 
    <div>
      <h2>Termómetro digital</h2>
      <p>
        {
          <Termometro dato={temperatura} />
        }
      </p>
    </div>
  );
}
```

---

### Análisis comparativo detallado

| Criterio | Programa A | Programa B |
| :--- | :--- | :--- |
| **Tipo de función** | Función JavaScript auxiliar convencional que retorna JSX (`inicio`). | Auténtico **Componente Funcional de React** (`Termometro`). |
| **Nomenclatura** | `inicio` (comienza con minúscula, convención de función). | `Termometro` (PascalCase con mayúscula inicial, obligatorio en React). |
| **Recepción de datos** | Parámetro normal de función: `inicio(dato)`. | Objeto **`props`** formal de React: `Termometro = (props) => ...` y acceso con `props.dato`. |
| **Invocación / Renderizado** | Llamada directa de función: `{inicio(temperatura)}`. | Instanciación mediante sintaxis de etiqueta JSX: `<Termometro dato={temperatura} />`. |
| **Presencia en Virtual DOM / Fiber** | No crea un nodo propio. Se funde como parte del cuerpo de `ProgramaGrados`. | Crea un nodo de componente independiente en el árbol de React Fiber. |
| **Herramientas de depuración** | Invisible en las *React Developer Tools*. | Aparece claramente identificado en el árbol de componentes de las DevTools con sus `props`. |
| **Modularidad y Reutilización** | Muy baja: está acoplada al ámbito léxico interno de la función padre. | Máxima: puede extraerse a `Termometro.jsx`, exportarse e importarse en cualquier parte de la app. |
| **Optimización de rendimiento** | Se re-evalúa siempre que el padre renderiza. No se puede aislar con `React.memo`. | Permite optimizaciones avanzadas de memoización (`React.memo`, aislamiento de re-renderizados). |

#### Conclusión técnica del Ejercicio 5.1:
En **Programa A**, `inicio` solo actúa como un fragmentador de plantillas visuales dentro de una misma función, perdiendo todas las ventajas que ofrece la arquitectura basada en componentes de React.  
En cambio, el **Programa B** aplica las buenas prácticas y principios arquitectónicos de React: crea un componente independiente (`Termometro`), modular, reutilizable y desacoplado, que recibe datos a través del mecanismo unidireccional de `props`.

---

## 5.2 EXERCICI: COMPONENTS (Ibserveis)

- **Objetivo:** Separar la interfaz en componentes independientes y reutilizables (`comp_Header.jsx`, `Principal`, `Footer`).
- **Comprobación de actividad:** Al ejecutar la aplicación, el componente `<Header logo={imagenlogo} texto={texto_Header} />` recibe el logotipo generado y el texto descriptivo por props, renderizando la cabecera activa y estructurada.

---

## 5.3 EXERCICI: El "Muro de Servicios" de IBEROSTAR

- **Objetivo:** Construir una arquitectura jerárquica de 3 niveles:
  1. **Nivel 1 (Hijo - Base):** `Etiqueta.jsx` (recibe prop `texto` y retorna un recuadro o badge visual).
  2. **Nivel 2 (Intermedio):** `TarjetaServicio.jsx` (recibe `titulo`, `descripcion` y `tipoEtiqueta`, e incrusta en su interior a `<Etiqueta texto={props.tipoEtiqueta} />`).
  3. **Nivel 3 (Padre - Raíz):** `MuroServicios.jsx` (renderiza 3 tarjetas con datos diferentes para IBEROSTAR: "Desarrollo Web", "Motor de Reservas", "Optimización SEO").

---

## 6. EXERCICIS HOOKS (useState)

### 6.1) Comprobador de notas con condición 'Notable'
- **Modificación:** Se añadió la condición de evaluación para que las notas mayores a 6 (`nota > 6`) muestren la palabra **"Notable"**, manteniendo **"Aprobada"** para notas `>= 5` y **"Suspendida"** para inferiores a 5:
  ```javascript
  const calificacion = numNota > 6 
    ? 'Notable' 
    : (numNota >= 5 ? 'Aprobada' : 'Suspendida');
  ```

### 6.2) Saludos oficiales y función creardespedida
- **Modificación:** Se añadió la función `creardespedida` y el correspondiente botón:
  ```javascript
  const creardespedida = () => {
    setMensaje(`¡Adiós, hasta pronto ${nombre}! Esperamos verte de nuevo muy pronto.`);
  };
  ```

### 6.3) Conversor de grados con Celsius y 2 decimales
- **Modificación a):** Se implementó la función matemática para convertir de Fahrenheit a Celsius:
  $$\text{Celsius} = \frac{\text{Fahrenheit} - 32}{1.8}$$
- **Modificación b):** Se investigó y aplicó el método nativo de JavaScript `.toFixed(2)` para formatear el resultado con exactamente dos posiciones decimales:
  ```javascript
  const pasaraFarenheit = (grado) => ((grado * 1.8) + 32).toFixed(2);
  const passaraCelsius = (grado) => ((grado - 32) / 1.8).toFixed(2);
  ```

### 6.4) Máquina de operaciones (Multiplicar y Sumar)
- **Modificación:** Dentro de la función `iniciar`, se añadió el cálculo de la suma asegurando la conversión a número (`Number()`) para evitar concatenaciones de cadenas:
  ```javascript
  const iniciar = () => {
    const n1 = Number(numero1);
    const n2 = Number(numero2);
    const multiplica = n1 * n2;
    const suma = n1 + n2;
    setresultado({ multiplica, suma });
  };
  ```

### 6.5) Calculadora de Presupuestos IBEROSTAR
- **Estructura implementada:**
  1. `CalculadoraPresupuesto.jsx`: Gestiona dos estados independientes con `useState`:
     - `nombre`: texto del proyecto.
     - `horas`: horas estimadas multiplicadas por la tarifa fija de 30 €/hora.
  2. `Visualizador.jsx`: Componente de presentación que recibe `nombreProyecto` y `precioFinal` por props. Si `precioFinal > 500`, activa automáticamente el distintivo de **"Presupuesto Premium"**.
