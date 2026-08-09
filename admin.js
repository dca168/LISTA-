/* ============================================================
   MÓDULO: admin.js
   Responsabilidad única: ADMINISTRACIÓN LOCAL de bancos de preguntas
   y claves. ESTE MÓDULO ES OPCIONAL Y ESTÁ AISLADO del flujo de
   examen del usuario final. No se ejecuta automáticamente ni
   afecta el modo examen.

   ------------------------------------------------------------
   CÓMO ACCEDER (documentado explícitamente):
   - Botón discreto "⚙" en el pie de página, o
   - Navegando a la URL con el hash "#admin" (ej: index.html#admin).
   Ambos caminos solo muestran/ocultan la pantalla #pantalla-admin;
   no hay autenticación real porque todo corre localmente en el
   navegador del propio docente/administrador de contenido.

   FUNCIONES:
   - Pegar/editar un banco de preguntas y su archivo de claves (JSON).
   - Validar consistencia: cada pregunta debe tener una clave asociada
     y viceversa; cada clave debe ser 'a', 'b' o 'c'.
   - Exportar el JSON resultante (descarga de archivo) para que el
     mantenedor lo copie manualmente a data/preguntas y data/claves.
   ============================================================ */

const Admin = (() => {

  function validarConsistencia(bancoPreguntas, bancoClaves) {
    const errores = [];
    const idsPreguntas = new Set((bancoPreguntas.preguntas || []).map(p => p.id));
    const idsClaves = new Set(Object.keys(bancoClaves.claves || {}));

    idsPreguntas.forEach(id => {
      if (!idsClaves.has(id)) errores.push(`Falta clave para la pregunta ${id}`);
    });
    idsClaves.forEach(id => {
      if (!idsPreguntas.has(id)) errores.push(`La clave ${id} no corresponde a ninguna pregunta del banco`);
    });
    Object.entries(bancoClaves.claves || {}).forEach(([id, valor]) => {
      if (!["a", "b", "c"].includes(valor)) {
        errores.push(`La clave de ${id} tiene un valor inválido: "${valor}" (debe ser a, b o c)`);
      }
    });

    // IDs duplicados dentro del propio banco de preguntas.
    const idsVistos = new Set();
    (bancoPreguntas.preguntas || []).forEach(p => {
      if (idsVistos.has(p.id)) errores.push(`ID duplicado en el banco de preguntas: ${p.id}`);
      idsVistos.add(p.id);
    });

    return {
      valido: errores.length === 0,
      errores,
      totalPreguntas: idsPreguntas.size,
      totalClaves: idsClaves.size
    };
  }

  function descargarJSON(nombreArchivo, objeto) {
    const blob = new Blob([JSON.stringify(objeto, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.download = nombreArchivo;
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
    URL.revokeObjectURL(url);
  }

  return {
    validarConsistencia,
    descargarJSON
  };
})();
