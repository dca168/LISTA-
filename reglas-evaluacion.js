/* ============================================================
   MÓDULO: reglas-evaluacion.js
   Responsabilidad única: REGLAS DE EVALUACIÓN, desacopladas del
   motor de examen y de la UI. Aquí NO se maneja tiempo, ni
   preguntas seleccionadas, ni persistencia.

   ------------------------------------------------------------
   DECISIÓN DE IMPLEMENTACIÓN DOCUMENTADA (ver "Supuestos de
   implementación" en el README):
   La tabla de equivalencias entregada por el usuario solo cubre
   los valores pares 36,38,40,42,44,46 correctas. Para los valores
   NO cubiertos explícitamente (0-35, 37, 39, 41, 43, 45, 47-60),
   este módulo NO inventa una regla oculta: aplica la fórmula base
   ya confirmada en el enunciado (1.5 puntos por respuesta correcta,
   0 por incorrecta o en blanco, máximo 90 puntos) para calcular
   el PUNTAJE, y usa la escala seleccionada únicamente para
   determinar la CONDICIÓN FINAL (aprobado/no aprobado) comparando
   el puntaje obtenido contra "puntajeMinimoRequerido" de esa escala.
   Esto es consistente matemáticamente con los puntos de la tabla
   (correctas * 1.5 == puntaje en todos los casos provistos) y no
   agrega ninguna regla de bonificación, penalización o redondeo
   no especificada.

   Si en el futuro se dispone de una tabla oficial completa y
   distinta de "correctas * 1.5", basta reemplazar la función
   calcularPuntaje() por una búsqueda en "tablaReferencia" de cada
   escala en data/escalas.json. El resto del sistema no cambia.
   ============================================================ */

const ReglasEvaluacion = (() => {

  /**
   * Calcula el puntaje final a partir del número de respuestas correctas.
   * Regla base confirmada: 1.5 puntos por correcta, tope 90 puntos.
   */
  function calcularPuntaje(cantidadCorrectas, reglaBase) {
    const puntaje = cantidadCorrectas * reglaBase.puntosPorCorrecta;
    return Math.min(puntaje, reglaBase.puntajeMaximo);
  }

  /**
   * Determina la condición final (aprobado / no aprobado) según la
   * escala interna seleccionada, comparando el puntaje obtenido contra
   * el puntaje mínimo requerido de dicha escala.
   */
  function determinarCondicion(puntajeObtenido, escalaSeleccionada) {
    const aprobado = puntajeObtenido >= escalaSeleccionada.puntajeMinimoRequerido;
    return {
      aprobado,
      etiqueta: aprobado ? "Aprobado" : "No aprobado",
      puntajeMinimoRequerido: escalaSeleccionada.puntajeMinimoRequerido,
      correctasMinimas: escalaSeleccionada.correctasMinimas
    };
  }

  /**
   * Corrige un intento completo: recibe el arreglo de preguntas congeladas
   * (con su claveCorrecta) y el mapa de respuestas del usuario { idPregunta: 'a'|'b'|'c' }.
   * Devuelve el detalle pregunta por pregunta y los totales.
   */
  function corregirIntento(preguntasCongeladas, respuestasUsuario, reglaBase, escalaSeleccionada) {
    let correctas = 0, incorrectas = 0, enBlanco = 0;

    const detalle = preguntasCongeladas.map(pregunta => {
      const respuestaMarcada = respuestasUsuario[pregunta.id] || null;
      let estado;
      if (!respuestaMarcada) {
        estado = "en_blanco";
        enBlanco++;
      } else if (respuestaMarcada === pregunta.claveCorrecta) {
        estado = "correcta";
        correctas++;
      } else {
        estado = "incorrecta";
        incorrectas++;
      }
      return {
        id: pregunta.id,
        enunciado: pregunta.enunciado,
        alternativas: pregunta.alternativas,
        respuestaMarcada,
        claveCorrecta: pregunta.claveCorrecta,
        textoRespuestaCorrecta: pregunta.claveCorrecta ? pregunta.alternativas[pregunta.claveCorrecta] : "(sin clave registrada)",
        textoRespuestaMarcada: respuestaMarcada ? pregunta.alternativas[respuestaMarcada] : "(sin responder)",
        estado
      };
    });

    const puntaje = calcularPuntaje(correctas, reglaBase);
    const condicion = determinarCondicion(puntaje, escalaSeleccionada);

    return {
      totalCorrectas: correctas,
      totalIncorrectas: incorrectas,
      totalEnBlanco: enBlanco,
      puntajeFinal: puntaje,
      condicion,
      detalle
    };
  }

  return {
    calcularPuntaje,
    determinarCondicion,
    corregirIntento
  };
})();
