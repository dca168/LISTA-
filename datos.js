/* ============================================================
   MÓDULO: datos.js
   Responsabilidad única: CARGA DE DATOS (bancos de preguntas y claves).
   No contiene lógica de examen, reglas de evaluación ni UI.

   Los datos viven en archivos JSON locales bajo /data. La app NUNCA
   depende de los PDF originales en tiempo de ejecución.

   ------------------------------------------------------------
   SECCIÓN: ADMINISTRACIÓN DE BANCOS POR AÑO
   Para agregar un nuevo año de examen:
     1. Crear data/preguntas/preguntas-AAAA.json con la forma:
        { "anio": AAAA, "preguntas": [ { "id": "AAAA-01", "enunciado": "...",
          "alternativas": { "a": "...", "b": "...", "c": "..." } }, ... ] }
     2. Crear data/claves/claves-AAAA.json con la forma:
        { "anio": AAAA, "claves": { "AAAA-01": "a", "AAAA-02": "c", ... } }
     3. Agregar una entrada en data/config-anios.json apuntando a ambos archivos.
   No es necesario modificar ningún otro módulo: el motor de examen
   y las reglas de evaluación son agnósticos al año.
   ============================================================ */

const Datos = (() => {

  const RUTA_CONFIG_ANIOS = "data/config-anios.json";
  const RUTA_ESCALAS = "data/escalas.json";

  async function cargarJSON(ruta) {
    const respuesta = await fetch(ruta);
    if (!respuesta.ok) {
      throw new Error(`No se pudo cargar el archivo: ${ruta}`);
    }
    return respuesta.json();
  }

  /** Devuelve la configuración de años disponibles (solo activos). */
  async function obtenerAniosDisponibles() {
    const config = await cargarJSON(RUTA_CONFIG_ANIOS);
    return config.anios.filter(a => a.activo);
  }

  /** Devuelve la configuración completa de escalas (regla desacoplada). */
  async function obtenerEscalas() {
    return cargarJSON(RUTA_ESCALAS);
  }

  /** Carga el banco de preguntas y las claves de un año específico, y las combina por ID. */
  async function cargarBancoDeAnio(anioInfo) {
    const [bancoPreguntas, bancoClaves] = await Promise.all([
      cargarJSON(anioInfo.archivoPreguntas),
      cargarJSON(anioInfo.archivoClaves)
    ]);

    // Vinculación estricta por ID (nunca por posición visual).
    const preguntasConClave = bancoPreguntas.preguntas.map(p => {
      const claveCorrecta = bancoClaves.claves[p.id];
      if (!claveCorrecta) {
        console.warn(`[Datos] La pregunta ${p.id} no tiene clave asociada en claves-${anioInfo.anio}.json`);
      }
      return { ...p, claveCorrecta: claveCorrecta || null };
    });

    return {
      anio: anioInfo.anio,
      preguntas: preguntasConClave
    };
  }

  return {
    obtenerAniosDisponibles,
    obtenerEscalas,
    cargarBancoDeAnio
  };
})();
