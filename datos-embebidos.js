/* ============================================================
   ARCHIVO GENERADO: datos-embebidos.js
   Contiene TODOS los datos (config de anios, escalas, bancos de
   preguntas y claves) incrustados como objetos JavaScript, para
   que la app funcione abriendo index.html directamente con doble
   clic (protocolo file://), sin necesidad de servidor local.

   MOTIVO: los navegadores bloquean fetch() sobre archivos file://
   por politica de seguridad (CORS), por lo que cargar JSON externo
   con fetch() no funciona al abrir el HTML directamente. Para
   mantener el requisito de 'offline real, sin servidor', los mismos
   archivos JSON de /data se incrustan aqui como una unica variable
   global 'DATOS_EMBEBIDOS'.

   MANTENIMIENTO: los archivos JSON en /data/preguntas y /data/claves
   siguen siendo la FUENTE DE VERDAD editable. Este archivo se debe
   regenerar cada vez que se agreguen o modifiquen esos JSON (ver
   instrucciones al final del README). Si en el futuro se despliega
   la app en un servidor real, se puede volver a usar fetch() sobre
   /data en su lugar, sin tocar el resto del codigo.

   COMO AGREGAR UN NUEVO ANIO (ej. 2026):
   1) Crear data/preguntas/preguntas-2026.json con 60 preguntas,
      siguiendo el mismo formato { "anio": 2026, "preguntas": [...] }
   2) Crear data/claves/claves-2026.json con las 60 respuestas,
      formato { "anio": 2026, "claves": { "A2026-01": "b", ... } }
   3) Agregar una entrada "2026" en data/config-anios.json
   4) Volver a ejecutar el script de regeneracion de este archivo
      (o pegar los nuevos bloques JSON en las secciones de abajo).
   No se requiere modificar el motor del examen ni la interfaz.
   ============================================================ */

