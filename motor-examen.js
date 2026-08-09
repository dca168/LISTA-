/* ============================================================
   MÓDULO: motor-examen.js
   Responsabilidad única: LÓGICA DEL EXAMEN (estado en memoria,
   selección aleatoria congelada de 60 preguntas, temporizador,
   navegación entre preguntas). No contiene reglas de puntaje
   (ver reglas-evaluacion.js) ni manipulación directa del DOM
   (ver ui.js).
   ============================================================ */

const MotorExamen = (() => {

  const DURACION_MAXIMA_MS = 180 * 60 * 1000; // 180 minutos
  const INTERVALO_AUTOGUARDADO_MS = 5000;

  // Estado interno del intento actual (en memoria, reflejado en persistencia).
  let estado = null;
  let temporizadorId = null;
  let autoguardadoId = null;
  let alCambiarTiempo = null;
  let alTiempoAgotado = null;

  /** Selección aleatoria de 60 preguntas únicas (Fisher-Yates), congeladas para todo el intento. */
  function seleccionarPreguntasAleatorias(bancoPreguntas, cantidad = 60) {
    const copia = [...bancoPreguntas];
    for (let i = copia.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    if (copia.length < cantidad) {
      console.warn(`[MotorExamen] El banco tiene menos de ${cantidad} preguntas; se usarán todas (${copia.length}).`);
      return copia;
    }
    return copia.slice(0, cantidad);
  }

  /** Inicia un intento nuevo: congela el set de preguntas y el tiempo. */
  function iniciarNuevoIntento({ anio, escalaId, bancoPreguntas }) {
    const preguntasCongeladas = seleccionarPreguntasAleatorias(bancoPreguntas, 60);
    estado = {
      anio,
      escalaId,
      preguntasCongeladas,
      respuestas: {},               // { idPregunta: 'a'|'b'|'c' }
      indiceActual: 0,
      tiempoRestanteMs: DURACION_MAXIMA_MS,
      estadoIntento: "en_curso"     // "en_curso" | "finalizado"
    };
    Persistencia.guardarIntento(estado);
    return estado;
  }

  /** Restaura un intento incompleto desde persistencia (por recarga accidental). */
  function restaurarIntento(estadoGuardado) {
    estado = estadoGuardado;
    return estado;
  }

  function obtenerEstado() { return estado; }

  function obtenerPreguntaActual() {
    return estado.preguntasCongeladas[estado.indiceActual];
  }

  function irAPregunta(indice) {
    if (indice < 0 || indice >= estado.preguntasCongeladas.length) return;
    estado.indiceActual = indice;
    guardarProgreso();
  }

  function siguientePregunta() {
    if (estado.indiceActual < estado.preguntasCongeladas.length - 1) {
      estado.indiceActual++;
      guardarProgreso();
    }
  }

  function anteriorPregunta() {
    if (estado.indiceActual > 0) {
      estado.indiceActual--;
      guardarProgreso();
    }
  }

  function responderPreguntaActual(alternativaSeleccionada) {
    const pregunta = obtenerPreguntaActual();
    estado.respuestas[pregunta.id] = alternativaSeleccionada;
    guardarProgreso();
  }

  function contarRespondidas() {
    return Object.keys(estado.respuestas).length;
  }

  /** Guardado inmediato (al responder o navegar), además del periódico. */
  function guardarProgreso() {
    Persistencia.guardarIntento(estado);
  }

  /** Inicia el temporizador. onTick recibe ms restantes; onFin se llama al agotarse el tiempo. */
  function iniciarTemporizador(onTick, onFin) {
    alCambiarTiempo = onTick;
    alTiempoAgotado = onFin;

    detenerTemporizador();
    temporizadorId = setInterval(() => {
      estado.tiempoRestanteMs -= 1000;
      if (estado.tiempoRestanteMs <= 0) {
        estado.tiempoRestanteMs = 0;
        if (alCambiarTiempo) alCambiarTiempo(estado.tiempoRestanteMs);
        finalizarPorTiempo();
        return;
      }
      if (alCambiarTiempo) alCambiarTiempo(estado.tiempoRestanteMs);
    }, 1000);

    // Guardado automático periódico independiente del tick de UI.
    autoguardadoId = setInterval(guardarProgreso, INTERVALO_AUTOGUARDADO_MS);
  }

  function detenerTemporizador() {
    if (temporizadorId) clearInterval(temporizadorId);
    if (autoguardadoId) clearInterval(autoguardadoId);
    temporizadorId = null;
    autoguardadoId = null;
  }

  function finalizarPorTiempo() {
    detenerTemporizador();
    estado.estadoIntento = "finalizado";
    guardarProgreso();
    if (alTiempoAgotado) alTiempoAgotado();
  }

  /** Finalización manual (botón "Finalizar examen"). */
  function finalizarManualmente() {
    detenerTemporizador();
    estado.estadoIntento = "finalizado";
    guardarProgreso();
  }

  /** Limpieza del estado temporal tras corregir y mostrar resultados. */
  function limpiarIntentoActual() {
    detenerTemporizador();
    estado = null;
    Persistencia.limpiarIntento();
  }

  return {
    DURACION_MAXIMA_MS,
    iniciarNuevoIntento,
    restaurarIntento,
    obtenerEstado,
    obtenerPreguntaActual,
    irAPregunta,
    siguientePregunta,
    anteriorPregunta,
    responderPreguntaActual,
    contarRespondidas,
    iniciarTemporizador,
    detenerTemporizador,
    finalizarManualmente,
    limpiarIntentoActual
  };
})();
