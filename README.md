# Simulador de Ascenso de Escala Magisterial (Offline)

Aplicación web **100% offline**, sin backend, inspirada visualmente en simuladores
institucionales de evaluación (referencia visual únicamente; **no** replica reglas
oficiales de ningún examen de terceros). Sirve como simulador cerrado de práctica
para el Concurso de Ascenso de Escala, con bancos de preguntas predefinidos por año.

## Estructura de carpetas

```
simulador-ascenso/
├── index.html                  # Único punto de entrada (todas las "pantallas")
├── css/
│   └── estilos.css             # Estética institucional, responsive, @media print
├── js/
│   ├── datos.js                 # Carga de bancos de preguntas y claves (fetch a JSON)
│   ├── reglas-evaluacion.js     # Reglas de puntaje/condición, desacopladas y documentadas
│   ├── persistencia.js          # Guardado/restauración temporal en localStorage
│   ├── motor-examen.js          # Estado del intento, selección aleatoria, temporizador
│   ├── reporte.js               # Construcción de HTML de resumen y reporte imprimible
│   ├── admin.js                 # Panel de administración local (opcional, aislado)
│   └── ui.js                    # Orquestación de DOM y eventos (único módulo que toca el DOM)
└── data/
    ├── config-anios.json        # Registro central de años disponibles
    ├── escalas.json             # Tabla de equivalencias / reglas de escala (configurable)
    ├── preguntas/
    │   └── preguntas-AAAA.json  # Banco de preguntas de cada año (SOLO preguntas)
    └── claves/
        └── claves-AAAA.json     # Claves correctas de cada año (vinculadas por ID)
```

## Cómo usarlo localmente

1. Descomprime la carpeta `simulador-ascenso` en tu computador.
2. Debido a que los navegadores restringen `fetch()` sobre archivos `file://` en
   algunos casos, la forma más confiable de usarlo offline es levantar un
   servidor local estático (no requiere internet):
   - Con Python instalado: abre una terminal dentro de la carpeta y ejecuta
     `python -m http.server 8000`, luego abre `http://localhost:8000` en tu navegador.
   - Alternativamente, usa la extensión "Live Server" de VS Code, o cualquier
     servidor estático local similar.
   - Esto NO requiere conexión a internet: el servidor corre en tu propia máquina.
3. Selecciona año y escala, sigue las instrucciones y realiza el simulacro.
4. Al finalizar, revisa el resumen y accede al reporte detallado para imprimir
   o guardar como PDF (Ctrl+P / "Guardar como PDF" del navegador).

### Panel de administración local (opcional)
- Accede mediante el botón discreto "⚙" en el pie de página, o navegando a
  `index.html#admin`.
- Permite pegar/editar bancos de preguntas y claves en formato JSON, validar
  su consistencia (IDs cruzados, valores de clave válidos) y exportarlos como
  archivos `.json` descargables, que luego debes copiar manualmente dentro de
  `data/preguntas/` y `data/claves/`, y registrar el año en `config-anios.json`.
- Este panel es completamente opcional y no interfiere con el modo examen.

## Agregar un nuevo año (sin tocar el motor de la app)

1. Crea `data/preguntas/preguntas-AAAA.json` siguiendo la estructura de ejemplo.
2. Crea `data/claves/claves-AAAA.json` con las claves vinculadas por `id`.
3. Agrega una entrada en `data/config-anios.json` apuntando a ambos archivos.
4. Listo. No se requiere modificar HTML, CSS ni JS.

## Ajustar o ampliar la escala de equivalencias

Edita `data/escalas.json`. La regla base (1.5 pts por correcta, tope 90) se
aplica siempre para calcular el puntaje; cada entrada de `escalas` define el
`puntajeMinimoRequerido` que determina la condición final ("Aprobado" /
"No aprobado") para esa escala. Ver comentarios dentro de
`js/reglas-evaluacion.js` para el detalle de esta decisión de diseño.

## Datos de ejemplo incluidos

Los archivos JSON de `data/preguntas` y `data/claves` para los años 2018, 2019,
2021-2025 contienen **preguntas y claves de EJEMPLO/PLACEHOLDER**, no el
contenido real de los cuadernillos oficiales. Debes reemplazarlos con el
contenido real (extraído manualmente de tus PDF de origen y de las claves
oficiales correspondientes) antes de usar la app para práctica real. La
estructura y los IDs ya están preparados para ese reemplazo.

## Supuestos de implementación

Estas decisiones se tomaron para resolver ambigüedades del encargo, de forma
explícita y ajustable (nunca oculta):

1. **Cálculo de puntaje para valores de "correctas" no cubiertos por la tabla
   entregada (36, 38, 40, 42, 44, 46):** se usa la fórmula base confirmada
   (correctas × 1.5, tope 90), matemáticamente consistente con todos los
   puntos de la tabla dada. No se inventó ninguna curva, bonificación o
   penalización adicional. Ver comentario extenso en `js/reglas-evaluacion.js`.
2. **Condición final ("Aprobado"/"No aprobado"):** se determina comparando el
   puntaje obtenido contra `puntajeMinimoRequerido` de la escala elegida por
   el usuario antes de iniciar el examen.
3. **Persistencia:** se implementó con `localStorage` del navegador (no
   `sessionStorage`) para que sobreviva a recargas de página, pero se limpia
   automáticamente al finalizar el intento (por tiempo agotado o manualmente),
   cumpliendo con el requisito de que no sea un historial permanente.
4. **Preguntas con menos de 60 disponibles:** si un banco tuviera menos de 60
   preguntas, el motor usa todas las disponibles y registra una advertencia en
   consola, en lugar de fallar silenciosamente o repetir preguntas.
5. **Preguntas sin clave registrada:** se marcan con `claveCorrecta: null`; en
   la corrección, cualquier respuesta del usuario para esa pregunta se cuenta
   como "incorrecta" salvo que esté en blanco (se cuenta como "en blanco"), y
   el reporte indica "(sin clave registrada)" para máxima transparencia.
6. **Exportación PDF:** se resolvió con impresión nativa del navegador
   (`window.print()` + CSS `@media print`) en lugar de una librería JS de
   generación de PDF, para minimizar dependencias y garantizar 100% de
   funcionamiento offline sin necesidad de descargar ni empaquetar librerías
   externas.
7. **Panel de administración:** se implementó de forma opcional, accesible
   solo por un botón discreto o el hash `#admin`, y no se integra con
   autenticación real porque toda la app corre localmente en el navegador del
   propio usuario/administrador de contenido.

## Explicación técnica final

La app sigue una arquitectura de módulos IIFE independientes (`Datos`,
`ReglasEvaluacion`, `Persistencia`, `MotorExamen`, `Reporte`, `Admin`, y el
orquestador `ui.js`), cada uno con una única responsabilidad y sin
dependencias externas (no frameworks, no bundlers, no CDNs). Esto garantiza
que el proyecto funcione abriendo únicamente `index.html` desde un servidor
estático local, que sea mantenible (cada archivo se puede editar de forma
aislada) y que sea fácilmente extensible (nuevos años y escalas se agregan
solo tocando archivos JSON, nunca el código JS).