const DATOS_EMBEBIDOS = {
  configAnios: {
  "_comentario": "Registro central de años disponibles. Para agregar un nuevo año: 1) crear data/preguntas/preguntas-AAAA.json y data/claves/claves-AAAA.json 2) agregar una entrada aquí con los mismos nombres de archivo. No se requiere tocar el motor del examen.",
  "anios": [
    {
      "anio": 2018,
      "archivoPreguntas": "data/preguntas/preguntas-2018.json",
      "archivoClaves": "data/claves/claves-2018.json",
      "activo": true
    },
    {
      "anio": 2019,
      "archivoPreguntas": "data/preguntas/preguntas-2019.json",
      "archivoClaves": "data/claves/claves-2019.json",
      "activo": true
    },
    {
      "anio": 2021,
      "archivoPreguntas": "data/preguntas/preguntas-2021.json",
      "archivoClaves": "data/claves/claves-2021.json",
      "activo": true
    },
    {
      "anio": 2022,
      "archivoPreguntas": "data/preguntas/preguntas-2022.json",
      "archivoClaves": "data/claves/claves-2022.json",
      "activo": true
    },
    {
      "anio": 2023,
      "archivoPreguntas": "data/preguntas/preguntas-2023.json",
      "archivoClaves": "data/claves/claves-2023.json",
      "activo": true
    },
    {
      "anio": 2024,
      "archivoPreguntas": "data/preguntas/preguntas-2024.json",
      "archivoClaves": "data/claves/claves-2024.json",
      "activo": true
    },
    {
      "anio": 2025,
      "archivoPreguntas": "data/preguntas/preguntas-2025.json",
      "archivoClaves": "data/claves/claves-2025.json",
      "activo": true
    }
  ]
},

  escalas: {
  "_comentario": "Tabla EXPLICITA de equivalencias correctas->puntaje->condicion, por escala. SOLO se incluyen los valores entregados por el usuario (36,38,40,42,44,46 correctas). No se han inventado reglas para los valores intermedios no provistos (ej. 37, 39, 41...). El motor de reglas (js/reglas-evaluacion.js) usa INTERPOLACION EXPLICITA Y DOCUMENTADA: 0.375 puntos exactos por respuesta correcta adicional (siguiendo la proporcion 1.5 pts/pregunta de la regla base), y determina la condicion final comparando el puntaje obtenido contra el 'puntajeMinimoRequerido' de la escala seleccionada. Esta es una decision de implementacion explicita y ajustable: modifique los arreglos 'tablaReferencia' para cambiar el comportamiento.",
  "reglaBase": {
    "totalPreguntas": 60,
    "puntosPorCorrecta": 1.5,
    "puntosPorIncorrectaOBlanco": 0,
    "puntajeMaximo": 90
  },
  "escalas": [
    {
      "id": "segunda",
      "nombre": "Segunda escala",
      "correctasMinimas": 36,
      "puntajeMinimoRequerido": 54,
      "tablaReferencia": [
        {
          "correctas": 36,
          "puntaje": 54
        }
      ]
    },
    {
      "id": "tercera",
      "nombre": "Tercera escala",
      "correctasMinimas": 38,
      "puntajeMinimoRequerido": 57,
      "tablaReferencia": [
        {
          "correctas": 38,
          "puntaje": 57
        }
      ]
    },
    {
      "id": "cuarta",
      "nombre": "Cuarta escala",
      "correctasMinimas": 40,
      "puntajeMinimoRequerido": 60,
      "tablaReferencia": [
        {
          "correctas": 40,
          "puntaje": 60
        }
      ]
    },
    {
      "id": "quinta",
      "nombre": "Quinta escala",
      "correctasMinimas": 42,
      "puntajeMinimoRequerido": 63,
      "tablaReferencia": [
        {
          "correctas": 42,
          "puntaje": 63
        }
      ]
    },
    {
      "id": "sexta",
      "nombre": "Sexta escala",
      "correctasMinimas": 44,
      "puntajeMinimoRequerido": 66,
      "tablaReferencia": [
        {
          "correctas": 44,
          "puntaje": 66
        }
      ]
    },
    {
      "id": "septima",
      "nombre": "Séptima escala",
      "correctasMinimas": 46,
      "puntajeMinimoRequerido": 69,
      "tablaReferencia": [
        {
          "correctas": 46,
          "puntaje": 69
        }
      ]
    }
  ]
},

  preguntasPorAnio: {
  "2018": {
    "anio": 2018,
    "preguntas": [
      {
        "id": "A2018-01",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 1. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 1 (2018)",
          "b": "Alternativa B de la pregunta 1 (2018)",
          "c": "Alternativa C de la pregunta 1 (2018)"
        }
      },
      {
        "id": "A2018-02",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 2. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 2 (2018)",
          "b": "Alternativa B de la pregunta 2 (2018)",
          "c": "Alternativa C de la pregunta 2 (2018)"
        }
      },
      {
        "id": "A2018-03",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 3. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 3 (2018)",
          "b": "Alternativa B de la pregunta 3 (2018)",
          "c": "Alternativa C de la pregunta 3 (2018)"
        }
      },
      {
        "id": "A2018-04",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 4. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 4 (2018)",
          "b": "Alternativa B de la pregunta 4 (2018)",
          "c": "Alternativa C de la pregunta 4 (2018)"
        }
      },
      {
        "id": "A2018-05",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 5. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 5 (2018)",
          "b": "Alternativa B de la pregunta 5 (2018)",
          "c": "Alternativa C de la pregunta 5 (2018)"
        }
      },
      {
        "id": "A2018-06",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 6. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 6 (2018)",
          "b": "Alternativa B de la pregunta 6 (2018)",
          "c": "Alternativa C de la pregunta 6 (2018)"
        }
      },
      {
        "id": "A2018-07",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 7. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 7 (2018)",
          "b": "Alternativa B de la pregunta 7 (2018)",
          "c": "Alternativa C de la pregunta 7 (2018)"
        }
      },
      {
        "id": "A2018-08",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 8. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 8 (2018)",
          "b": "Alternativa B de la pregunta 8 (2018)",
          "c": "Alternativa C de la pregunta 8 (2018)"
        }
      },
      {
        "id": "A2018-09",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 9. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 9 (2018)",
          "b": "Alternativa B de la pregunta 9 (2018)",
          "c": "Alternativa C de la pregunta 9 (2018)"
        }
      },
      {
        "id": "A2018-10",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 10. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 10 (2018)",
          "b": "Alternativa B de la pregunta 10 (2018)",
          "c": "Alternativa C de la pregunta 10 (2018)"
        }
      },
      {
        "id": "A2018-11",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 11. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 11 (2018)",
          "b": "Alternativa B de la pregunta 11 (2018)",
          "c": "Alternativa C de la pregunta 11 (2018)"
        }
      },
      {
        "id": "A2018-12",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 12. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 12 (2018)",
          "b": "Alternativa B de la pregunta 12 (2018)",
          "c": "Alternativa C de la pregunta 12 (2018)"
        }
      },
      {
        "id": "A2018-13",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 13. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 13 (2018)",
          "b": "Alternativa B de la pregunta 13 (2018)",
          "c": "Alternativa C de la pregunta 13 (2018)"
        }
      },
      {
        "id": "A2018-14",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 14. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 14 (2018)",
          "b": "Alternativa B de la pregunta 14 (2018)",
          "c": "Alternativa C de la pregunta 14 (2018)"
        }
      },
      {
        "id": "A2018-15",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 15. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 15 (2018)",
          "b": "Alternativa B de la pregunta 15 (2018)",
          "c": "Alternativa C de la pregunta 15 (2018)"
        }
      },
      {
        "id": "A2018-16",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 16. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 16 (2018)",
          "b": "Alternativa B de la pregunta 16 (2018)",
          "c": "Alternativa C de la pregunta 16 (2018)"
        }
      },
      {
        "id": "A2018-17",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 17. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 17 (2018)",
          "b": "Alternativa B de la pregunta 17 (2018)",
          "c": "Alternativa C de la pregunta 17 (2018)"
        }
      },
      {
        "id": "A2018-18",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 18. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 18 (2018)",
          "b": "Alternativa B de la pregunta 18 (2018)",
          "c": "Alternativa C de la pregunta 18 (2018)"
        }
      },
      {
        "id": "A2018-19",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 19. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 19 (2018)",
          "b": "Alternativa B de la pregunta 19 (2018)",
          "c": "Alternativa C de la pregunta 19 (2018)"
        }
      },
      {
        "id": "A2018-20",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 20. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 20 (2018)",
          "b": "Alternativa B de la pregunta 20 (2018)",
          "c": "Alternativa C de la pregunta 20 (2018)"
        }
      },
      {
        "id": "A2018-21",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 21. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 21 (2018)",
          "b": "Alternativa B de la pregunta 21 (2018)",
          "c": "Alternativa C de la pregunta 21 (2018)"
        }
      },
      {
        "id": "A2018-22",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 22. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 22 (2018)",
          "b": "Alternativa B de la pregunta 22 (2018)",
          "c": "Alternativa C de la pregunta 22 (2018)"
        }
      },
      {
        "id": "A2018-23",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 23. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 23 (2018)",
          "b": "Alternativa B de la pregunta 23 (2018)",
          "c": "Alternativa C de la pregunta 23 (2018)"
        }
      },
      {
        "id": "A2018-24",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 24. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 24 (2018)",
          "b": "Alternativa B de la pregunta 24 (2018)",
          "c": "Alternativa C de la pregunta 24 (2018)"
        }
      },
      {
        "id": "A2018-25",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 25. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 25 (2018)",
          "b": "Alternativa B de la pregunta 25 (2018)",
          "c": "Alternativa C de la pregunta 25 (2018)"
        }
      },
      {
        "id": "A2018-26",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 26. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 26 (2018)",
          "b": "Alternativa B de la pregunta 26 (2018)",
          "c": "Alternativa C de la pregunta 26 (2018)"
        }
      },
      {
        "id": "A2018-27",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 27. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 27 (2018)",
          "b": "Alternativa B de la pregunta 27 (2018)",
          "c": "Alternativa C de la pregunta 27 (2018)"
        }
      },
      {
        "id": "A2018-28",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 28. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 28 (2018)",
          "b": "Alternativa B de la pregunta 28 (2018)",
          "c": "Alternativa C de la pregunta 28 (2018)"
        }
      },
      {
        "id": "A2018-29",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 29. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 29 (2018)",
          "b": "Alternativa B de la pregunta 29 (2018)",
          "c": "Alternativa C de la pregunta 29 (2018)"
        }
      },
      {
        "id": "A2018-30",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 30. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 30 (2018)",
          "b": "Alternativa B de la pregunta 30 (2018)",
          "c": "Alternativa C de la pregunta 30 (2018)"
        }
      },
      {
        "id": "A2018-31",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 31. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 31 (2018)",
          "b": "Alternativa B de la pregunta 31 (2018)",
          "c": "Alternativa C de la pregunta 31 (2018)"
        }
      },
      {
        "id": "A2018-32",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 32. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 32 (2018)",
          "b": "Alternativa B de la pregunta 32 (2018)",
          "c": "Alternativa C de la pregunta 32 (2018)"
        }
      },
      {
        "id": "A2018-33",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 33. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 33 (2018)",
          "b": "Alternativa B de la pregunta 33 (2018)",
          "c": "Alternativa C de la pregunta 33 (2018)"
        }
      },
      {
        "id": "A2018-34",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 34. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 34 (2018)",
          "b": "Alternativa B de la pregunta 34 (2018)",
          "c": "Alternativa C de la pregunta 34 (2018)"
        }
      },
      {
        "id": "A2018-35",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 35. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 35 (2018)",
          "b": "Alternativa B de la pregunta 35 (2018)",
          "c": "Alternativa C de la pregunta 35 (2018)"
        }
      },
      {
        "id": "A2018-36",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 36. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 36 (2018)",
          "b": "Alternativa B de la pregunta 36 (2018)",
          "c": "Alternativa C de la pregunta 36 (2018)"
        }
      },
      {
        "id": "A2018-37",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 37. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 37 (2018)",
          "b": "Alternativa B de la pregunta 37 (2018)",
          "c": "Alternativa C de la pregunta 37 (2018)"
        }
      },
      {
        "id": "A2018-38",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 38. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 38 (2018)",
          "b": "Alternativa B de la pregunta 38 (2018)",
          "c": "Alternativa C de la pregunta 38 (2018)"
        }
      },
      {
        "id": "A2018-39",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 39. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 39 (2018)",
          "b": "Alternativa B de la pregunta 39 (2018)",
          "c": "Alternativa C de la pregunta 39 (2018)"
        }
      },
      {
        "id": "A2018-40",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 40. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 40 (2018)",
          "b": "Alternativa B de la pregunta 40 (2018)",
          "c": "Alternativa C de la pregunta 40 (2018)"
        }
      },
      {
        "id": "A2018-41",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 41. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 41 (2018)",
          "b": "Alternativa B de la pregunta 41 (2018)",
          "c": "Alternativa C de la pregunta 41 (2018)"
        }
      },
      {
        "id": "A2018-42",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 42. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 42 (2018)",
          "b": "Alternativa B de la pregunta 42 (2018)",
          "c": "Alternativa C de la pregunta 42 (2018)"
        }
      },
      {
        "id": "A2018-43",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 43. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 43 (2018)",
          "b": "Alternativa B de la pregunta 43 (2018)",
          "c": "Alternativa C de la pregunta 43 (2018)"
        }
      },
      {
        "id": "A2018-44",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 44. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 44 (2018)",
          "b": "Alternativa B de la pregunta 44 (2018)",
          "c": "Alternativa C de la pregunta 44 (2018)"
        }
      },
      {
        "id": "A2018-45",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 45. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 45 (2018)",
          "b": "Alternativa B de la pregunta 45 (2018)",
          "c": "Alternativa C de la pregunta 45 (2018)"
        }
      },
      {
        "id": "A2018-46",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 46. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 46 (2018)",
          "b": "Alternativa B de la pregunta 46 (2018)",
          "c": "Alternativa C de la pregunta 46 (2018)"
        }
      },
      {
        "id": "A2018-47",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 47. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 47 (2018)",
          "b": "Alternativa B de la pregunta 47 (2018)",
          "c": "Alternativa C de la pregunta 47 (2018)"
        }
      },
      {
        "id": "A2018-48",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 48. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 48 (2018)",
          "b": "Alternativa B de la pregunta 48 (2018)",
          "c": "Alternativa C de la pregunta 48 (2018)"
        }
      },
      {
        "id": "A2018-49",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 49. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 49 (2018)",
          "b": "Alternativa B de la pregunta 49 (2018)",
          "c": "Alternativa C de la pregunta 49 (2018)"
        }
      },
      {
        "id": "A2018-50",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 50. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 50 (2018)",
          "b": "Alternativa B de la pregunta 50 (2018)",
          "c": "Alternativa C de la pregunta 50 (2018)"
        }
      },
      {
        "id": "A2018-51",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 51. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 51 (2018)",
          "b": "Alternativa B de la pregunta 51 (2018)",
          "c": "Alternativa C de la pregunta 51 (2018)"
        }
      },
      {
        "id": "A2018-52",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 52. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 52 (2018)",
          "b": "Alternativa B de la pregunta 52 (2018)",
          "c": "Alternativa C de la pregunta 52 (2018)"
        }
      },
      {
        "id": "A2018-53",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 53. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 53 (2018)",
          "b": "Alternativa B de la pregunta 53 (2018)",
          "c": "Alternativa C de la pregunta 53 (2018)"
        }
      },
      {
        "id": "A2018-54",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 54. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 54 (2018)",
          "b": "Alternativa B de la pregunta 54 (2018)",
          "c": "Alternativa C de la pregunta 54 (2018)"
        }
      },
      {
        "id": "A2018-55",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 55. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 55 (2018)",
          "b": "Alternativa B de la pregunta 55 (2018)",
          "c": "Alternativa C de la pregunta 55 (2018)"
        }
      },
      {
        "id": "A2018-56",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 56. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 56 (2018)",
          "b": "Alternativa B de la pregunta 56 (2018)",
          "c": "Alternativa C de la pregunta 56 (2018)"
        }
      },
      {
        "id": "A2018-57",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 57. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 57 (2018)",
          "b": "Alternativa B de la pregunta 57 (2018)",
          "c": "Alternativa C de la pregunta 57 (2018)"
        }
      },
      {
        "id": "A2018-58",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 58. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 58 (2018)",
          "b": "Alternativa B de la pregunta 58 (2018)",
          "c": "Alternativa C de la pregunta 58 (2018)"
        }
      },
      {
        "id": "A2018-59",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 59. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 59 (2018)",
          "b": "Alternativa B de la pregunta 59 (2018)",
          "c": "Alternativa C de la pregunta 59 (2018)"
        }
      },
      {
        "id": "A2018-60",
        "enunciado": "[Ejemplo 2018] Pregunta de muestra número 60. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2018.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 60 (2018)",
          "b": "Alternativa B de la pregunta 60 (2018)",
          "c": "Alternativa C de la pregunta 60 (2018)"
        }
      }
    ]
  },
  "2019": {
    "anio": 2019,
    "preguntas": [
      {
        "id": "A2019-01",
        "enunciado": "Durante el intercambio de ideas sobre el poema 'Travesuras', tres estudiantes hacen comentarios: Aldana dice que es la historia de una ovejita que le gustaba imitar; Bea comenta que su mamá le contó una historia donde las ovejitas podían volar; Carla señala que el título está en letras más oscuras. ¿Qué estudiante ha deducido información implícita del poema?",
        "alternativas": {
          "a": "Aldana.",
          "b": "Bea.",
          "c": "Carla."
        }
      },
      {
        "id": "A2019-02",
        "enunciado": "La docente busca que los estudiantes reflexionen sobre la función que cumplen los dibujos en el poema 'Travesuras'. ¿Cuál de las siguientes acciones pedagógicas es más adecuada para lograr su propósito?",
        "alternativas": {
          "a": "Pedirles que indiquen a qué estrofas del poema corresponden los dibujos de la ovejita.",
          "b": "Pedirles que expliquen cómo cambiaría su lectura del poema si estuviera sin los dibujos de la ovejita.",
          "c": "Pedirles que comenten en qué se parecen los dibujos de la ovejita del poema a las ovejas que ellos han visto."
        }
      },
      {
        "id": "A2019-03",
        "enunciado": "En otro momento de la actividad, la docente busca que los estudiantes reflexionen sobre el contenido del poema 'Travesuras'. ¿Cuál de las siguientes preguntas es más adecuada para ello?",
        "alternativas": {
          "a": "Según la primera y segunda estrofa del poema, ¿por qué la ovejita se cayó al suelo?",
          "b": "De acuerdo con el contenido del poema, ¿qué animal quiso ser la ovejita?",
          "c": "¿Qué fue lo que más les llamó la atención del poema? ¿Por qué?"
        }
      },
      {
        "id": "A2019-04",
        "enunciado": "Una pareja de estudiantes de primer grado escribió una canción de cumpleaños con el texto 'FELIS CUMPLEANOS QUE LOS CUMPSFELS FEIS MORA QUE LOS CUMP A FEIS'. Tomando en cuenta las conceptualizaciones sobre la escritura de los estudiantes, ¿qué nivel de escritura se ajusta más a este texto?",
        "alternativas": {
          "a": "Silábico.",
          "b": "Silábico - alfabético.",
          "c": "Alfabético."
        }
      },
      {
        "id": "A2019-05",
        "enunciado": "Los estudiantes están revisando su texto de cumpleaños para mejorarlo, y el docente busca que lo hagan reflexivamente, notando que a la palabra 'FEIS' le falta una letra. ¿Cuál de las siguientes acciones pedagógicas es más adecuada para favorecer el logro de su propósito?",
        "alternativas": {
          "a": "Entregar a cada uno varios carteles del aula con la palabra 'FELIZ'. Luego, indicarles que a 'FEIS' le falta la letra 'L' para estar correcta.",
          "b": "Indicarles que a algunas palabras, como 'FEIS', les falta una letra. Luego, escribir delante de ellos dichas palabras y motivarlos a escribir una nueva versión de su texto.",
          "c": "Pedirles que lean detenidamente y en voz alta la palabra 'FEIS'. Luego, escribir 'FELIZ' debajo de su texto y pedirles que comparen ambas escrituras."
        }
      },
      {
        "id": "A2019-06",
        "enunciado": "Los estudiantes de tercer grado leen un cuento sobre una zorra que no puede alcanzar las uvas de un parral. El docente busca que reflexionen sobre el contenido del texto. ¿Cuál de las siguientes acciones es más adecuada para lograr su propósito?",
        "alternativas": {
          "a": "Pedirles que, a partir del cuento, mencionen por qué la zorra quería comerse las uvas.",
          "b": "Pedirles que den razones sobre si están de acuerdo o no con el enojo de la zorra.",
          "c": "Pedirles que propongan títulos que se adecúen a la historia."
        }
      },
      {
        "id": "A2019-07",
        "enunciado": "El docente pregunta a los estudiantes: 'Durante la tormenta, ¿dónde se refugió la zorra?'. ¿Qué capacidad de comprensión de textos escritos busca promover principalmente el docente con esta pregunta?",
        "alternativas": {
          "a": "Obtener información explícita del texto.",
          "b": "Reflexionar sobre el contenido del texto.",
          "c": "Interpretar información implícita del texto."
        }
      },
      {
        "id": "A2019-08",
        "enunciado": "El docente ha elaborado una ficha de lectura con preguntas como '¿Tuviste problemas para comprender algún pasaje de la historia? ¿Cómo hiciste para solucionarlos?' y '¿Recomendarías a un compañero leer esta historia? Explica por qué'. ¿Cuál es el proceso de aprendizaje que se busca promover principalmente con estas preguntas?",
        "alternativas": {
          "a": "La metacognición.",
          "b": "El conflicto cognitivo.",
          "c": "El recojo de saberes previos."
        }
      },
      {
        "id": "A2019-09",
        "enunciado": "Un estudiante reescribió el final del cuento de la zorra usando muchos diminutivos propios del lenguaje oral ('uvita', 'pajarito'). El docente busca ayudarlo a mejorar su texto. ¿Cuál de los siguientes aspectos debe priorizar en su retroalimentación?",
        "alternativas": {
          "a": "La utilización de diminutivos propios del lenguaje oral.",
          "b": "La falta de un vocabulario variado en el texto.",
          "c": "La ausencia de puntos a lo largo del texto."
        }
      },
      {
        "id": "A2019-10",
        "enunciado": "Un equipo de sexto grado elabora un tríptico sobre los beneficios de la quinua, mezclando el aporte nutricional con el valor económico de exportación en una misma sección centrada en aportes nutricionales. La docente busca retroalimentarlos para que desarrollen adecuadamente el tema central de esa sección. ¿Cuál de las siguientes acciones pedagógicas es más adecuada para lograr su propósito?",
        "alternativas": {
          "a": "Mencionar que es necesario incluir información respaldada por especialistas y sugerirles citar las fuentes de donde obtuvieron la información.",
          "b": "Pedir que mencionen cuál es el propósito principal de la sección, y que identifiquen las ideas que no se relacionan con dicho propósito para prescindir de ellas y profundizar en el tema.",
          "c": "Comentar que han trabajado dos subtemas (aporte nutricional y valor económico) y explicarles que solo deben desarrollar el primero en una segunda versión."
        }
      },
      {
        "id": "A2019-11",
        "enunciado": "Los estudiantes de sexto grado debatirán sobre plantas medicinales, y el docente evalúa su participación con tres aspectos: 1) mantener contacto visual, 2) presentar argumentos que se vinculan lógicamente con su postura, 3) realizar pausas y cambios de entonación. ¿Cuál de estos aspectos se centra en evaluar la coherencia de los textos orales de los estudiantes?",
        "alternativas": {
          "a": "El primero (mantiene el contacto visual con el público).",
          "b": "El segundo (presenta argumentos que se vinculan lógicamente con su postura).",
          "c": "El tercero (realiza pausas y cambios en la entonación)."
        }
      },
      {
        "id": "A2019-12",
        "enunciado": "Una estudiante de quinto grado elabora una lluvia de ideas para escribir una semblanza sobre su abuelo Elías, incluyendo ideas relevantes junto con preguntas sueltas como '¿Cómo se llega a Morropón?'. La docente busca ayudarla en la selección y organización de sus ideas. ¿Cuál de las siguientes acciones pedagógicas es más adecuada para ello?",
        "alternativas": {
          "a": "Explicarle las principales características de una semblanza y, sobre esa base, indicarle qué ideas no debe desarrollar.",
          "b": "Preguntarle por qué eligió esas ideas y pedirle que seleccione aquellas que le gustan más para desarrollarlas.",
          "c": "Pedirle que mencione cuál es el propósito de su semblanza y que explique si todas las ideas propuestas le ayudarían a lograr dicho propósito."
        }
      },
      {
        "id": "A2019-13",
        "enunciado": "Un estudiante escribe una semblanza sobre su mamá costurera con varias repeticiones de la idea 'está orgulloso de ella' ('¡Estoy orgulloso de que haga algo que le gusta! ¡Cómo le gusta hacer ropa para niños!...'). La docente busca ofrecer retroalimentación sobre la coherencia del primer párrafo. ¿Cuál de los siguientes aspectos debe priorizar en su retroalimentación?",
        "alternativas": {
          "a": "Los vacíos de información.",
          "b": "La falta de unidad temática.",
          "c": "La repetición innecesaria de ideas."
        }
      },
      {
        "id": "A2019-14",
        "enunciado": "Estudiantes de sexto grado redactan una carta de invitación informal para una ingeniera agrónoma ('Qué tal señorita ingen. Josefina... Contamos contigo... Gracias a tí'). El docente nota varios aspectos por mejorar. ¿Cuál de los siguientes aspectos debe priorizar en su retroalimentación?",
        "alternativas": {
          "a": "La omisión de tildación diacrítica y el uso erróneo de algunos signos de puntuación.",
          "b": "La ausencia del motivo de la invitación y la falta de adecuación del registro a la situación comunicativa.",
          "c": "La falta de concordancia gramatical en algunas oraciones y la utilización inadecuada de algunas mayúsculas."
        }
      },
      {
        "id": "A2019-15",
        "enunciado": "Los estudiantes de quinto grado intercambian opiniones sobre la deforestación de los bosques. El docente toma nota de aspectos positivos para compartirlos al final. ¿Cuál de las siguientes anotaciones se centra en destacar un aspecto positivo de la cohesión en las intervenciones de los estudiantes?",
        "alternativas": {
          "a": "'Has expresado argumentos que se relacionan temáticamente con tu postura'.",
          "b": "'Has empleado un vocabulario que se adecúa a las características del público'.",
          "c": "'Has usado conectores variados para relacionar lógicamente tus ideas'."
        }
      },
      {
        "id": "A2019-16",
        "enunciado": "Ante la pregunta '¿cómo se relacionan los seres vivos en un ecosistema?', María representa: Zorro, ave, pescado, mariposa, planta. ¿Cuál de los siguientes aprendizajes se evidencia en la representación realizada por María?",
        "alternativas": {
          "a": "Identifica que las plantas producen su propio alimento.",
          "b": "Identifica todos los componentes de una red alimenticia.",
          "c": "Identifica que las plantas constituyen el primer nivel trófico de una red alimenticia."
        }
      },
      {
        "id": "A2019-17",
        "enunciado": "Un equipo de cuarto grado indaga sobre cuál de dos esferas de plastilina (una de mayor masa) llega primero al piso. Micaela dice que su pelotita (más pesada) llegará primero; tras probar, Sandro alega que Micaela no la soltó igual, sino con fuerza. ¿Cuál de las siguientes preguntas promueve que los estudiantes manejen adecuadamente las variables de su indagación?",
        "alternativas": {
          "a": "¿Quiénes son los que deben observar qué pelotita llega primero al piso?",
          "b": "¿Cómo podrían hacer para asegurarse de que las condiciones en las que caen las pelotitas son iguales?",
          "c": "¿Cuántos integrantes del equipo deberían realizar la experiencia para estar seguros de cuál pelotita llega primero?"
        }
      },
      {
        "id": "A2019-18",
        "enunciado": "Como las pelotitas de plastilina caen muy rápido para observarlas bien, los estudiantes proponen: Irma-subirse a una mesa y soltarlas desde ahí; Micaela-dejarlas caer sobre harina para ver la huella; Sandro-usar una de plastilina y otra de goma. ¿Qué propuestas son pertinentes para que los estudiantes observen mejor el momento en el que las pelotitas llegan al piso?",
        "alternativas": {
          "a": "La de Irma y la de Sandro.",
          "b": "La de Irma y la de Micaela.",
          "c": "La de Micaela y la de Sandro."
        }
      },
      {
        "id": "A2019-19",
        "enunciado": "Tras repetir la experiencia, los estudiantes concluyen: 'Descubrimos que las pelotitas de plastilina llegaron al piso al mismo tiempo'. La docente busca retroalimentar el error en esta conclusión. ¿Cuál de las siguientes preguntas es pertinente para ello?",
        "alternativas": {
          "a": "¿Lo que han descubierto se cumplirá para todos los objetos que dejen caer? ¿Con qué otros objetos pueden experimentar para verificar su conclusión?",
          "b": "¿En qué se diferencian las pelotitas que usaron en su experiencia? ¿Lo que querían probar con su indagación está incluido en su conclusión?",
          "c": "¿Será necesario realizar nuevamente la experiencia? ¿Cuántas veces tendrían que repetirla para estar seguros de la conclusión?"
        }
      },
      {
        "id": "A2019-20",
        "enunciado": "En la indagación sobre las dos pelotitas de plastilina de distinta masa cayendo al piso, ¿cuál es la variable independiente de la indagación que realizaron los estudiantes?",
        "alternativas": {
          "a": "El tiempo en el que las pelotitas llegan al piso.",
          "b": "La altura desde la que caen las pelotitas.",
          "c": "La masa de las pelotitas."
        }
      },
      {
        "id": "A2019-21",
        "enunciado": "Un docente de segundo grado pide propuestas para comenzar a desarrollar la comprensión de los movimientos relativos del Sol y la Tierra. Ricardo propone dibujar cambios en el movimiento del Sol desde su perspectiva; Noé propone una maqueta del sistema solar; Rosa propone usar un globo terráqueo y una linterna para representar el día y la noche. ¿Cuál de los docentes propone acciones pedagógicas más pertinentes para favorecer el propósito del docente de segundo grado?",
        "alternativas": {
          "a": "Ricardo.",
          "b": "Noé.",
          "c": "Rosa."
        }
      },
      {
        "id": "A2019-22",
        "enunciado": "Ante la pregunta de cómo se mueven el Sol, la Tierra y la Luna vistos desde el espacio, Laura (estudiante) responde: 'La Tierra gira alrededor del Sol y demora 12 horas, luego gira alrededor de la Luna en 12 horas'. A partir de la respuesta de Laura, ¿cuál de los siguientes aprendizajes se evidencia?",
        "alternativas": {
          "a": "Identifica que el movimiento de rotación de la Tierra dura 24 horas.",
          "b": "Identifica que la Tierra realiza un movimiento de rotación.",
          "c": "Identifica que la Tierra se desplaza alrededor del Sol."
        }
      },
      {
        "id": "A2019-23",
        "enunciado": "Ángel (otro estudiante) responde a la misma pregunta dibujando la Luna, el Sol y la Tierra, y explica: 'La Luna gira alrededor del Sol, la Tierra gira alrededor del Sol y el Sol gira también, y todo esto ocurre al mismo tiempo'. ¿Cuál de los siguientes aprendizajes se evidencia en la respuesta de Ángel?",
        "alternativas": {
          "a": "Identifica la trayectoria relativa del Sol, la Tierra y la Luna.",
          "b": "Identifica en qué consiste el movimiento de rotación de la Tierra.",
          "c": "Identifica que el Sol, la Tierra y la Luna están en movimiento simultáneo."
        }
      },
      {
        "id": "A2019-24",
        "enunciado": "Una docente de segundo grado plantea a sus estudiantes preguntas sobre cómo se forman las sombras y si estas pueden cambiar de tamaño, y propone observar y dibujar la sombra de un objeto en dos momentos del día. Luego de la primera observación, busca que los estudiantes propongan hipótesis sobre qué pasará con el tamaño de la sombra en el segundo momento. ¿Cuál de las siguientes acciones es pertinente para ello?",
        "alternativas": {
          "a": "Preguntarles si creen que habrá o no alguna diferencia entre la sombra que observaron hoy y la que observarán al día siguiente, y pedirles que sustenten sus respuestas.",
          "b": "Pedirles que, al llegar a sus casas, pregunten a sus padres o busquen información sobre cómo cambia la sombra en diferentes horas del día.",
          "c": "Entregarles una ficha en la que se explique cómo cambia el tamaño de las sombras durante el día."
        }
      },
      {
        "id": "A2019-25",
        "enunciado": "Héctor representó con una cuerda las sombras observadas, dibujando la sombra de la tarde (12:30 p.m.) más chica y la de la mañana (8:30 a.m.) más grande. La docente busca retroalimentar el error evidenciado en su representación. ¿Cuál de las siguientes acciones pedagógicas es pertinente para ello?",
        "alternativas": {
          "a": "Pedirle que salga al patio y vuelva a observar la sombra del árbol en la tarde y compare si el tamaño es igual a la que registró en la mañana.",
          "b": "Proponerle que salga al patio y observe nuevamente la sombra del árbol en la mañana, y preguntarle hacia dónde se ubica dicha sombra en relación con el Sol.",
          "c": "Preguntarle por qué ha utilizado una cuerda en lugar de una cinta métrica para medir el tamaño de las sombras observadas."
        }
      },
      {
        "id": "A2019-26",
        "enunciado": "Un equipo de tercer grado diseña una propuesta para mantener tibias sus bebidas en invierno usando lana para envolver una botella de avena y comparando con otra sin envolver. A partir del diálogo del equipo, ¿cuál de los siguientes aprendizajes se evidencia en la propuesta del equipo de estudiantes?",
        "alternativas": {
          "a": "Describen la secuencia de pasos para llevar a cabo su alternativa de solución.",
          "b": "Proponen alternativas de solución sobre la base de conocimientos científicos.",
          "c": "Identifican acciones para mejorar el funcionamiento de su alternativa de solución."
        }
      },
      {
        "id": "A2019-27",
        "enunciado": "El equipo construye una tabla para anotar los resultados de la prueba de las botellas envueltas y sin envolver, y la docente identifica dificultades para registrar resultados. ¿Cuál de las siguientes preguntas es pertinente para ayudar a los estudiantes a realizar un registro adecuado?",
        "alternativas": {
          "a": "¿Cómo describirán qué tan caliente está la bebida en cada botella?",
          "b": "¿Indicarán en su tabla cada cuánto tiempo van a tocar las botellas?",
          "c": "¿Todos deben tocar las botellas o es mejor elegir solo un representante?"
        }
      },
      {
        "id": "A2019-28",
        "enunciado": "Carla comentó: 'Como la lana nos da calor en invierno, también abrigará a la botella'. ¿Cuál de las siguientes actividades es más pertinente para generar conflicto cognitivo en Carla?",
        "alternativas": {
          "a": "Pedirle que consiga dos cubos de hielo, envuelva uno en lana, observe cuál se derrite primero y explique por qué el hielo envuelto demoró más en derretirse.",
          "b": "Proponerle que envuelva una botella de avena tibia con lana de color negro y otra con lana de color blanco, y compare los resultados.",
          "c": "Comentarle que cuando usa ropa hecha de lana, esta no le da calor, sino que la protege del frío."
        }
      },
      {
        "id": "A2019-29",
        "enunciado": "Katy, estudiante de sexto grado, dibuja el Sol, la Luna y la Tierra en posición de Luna llena, explicando que 'así el Sol ilumina a la Luna y vemos Luna llena'. A partir de la representación y el diálogo entre el docente y la estudiante, ¿qué aprendizaje evidencia Katy?",
        "alternativas": {
          "a": "Identifica cualitativamente la diferencia entre la distancia del Sol a la Luna y de la Luna a la Tierra.",
          "b": "Identifica que la posición relativa del Sol, la Tierra y la Luna origina una de las fases de la Luna.",
          "c": "Identifica la ubicación relativa del Sol, la Tierra y la Luna cuando se observa Luna llena."
        }
      },
      {
        "id": "A2019-30",
        "enunciado": "Ante la pregunta sobre qué pasa en el interior del cuerpo al comer, Carlos (quinto grado) responde: 'Ayer comí pollo y después de comer esto pasó al estómago y de él se repartieron los nutrientes a todo el cuerpo. Lo que no sirve fue al intestino delgado y grueso y se expulsó en forma de heces'. ¿Cuál de los siguientes aprendizajes se evidencia en la respuesta de Carlos?",
        "alternativas": {
          "a": "Identifica la función del estómago.",
          "b": "Identifica la función de los intestinos delgado y grueso.",
          "c": "Identifica que los productos de desecho de la digestión se convierten en heces."
        }
      },
      {
        "id": "A2019-31",
        "enunciado": "La docente entrega a estudiantes de tercer grado dos sobres con figuras de cartulina para introducirlos en la noción de simetría. ¿Cuál de las siguientes acciones pedagógicas es más pertinente para lograr su propósito?",
        "alternativas": {
          "a": "Preguntarles qué entienden por simetría y figura simétrica; pedirles que tracen el eje de simetría de las figuras de ambos sobres; y que compartan cómo lo hicieron.",
          "b": "Indicarles que doblen por la mitad las figuras del sobre 1 (coinciden) y comprobar si es posible lo mismo con las del sobre 2; comparar y anotar diferencias; y elaborar una conclusión de qué es la simetría.",
          "c": "Explicarles que la marca del doblado por la mitad es el eje de simetría; mostrarles cómo trazarlo en el sobre 1 y por qué no es posible en el sobre 2; y luego preguntarles qué entienden por simetría."
        }
      },
      {
        "id": "A2019-32",
        "enunciado": "Un estudiante resuelve el problema 'Marta compró 8 paltas, 4 veces la cantidad que compró Julio. ¿Cuántas paltas compró Julio?' representando 4 veces 8 paltas mediante una relación aditiva incorrecta. ¿Cuál es el principal error en la resolución del estudiante?",
        "alternativas": {
          "a": "Establecer una relación aditiva con grupos de la misma cantidad de elementos.",
          "b": "Realizar una representación que grafica la relación de comparación multiplicativa.",
          "c": "Confundir la cantidad que se debería repetir en la relación de comparación multiplicativa."
        }
      },
      {
        "id": "A2019-33",
        "enunciado": "Jorge, de primer grado, recibió 16 chapitas y las representó encerrando 'una' y 'seis' chapitas por separado, sin comprender el valor posicional. Para ayudarlo a comprender el valor posicional de la cifra 1 en el número 16, ¿cuál de las siguientes acciones pedagógicas es más pertinente?",
        "alternativas": {
          "a": "Mostrarle la ubicación de decenas y unidades en el tablero de valor posicional, colocar el 16 y explicar que la posición de las decenas indica grupos de diez.",
          "b": "Pedirle que explique por qué encerró una y seis chapitas; solicitar que intercambie diez chapitas por una taparrosca y pregunte cuántas taparroscas y chapitas conforman el 16.",
          "c": "Solicitarle que haga una fila con las dieciséis chapitas y encierre con un pabilo diez de ellas; luego contar las sueltas; finalmente indicar la cantidad total considerando encerradas y sueltas."
        }
      },
      {
        "id": "A2019-34",
        "enunciado": "Julia tenía 271 monedas y su padrino le regaló 145 más. Un estudiante resuelve: 271+145 y obtiene '3116', concluyendo que Julia tiene 3161 monedas. ¿Cuál de las siguientes alternativas expresa el principal error en la resolución del estudiante?",
        "alternativas": {
          "a": "No reconoce que diez unidades de decena pasan a formar una unidad del inmediato orden posicional superior.",
          "b": "No se da cuenta de que el registro de su respuesta no corresponde al resultado de su operación.",
          "c": "No realiza correctamente la adición de los dígitos en cada orden posicional de la operación."
        }
      },
      {
        "id": "A2019-35",
        "enunciado": "Ante el problema '¿Cuántos kilogramos habrá en 3 bolsas de 2/5 de kilogramo de arroz?', Carla suma las fracciones, Mateo multiplica 3 x 2/5 = 6/5, y Gabriela usa una representación gráfica dividiendo en quintos. ¿Qué estudiante o estudiantes resolvieron correctamente la tarea planteada?",
        "alternativas": {
          "a": "Solo Mateo.",
          "b": "Mateo y Gabriela.",
          "c": "Carla, Mateo y Gabriela."
        }
      },
      {
        "id": "A2019-36",
        "enunciado": "Cuatro estudiantes (Adriana, Beatriz, Carlos, Dante) calculan puntos con tapas de 10 y de 1 punto: Adriana 8 tapas de 10 y 0 de 1 = 80; Beatriz 13 de 10 y 7 de 1 = 137; Carlos 1 de 10 y 58 de 1 = 59; Dante 7 de 10 y 8 de 1 = 15. ¿Quién o quiénes calcularon mal su puntaje?",
        "alternativas": {
          "a": "Solo Carlos.",
          "b": "Solo Dante.",
          "c": "Carlos y Dante."
        }
      },
      {
        "id": "A2019-37",
        "enunciado": "Laura tiene 20 frijolitos para repartir en partes iguales entre 5 macetas. Ramiro plantea '5 ÷ 20 = 4' y responde que Laura puede colocar 4 frijolitos en cada maceta. A partir de la representación simbólica, ¿cuál es el error del estudiante?",
        "alternativas": {
          "a": "Considera que la división es la operación inversa a la multiplicación.",
          "b": "Considera que el orden de los términos no altera el cociente de la división.",
          "c": "Considera que el cociente de la división siempre debe ser menor que los otros términos."
        }
      },
      {
        "id": "A2019-38",
        "enunciado": "Ante una oferta de 'Rebaja: 50% + 20% adicional' sobre un abrigo de S/ 200, Andrés calcula que se pagará S/ 80; Berta calcula que se pagará S/ 60 (sumando los porcentajes: 70%); Carmelo calcula que se pagará S/ 130. ¿Qué estudiante ha calculado adecuadamente el precio final del abrigo?",
        "alternativas": {
          "a": "Andrés.",
          "b": "Berta.",
          "c": "Carmelo."
        }
      },
      {
        "id": "A2019-39",
        "enunciado": "Ante el problema '¿Cuántos palitos se usarán para construir la figura 20?' de una secuencia de figuras con cuadrados, Olga propone quintuplicar los palitos de la figura 4; Paolo propone multiplicar 4 palitos por 20; Rafaela propone sumar el aumento constante 19 veces a la cantidad de la figura 1. ¿Qué estudiante ha propuesto un procedimiento adecuado al problema planteado?",
        "alternativas": {
          "a": "Olga.",
          "b": "Paolo.",
          "c": "Rafaela."
        }
      },
      {
        "id": "A2019-40",
        "enunciado": "Con una balanza en equilibrio con un cilindro y once cubos idénticos, la docente pregunta cuántos cubos se deben retirar del platillo B si se retiran 3 del platillo A. Julia responde que se deben quitar 3 cubos del platillo B, y luego Pablo afirma que el cilindro vale 5 cubos porque se quitó la misma cantidad de ambos platillos. ¿Cuál es el propósito de aprendizaje de las actividades descritas?",
        "alternativas": {
          "a": "Que los estudiantes planteen relaciones de equivalencia dentro de un contexto de equilibrio.",
          "b": "Que los estudiantes conceptualicen el signo 'igual' como equivalencia, y no solo como resultado de una operación.",
          "c": "Que los estudiantes determinen el valor de la incógnita en las ecuaciones mediante expresiones simbólicas y ejecución de operaciones."
        }
      },
      {
        "id": "A2019-41",
        "enunciado": "Un docente presenta a estudiantes de quinto grado un mapa de la región Piura con el propósito de que describan desplazamientos basándose en los puntos cardinales. ¿Cuál de los siguientes grupos de preguntas es pertinente que realice el docente para el logro del propósito de aprendizaje?",
        "alternativas": {
          "a": "Tomando en cuenta los puntos cardinales en el mapa, ¿qué lugares limitan con la provincia de Sullana? ¿Qué provincias de la región Piura están al este del Océano Pacífico y colindan con él?",
          "b": "¿A qué distancia aproximada se encuentra la capital de la provincia de Sullana respecto de la capital de la región Piura? ¿Qué provincias se encuentran más al sur, al norte y al este de la provincia de Piura?",
          "c": "Considerando los puntos cardinales, ¿qué ruta se debe seguir si se parte de la capital de la región Piura hacia la capital de la provincia de Sullana? Y ¿qué ruta se debe tomar para ir de Sullana hacia Morropón?"
        }
      },
      {
        "id": "A2019-42",
        "enunciado": "Ante la tarea de identificar qué desarrollo plano (de tres opciones) serviría para construir un prisma de base triangular, un estudiante responde que solo el tercer desarrollo plano permitiría elaborar dicho prisma. ¿Cuál de las siguientes alternativas explica el error en la respuesta del estudiante?",
        "alternativas": {
          "a": "El estudiante cree que los polígonos que corresponden a las bases del prisma deben ser adyacentes a los rectángulos por su lado de menor medida.",
          "b": "El estudiante cree que solo la forma habitual del desarrollo plano del prisma triangular es adecuada para su construcción.",
          "c": "El estudiante cree que las propiedades del prisma triangular son las mismas que las de la pirámide cuadrangular."
        }
      },
      {
        "id": "A2019-43",
        "enunciado": "Con una tabla de preferencias de juegos de mesa (ajedrez 7, damas 12, ludo 8, monopolio 4, dominó 3), un equipo de estudiantes tiene dificultades para construir un gráfico de barras. ¿Cuál de las siguientes acciones pedagógicas es más pertinente para que la docente ayude al equipo?",
        "alternativas": {
          "a": "Solicitarles que señalen en cuál eje ubicarán el juego de mesa y en cuál la cantidad de estudiantes; preguntarles la escala más conveniente (de 1, 2 o 3 en 3); y luego que dibujen las barras y coloquen un título.",
          "b": "Distribuir piezas cuadradas de cartulina para representar cada respuesta; organizar carteles con los nombres de los juegos en fila y ubicar debajo las piezas según la cantidad de respuestas; luego compartir resultados.",
          "c": "Entregarles un gráfico de barras incompleto con los ejes y algunas marcas de escala y la barra de ajedrez ya hecha; solicitarles que completen el gráfico y expliquen para qué sirven los gráficos de barras."
        }
      },
      {
        "id": "A2019-44",
        "enunciado": "A partir de la tabla de preferencias de juegos de mesa, la docente busca que los estudiantes comprendan el significado de la moda. ¿Cuál de las siguientes acciones pedagógicas es más pertinente para favorecer este propósito?",
        "alternativas": {
          "a": "Proponerles que dialoguen en parejas sobre lo que conocen del término 'moda'; entregarles su definición para comentarla; finalmente preguntarles por la mayor frecuencia de los juegos registrados en la tabla.",
          "b": "Pedirles que elijan un juego de mesa para implementar en el grado según las preferencias; preguntarles por la mayor frecuencia asociada al juego elegido; explicarles que dicha frecuencia determina la moda.",
          "c": "Mostrarles un mapa conceptual con la definición de la moda; indicarles que es una medida de tendencia central correspondiente al juego con mayor aceptación; proponerles una nueva situación para hallar la moda."
        }
      },
      {
        "id": "A2019-45",
        "enunciado": "Un equipo de cuarto grado elabora un gráfico de barras sobre seres observados en el huerto de la IE, y el docente busca orientarlos en la mejora de su gráfico. ¿Cuál es el principal error en el que se debe centrar?",
        "alternativas": {
          "a": "Las barras no están ordenadas de menor a mayor.",
          "b": "Las barras del gráfico no son estrictamente rectangulares.",
          "c": "Los valores del eje vertical no guardan entre sí la proporción que corresponde."
        }
      },
      {
        "id": "A2019-46",
        "enunciado": "En un proyecto sobre gestión responsable del ambiente, un estudiante de sexto grado comenta que el año pasado llovió mucho y el caudal de varios ríos aumentó, y que esto podría repetirse como había ocurrido en años anteriores. ¿Cuál de los siguientes conceptos corresponde al comentario del estudiante?",
        "alternativas": {
          "a": "Vulnerabilidad.",
          "b": "Riesgo de desastre.",
          "c": "Peligro de origen natural."
        }
      },
      {
        "id": "A2019-47",
        "enunciado": "Julia (cuarto grado) completó una línea de tiempo de su historia familiar diferenciando la época en que vivía en Ayacucho y desde que vive en Ica, con varios hitos familiares señalados en distintos años. ¿Cuál de los siguientes aprendizajes se evidencia principalmente en la línea de tiempo elaborada por la estudiante?",
        "alternativas": {
          "a": "El establecimiento de periodos en su historia familiar.",
          "b": "La identificación de la simultaneidad en su historia familiar.",
          "c": "El reconocimiento de la multicausalidad en su historia familiar."
        }
      },
      {
        "id": "A2019-48",
        "enunciado": "El docente revisa junto con Julia su línea de tiempo (Ayacucho e Ica) buscando promover el desarrollo de las nociones de cambio y permanencia. ¿Cuál de las siguientes acciones es adecuada para el logro de este propósito?",
        "alternativas": {
          "a": "Solicitarle que describa cómo era su vida y la de su familia en Ayacucho y cómo es ahora en Ica, y que indique diferencias y similitudes entre ambas descripciones.",
          "b": "Solicitarle que comente qué es lo que más le gustaba de la época en Ayacucho, y luego pedirle que pregunte a sus padres las motivaciones que tuvieron para mudarse.",
          "c": "Solicitarle que señale qué periodo de su historia familiar considera más importante, y que mencione cuál fue el hecho que produjo el inicio de cada periodo."
        }
      },
      {
        "id": "A2019-49",
        "enunciado": "Un estudiante narra hechos de su historia familiar a partir de una fotografía tomada en un parque de Lima en febrero de 2017, una semana antes de mudarse a Ica, señalando el contexto de por qué le gustaba ese parque. ¿Cuál de los siguientes aprendizajes vinculados con la competencia 'Construcción de interpretaciones históricas' se evidencia en la narración del estudiante?",
        "alternativas": {
          "a": "La contextualización histórica de la fotografía.",
          "b": "La evaluación de la credibilidad de la fotografía.",
          "c": "El contraste entre diferentes perspectivas con relación a lo mostrado en la fotografía."
        }
      },
      {
        "id": "A2019-50",
        "enunciado": "Tres estudiantes comentan sus líneas de tiempo: Aria destaca el día que le regalaron a su perrita; Bertha señala que el día en que su papá llegó de viaje, el Perú también clasificó al Mundial y hubo fiesta; Carlos diferencia épocas de mudanza y el nacimiento de un hermano. ¿Cuál de los comentarios de los estudiantes evidencia la noción de simultaneidad histórica?",
        "alternativas": {
          "a": "El de Aria.",
          "b": "El de Bertha.",
          "c": "El de Carlos."
        }
      },
      {
        "id": "A2019-51",
        "enunciado": "Un grupo de estudiantes se preocupa por la acumulación de basura cerca de la IE y propone hacer algo al respecto. ¿Cuál de las siguientes acciones pedagógicas es más pertinente para promover que los estudiantes organicen su participación en acciones orientadas al bien común?",
        "alternativas": {
          "a": "Pedirles que busquen información sobre las posibles causas del problema; elaborar con ellos una propuesta de acción que atienda las causas identificadas y considere los recursos disponibles; acompañar la ejecución y evaluación de resultados.",
          "b": "Solicitarles que se informen sobre problemas de manejo de residuos sólidos; que indaguen qué propuestas se han usado para problemas similares en su localidad; evaluar con ellos la efectividad de dichas propuestas.",
          "c": "Presentar un árbol de problemas con causas y consecuencias; presentarles las soluciones más adecuadas considerando su viabilidad; y evaluar el desempeño de los estudiantes al término de la ejecución."
        }
      },
      {
        "id": "A2019-52",
        "enunciado": "Al analizar publicidad televisiva para identificar estereotipos, Hermelinda comenta sobre horarios de programación, Emiliano sobre helados asociados a diversión, y Ada sobre rasgos físicos diferentes entre actores que representan médicos/gerentes y carpinteros/vendedores. ¿Cuál de los estudiantes identificó un estereotipo en la publicidad televisiva?",
        "alternativas": {
          "a": "Hermelinda.",
          "b": "Emiliano.",
          "c": "Ada."
        }
      },
      {
        "id": "A2019-53",
        "enunciado": "A partir de una noticia sobre pesca incidental de delfines en el Perú, la docente busca que los estudiantes problematicen el asunto público implicado. ¿Cuál de las siguientes acciones pedagógicas es más pertinente para favorecer el logro de dicho propósito?",
        "alternativas": {
          "a": "Pedirles que señalen en qué consiste la pesca incidental según la noticia y que elaboren un reporte sobre en qué otros países ocurre.",
          "b": "Pedirles que elaboren una lista de las especies marinas mencionadas y realicen una exposición con imagen y características de cada una.",
          "c": "Pedirles que identifiquen qué actores están involucrados en la problemática y elaboren un organizador gráfico señalando cómo interviene cada uno."
        }
      },
      {
        "id": "A2019-54",
        "enunciado": "Los estudiantes de quinto grado identifican como asunto público el incremento de la inseguridad ciudadana en su localidad. La docente busca que problematicen este asunto público. ¿Cuál de las siguientes acciones pedagógicas es más pertinente para favorecer el logro de su propósito?",
        "alternativas": {
          "a": "Pedirles que recopilen noticias sobre inseguridad ciudadana en la localidad, elaboren un archivo con las más llamativas, y las presenten en una exposición.",
          "b": "Pedirles que elaboren un croquis de su localidad indicando su casa, la IE y rutas, marcar zonas de mayor riesgo, y proponer rutas alternativas.",
          "c": "Pedirles que entrevisten a miembros de la comunidad sobre el incremento de inseguridad, sistematizar los resultados agrupándolos por tipo de causa o consecuencia, y elaborar un panel con la recurrencia."
        }
      },
      {
        "id": "A2019-55",
        "enunciado": "Tres docentes dialogan sobre el manejo de conflictos entre estudiantes: Alina propone colocar carteles con normas de convivencia; Benicio propone que los estudiantes desarrollen estrategias para afrontar conflictos de manera provechosa; Carlota propone una charla con padres para mejorar la conducta. ¿Cuál de los docentes expresa un comentario que corresponde con el manejo constructivo de conflictos?",
        "alternativas": {
          "a": "Alina.",
          "b": "Benicio.",
          "c": "Carlota."
        }
      },
      {
        "id": "A2019-56",
        "enunciado": "Ante la situación hipotética de Francisco (que rompió una ventana jugando pelota) y Luis (que debe decidir si contarle o no a su mamá), el docente busca que los estudiantes reflexionen éticamente. ¿Cuál de las siguientes acciones pedagógicas es más adecuada para promover esta reflexión?",
        "alternativas": {
          "a": "Pedirles que anoten individualmente qué debería hacer Luis; en parejas, comparar las consecuencias de contar lo ocurrido con las de no hacerlo; explicar por qué podría ser válido cada opción; y revisar su decisión inicial.",
          "b": "Pedirles que escriban en equipos las principales razones para elegir la fraternidad como valor importante; presentar las razones; sintetizar coincidencias en plenaria; y preguntar las desventajas de delatar a Francisco.",
          "c": "Pedirles que redacten en parejas un diálogo entre Luis y Francisco donde el primero convenza al segundo de asumir su responsabilidad; representarlo; evaluar cuál diálogo resultó más convincente."
        }
      },
      {
        "id": "A2019-57",
        "enunciado": "Ante la situación hipotética de Marco, quien planea copiar el trabajo de Milagros sin que nadie se entere, ¿cuál de las siguientes actividades es más pertinente para promover la reflexión ética acerca del plagio?",
        "alternativas": {
          "a": "Pedirles que imaginen que nadie se entera del plagio de Marco, y que planteen razones por las que su comportamiento es incorrecto aun cuando ni Milagros ni Marco sean sancionados.",
          "b": "Pedirles que discutan en plenaria cómo debió actuar Marco, y que identifiquen las normas y sanciones que la IE establece para evitar situaciones como esta.",
          "c": "Pedirles que elaboren propuestas para ayudar a Marco a evitar enfrentar nuevamente una situación como esta, y señalar cuál propuesta es más adecuada."
        }
      },
      {
        "id": "A2019-58",
        "enunciado": "Una estudiante cuenta a sus amigas que se peleó con su mamá porque 'nunca la escucha' y 'siempre quiere que haga lo que ella quiere'. ¿Cuál de los siguientes comentarios de las compañeras evidencia empatía?",
        "alternativas": {
          "a": "'Nuestras mamás nos quieren mucho y saben lo que es mejor para nosotras. Piensa que lo que te ha dicho es por tu bien. Mejor conversa con ella'.",
          "b": "'Ahora entiendo por qué estás así. Me imagino que debe ser difícil que no tome en cuenta lo que tú quieres y ella sola decida por ti'.",
          "c": "'Es que así son todas las mamás, ¿no? Mi mamá y yo, a veces, nos enojamos, pero se nos pasa rápido. Se te va a pasar el enojo, ya verás'."
        }
      },
      {
        "id": "A2019-59",
        "enunciado": "Analizando una fotografía sobre riesgo de desastres, Manuel comenta sobre los techos inclinados de calamina para evitar el agua; Carola sobre las casas de adobe y el río con mucha agua; Martina sobre la vegetación de los cerros por las lluvias frecuentes. ¿Cuál de los comentarios de los estudiantes evidencia el establecimiento de una relación entre elementos sociales y naturales en la fotografía?",
        "alternativas": {
          "a": "El de Manuel.",
          "b": "El de Carola.",
          "c": "El de Martina."
        }
      },
      {
        "id": "A2019-60",
        "enunciado": "En un diálogo sobre inundaciones, la docente pregunta a Sara por qué las casas más cerca del río se dañaron mientras las más lejanas no, guiándola a comprender que depende de la distancia al río desbordado. ¿Cuál de las siguientes acciones NO se evidencia en las intervenciones de la docente en este diálogo?",
        "alternativas": {
          "a": "Recoger saberes previos.",
          "b": "Generar conflicto cognitivo.",
          "c": "Promover la transferencia de aprendizajes."
        }
      }
    ]
  },
  "2021": {
    "anio": 2021,
    "preguntas": [
      {
        "id": "A2021-01",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 1. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 1 (2021)",
          "b": "Alternativa B de la pregunta 1 (2021)",
          "c": "Alternativa C de la pregunta 1 (2021)"
        }
      },
      {
        "id": "A2021-02",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 2. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 2 (2021)",
          "b": "Alternativa B de la pregunta 2 (2021)",
          "c": "Alternativa C de la pregunta 2 (2021)"
        }
      },
      {
        "id": "A2021-03",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 3. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 3 (2021)",
          "b": "Alternativa B de la pregunta 3 (2021)",
          "c": "Alternativa C de la pregunta 3 (2021)"
        }
      },
      {
        "id": "A2021-04",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 4. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 4 (2021)",
          "b": "Alternativa B de la pregunta 4 (2021)",
          "c": "Alternativa C de la pregunta 4 (2021)"
        }
      },
      {
        "id": "A2021-05",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 5. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 5 (2021)",
          "b": "Alternativa B de la pregunta 5 (2021)",
          "c": "Alternativa C de la pregunta 5 (2021)"
        }
      },
      {
        "id": "A2021-06",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 6. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 6 (2021)",
          "b": "Alternativa B de la pregunta 6 (2021)",
          "c": "Alternativa C de la pregunta 6 (2021)"
        }
      },
      {
        "id": "A2021-07",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 7. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 7 (2021)",
          "b": "Alternativa B de la pregunta 7 (2021)",
          "c": "Alternativa C de la pregunta 7 (2021)"
        }
      },
      {
        "id": "A2021-08",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 8. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 8 (2021)",
          "b": "Alternativa B de la pregunta 8 (2021)",
          "c": "Alternativa C de la pregunta 8 (2021)"
        }
      },
      {
        "id": "A2021-09",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 9. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 9 (2021)",
          "b": "Alternativa B de la pregunta 9 (2021)",
          "c": "Alternativa C de la pregunta 9 (2021)"
        }
      },
      {
        "id": "A2021-10",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 10. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 10 (2021)",
          "b": "Alternativa B de la pregunta 10 (2021)",
          "c": "Alternativa C de la pregunta 10 (2021)"
        }
      },
      {
        "id": "A2021-11",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 11. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 11 (2021)",
          "b": "Alternativa B de la pregunta 11 (2021)",
          "c": "Alternativa C de la pregunta 11 (2021)"
        }
      },
      {
        "id": "A2021-12",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 12. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 12 (2021)",
          "b": "Alternativa B de la pregunta 12 (2021)",
          "c": "Alternativa C de la pregunta 12 (2021)"
        }
      },
      {
        "id": "A2021-13",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 13. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 13 (2021)",
          "b": "Alternativa B de la pregunta 13 (2021)",
          "c": "Alternativa C de la pregunta 13 (2021)"
        }
      },
      {
        "id": "A2021-14",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 14. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 14 (2021)",
          "b": "Alternativa B de la pregunta 14 (2021)",
          "c": "Alternativa C de la pregunta 14 (2021)"
        }
      },
      {
        "id": "A2021-15",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 15. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 15 (2021)",
          "b": "Alternativa B de la pregunta 15 (2021)",
          "c": "Alternativa C de la pregunta 15 (2021)"
        }
      },
      {
        "id": "A2021-16",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 16. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 16 (2021)",
          "b": "Alternativa B de la pregunta 16 (2021)",
          "c": "Alternativa C de la pregunta 16 (2021)"
        }
      },
      {
        "id": "A2021-17",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 17. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 17 (2021)",
          "b": "Alternativa B de la pregunta 17 (2021)",
          "c": "Alternativa C de la pregunta 17 (2021)"
        }
      },
      {
        "id": "A2021-18",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 18. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 18 (2021)",
          "b": "Alternativa B de la pregunta 18 (2021)",
          "c": "Alternativa C de la pregunta 18 (2021)"
        }
      },
      {
        "id": "A2021-19",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 19. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 19 (2021)",
          "b": "Alternativa B de la pregunta 19 (2021)",
          "c": "Alternativa C de la pregunta 19 (2021)"
        }
      },
      {
        "id": "A2021-20",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 20. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 20 (2021)",
          "b": "Alternativa B de la pregunta 20 (2021)",
          "c": "Alternativa C de la pregunta 20 (2021)"
        }
      },
      {
        "id": "A2021-21",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 21. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 21 (2021)",
          "b": "Alternativa B de la pregunta 21 (2021)",
          "c": "Alternativa C de la pregunta 21 (2021)"
        }
      },
      {
        "id": "A2021-22",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 22. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 22 (2021)",
          "b": "Alternativa B de la pregunta 22 (2021)",
          "c": "Alternativa C de la pregunta 22 (2021)"
        }
      },
      {
        "id": "A2021-23",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 23. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 23 (2021)",
          "b": "Alternativa B de la pregunta 23 (2021)",
          "c": "Alternativa C de la pregunta 23 (2021)"
        }
      },
      {
        "id": "A2021-24",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 24. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 24 (2021)",
          "b": "Alternativa B de la pregunta 24 (2021)",
          "c": "Alternativa C de la pregunta 24 (2021)"
        }
      },
      {
        "id": "A2021-25",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 25. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 25 (2021)",
          "b": "Alternativa B de la pregunta 25 (2021)",
          "c": "Alternativa C de la pregunta 25 (2021)"
        }
      },
      {
        "id": "A2021-26",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 26. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 26 (2021)",
          "b": "Alternativa B de la pregunta 26 (2021)",
          "c": "Alternativa C de la pregunta 26 (2021)"
        }
      },
      {
        "id": "A2021-27",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 27. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 27 (2021)",
          "b": "Alternativa B de la pregunta 27 (2021)",
          "c": "Alternativa C de la pregunta 27 (2021)"
        }
      },
      {
        "id": "A2021-28",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 28. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 28 (2021)",
          "b": "Alternativa B de la pregunta 28 (2021)",
          "c": "Alternativa C de la pregunta 28 (2021)"
        }
      },
      {
        "id": "A2021-29",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 29. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 29 (2021)",
          "b": "Alternativa B de la pregunta 29 (2021)",
          "c": "Alternativa C de la pregunta 29 (2021)"
        }
      },
      {
        "id": "A2021-30",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 30. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 30 (2021)",
          "b": "Alternativa B de la pregunta 30 (2021)",
          "c": "Alternativa C de la pregunta 30 (2021)"
        }
      },
      {
        "id": "A2021-31",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 31. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 31 (2021)",
          "b": "Alternativa B de la pregunta 31 (2021)",
          "c": "Alternativa C de la pregunta 31 (2021)"
        }
      },
      {
        "id": "A2021-32",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 32. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 32 (2021)",
          "b": "Alternativa B de la pregunta 32 (2021)",
          "c": "Alternativa C de la pregunta 32 (2021)"
        }
      },
      {
        "id": "A2021-33",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 33. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 33 (2021)",
          "b": "Alternativa B de la pregunta 33 (2021)",
          "c": "Alternativa C de la pregunta 33 (2021)"
        }
      },
      {
        "id": "A2021-34",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 34. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 34 (2021)",
          "b": "Alternativa B de la pregunta 34 (2021)",
          "c": "Alternativa C de la pregunta 34 (2021)"
        }
      },
      {
        "id": "A2021-35",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 35. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 35 (2021)",
          "b": "Alternativa B de la pregunta 35 (2021)",
          "c": "Alternativa C de la pregunta 35 (2021)"
        }
      },
      {
        "id": "A2021-36",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 36. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 36 (2021)",
          "b": "Alternativa B de la pregunta 36 (2021)",
          "c": "Alternativa C de la pregunta 36 (2021)"
        }
      },
      {
        "id": "A2021-37",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 37. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 37 (2021)",
          "b": "Alternativa B de la pregunta 37 (2021)",
          "c": "Alternativa C de la pregunta 37 (2021)"
        }
      },
      {
        "id": "A2021-38",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 38. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 38 (2021)",
          "b": "Alternativa B de la pregunta 38 (2021)",
          "c": "Alternativa C de la pregunta 38 (2021)"
        }
      },
      {
        "id": "A2021-39",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 39. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 39 (2021)",
          "b": "Alternativa B de la pregunta 39 (2021)",
          "c": "Alternativa C de la pregunta 39 (2021)"
        }
      },
      {
        "id": "A2021-40",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 40. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 40 (2021)",
          "b": "Alternativa B de la pregunta 40 (2021)",
          "c": "Alternativa C de la pregunta 40 (2021)"
        }
      },
      {
        "id": "A2021-41",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 41. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 41 (2021)",
          "b": "Alternativa B de la pregunta 41 (2021)",
          "c": "Alternativa C de la pregunta 41 (2021)"
        }
      },
      {
        "id": "A2021-42",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 42. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 42 (2021)",
          "b": "Alternativa B de la pregunta 42 (2021)",
          "c": "Alternativa C de la pregunta 42 (2021)"
        }
      },
      {
        "id": "A2021-43",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 43. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 43 (2021)",
          "b": "Alternativa B de la pregunta 43 (2021)",
          "c": "Alternativa C de la pregunta 43 (2021)"
        }
      },
      {
        "id": "A2021-44",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 44. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 44 (2021)",
          "b": "Alternativa B de la pregunta 44 (2021)",
          "c": "Alternativa C de la pregunta 44 (2021)"
        }
      },
      {
        "id": "A2021-45",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 45. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 45 (2021)",
          "b": "Alternativa B de la pregunta 45 (2021)",
          "c": "Alternativa C de la pregunta 45 (2021)"
        }
      },
      {
        "id": "A2021-46",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 46. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 46 (2021)",
          "b": "Alternativa B de la pregunta 46 (2021)",
          "c": "Alternativa C de la pregunta 46 (2021)"
        }
      },
      {
        "id": "A2021-47",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 47. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 47 (2021)",
          "b": "Alternativa B de la pregunta 47 (2021)",
          "c": "Alternativa C de la pregunta 47 (2021)"
        }
      },
      {
        "id": "A2021-48",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 48. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 48 (2021)",
          "b": "Alternativa B de la pregunta 48 (2021)",
          "c": "Alternativa C de la pregunta 48 (2021)"
        }
      },
      {
        "id": "A2021-49",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 49. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 49 (2021)",
          "b": "Alternativa B de la pregunta 49 (2021)",
          "c": "Alternativa C de la pregunta 49 (2021)"
        }
      },
      {
        "id": "A2021-50",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 50. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 50 (2021)",
          "b": "Alternativa B de la pregunta 50 (2021)",
          "c": "Alternativa C de la pregunta 50 (2021)"
        }
      },
      {
        "id": "A2021-51",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 51. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 51 (2021)",
          "b": "Alternativa B de la pregunta 51 (2021)",
          "c": "Alternativa C de la pregunta 51 (2021)"
        }
      },
      {
        "id": "A2021-52",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 52. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 52 (2021)",
          "b": "Alternativa B de la pregunta 52 (2021)",
          "c": "Alternativa C de la pregunta 52 (2021)"
        }
      },
      {
        "id": "A2021-53",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 53. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 53 (2021)",
          "b": "Alternativa B de la pregunta 53 (2021)",
          "c": "Alternativa C de la pregunta 53 (2021)"
        }
      },
      {
        "id": "A2021-54",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 54. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 54 (2021)",
          "b": "Alternativa B de la pregunta 54 (2021)",
          "c": "Alternativa C de la pregunta 54 (2021)"
        }
      },
      {
        "id": "A2021-55",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 55. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 55 (2021)",
          "b": "Alternativa B de la pregunta 55 (2021)",
          "c": "Alternativa C de la pregunta 55 (2021)"
        }
      },
      {
        "id": "A2021-56",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 56. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 56 (2021)",
          "b": "Alternativa B de la pregunta 56 (2021)",
          "c": "Alternativa C de la pregunta 56 (2021)"
        }
      },
      {
        "id": "A2021-57",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 57. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 57 (2021)",
          "b": "Alternativa B de la pregunta 57 (2021)",
          "c": "Alternativa C de la pregunta 57 (2021)"
        }
      },
      {
        "id": "A2021-58",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 58. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 58 (2021)",
          "b": "Alternativa B de la pregunta 58 (2021)",
          "c": "Alternativa C de la pregunta 58 (2021)"
        }
      },
      {
        "id": "A2021-59",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 59. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 59 (2021)",
          "b": "Alternativa B de la pregunta 59 (2021)",
          "c": "Alternativa C de la pregunta 59 (2021)"
        }
      },
      {
        "id": "A2021-60",
        "enunciado": "[Ejemplo 2021] Pregunta de muestra número 60. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2021.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 60 (2021)",
          "b": "Alternativa B de la pregunta 60 (2021)",
          "c": "Alternativa C de la pregunta 60 (2021)"
        }
      }
    ]
  },
  "2022": {
    "anio": 2022,
    "preguntas": [
      {
        "id": "A2022-01",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 1. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 1 (2022)",
          "b": "Alternativa B de la pregunta 1 (2022)",
          "c": "Alternativa C de la pregunta 1 (2022)"
        }
      },
      {
        "id": "A2022-02",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 2. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 2 (2022)",
          "b": "Alternativa B de la pregunta 2 (2022)",
          "c": "Alternativa C de la pregunta 2 (2022)"
        }
      },
      {
        "id": "A2022-03",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 3. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 3 (2022)",
          "b": "Alternativa B de la pregunta 3 (2022)",
          "c": "Alternativa C de la pregunta 3 (2022)"
        }
      },
      {
        "id": "A2022-04",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 4. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 4 (2022)",
          "b": "Alternativa B de la pregunta 4 (2022)",
          "c": "Alternativa C de la pregunta 4 (2022)"
        }
      },
      {
        "id": "A2022-05",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 5. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 5 (2022)",
          "b": "Alternativa B de la pregunta 5 (2022)",
          "c": "Alternativa C de la pregunta 5 (2022)"
        }
      },
      {
        "id": "A2022-06",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 6. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 6 (2022)",
          "b": "Alternativa B de la pregunta 6 (2022)",
          "c": "Alternativa C de la pregunta 6 (2022)"
        }
      },
      {
        "id": "A2022-07",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 7. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 7 (2022)",
          "b": "Alternativa B de la pregunta 7 (2022)",
          "c": "Alternativa C de la pregunta 7 (2022)"
        }
      },
      {
        "id": "A2022-08",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 8. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 8 (2022)",
          "b": "Alternativa B de la pregunta 8 (2022)",
          "c": "Alternativa C de la pregunta 8 (2022)"
        }
      },
      {
        "id": "A2022-09",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 9. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 9 (2022)",
          "b": "Alternativa B de la pregunta 9 (2022)",
          "c": "Alternativa C de la pregunta 9 (2022)"
        }
      },
      {
        "id": "A2022-10",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 10. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 10 (2022)",
          "b": "Alternativa B de la pregunta 10 (2022)",
          "c": "Alternativa C de la pregunta 10 (2022)"
        }
      },
      {
        "id": "A2022-11",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 11. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 11 (2022)",
          "b": "Alternativa B de la pregunta 11 (2022)",
          "c": "Alternativa C de la pregunta 11 (2022)"
        }
      },
      {
        "id": "A2022-12",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 12. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 12 (2022)",
          "b": "Alternativa B de la pregunta 12 (2022)",
          "c": "Alternativa C de la pregunta 12 (2022)"
        }
      },
      {
        "id": "A2022-13",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 13. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 13 (2022)",
          "b": "Alternativa B de la pregunta 13 (2022)",
          "c": "Alternativa C de la pregunta 13 (2022)"
        }
      },
      {
        "id": "A2022-14",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 14. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 14 (2022)",
          "b": "Alternativa B de la pregunta 14 (2022)",
          "c": "Alternativa C de la pregunta 14 (2022)"
        }
      },
      {
        "id": "A2022-15",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 15. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 15 (2022)",
          "b": "Alternativa B de la pregunta 15 (2022)",
          "c": "Alternativa C de la pregunta 15 (2022)"
        }
      },
      {
        "id": "A2022-16",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 16. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 16 (2022)",
          "b": "Alternativa B de la pregunta 16 (2022)",
          "c": "Alternativa C de la pregunta 16 (2022)"
        }
      },
      {
        "id": "A2022-17",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 17. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 17 (2022)",
          "b": "Alternativa B de la pregunta 17 (2022)",
          "c": "Alternativa C de la pregunta 17 (2022)"
        }
      },
      {
        "id": "A2022-18",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 18. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 18 (2022)",
          "b": "Alternativa B de la pregunta 18 (2022)",
          "c": "Alternativa C de la pregunta 18 (2022)"
        }
      },
      {
        "id": "A2022-19",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 19. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 19 (2022)",
          "b": "Alternativa B de la pregunta 19 (2022)",
          "c": "Alternativa C de la pregunta 19 (2022)"
        }
      },
      {
        "id": "A2022-20",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 20. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 20 (2022)",
          "b": "Alternativa B de la pregunta 20 (2022)",
          "c": "Alternativa C de la pregunta 20 (2022)"
        }
      },
      {
        "id": "A2022-21",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 21. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 21 (2022)",
          "b": "Alternativa B de la pregunta 21 (2022)",
          "c": "Alternativa C de la pregunta 21 (2022)"
        }
      },
      {
        "id": "A2022-22",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 22. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 22 (2022)",
          "b": "Alternativa B de la pregunta 22 (2022)",
          "c": "Alternativa C de la pregunta 22 (2022)"
        }
      },
      {
        "id": "A2022-23",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 23. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 23 (2022)",
          "b": "Alternativa B de la pregunta 23 (2022)",
          "c": "Alternativa C de la pregunta 23 (2022)"
        }
      },
      {
        "id": "A2022-24",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 24. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 24 (2022)",
          "b": "Alternativa B de la pregunta 24 (2022)",
          "c": "Alternativa C de la pregunta 24 (2022)"
        }
      },
      {
        "id": "A2022-25",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 25. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 25 (2022)",
          "b": "Alternativa B de la pregunta 25 (2022)",
          "c": "Alternativa C de la pregunta 25 (2022)"
        }
      },
      {
        "id": "A2022-26",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 26. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 26 (2022)",
          "b": "Alternativa B de la pregunta 26 (2022)",
          "c": "Alternativa C de la pregunta 26 (2022)"
        }
      },
      {
        "id": "A2022-27",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 27. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 27 (2022)",
          "b": "Alternativa B de la pregunta 27 (2022)",
          "c": "Alternativa C de la pregunta 27 (2022)"
        }
      },
      {
        "id": "A2022-28",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 28. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 28 (2022)",
          "b": "Alternativa B de la pregunta 28 (2022)",
          "c": "Alternativa C de la pregunta 28 (2022)"
        }
      },
      {
        "id": "A2022-29",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 29. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 29 (2022)",
          "b": "Alternativa B de la pregunta 29 (2022)",
          "c": "Alternativa C de la pregunta 29 (2022)"
        }
      },
      {
        "id": "A2022-30",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 30. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 30 (2022)",
          "b": "Alternativa B de la pregunta 30 (2022)",
          "c": "Alternativa C de la pregunta 30 (2022)"
        }
      },
      {
        "id": "A2022-31",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 31. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 31 (2022)",
          "b": "Alternativa B de la pregunta 31 (2022)",
          "c": "Alternativa C de la pregunta 31 (2022)"
        }
      },
      {
        "id": "A2022-32",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 32. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 32 (2022)",
          "b": "Alternativa B de la pregunta 32 (2022)",
          "c": "Alternativa C de la pregunta 32 (2022)"
        }
      },
      {
        "id": "A2022-33",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 33. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 33 (2022)",
          "b": "Alternativa B de la pregunta 33 (2022)",
          "c": "Alternativa C de la pregunta 33 (2022)"
        }
      },
      {
        "id": "A2022-34",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 34. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 34 (2022)",
          "b": "Alternativa B de la pregunta 34 (2022)",
          "c": "Alternativa C de la pregunta 34 (2022)"
        }
      },
      {
        "id": "A2022-35",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 35. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 35 (2022)",
          "b": "Alternativa B de la pregunta 35 (2022)",
          "c": "Alternativa C de la pregunta 35 (2022)"
        }
      },
      {
        "id": "A2022-36",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 36. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 36 (2022)",
          "b": "Alternativa B de la pregunta 36 (2022)",
          "c": "Alternativa C de la pregunta 36 (2022)"
        }
      },
      {
        "id": "A2022-37",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 37. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 37 (2022)",
          "b": "Alternativa B de la pregunta 37 (2022)",
          "c": "Alternativa C de la pregunta 37 (2022)"
        }
      },
      {
        "id": "A2022-38",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 38. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 38 (2022)",
          "b": "Alternativa B de la pregunta 38 (2022)",
          "c": "Alternativa C de la pregunta 38 (2022)"
        }
      },
      {
        "id": "A2022-39",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 39. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 39 (2022)",
          "b": "Alternativa B de la pregunta 39 (2022)",
          "c": "Alternativa C de la pregunta 39 (2022)"
        }
      },
      {
        "id": "A2022-40",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 40. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 40 (2022)",
          "b": "Alternativa B de la pregunta 40 (2022)",
          "c": "Alternativa C de la pregunta 40 (2022)"
        }
      },
      {
        "id": "A2022-41",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 41. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 41 (2022)",
          "b": "Alternativa B de la pregunta 41 (2022)",
          "c": "Alternativa C de la pregunta 41 (2022)"
        }
      },
      {
        "id": "A2022-42",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 42. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 42 (2022)",
          "b": "Alternativa B de la pregunta 42 (2022)",
          "c": "Alternativa C de la pregunta 42 (2022)"
        }
      },
      {
        "id": "A2022-43",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 43. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 43 (2022)",
          "b": "Alternativa B de la pregunta 43 (2022)",
          "c": "Alternativa C de la pregunta 43 (2022)"
        }
      },
      {
        "id": "A2022-44",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 44. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 44 (2022)",
          "b": "Alternativa B de la pregunta 44 (2022)",
          "c": "Alternativa C de la pregunta 44 (2022)"
        }
      },
      {
        "id": "A2022-45",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 45. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 45 (2022)",
          "b": "Alternativa B de la pregunta 45 (2022)",
          "c": "Alternativa C de la pregunta 45 (2022)"
        }
      },
      {
        "id": "A2022-46",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 46. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 46 (2022)",
          "b": "Alternativa B de la pregunta 46 (2022)",
          "c": "Alternativa C de la pregunta 46 (2022)"
        }
      },
      {
        "id": "A2022-47",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 47. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 47 (2022)",
          "b": "Alternativa B de la pregunta 47 (2022)",
          "c": "Alternativa C de la pregunta 47 (2022)"
        }
      },
      {
        "id": "A2022-48",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 48. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 48 (2022)",
          "b": "Alternativa B de la pregunta 48 (2022)",
          "c": "Alternativa C de la pregunta 48 (2022)"
        }
      },
      {
        "id": "A2022-49",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 49. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 49 (2022)",
          "b": "Alternativa B de la pregunta 49 (2022)",
          "c": "Alternativa C de la pregunta 49 (2022)"
        }
      },
      {
        "id": "A2022-50",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 50. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 50 (2022)",
          "b": "Alternativa B de la pregunta 50 (2022)",
          "c": "Alternativa C de la pregunta 50 (2022)"
        }
      },
      {
        "id": "A2022-51",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 51. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 51 (2022)",
          "b": "Alternativa B de la pregunta 51 (2022)",
          "c": "Alternativa C de la pregunta 51 (2022)"
        }
      },
      {
        "id": "A2022-52",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 52. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 52 (2022)",
          "b": "Alternativa B de la pregunta 52 (2022)",
          "c": "Alternativa C de la pregunta 52 (2022)"
        }
      },
      {
        "id": "A2022-53",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 53. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 53 (2022)",
          "b": "Alternativa B de la pregunta 53 (2022)",
          "c": "Alternativa C de la pregunta 53 (2022)"
        }
      },
      {
        "id": "A2022-54",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 54. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 54 (2022)",
          "b": "Alternativa B de la pregunta 54 (2022)",
          "c": "Alternativa C de la pregunta 54 (2022)"
        }
      },
      {
        "id": "A2022-55",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 55. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 55 (2022)",
          "b": "Alternativa B de la pregunta 55 (2022)",
          "c": "Alternativa C de la pregunta 55 (2022)"
        }
      },
      {
        "id": "A2022-56",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 56. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 56 (2022)",
          "b": "Alternativa B de la pregunta 56 (2022)",
          "c": "Alternativa C de la pregunta 56 (2022)"
        }
      },
      {
        "id": "A2022-57",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 57. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 57 (2022)",
          "b": "Alternativa B de la pregunta 57 (2022)",
          "c": "Alternativa C de la pregunta 57 (2022)"
        }
      },
      {
        "id": "A2022-58",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 58. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 58 (2022)",
          "b": "Alternativa B de la pregunta 58 (2022)",
          "c": "Alternativa C de la pregunta 58 (2022)"
        }
      },
      {
        "id": "A2022-59",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 59. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 59 (2022)",
          "b": "Alternativa B de la pregunta 59 (2022)",
          "c": "Alternativa C de la pregunta 59 (2022)"
        }
      },
      {
        "id": "A2022-60",
        "enunciado": "[Ejemplo 2022] Pregunta de muestra número 60. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2022.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 60 (2022)",
          "b": "Alternativa B de la pregunta 60 (2022)",
          "c": "Alternativa C de la pregunta 60 (2022)"
        }
      }
    ]
  },
  "2023": {
    "anio": 2023,
    "preguntas": [
      {
        "id": "A2023-01",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 1. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 1 (2023)",
          "b": "Alternativa B de la pregunta 1 (2023)",
          "c": "Alternativa C de la pregunta 1 (2023)"
        }
      },
      {
        "id": "A2023-02",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 2. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 2 (2023)",
          "b": "Alternativa B de la pregunta 2 (2023)",
          "c": "Alternativa C de la pregunta 2 (2023)"
        }
      },
      {
        "id": "A2023-03",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 3. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 3 (2023)",
          "b": "Alternativa B de la pregunta 3 (2023)",
          "c": "Alternativa C de la pregunta 3 (2023)"
        }
      },
      {
        "id": "A2023-04",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 4. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 4 (2023)",
          "b": "Alternativa B de la pregunta 4 (2023)",
          "c": "Alternativa C de la pregunta 4 (2023)"
        }
      },
      {
        "id": "A2023-05",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 5. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 5 (2023)",
          "b": "Alternativa B de la pregunta 5 (2023)",
          "c": "Alternativa C de la pregunta 5 (2023)"
        }
      },
      {
        "id": "A2023-06",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 6. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 6 (2023)",
          "b": "Alternativa B de la pregunta 6 (2023)",
          "c": "Alternativa C de la pregunta 6 (2023)"
        }
      },
      {
        "id": "A2023-07",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 7. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 7 (2023)",
          "b": "Alternativa B de la pregunta 7 (2023)",
          "c": "Alternativa C de la pregunta 7 (2023)"
        }
      },
      {
        "id": "A2023-08",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 8. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 8 (2023)",
          "b": "Alternativa B de la pregunta 8 (2023)",
          "c": "Alternativa C de la pregunta 8 (2023)"
        }
      },
      {
        "id": "A2023-09",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 9. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 9 (2023)",
          "b": "Alternativa B de la pregunta 9 (2023)",
          "c": "Alternativa C de la pregunta 9 (2023)"
        }
      },
      {
        "id": "A2023-10",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 10. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 10 (2023)",
          "b": "Alternativa B de la pregunta 10 (2023)",
          "c": "Alternativa C de la pregunta 10 (2023)"
        }
      },
      {
        "id": "A2023-11",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 11. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 11 (2023)",
          "b": "Alternativa B de la pregunta 11 (2023)",
          "c": "Alternativa C de la pregunta 11 (2023)"
        }
      },
      {
        "id": "A2023-12",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 12. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 12 (2023)",
          "b": "Alternativa B de la pregunta 12 (2023)",
          "c": "Alternativa C de la pregunta 12 (2023)"
        }
      },
      {
        "id": "A2023-13",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 13. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 13 (2023)",
          "b": "Alternativa B de la pregunta 13 (2023)",
          "c": "Alternativa C de la pregunta 13 (2023)"
        }
      },
      {
        "id": "A2023-14",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 14. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 14 (2023)",
          "b": "Alternativa B de la pregunta 14 (2023)",
          "c": "Alternativa C de la pregunta 14 (2023)"
        }
      },
      {
        "id": "A2023-15",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 15. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 15 (2023)",
          "b": "Alternativa B de la pregunta 15 (2023)",
          "c": "Alternativa C de la pregunta 15 (2023)"
        }
      },
      {
        "id": "A2023-16",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 16. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 16 (2023)",
          "b": "Alternativa B de la pregunta 16 (2023)",
          "c": "Alternativa C de la pregunta 16 (2023)"
        }
      },
      {
        "id": "A2023-17",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 17. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 17 (2023)",
          "b": "Alternativa B de la pregunta 17 (2023)",
          "c": "Alternativa C de la pregunta 17 (2023)"
        }
      },
      {
        "id": "A2023-18",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 18. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 18 (2023)",
          "b": "Alternativa B de la pregunta 18 (2023)",
          "c": "Alternativa C de la pregunta 18 (2023)"
        }
      },
      {
        "id": "A2023-19",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 19. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 19 (2023)",
          "b": "Alternativa B de la pregunta 19 (2023)",
          "c": "Alternativa C de la pregunta 19 (2023)"
        }
      },
      {
        "id": "A2023-20",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 20. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 20 (2023)",
          "b": "Alternativa B de la pregunta 20 (2023)",
          "c": "Alternativa C de la pregunta 20 (2023)"
        }
      },
      {
        "id": "A2023-21",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 21. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 21 (2023)",
          "b": "Alternativa B de la pregunta 21 (2023)",
          "c": "Alternativa C de la pregunta 21 (2023)"
        }
      },
      {
        "id": "A2023-22",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 22. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 22 (2023)",
          "b": "Alternativa B de la pregunta 22 (2023)",
          "c": "Alternativa C de la pregunta 22 (2023)"
        }
      },
      {
        "id": "A2023-23",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 23. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 23 (2023)",
          "b": "Alternativa B de la pregunta 23 (2023)",
          "c": "Alternativa C de la pregunta 23 (2023)"
        }
      },
      {
        "id": "A2023-24",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 24. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 24 (2023)",
          "b": "Alternativa B de la pregunta 24 (2023)",
          "c": "Alternativa C de la pregunta 24 (2023)"
        }
      },
      {
        "id": "A2023-25",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 25. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 25 (2023)",
          "b": "Alternativa B de la pregunta 25 (2023)",
          "c": "Alternativa C de la pregunta 25 (2023)"
        }
      },
      {
        "id": "A2023-26",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 26. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 26 (2023)",
          "b": "Alternativa B de la pregunta 26 (2023)",
          "c": "Alternativa C de la pregunta 26 (2023)"
        }
      },
      {
        "id": "A2023-27",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 27. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 27 (2023)",
          "b": "Alternativa B de la pregunta 27 (2023)",
          "c": "Alternativa C de la pregunta 27 (2023)"
        }
      },
      {
        "id": "A2023-28",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 28. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 28 (2023)",
          "b": "Alternativa B de la pregunta 28 (2023)",
          "c": "Alternativa C de la pregunta 28 (2023)"
        }
      },
      {
        "id": "A2023-29",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 29. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 29 (2023)",
          "b": "Alternativa B de la pregunta 29 (2023)",
          "c": "Alternativa C de la pregunta 29 (2023)"
        }
      },
      {
        "id": "A2023-30",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 30. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 30 (2023)",
          "b": "Alternativa B de la pregunta 30 (2023)",
          "c": "Alternativa C de la pregunta 30 (2023)"
        }
      },
      {
        "id": "A2023-31",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 31. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 31 (2023)",
          "b": "Alternativa B de la pregunta 31 (2023)",
          "c": "Alternativa C de la pregunta 31 (2023)"
        }
      },
      {
        "id": "A2023-32",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 32. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 32 (2023)",
          "b": "Alternativa B de la pregunta 32 (2023)",
          "c": "Alternativa C de la pregunta 32 (2023)"
        }
      },
      {
        "id": "A2023-33",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 33. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 33 (2023)",
          "b": "Alternativa B de la pregunta 33 (2023)",
          "c": "Alternativa C de la pregunta 33 (2023)"
        }
      },
      {
        "id": "A2023-34",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 34. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 34 (2023)",
          "b": "Alternativa B de la pregunta 34 (2023)",
          "c": "Alternativa C de la pregunta 34 (2023)"
        }
      },
      {
        "id": "A2023-35",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 35. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 35 (2023)",
          "b": "Alternativa B de la pregunta 35 (2023)",
          "c": "Alternativa C de la pregunta 35 (2023)"
        }
      },
      {
        "id": "A2023-36",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 36. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 36 (2023)",
          "b": "Alternativa B de la pregunta 36 (2023)",
          "c": "Alternativa C de la pregunta 36 (2023)"
        }
      },
      {
        "id": "A2023-37",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 37. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 37 (2023)",
          "b": "Alternativa B de la pregunta 37 (2023)",
          "c": "Alternativa C de la pregunta 37 (2023)"
        }
      },
      {
        "id": "A2023-38",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 38. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 38 (2023)",
          "b": "Alternativa B de la pregunta 38 (2023)",
          "c": "Alternativa C de la pregunta 38 (2023)"
        }
      },
      {
        "id": "A2023-39",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 39. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 39 (2023)",
          "b": "Alternativa B de la pregunta 39 (2023)",
          "c": "Alternativa C de la pregunta 39 (2023)"
        }
      },
      {
        "id": "A2023-40",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 40. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 40 (2023)",
          "b": "Alternativa B de la pregunta 40 (2023)",
          "c": "Alternativa C de la pregunta 40 (2023)"
        }
      },
      {
        "id": "A2023-41",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 41. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 41 (2023)",
          "b": "Alternativa B de la pregunta 41 (2023)",
          "c": "Alternativa C de la pregunta 41 (2023)"
        }
      },
      {
        "id": "A2023-42",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 42. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 42 (2023)",
          "b": "Alternativa B de la pregunta 42 (2023)",
          "c": "Alternativa C de la pregunta 42 (2023)"
        }
      },
      {
        "id": "A2023-43",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 43. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 43 (2023)",
          "b": "Alternativa B de la pregunta 43 (2023)",
          "c": "Alternativa C de la pregunta 43 (2023)"
        }
      },
      {
        "id": "A2023-44",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 44. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 44 (2023)",
          "b": "Alternativa B de la pregunta 44 (2023)",
          "c": "Alternativa C de la pregunta 44 (2023)"
        }
      },
      {
        "id": "A2023-45",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 45. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 45 (2023)",
          "b": "Alternativa B de la pregunta 45 (2023)",
          "c": "Alternativa C de la pregunta 45 (2023)"
        }
      },
      {
        "id": "A2023-46",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 46. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 46 (2023)",
          "b": "Alternativa B de la pregunta 46 (2023)",
          "c": "Alternativa C de la pregunta 46 (2023)"
        }
      },
      {
        "id": "A2023-47",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 47. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 47 (2023)",
          "b": "Alternativa B de la pregunta 47 (2023)",
          "c": "Alternativa C de la pregunta 47 (2023)"
        }
      },
      {
        "id": "A2023-48",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 48. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 48 (2023)",
          "b": "Alternativa B de la pregunta 48 (2023)",
          "c": "Alternativa C de la pregunta 48 (2023)"
        }
      },
      {
        "id": "A2023-49",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 49. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 49 (2023)",
          "b": "Alternativa B de la pregunta 49 (2023)",
          "c": "Alternativa C de la pregunta 49 (2023)"
        }
      },
      {
        "id": "A2023-50",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 50. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 50 (2023)",
          "b": "Alternativa B de la pregunta 50 (2023)",
          "c": "Alternativa C de la pregunta 50 (2023)"
        }
      },
      {
        "id": "A2023-51",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 51. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 51 (2023)",
          "b": "Alternativa B de la pregunta 51 (2023)",
          "c": "Alternativa C de la pregunta 51 (2023)"
        }
      },
      {
        "id": "A2023-52",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 52. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 52 (2023)",
          "b": "Alternativa B de la pregunta 52 (2023)",
          "c": "Alternativa C de la pregunta 52 (2023)"
        }
      },
      {
        "id": "A2023-53",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 53. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 53 (2023)",
          "b": "Alternativa B de la pregunta 53 (2023)",
          "c": "Alternativa C de la pregunta 53 (2023)"
        }
      },
      {
        "id": "A2023-54",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 54. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 54 (2023)",
          "b": "Alternativa B de la pregunta 54 (2023)",
          "c": "Alternativa C de la pregunta 54 (2023)"
        }
      },
      {
        "id": "A2023-55",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 55. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 55 (2023)",
          "b": "Alternativa B de la pregunta 55 (2023)",
          "c": "Alternativa C de la pregunta 55 (2023)"
        }
      },
      {
        "id": "A2023-56",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 56. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 56 (2023)",
          "b": "Alternativa B de la pregunta 56 (2023)",
          "c": "Alternativa C de la pregunta 56 (2023)"
        }
      },
      {
        "id": "A2023-57",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 57. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 57 (2023)",
          "b": "Alternativa B de la pregunta 57 (2023)",
          "c": "Alternativa C de la pregunta 57 (2023)"
        }
      },
      {
        "id": "A2023-58",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 58. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 58 (2023)",
          "b": "Alternativa B de la pregunta 58 (2023)",
          "c": "Alternativa C de la pregunta 58 (2023)"
        }
      },
      {
        "id": "A2023-59",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 59. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 59 (2023)",
          "b": "Alternativa B de la pregunta 59 (2023)",
          "c": "Alternativa C de la pregunta 59 (2023)"
        }
      },
      {
        "id": "A2023-60",
        "enunciado": "[Ejemplo 2023] Pregunta de muestra número 60. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2023.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 60 (2023)",
          "b": "Alternativa B de la pregunta 60 (2023)",
          "c": "Alternativa C de la pregunta 60 (2023)"
        }
      }
    ]
  },
  "2024": {
    "anio": 2024,
    "preguntas": [
      {
        "id": "A2024-01",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 1. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 1 (2024)",
          "b": "Alternativa B de la pregunta 1 (2024)",
          "c": "Alternativa C de la pregunta 1 (2024)"
        }
      },
      {
        "id": "A2024-02",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 2. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 2 (2024)",
          "b": "Alternativa B de la pregunta 2 (2024)",
          "c": "Alternativa C de la pregunta 2 (2024)"
        }
      },
      {
        "id": "A2024-03",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 3. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 3 (2024)",
          "b": "Alternativa B de la pregunta 3 (2024)",
          "c": "Alternativa C de la pregunta 3 (2024)"
        }
      },
      {
        "id": "A2024-04",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 4. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 4 (2024)",
          "b": "Alternativa B de la pregunta 4 (2024)",
          "c": "Alternativa C de la pregunta 4 (2024)"
        }
      },
      {
        "id": "A2024-05",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 5. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 5 (2024)",
          "b": "Alternativa B de la pregunta 5 (2024)",
          "c": "Alternativa C de la pregunta 5 (2024)"
        }
      },
      {
        "id": "A2024-06",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 6. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 6 (2024)",
          "b": "Alternativa B de la pregunta 6 (2024)",
          "c": "Alternativa C de la pregunta 6 (2024)"
        }
      },
      {
        "id": "A2024-07",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 7. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 7 (2024)",
          "b": "Alternativa B de la pregunta 7 (2024)",
          "c": "Alternativa C de la pregunta 7 (2024)"
        }
      },
      {
        "id": "A2024-08",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 8. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 8 (2024)",
          "b": "Alternativa B de la pregunta 8 (2024)",
          "c": "Alternativa C de la pregunta 8 (2024)"
        }
      },
      {
        "id": "A2024-09",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 9. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 9 (2024)",
          "b": "Alternativa B de la pregunta 9 (2024)",
          "c": "Alternativa C de la pregunta 9 (2024)"
        }
      },
      {
        "id": "A2024-10",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 10. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 10 (2024)",
          "b": "Alternativa B de la pregunta 10 (2024)",
          "c": "Alternativa C de la pregunta 10 (2024)"
        }
      },
      {
        "id": "A2024-11",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 11. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 11 (2024)",
          "b": "Alternativa B de la pregunta 11 (2024)",
          "c": "Alternativa C de la pregunta 11 (2024)"
        }
      },
      {
        "id": "A2024-12",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 12. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 12 (2024)",
          "b": "Alternativa B de la pregunta 12 (2024)",
          "c": "Alternativa C de la pregunta 12 (2024)"
        }
      },
      {
        "id": "A2024-13",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 13. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 13 (2024)",
          "b": "Alternativa B de la pregunta 13 (2024)",
          "c": "Alternativa C de la pregunta 13 (2024)"
        }
      },
      {
        "id": "A2024-14",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 14. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 14 (2024)",
          "b": "Alternativa B de la pregunta 14 (2024)",
          "c": "Alternativa C de la pregunta 14 (2024)"
        }
      },
      {
        "id": "A2024-15",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 15. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 15 (2024)",
          "b": "Alternativa B de la pregunta 15 (2024)",
          "c": "Alternativa C de la pregunta 15 (2024)"
        }
      },
      {
        "id": "A2024-16",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 16. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 16 (2024)",
          "b": "Alternativa B de la pregunta 16 (2024)",
          "c": "Alternativa C de la pregunta 16 (2024)"
        }
      },
      {
        "id": "A2024-17",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 17. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 17 (2024)",
          "b": "Alternativa B de la pregunta 17 (2024)",
          "c": "Alternativa C de la pregunta 17 (2024)"
        }
      },
      {
        "id": "A2024-18",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 18. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 18 (2024)",
          "b": "Alternativa B de la pregunta 18 (2024)",
          "c": "Alternativa C de la pregunta 18 (2024)"
        }
      },
      {
        "id": "A2024-19",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 19. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 19 (2024)",
          "b": "Alternativa B de la pregunta 19 (2024)",
          "c": "Alternativa C de la pregunta 19 (2024)"
        }
      },
      {
        "id": "A2024-20",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 20. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 20 (2024)",
          "b": "Alternativa B de la pregunta 20 (2024)",
          "c": "Alternativa C de la pregunta 20 (2024)"
        }
      },
      {
        "id": "A2024-21",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 21. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 21 (2024)",
          "b": "Alternativa B de la pregunta 21 (2024)",
          "c": "Alternativa C de la pregunta 21 (2024)"
        }
      },
      {
        "id": "A2024-22",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 22. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 22 (2024)",
          "b": "Alternativa B de la pregunta 22 (2024)",
          "c": "Alternativa C de la pregunta 22 (2024)"
        }
      },
      {
        "id": "A2024-23",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 23. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 23 (2024)",
          "b": "Alternativa B de la pregunta 23 (2024)",
          "c": "Alternativa C de la pregunta 23 (2024)"
        }
      },
      {
        "id": "A2024-24",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 24. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 24 (2024)",
          "b": "Alternativa B de la pregunta 24 (2024)",
          "c": "Alternativa C de la pregunta 24 (2024)"
        }
      },
      {
        "id": "A2024-25",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 25. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 25 (2024)",
          "b": "Alternativa B de la pregunta 25 (2024)",
          "c": "Alternativa C de la pregunta 25 (2024)"
        }
      },
      {
        "id": "A2024-26",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 26. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 26 (2024)",
          "b": "Alternativa B de la pregunta 26 (2024)",
          "c": "Alternativa C de la pregunta 26 (2024)"
        }
      },
      {
        "id": "A2024-27",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 27. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 27 (2024)",
          "b": "Alternativa B de la pregunta 27 (2024)",
          "c": "Alternativa C de la pregunta 27 (2024)"
        }
      },
      {
        "id": "A2024-28",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 28. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 28 (2024)",
          "b": "Alternativa B de la pregunta 28 (2024)",
          "c": "Alternativa C de la pregunta 28 (2024)"
        }
      },
      {
        "id": "A2024-29",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 29. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 29 (2024)",
          "b": "Alternativa B de la pregunta 29 (2024)",
          "c": "Alternativa C de la pregunta 29 (2024)"
        }
      },
      {
        "id": "A2024-30",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 30. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 30 (2024)",
          "b": "Alternativa B de la pregunta 30 (2024)",
          "c": "Alternativa C de la pregunta 30 (2024)"
        }
      },
      {
        "id": "A2024-31",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 31. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 31 (2024)",
          "b": "Alternativa B de la pregunta 31 (2024)",
          "c": "Alternativa C de la pregunta 31 (2024)"
        }
      },
      {
        "id": "A2024-32",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 32. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 32 (2024)",
          "b": "Alternativa B de la pregunta 32 (2024)",
          "c": "Alternativa C de la pregunta 32 (2024)"
        }
      },
      {
        "id": "A2024-33",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 33. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 33 (2024)",
          "b": "Alternativa B de la pregunta 33 (2024)",
          "c": "Alternativa C de la pregunta 33 (2024)"
        }
      },
      {
        "id": "A2024-34",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 34. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 34 (2024)",
          "b": "Alternativa B de la pregunta 34 (2024)",
          "c": "Alternativa C de la pregunta 34 (2024)"
        }
      },
      {
        "id": "A2024-35",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 35. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 35 (2024)",
          "b": "Alternativa B de la pregunta 35 (2024)",
          "c": "Alternativa C de la pregunta 35 (2024)"
        }
      },
      {
        "id": "A2024-36",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 36. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 36 (2024)",
          "b": "Alternativa B de la pregunta 36 (2024)",
          "c": "Alternativa C de la pregunta 36 (2024)"
        }
      },
      {
        "id": "A2024-37",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 37. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 37 (2024)",
          "b": "Alternativa B de la pregunta 37 (2024)",
          "c": "Alternativa C de la pregunta 37 (2024)"
        }
      },
      {
        "id": "A2024-38",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 38. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 38 (2024)",
          "b": "Alternativa B de la pregunta 38 (2024)",
          "c": "Alternativa C de la pregunta 38 (2024)"
        }
      },
      {
        "id": "A2024-39",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 39. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 39 (2024)",
          "b": "Alternativa B de la pregunta 39 (2024)",
          "c": "Alternativa C de la pregunta 39 (2024)"
        }
      },
      {
        "id": "A2024-40",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 40. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 40 (2024)",
          "b": "Alternativa B de la pregunta 40 (2024)",
          "c": "Alternativa C de la pregunta 40 (2024)"
        }
      },
      {
        "id": "A2024-41",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 41. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 41 (2024)",
          "b": "Alternativa B de la pregunta 41 (2024)",
          "c": "Alternativa C de la pregunta 41 (2024)"
        }
      },
      {
        "id": "A2024-42",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 42. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 42 (2024)",
          "b": "Alternativa B de la pregunta 42 (2024)",
          "c": "Alternativa C de la pregunta 42 (2024)"
        }
      },
      {
        "id": "A2024-43",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 43. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 43 (2024)",
          "b": "Alternativa B de la pregunta 43 (2024)",
          "c": "Alternativa C de la pregunta 43 (2024)"
        }
      },
      {
        "id": "A2024-44",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 44. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 44 (2024)",
          "b": "Alternativa B de la pregunta 44 (2024)",
          "c": "Alternativa C de la pregunta 44 (2024)"
        }
      },
      {
        "id": "A2024-45",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 45. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 45 (2024)",
          "b": "Alternativa B de la pregunta 45 (2024)",
          "c": "Alternativa C de la pregunta 45 (2024)"
        }
      },
      {
        "id": "A2024-46",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 46. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 46 (2024)",
          "b": "Alternativa B de la pregunta 46 (2024)",
          "c": "Alternativa C de la pregunta 46 (2024)"
        }
      },
      {
        "id": "A2024-47",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 47. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 47 (2024)",
          "b": "Alternativa B de la pregunta 47 (2024)",
          "c": "Alternativa C de la pregunta 47 (2024)"
        }
      },
      {
        "id": "A2024-48",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 48. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 48 (2024)",
          "b": "Alternativa B de la pregunta 48 (2024)",
          "c": "Alternativa C de la pregunta 48 (2024)"
        }
      },
      {
        "id": "A2024-49",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 49. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 49 (2024)",
          "b": "Alternativa B de la pregunta 49 (2024)",
          "c": "Alternativa C de la pregunta 49 (2024)"
        }
      },
      {
        "id": "A2024-50",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 50. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 50 (2024)",
          "b": "Alternativa B de la pregunta 50 (2024)",
          "c": "Alternativa C de la pregunta 50 (2024)"
        }
      },
      {
        "id": "A2024-51",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 51. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 51 (2024)",
          "b": "Alternativa B de la pregunta 51 (2024)",
          "c": "Alternativa C de la pregunta 51 (2024)"
        }
      },
      {
        "id": "A2024-52",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 52. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 52 (2024)",
          "b": "Alternativa B de la pregunta 52 (2024)",
          "c": "Alternativa C de la pregunta 52 (2024)"
        }
      },
      {
        "id": "A2024-53",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 53. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 53 (2024)",
          "b": "Alternativa B de la pregunta 53 (2024)",
          "c": "Alternativa C de la pregunta 53 (2024)"
        }
      },
      {
        "id": "A2024-54",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 54. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 54 (2024)",
          "b": "Alternativa B de la pregunta 54 (2024)",
          "c": "Alternativa C de la pregunta 54 (2024)"
        }
      },
      {
        "id": "A2024-55",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 55. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 55 (2024)",
          "b": "Alternativa B de la pregunta 55 (2024)",
          "c": "Alternativa C de la pregunta 55 (2024)"
        }
      },
      {
        "id": "A2024-56",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 56. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 56 (2024)",
          "b": "Alternativa B de la pregunta 56 (2024)",
          "c": "Alternativa C de la pregunta 56 (2024)"
        }
      },
      {
        "id": "A2024-57",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 57. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 57 (2024)",
          "b": "Alternativa B de la pregunta 57 (2024)",
          "c": "Alternativa C de la pregunta 57 (2024)"
        }
      },
      {
        "id": "A2024-58",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 58. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 58 (2024)",
          "b": "Alternativa B de la pregunta 58 (2024)",
          "c": "Alternativa C de la pregunta 58 (2024)"
        }
      },
      {
        "id": "A2024-59",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 59. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 59 (2024)",
          "b": "Alternativa B de la pregunta 59 (2024)",
          "c": "Alternativa C de la pregunta 59 (2024)"
        }
      },
      {
        "id": "A2024-60",
        "enunciado": "[Ejemplo 2024] Pregunta de muestra número 60. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2024.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 60 (2024)",
          "b": "Alternativa B de la pregunta 60 (2024)",
          "c": "Alternativa C de la pregunta 60 (2024)"
        }
      }
    ]
  },
  "2025": {
    "anio": 2025,
    "preguntas": [
      {
        "id": "A2025-01",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 1. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 1 (2025)",
          "b": "Alternativa B de la pregunta 1 (2025)",
          "c": "Alternativa C de la pregunta 1 (2025)"
        }
      },
      {
        "id": "A2025-02",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 2. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 2 (2025)",
          "b": "Alternativa B de la pregunta 2 (2025)",
          "c": "Alternativa C de la pregunta 2 (2025)"
        }
      },
      {
        "id": "A2025-03",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 3. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 3 (2025)",
          "b": "Alternativa B de la pregunta 3 (2025)",
          "c": "Alternativa C de la pregunta 3 (2025)"
        }
      },
      {
        "id": "A2025-04",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 4. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 4 (2025)",
          "b": "Alternativa B de la pregunta 4 (2025)",
          "c": "Alternativa C de la pregunta 4 (2025)"
        }
      },
      {
        "id": "A2025-05",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 5. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 5 (2025)",
          "b": "Alternativa B de la pregunta 5 (2025)",
          "c": "Alternativa C de la pregunta 5 (2025)"
        }
      },
      {
        "id": "A2025-06",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 6. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 6 (2025)",
          "b": "Alternativa B de la pregunta 6 (2025)",
          "c": "Alternativa C de la pregunta 6 (2025)"
        }
      },
      {
        "id": "A2025-07",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 7. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 7 (2025)",
          "b": "Alternativa B de la pregunta 7 (2025)",
          "c": "Alternativa C de la pregunta 7 (2025)"
        }
      },
      {
        "id": "A2025-08",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 8. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 8 (2025)",
          "b": "Alternativa B de la pregunta 8 (2025)",
          "c": "Alternativa C de la pregunta 8 (2025)"
        }
      },
      {
        "id": "A2025-09",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 9. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 9 (2025)",
          "b": "Alternativa B de la pregunta 9 (2025)",
          "c": "Alternativa C de la pregunta 9 (2025)"
        }
      },
      {
        "id": "A2025-10",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 10. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 10 (2025)",
          "b": "Alternativa B de la pregunta 10 (2025)",
          "c": "Alternativa C de la pregunta 10 (2025)"
        }
      },
      {
        "id": "A2025-11",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 11. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 11 (2025)",
          "b": "Alternativa B de la pregunta 11 (2025)",
          "c": "Alternativa C de la pregunta 11 (2025)"
        }
      },
      {
        "id": "A2025-12",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 12. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 12 (2025)",
          "b": "Alternativa B de la pregunta 12 (2025)",
          "c": "Alternativa C de la pregunta 12 (2025)"
        }
      },
      {
        "id": "A2025-13",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 13. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 13 (2025)",
          "b": "Alternativa B de la pregunta 13 (2025)",
          "c": "Alternativa C de la pregunta 13 (2025)"
        }
      },
      {
        "id": "A2025-14",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 14. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 14 (2025)",
          "b": "Alternativa B de la pregunta 14 (2025)",
          "c": "Alternativa C de la pregunta 14 (2025)"
        }
      },
      {
        "id": "A2025-15",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 15. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 15 (2025)",
          "b": "Alternativa B de la pregunta 15 (2025)",
          "c": "Alternativa C de la pregunta 15 (2025)"
        }
      },
      {
        "id": "A2025-16",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 16. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 16 (2025)",
          "b": "Alternativa B de la pregunta 16 (2025)",
          "c": "Alternativa C de la pregunta 16 (2025)"
        }
      },
      {
        "id": "A2025-17",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 17. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 17 (2025)",
          "b": "Alternativa B de la pregunta 17 (2025)",
          "c": "Alternativa C de la pregunta 17 (2025)"
        }
      },
      {
        "id": "A2025-18",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 18. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 18 (2025)",
          "b": "Alternativa B de la pregunta 18 (2025)",
          "c": "Alternativa C de la pregunta 18 (2025)"
        }
      },
      {
        "id": "A2025-19",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 19. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 19 (2025)",
          "b": "Alternativa B de la pregunta 19 (2025)",
          "c": "Alternativa C de la pregunta 19 (2025)"
        }
      },
      {
        "id": "A2025-20",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 20. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 20 (2025)",
          "b": "Alternativa B de la pregunta 20 (2025)",
          "c": "Alternativa C de la pregunta 20 (2025)"
        }
      },
      {
        "id": "A2025-21",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 21. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 21 (2025)",
          "b": "Alternativa B de la pregunta 21 (2025)",
          "c": "Alternativa C de la pregunta 21 (2025)"
        }
      },
      {
        "id": "A2025-22",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 22. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 22 (2025)",
          "b": "Alternativa B de la pregunta 22 (2025)",
          "c": "Alternativa C de la pregunta 22 (2025)"
        }
      },
      {
        "id": "A2025-23",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 23. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 23 (2025)",
          "b": "Alternativa B de la pregunta 23 (2025)",
          "c": "Alternativa C de la pregunta 23 (2025)"
        }
      },
      {
        "id": "A2025-24",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 24. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 24 (2025)",
          "b": "Alternativa B de la pregunta 24 (2025)",
          "c": "Alternativa C de la pregunta 24 (2025)"
        }
      },
      {
        "id": "A2025-25",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 25. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 25 (2025)",
          "b": "Alternativa B de la pregunta 25 (2025)",
          "c": "Alternativa C de la pregunta 25 (2025)"
        }
      },
      {
        "id": "A2025-26",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 26. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 26 (2025)",
          "b": "Alternativa B de la pregunta 26 (2025)",
          "c": "Alternativa C de la pregunta 26 (2025)"
        }
      },
      {
        "id": "A2025-27",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 27. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 27 (2025)",
          "b": "Alternativa B de la pregunta 27 (2025)",
          "c": "Alternativa C de la pregunta 27 (2025)"
        }
      },
      {
        "id": "A2025-28",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 28. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 28 (2025)",
          "b": "Alternativa B de la pregunta 28 (2025)",
          "c": "Alternativa C de la pregunta 28 (2025)"
        }
      },
      {
        "id": "A2025-29",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 29. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 29 (2025)",
          "b": "Alternativa B de la pregunta 29 (2025)",
          "c": "Alternativa C de la pregunta 29 (2025)"
        }
      },
      {
        "id": "A2025-30",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 30. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 30 (2025)",
          "b": "Alternativa B de la pregunta 30 (2025)",
          "c": "Alternativa C de la pregunta 30 (2025)"
        }
      },
      {
        "id": "A2025-31",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 31. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 31 (2025)",
          "b": "Alternativa B de la pregunta 31 (2025)",
          "c": "Alternativa C de la pregunta 31 (2025)"
        }
      },
      {
        "id": "A2025-32",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 32. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 32 (2025)",
          "b": "Alternativa B de la pregunta 32 (2025)",
          "c": "Alternativa C de la pregunta 32 (2025)"
        }
      },
      {
        "id": "A2025-33",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 33. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 33 (2025)",
          "b": "Alternativa B de la pregunta 33 (2025)",
          "c": "Alternativa C de la pregunta 33 (2025)"
        }
      },
      {
        "id": "A2025-34",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 34. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 34 (2025)",
          "b": "Alternativa B de la pregunta 34 (2025)",
          "c": "Alternativa C de la pregunta 34 (2025)"
        }
      },
      {
        "id": "A2025-35",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 35. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 35 (2025)",
          "b": "Alternativa B de la pregunta 35 (2025)",
          "c": "Alternativa C de la pregunta 35 (2025)"
        }
      },
      {
        "id": "A2025-36",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 36. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 36 (2025)",
          "b": "Alternativa B de la pregunta 36 (2025)",
          "c": "Alternativa C de la pregunta 36 (2025)"
        }
      },
      {
        "id": "A2025-37",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 37. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 37 (2025)",
          "b": "Alternativa B de la pregunta 37 (2025)",
          "c": "Alternativa C de la pregunta 37 (2025)"
        }
      },
      {
        "id": "A2025-38",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 38. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 38 (2025)",
          "b": "Alternativa B de la pregunta 38 (2025)",
          "c": "Alternativa C de la pregunta 38 (2025)"
        }
      },
      {
        "id": "A2025-39",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 39. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 39 (2025)",
          "b": "Alternativa B de la pregunta 39 (2025)",
          "c": "Alternativa C de la pregunta 39 (2025)"
        }
      },
      {
        "id": "A2025-40",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 40. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 40 (2025)",
          "b": "Alternativa B de la pregunta 40 (2025)",
          "c": "Alternativa C de la pregunta 40 (2025)"
        }
      },
      {
        "id": "A2025-41",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 41. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 41 (2025)",
          "b": "Alternativa B de la pregunta 41 (2025)",
          "c": "Alternativa C de la pregunta 41 (2025)"
        }
      },
      {
        "id": "A2025-42",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 42. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 42 (2025)",
          "b": "Alternativa B de la pregunta 42 (2025)",
          "c": "Alternativa C de la pregunta 42 (2025)"
        }
      },
      {
        "id": "A2025-43",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 43. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 43 (2025)",
          "b": "Alternativa B de la pregunta 43 (2025)",
          "c": "Alternativa C de la pregunta 43 (2025)"
        }
      },
      {
        "id": "A2025-44",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 44. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 44 (2025)",
          "b": "Alternativa B de la pregunta 44 (2025)",
          "c": "Alternativa C de la pregunta 44 (2025)"
        }
      },
      {
        "id": "A2025-45",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 45. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 45 (2025)",
          "b": "Alternativa B de la pregunta 45 (2025)",
          "c": "Alternativa C de la pregunta 45 (2025)"
        }
      },
      {
        "id": "A2025-46",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 46. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 46 (2025)",
          "b": "Alternativa B de la pregunta 46 (2025)",
          "c": "Alternativa C de la pregunta 46 (2025)"
        }
      },
      {
        "id": "A2025-47",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 47. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 47 (2025)",
          "b": "Alternativa B de la pregunta 47 (2025)",
          "c": "Alternativa C de la pregunta 47 (2025)"
        }
      },
      {
        "id": "A2025-48",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 48. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 48 (2025)",
          "b": "Alternativa B de la pregunta 48 (2025)",
          "c": "Alternativa C de la pregunta 48 (2025)"
        }
      },
      {
        "id": "A2025-49",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 49. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 49 (2025)",
          "b": "Alternativa B de la pregunta 49 (2025)",
          "c": "Alternativa C de la pregunta 49 (2025)"
        }
      },
      {
        "id": "A2025-50",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 50. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 50 (2025)",
          "b": "Alternativa B de la pregunta 50 (2025)",
          "c": "Alternativa C de la pregunta 50 (2025)"
        }
      },
      {
        "id": "A2025-51",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 51. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 51 (2025)",
          "b": "Alternativa B de la pregunta 51 (2025)",
          "c": "Alternativa C de la pregunta 51 (2025)"
        }
      },
      {
        "id": "A2025-52",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 52. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 52 (2025)",
          "b": "Alternativa B de la pregunta 52 (2025)",
          "c": "Alternativa C de la pregunta 52 (2025)"
        }
      },
      {
        "id": "A2025-53",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 53. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 53 (2025)",
          "b": "Alternativa B de la pregunta 53 (2025)",
          "c": "Alternativa C de la pregunta 53 (2025)"
        }
      },
      {
        "id": "A2025-54",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 54. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 54 (2025)",
          "b": "Alternativa B de la pregunta 54 (2025)",
          "c": "Alternativa C de la pregunta 54 (2025)"
        }
      },
      {
        "id": "A2025-55",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 55. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 55 (2025)",
          "b": "Alternativa B de la pregunta 55 (2025)",
          "c": "Alternativa C de la pregunta 55 (2025)"
        }
      },
      {
        "id": "A2025-56",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 56. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 56 (2025)",
          "b": "Alternativa B de la pregunta 56 (2025)",
          "c": "Alternativa C de la pregunta 56 (2025)"
        }
      },
      {
        "id": "A2025-57",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 57. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 57 (2025)",
          "b": "Alternativa B de la pregunta 57 (2025)",
          "c": "Alternativa C de la pregunta 57 (2025)"
        }
      },
      {
        "id": "A2025-58",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 58. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 58 (2025)",
          "b": "Alternativa B de la pregunta 58 (2025)",
          "c": "Alternativa C de la pregunta 58 (2025)"
        }
      },
      {
        "id": "A2025-59",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 59. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 59 (2025)",
          "b": "Alternativa B de la pregunta 59 (2025)",
          "c": "Alternativa C de la pregunta 59 (2025)"
        }
      },
      {
        "id": "A2025-60",
        "enunciado": "[Ejemplo 2025] Pregunta de muestra número 60. Reemplazar por el enunciado real extraído del cuadernillo oficial del año 2025.",
        "alternativas": {
          "a": "Alternativa A de la pregunta 60 (2025)",
          "b": "Alternativa B de la pregunta 60 (2025)",
          "c": "Alternativa C de la pregunta 60 (2025)"
        }
      }
    ]
  }
},

  clavesPorAnio: {
  "2018": {
    "anio": 2018,
    "claves": {
      "A2018-01": "b",
      "A2018-02": "c",
      "A2018-03": "a",
      "A2018-04": "b",
      "A2018-05": "c",
      "A2018-06": "a",
      "A2018-07": "b",
      "A2018-08": "c",
      "A2018-09": "a",
      "A2018-10": "b",
      "A2018-11": "c",
      "A2018-12": "a",
      "A2018-13": "b",
      "A2018-14": "c",
      "A2018-15": "a",
      "A2018-16": "b",
      "A2018-17": "c",
      "A2018-18": "a",
      "A2018-19": "b",
      "A2018-20": "c",
      "A2018-21": "a",
      "A2018-22": "b",
      "A2018-23": "c",
      "A2018-24": "a",
      "A2018-25": "b",
      "A2018-26": "c",
      "A2018-27": "a",
      "A2018-28": "b",
      "A2018-29": "c",
      "A2018-30": "a",
      "A2018-31": "b",
      "A2018-32": "c",
      "A2018-33": "a",
      "A2018-34": "b",
      "A2018-35": "c",
      "A2018-36": "a",
      "A2018-37": "b",
      "A2018-38": "c",
      "A2018-39": "a",
      "A2018-40": "b",
      "A2018-41": "c",
      "A2018-42": "a",
      "A2018-43": "b",
      "A2018-44": "c",
      "A2018-45": "a",
      "A2018-46": "b",
      "A2018-47": "c",
      "A2018-48": "a",
      "A2018-49": "b",
      "A2018-50": "c",
      "A2018-51": "a",
      "A2018-52": "b",
      "A2018-53": "c",
      "A2018-54": "a",
      "A2018-55": "b",
      "A2018-56": "c",
      "A2018-57": "a",
      "A2018-58": "b",
      "A2018-59": "c",
      "A2018-60": "a"
    }
  },
  "2019": {
    "anio": 2019,
    "claves": {
      "A2019-01": "a",
      "A2019-02": "b",
      "A2019-03": "c",
      "A2019-04": "b",
      "A2019-05": "c",
      "A2019-06": "b",
      "A2019-07": "a",
      "A2019-08": "a",
      "A2019-09": "c",
      "A2019-10": "b",
      "A2019-11": "b",
      "A2019-12": "c",
      "A2019-13": "c",
      "A2019-14": "b",
      "A2019-15": "c",
      "A2019-16": "c",
      "A2019-17": "b",
      "A2019-18": "b",
      "A2019-19": "b",
      "A2019-20": "c",
      "A2019-21": "a",
      "A2019-22": "c",
      "A2019-23": "c",
      "A2019-24": "a",
      "A2019-25": "b",
      "A2019-26": "a",
      "A2019-27": "a",
      "A2019-28": "a",
      "A2019-29": "b",
      "A2019-30": "c",
      "A2019-31": "b",
      "A2019-32": "c",
      "A2019-33": "b",
      "A2019-34": "a",
      "A2019-35": "b",
      "A2019-36": "c",
      "A2019-37": "b",
      "A2019-38": "a",
      "A2019-39": "c",
      "A2019-40": "a",
      "A2019-41": "c",
      "A2019-42": "b",
      "A2019-43": "a",
      "A2019-44": "b",
      "A2019-45": "c",
      "A2019-46": "a",
      "A2019-47": "b",
      "A2019-48": "c",
      "A2019-49": "a",
      "A2019-50": "a",
      "A2019-51": "a",
      "A2019-52": "c",
      "A2019-53": "c",
      "A2019-54": "c",
      "A2019-55": "b",
      "A2019-56": "a",
      "A2019-57": "a",
      "A2019-58": "b",
      "A2019-59": "a",
      "A2019-60": "c"
    }
  },
  "2021": {
    "anio": 2021,
    "claves": {
      "A2021-01": "b",
      "A2021-02": "c",
      "A2021-03": "a",
      "A2021-04": "b",
      "A2021-05": "c",
      "A2021-06": "a",
      "A2021-07": "b",
      "A2021-08": "c",
      "A2021-09": "a",
      "A2021-10": "b",
      "A2021-11": "c",
      "A2021-12": "a",
      "A2021-13": "b",
      "A2021-14": "c",
      "A2021-15": "a",
      "A2021-16": "b",
      "A2021-17": "c",
      "A2021-18": "a",
      "A2021-19": "b",
      "A2021-20": "c",
      "A2021-21": "a",
      "A2021-22": "b",
      "A2021-23": "c",
      "A2021-24": "a",
      "A2021-25": "b",
      "A2021-26": "c",
      "A2021-27": "a",
      "A2021-28": "b",
      "A2021-29": "c",
      "A2021-30": "a",
      "A2021-31": "b",
      "A2021-32": "c",
      "A2021-33": "a",
      "A2021-34": "b",
      "A2021-35": "c",
      "A2021-36": "a",
      "A2021-37": "b",
      "A2021-38": "c",
      "A2021-39": "a",
      "A2021-40": "b",
      "A2021-41": "c",
      "A2021-42": "a",
      "A2021-43": "b",
      "A2021-44": "c",
      "A2021-45": "a",
      "A2021-46": "b",
      "A2021-47": "c",
      "A2021-48": "a",
      "A2021-49": "b",
      "A2021-50": "c",
      "A2021-51": "a",
      "A2021-52": "b",
      "A2021-53": "c",
      "A2021-54": "a",
      "A2021-55": "b",
      "A2021-56": "c",
      "A2021-57": "a",
      "A2021-58": "b",
      "A2021-59": "c",
      "A2021-60": "a"
    }
  },
  "2022": {
    "anio": 2022,
    "claves": {
      "A2022-01": "b",
      "A2022-02": "c",
      "A2022-03": "a",
      "A2022-04": "b",
      "A2022-05": "c",
      "A2022-06": "a",
      "A2022-07": "b",
      "A2022-08": "c",
      "A2022-09": "a",
      "A2022-10": "b",
      "A2022-11": "c",
      "A2022-12": "a",
      "A2022-13": "b",
      "A2022-14": "c",
      "A2022-15": "a",
      "A2022-16": "b",
      "A2022-17": "c",
      "A2022-18": "a",
      "A2022-19": "b",
      "A2022-20": "c",
      "A2022-21": "a",
      "A2022-22": "b",
      "A2022-23": "c",
      "A2022-24": "a",
      "A2022-25": "b",
      "A2022-26": "c",
      "A2022-27": "a",
      "A2022-28": "b",
      "A2022-29": "c",
      "A2022-30": "a",
      "A2022-31": "b",
      "A2022-32": "c",
      "A2022-33": "a",
      "A2022-34": "b",
      "A2022-35": "c",
      "A2022-36": "a",
      "A2022-37": "b",
      "A2022-38": "c",
      "A2022-39": "a",
      "A2022-40": "b",
      "A2022-41": "c",
      "A2022-42": "a",
      "A2022-43": "b",
      "A2022-44": "c",
      "A2022-45": "a",
      "A2022-46": "b",
      "A2022-47": "c",
      "A2022-48": "a",
      "A2022-49": "b",
      "A2022-50": "c",
      "A2022-51": "a",
      "A2022-52": "b",
      "A2022-53": "c",
      "A2022-54": "a",
      "A2022-55": "b",
      "A2022-56": "c",
      "A2022-57": "a",
      "A2022-58": "b",
      "A2022-59": "c",
      "A2022-60": "a"
    }
  },
  "2023": {
    "anio": 2023,
    "claves": {
      "A2023-01": "b",
      "A2023-02": "c",
      "A2023-03": "a",
      "A2023-04": "b",
      "A2023-05": "c",
      "A2023-06": "a",
      "A2023-07": "b",
      "A2023-08": "c",
      "A2023-09": "a",
      "A2023-10": "b",
      "A2023-11": "c",
      "A2023-12": "a",
      "A2023-13": "b",
      "A2023-14": "c",
      "A2023-15": "a",
      "A2023-16": "b",
      "A2023-17": "c",
      "A2023-18": "a",
      "A2023-19": "b",
      "A2023-20": "c",
      "A2023-21": "a",
      "A2023-22": "b",
      "A2023-23": "c",
      "A2023-24": "a",
      "A2023-25": "b",
      "A2023-26": "c",
      "A2023-27": "a",
      "A2023-28": "b",
      "A2023-29": "c",
      "A2023-30": "a",
      "A2023-31": "b",
      "A2023-32": "c",
      "A2023-33": "a",
      "A2023-34": "b",
      "A2023-35": "c",
      "A2023-36": "a",
      "A2023-37": "b",
      "A2023-38": "c",
      "A2023-39": "a",
      "A2023-40": "b",
      "A2023-41": "c",
      "A2023-42": "a",
      "A2023-43": "b",
      "A2023-44": "c",
      "A2023-45": "a",
      "A2023-46": "b",
      "A2023-47": "c",
      "A2023-48": "a",
      "A2023-49": "b",
      "A2023-50": "c",
      "A2023-51": "a",
      "A2023-52": "b",
      "A2023-53": "c",
      "A2023-54": "a",
      "A2023-55": "b",
      "A2023-56": "c",
      "A2023-57": "a",
      "A2023-58": "b",
      "A2023-59": "c",
      "A2023-60": "a"
    }
  },
  "2024": {
    "anio": 2024,
    "claves": {
      "A2024-01": "b",
      "A2024-02": "c",
      "A2024-03": "a",
      "A2024-04": "b",
      "A2024-05": "c",
      "A2024-06": "a",
      "A2024-07": "b",
      "A2024-08": "c",
      "A2024-09": "a",
      "A2024-10": "b",
      "A2024-11": "c",
      "A2024-12": "a",
      "A2024-13": "b",
      "A2024-14": "c",
      "A2024-15": "a",
      "A2024-16": "b",
      "A2024-17": "c",
      "A2024-18": "a",
      "A2024-19": "b",
      "A2024-20": "c",
      "A2024-21": "a",
      "A2024-22": "b",
      "A2024-23": "c",
      "A2024-24": "a",
      "A2024-25": "b",
      "A2024-26": "c",
      "A2024-27": "a",
      "A2024-28": "b",
      "A2024-29": "c",
      "A2024-30": "a",
      "A2024-31": "b",
      "A2024-32": "c",
      "A2024-33": "a",
      "A2024-34": "b",
      "A2024-35": "c",
      "A2024-36": "a",
      "A2024-37": "b",
      "A2024-38": "c",
      "A2024-39": "a",
      "A2024-40": "b",
      "A2024-41": "c",
      "A2024-42": "a",
      "A2024-43": "b",
      "A2024-44": "c",
      "A2024-45": "a",
      "A2024-46": "b",
      "A2024-47": "c",
      "A2024-48": "a",
      "A2024-49": "b",
      "A2024-50": "c",
      "A2024-51": "a",
      "A2024-52": "b",
      "A2024-53": "c",
      "A2024-54": "a",
      "A2024-55": "b",
      "A2024-56": "c",
      "A2024-57": "a",
      "A2024-58": "b",
      "A2024-59": "c",
      "A2024-60": "a"
    }
  },
  "2025": {
    "anio": 2025,
    "claves": {
      "A2025-01": "b",
      "A2025-02": "c",
      "A2025-03": "a",
      "A2025-04": "b",
      "A2025-05": "c",
      "A2025-06": "a",
      "A2025-07": "b",
      "A2025-08": "c",
      "A2025-09": "a",
      "A2025-10": "b",
      "A2025-11": "c",
      "A2025-12": "a",
      "A2025-13": "b",
      "A2025-14": "c",
      "A2025-15": "a",
      "A2025-16": "b",
      "A2025-17": "c",
      "A2025-18": "a",
      "A2025-19": "b",
      "A2025-20": "c",
      "A2025-21": "a",
      "A2025-22": "b",
      "A2025-23": "c",
      "A2025-24": "a",
      "A2025-25": "b",
      "A2025-26": "c",
      "A2025-27": "a",
      "A2025-28": "b",
      "A2025-29": "c",
      "A2025-30": "a",
      "A2025-31": "b",
      "A2025-32": "c",
      "A2025-33": "a",
      "A2025-34": "b",
      "A2025-35": "c",
      "A2025-36": "a",
      "A2025-37": "b",
      "A2025-38": "c",
      "A2025-39": "a",
      "A2025-40": "b",
      "A2025-41": "c",
      "A2025-42": "a",
      "A2025-43": "b",
      "A2025-44": "c",
      "A2025-45": "a",
      "A2025-46": "b",
      "A2025-47": "c",
      "A2025-48": "a",
      "A2025-49": "b",
      "A2025-50": "c",
      "A2025-51": "a",
      "A2025-52": "b",
      "A2025-53": "c",
      "A2025-54": "a",
      "A2025-55": "b",
      "A2025-56": "c",
      "A2025-57": "a",
      "A2025-58": "b",
      "A2025-59": "c",
      "A2025-60": "a"
    }
  }
}
};
