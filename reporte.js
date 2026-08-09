/* ============================================================
   MÓDULO: reporte.js
   Responsabilidad única: GENERACIÓN DEL REPORTE (resumen y vista
   imprimible). Construye HTML a partir del resultado de la
   corrección, sin acoplarse a la lógica de reglas ni al motor.

   ------------------------------------------------------------
   ESTRATEGIA DE IMPRESIÓN / PDF:
   Se usa una vista HTML con CSS @media print (ver css/estilos.css)
   para permitir imprimir directamente o usar "Guardar como PDF"
   del navegador (Ctrl+P). Esto funciona 100% offline porque es una
   capacidad nativa del navegador, sin librerías externas ni
   conexión a internet. No se agrega generación programática de PDF
   para mantener el sistema simple, ligero y confiablemente offline.
   ============================================================ */

const Reporte = (() => {

  function construirResumenHTML(resultado, anio, nombreEscala) {
    const claseCondicion = resultado.condicion.aprobado ? "condicion-aprobado" : "condicion-desaprobado";
    return `
      <div class="resumen-item">
        <div class="resumen-item__valor">${resultado.totalCorrectas}</div>
        <div class="resumen-item__etiqueta">Correctas</div>
      </div>
      <div class="resumen-item">
        <div class="resumen-item__valor">${resultado.totalIncorrectas}</div>
        <div class="resumen-item__etiqueta">Incorrectas</div>
      </div>
      <div class="resumen-item">
        <div class="resumen-item__valor">${resultado.totalEnBlanco}</div>
        <div class="resumen-item__etiqueta">En blanco</div>
      </div>
      <div class="resumen-item">
        <div class="resumen-item__valor">${resultado.puntajeFinal.toFixed(1)} / 90</div>
        <div class="resumen-item__etiqueta">Puntaje final</div>
      </div>
      <div class="resumen-item">
        <div class="resumen-item__valor ${claseCondicion}">${resultado.condicion.etiqueta}</div>
        <div class="resumen-item__etiqueta">Condición (${nombreEscala}, año ${anio})</div>
      </div>
    `;
  }

  function etiquetaEstado(estado) {
    if (estado === "correcta") return '<span class="reporte-item__correcta">Correcta</span>';
    if (estado === "incorrecta") return '<span class="reporte-item__incorrecta">Incorrecta</span>';
    return '<span class="reporte-item__blanco">En blanco</span>';
  }

  function construirReporteImprimibleHTML(resultado, contexto) {
    const { anio, nombreEscala, fecha } = contexto;
    const filas = resultado.detalle.map((item, idx) => `
      <div class="reporte-item">
        <strong>Pregunta ${idx + 1}</strong> (${item.id}) &mdash; ${etiquetaEstado(item.estado)}
        <p>${item.enunciado}</p>
        <p><em>Respuesta marcada:</em> ${item.respuestaMarcada ? item.respuestaMarcada.toUpperCase() + ") " + item.textoRespuestaMarcada : "No respondida"}</p>
        <p><em>Respuesta correcta:</em> ${item.claveCorrecta ? item.claveCorrecta.toUpperCase() + ") " + item.textoRespuestaCorrecta : "No registrada"}</p>
      </div>
    `).join("");

    return `
      <header>
        <h2>Reporte de simulación &mdash; Ascenso de escala magisterial</h2>
        <p>Año del banco: <strong>${anio}</strong> &nbsp;|&nbsp; Escala evaluada: <strong>${nombreEscala}</strong> &nbsp;|&nbsp; Fecha: <strong>${fecha}</strong></p>
      </header>
      <section class="resumen-resultados">
        ${construirResumenHTML(resultado, anio, nombreEscala)}
      </section>
      <hr>
      <section>
        <h3>Detalle pregunta por pregunta</h3>
        ${filas}
      </section>
    `;
  }

  return {
    construirResumenHTML,
    construirReporteImprimibleHTML
  };
})();
