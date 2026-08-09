/* ============================================================
   MÓDULO: persistencia.js
   Responsabilidad única: PERSISTENCIA TEMPORAL del intento en curso,
   usando localStorage (funciona 100% offline, sin backend).

   ------------------------------------------------------------
   ALCANCE DE LA PERSISTENCIA (documentado explícitamente):
   - Es TEMPORAL y asociada a UN SOLO intento en curso.
   - NO constituye un historial permanente de usos anteriores.
   - Se limpia automáticamente al finalizar el examen (por tiempo
     agotado o por finalización manual del usuario).
   - Se guarda: año elegido, escala seleccionada, el conjunto exacto
     de 60 preguntas congeladas para el intento, las respuestas del
     usuario, el tiempo restante, el índice de pregunta actual y el
     estado del intento ("en_curso" | "finalizado").
   ============================================================ */

const Persistencia = (() => {

  const CLAVE_STORAGE = "simulador_ascenso_intento_actual_v1";

  function guardarIntento(estadoIntento) {
    try {
      localStorage.setItem(CLAVE_STORAGE, JSON.stringify(estadoIntento));
    } catch (error) {
      console.error("[Persistencia] No se pudo guardar el intento:", error);
    }
  }

  function cargarIntento() {
    try {
      const crudo = localStorage.getItem(CLAVE_STORAGE);
      return crudo ? JSON.parse(crudo) : null;
    } catch (error) {
      console.error("[Persistencia] No se pudo leer el intento guardado:", error);
      return null;
    }
  }

  /** Verifica si existe un intento incompleto (estado "en_curso") recuperable. */
  function hayIntentoIncompleto() {
    const intento = cargarIntento();
    return !!(intento && intento.estado === "en_curso");
  }

  /** Limpieza automática al finalizar el examen (por tiempo o manualmente). */
  function limpiarIntento() {
    localStorage.removeItem(CLAVE_STORAGE);
  }

  return {
    guardarIntento,
    cargarIntento,
    hayIntentoIncompleto,
    limpiarIntento
  };
})();
