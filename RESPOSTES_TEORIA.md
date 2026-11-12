# Respostes Teòriques i Pràctiques - React 4: Components i Hooks

**Assignatura:** Aplicacions Web / APOF  
**Curs:** 2n SMX / DAW - CC Sant Josep Obrer  
**Temes:** Tema 5 (Components) & Tema 6 (Hooks)  
**Autor:** Aitor Portales Crespí  
**Repositori:** [github.com/aitorino2009/React-4](https://github.com/aitorino2009/React-4)

---

## 5.2 EXERCICIS COMPONENTS

### 5.1) EXERCICI: EXPLICAR diferències entre els dos següents programes

A continuació s'expliquen de manera tècnica i detallada les diferències entre el **Programa A** i el **Programa B** presentats a la guia didàctica:

#### Comparativa Tècnica:

1. **Definició i Convenció de Noms:**
   - **Programa A:** Defineix una funció JavaScript auxiliar anomenada `inicio(dato)`. Comença amb minúscula, per la qual cosa el motor JSX de React no la reconeix com a component sinó com una funció habitual.
   - **Programa B:** Defineix `Termometro(props)` utilitzant la convenció obligatòria de React anomenada **PascalCase** (amb majúscula inicial). Això permet a React diferenciar els components personalitzats de les etiquetes HTML estàndard (com `<div>` o `<p>`).

2. **Pas de Paràmetres (Arguments de Funció vs Props):**
   - **Programa A:** Pasa la dada com un argument ordinari de funció: `inicio(temperatura)`.
   - **Programa B:** Fa servir el mecanisme oficial de comunicació unidireccional de React: l'objecte **`props`**. La dada s'envia com un atribut JSX (`dato={temperatura}`) i es rep formalment a la signatura del component com `(props)` accedint mitjançant `props.dato`.

3. **Invocació i Sintaxi de Renderitzat:**
   - **Programa A:** S'executa com una crida a funció directa dins d'una expressió JSX: `{inicio(temperatura)}`.
   - **Programa B:** S'instancia amb la sintaxi declarativa d'etiquetes JSX: `<Termometro dato={temperatura} />`.

4. **Arbre de Components (Virtual DOM i React Fiber):**
   - **Programa A:** El resultat de la funció `inicio` s'incorpora directament al cos del component pare sense crear cap límit de component.
   - **Programa B:** Crea un **node de component independent** a l'arbre de React Fiber. Això permet que aparegui clarament identificat a les *React Developer Tools* i que React pugui gestionar el seu cicle de vida i la seva reconciliació de forma aïllada.

5. **Modularitat, Reutilització i Rendiment:**
   - **Programa A:** Està fortament acoblat al fitxer i a la funció on es troba definit.
   - **Programa B:** És totalment modular; es pot extreure a un fitxer separat `Termometro.jsx`, exportar-lo i reutilitzar-lo a qualsevol altre indret de l'aplicació. A més, permet optimitzacions de rendiment com `React.memo` per evitar renderitzats innecessaris.

---

## 5.2 EXERCICI: COMPONENTS (Ibserveis)

- **Objectiu:** Separació modular de la interfície d'Ibserveis en components: `comp_Header.jsx`, `Principal` i `Footer`.
- **Comprovació:** S'executa `App.jsx` i es comprova que el component `comp_Header` rep correctament les `props` del logotip i el text publicitari, mostrant-se actiu i estructurat correctament.

---

## 5.3 EXERCICI: El "Muro de Servicios" d'IBEROSTAR

- **Jerarquia de tres nivells implementada:**
  1. `Etiqueta.jsx` (Nivell fill): Rep la prop `texto` i mostra un distintiu ("Nuevo", "Urgente", "Destacado").
  2. `TarjetaServicio.jsx` (Nivell intermedi): Rep `titulo`, `descripcion` i `tipoEtiqueta`, i conté a l'interior el component fill `<Etiqueta texto={props.tipoEtiqueta} />`.
  3. `MuroServicios.jsx` (Nivell pare): Renderitza tres targetes de servei amb informació específica dels serveis d'IBEROSTAR.

---

## 6. EXERCICIS HOOKS (useState)

### 6.1) Comprovador de notes amb condició 'Notable'
S'ha afegit la condició ternària encadenada perquè quan la nota sigui superior a 6 (`nota > 6`) es mostri la paraula **'Notable'**, mantenint **'Aprobada'** si és `>= 5` i **'Suspendida'** si és `< 5`.

### 6.2) Benvingudes oficials i funció creardespedida
S'ha afegit la funció `creardespedida` i el botó corresponent per acomiadar-se de l'usuari mostrant un missatge personalitzat amb el nom emmagatzemat a l'estat.

### 6.3) Conversor de graus amb Celsius i 2 decimals
S'ha incorporat la funció `passaraCelsius` per convertir de Fahrenheit a Celsius:
$$\text{Celsius} = \frac{\text{Fahrenheit} - 32}{1.8}$$
S'ha cercat i aplicat el mètode natiu de JavaScript `.toFixed(2)` per garantir que els resultats sempre tinguin 2 decimals exactes.

### 6.4) Màquina de multiplicar i sumar
S'ha actualitzat la funció `iniciar` de la calculadora perquè, a més de multiplicar els dos nombres introduïts, en calculi la suma utilitzant `Number()` per evitar errors de concatenació de cadenes.

### 6.5) Calculadora de Pressupostos IBEROSTAR
S'ha implementat el component principal `CalculadoraPresupuesto.jsx` amb dos estats de `useState` (nom del projecte i hores de feina a 30 €/h). Les dades calculades es passen per `props` al component fill `Visualizador.jsx`, el qual activa automàticament el distintiu de **"Presupuesto Premium"** quan el pressupost supera els 500 €.
