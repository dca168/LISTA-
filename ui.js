/* ============================================================
   MÓDULO: ui.js
   Responsabilidad única: ORQUESTACIÓN DE INTERFAZ. Conecta los
   módulos de datos, reglas, persistencia, motor y reporte con el
   DOM. Es el único módulo que manipula elementos HTML directamente.
   ============================================================ */

(() => {
  "use strict";

  // ------------------------------------------------------------
  // Referencias DOM
  // ------------------------------------------------------------
  const pantallas = {
    inicio: document.getElementById("pantalla-inicio"),
    instrucciones: document.getElementById("pantalla-instrucciones"),
    examen: document.getElementById("pantalla-examen"),
    resultados: document.getElementById("pantalla-resultados"),
    reporte: document.getElementById("pantalla-reporte"),
    admin: document.getElementById("pantalla-admin")
  };

  const selectAnio = document.getElementById("select-anio");
  const selectEscala = document.getElementById("select-escala");
  const avisoReanudar = document.getElementById("aviso-reanudar");
  const btnReanudar = document.getElementById("btn-reanudar");
  const btnDescartar = document.getElementById("btn-descartar");
  const btnIrInstrucciones = document.getElementById("btn-ir-instrucciones");
  const btnVolverInicio = document.getElementById("btn-volver-inicio");
  const btnIniciarExamen = document.getElementById("btn-iniciar-examen");

  const cronometroEl = document.getElementById("cronometro");
  const cronometroTexto = document.getElementById("cronometro-texto");
  const navegadorPreguntas = document.getElementById("navegador-preguntas");
  const textoProgreso = document.getElementById("texto-progreso");
  const textoRespondidas = document.getElementById("texto-respondidas");
  const preguntaNumero = document.getElementById("pregunta-numero");
  const preguntaEnunciado = document.getElementById("pregunta-enunciado");
  const preguntaAlternativas = document.getElementById("pregunta-alternativas");
  const btnAnterior = document.getElementById("btn-anterior");
  const btnSiguiente = document.getElementById("btn-siguiente");
  const btnFinalizar = document.getElementById("btn-finalizar");

  const resumenResultados = document.getElementById("resumen-resultados");
  const btnVerReporte = document.getElementById("btn-ver-reporte");
  const btnNuevoIntento = document.getElementById("btn-nuevo-intento");

  const reporteImprimible = document.getElementById("reporte-imprimible");
  const btnImprimir = document.getElementById("btn-imprimir");
  const btnVolverResultados = document.getElementById("btn-volver-resultados");

  const btnAdminToggle = document.getElementById("btn-admin-toggle");
  const btnAdminCerrar = document.getElementById("btn-admin-cerrar");
  const btnAdminValidar = document.getElementById("btn-admin-validar");
  const btnAdminExportar = document.getElementById("btn-admin-exportar");
  const adminAnio = document.getElementById("admin-anio");
  const adminPreguntasJson = document.getElementById("admin-preguntas-json");
  const adminClavesJson = document.getElementById("admin-claves-json");
  const adminResultadoValidacion = document.getElementById("admin-resultado-validacion");

  // ------------------------------------------------------------
  // Estado de la aplicación (referencias a datos cargados)
  // ------------------------------------------------------------
  let aniosDisponibles = [];
  let configEscalas = null;
  let ultimoResultadoCorreccion = null;
  let ultimoContextoReporte = null;

  function mostrarPantalla(nombre) {
    Object.values(pantallas).forEach(p => p.classList.remove("activa"));
    pantallas[nombre].classList.add("activa");
  }

  // ------------------------------------------------------------
  // Inicialización general
  // ------------------------------------------------------------
  async function inicializar() {
    aniosDisponibles = await Datos.obtenerAniosDisponibles();
    configEscalas = await Datos.obtenerEscalas();

    selectAnio.innerHTML = aniosDisponibles
      .map(a => `<option value="${a.anio}">${a.anio}</option>`)
      .join("");

    selectEscala.innerHTML = configEscalas.escalas
      .map(e => `<option value="${e.id}">${e.nombre} (mínimo ${e.correctasMinimas} correctas / ${e.puntajeMinimoRequerido} pts)</option>`)
      .join("");

    if (Persistencia.hayIntentoIncompleto()) {
      avisoReanudar.hidden = false;
    }

    if (window.location.hash === "#admin") {
      mostrarPantalla("admin");
    }
  }

  // ------------------------------------------------------------
  // Flujo: Inicio -> Instrucciones -> Examen
  // ------------------------------------------------------------
  btnIrInstrucciones.addEventListener("click", () => mostrarPantalla("instrucciones"));
  btnVolverInicio.addEventListener("click", () => mostrarPantalla("inicio"));

  btnIniciarExamen.addEventListener("click", async () => {
    const anio = parseInt(selectAnio.value, 10);
    const escalaId = selectEscala.value;
    const anioInfo = aniosDisponibles.find(a => a.anio === anio);
    const banco = await Datos.cargarBancoDeAnio(anioInfo);

    MotorExamen.iniciarNuevoIntento({ anio, escalaId, bancoPreguntas: banco.preguntas });
    entrarAPantallaExamen();
  });

  btnReanudar.addEventListener("click", () => {
    const estadoGuardado = Persistencia.cargarIntento();
    MotorExamen.restaurarIntento(estadoGuardado);
    entrarAPantallaExamen();
  });

  btnDescartar.addEventListener("click", () => {
    Persistencia.limpiarIntento();
    avisoReanudar.hidden = true;
  });

  function entrarAPantallaExamen() {
    mostrarPantalla("examen");
    cronometroEl.hidden = false;
    construirNavegadorPreguntas();
    renderizarPreguntaActual();

    MotorExamen.iniciarTemporizador(
      (msRestante) => actualizarCronometro(msRestante),
      () => finalizarExamen(true) // true = finalizado por tiempo agotado
    );
    actualizarCronometro(MotorExamen.obtenerEstado().tiempoRestanteMs);
  }

  function formatearTiempo(ms) {
    const totalSegundos = Math.max(0, Math.floor(ms / 1000));
    const horas = Math.floor(totalSegundos / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(horas)}:${pad(minutos)}:${pad(segundos)}`;
  }

  function actualizarCronometro(msRestante) {
    cronometroTexto.textContent = formatearTiempo(msRestante);
    cronometroEl.classList.toggle("cronometro--alerta", msRestante <= 5 * 60 * 1000);
  }

  // ------------------------------------------------------------
  // Renderizado del examen
  // ------------------------------------------------------------
  function construirNavegadorPreguntas() {
    const estado = MotorExamen.obtenerEstado();
    navegadorPreguntas.innerHTML = "";
    estado.preguntasCongeladas.forEach((pregunta, idx) => {
      const boton = document.createElement("button");
      boton.textContent = idx + 1;
      boton.dataset.indice = idx;
      boton.addEventListener("click", () => {
        MotorExamen.irAPregunta(idx);
        renderizarPreguntaActual();
      });
      navegadorPreguntas.appendChild(boton);
    });
  }

  function actualizarNavegadorEstados() {
    const estado = MotorExamen.obtenerEstado();
    Array.from(navegadorPreguntas.children).forEach((boton, idx) => {
      const pregunta = estado.preguntasCongeladas[idx];
      boton.classList.toggle("respondida", !!estado.respuestas[pregunta.id]);
      boton.classList.toggle("actual", idx === estado.indiceActual);
    });
  }

  function renderizarPreguntaActual() {
    const estado = MotorExamen.obtenerEstado();
    const pregunta = MotorExamen.obtenerPreguntaActual();
    const respuestaActual = estado.respuestas[pregunta.id];

    preguntaNumero.textContent = `Pregunta ${estado.indiceActual + 1}`;
    preguntaEnunciado.textContent = pregunta.enunciado;
    textoProgreso.textContent = `Pregunta ${estado.indiceActual + 1} de ${estado.preguntasCongeladas.length}`;
    textoRespondidas.textContent = `${MotorExamen.contarRespondidas()} respondidas`;

    preguntaAlternativas.innerHTML = "";
    Object.entries(pregunta.alternativas).forEach(([letra, texto]) => {
      const contenedor = document.createElement("label");
      contenedor.className = "alternativa" + (respuestaActual === letra ? " seleccionada" : "");
      contenedor.innerHTML = `
        <input type="radio" name="alternativa" value="${letra}" ${respuestaActual === letra ? "checked" : ""}>
        <span><strong>${letra.toUpperCase()})</strong> ${texto}</span>
      `;
      contenedor.querySelector("input").addEventListener("change", () => {
        MotorExamen.responderPreguntaActual(letra);
        renderizarPreguntaActual();
      });
      preguntaAlternativas.appendChild(contenedor);
    });

    btnAnterior.disabled = estado.indiceActual === 0;
    btnSiguiente.disabled = estado.indiceActual === estado.preguntasCongeladas.length - 1;

    actualizarNavegadorEstados();
  }

  btnAnterior.addEventListener("click", () => {
    MotorExamen.anteriorPregunta();
    renderizarPreguntaActual();
  });
  btnSiguiente.addEventListener("click", () => {
    MotorExamen.siguientePregunta();
    renderizarPreguntaActual();
  });
  btnFinalizar.addEventListener("click", () => {
    const estado = MotorExamen.obtenerEstado();
    const sinResponder = estado.preguntasCongeladas.length - MotorExamen.contarRespondidas();
    const confirmar = confirm(
      sinResponder > 0
        ? `Tienes ${sinResponder} pregunta(s) sin responder. ¿Deseas finalizar el examen igualmente?`
        : "¿Deseas finalizar el examen ahora?"
    );
    if (confirmar) finalizarExamen(false);
  });

  // ------------------------------------------------------------
  // Finalización, corrección y resultados
  // ------------------------------------------------------------
  function finalizarExamen(porTiempoAgotado) {
    MotorExamen.finalizarManualmente();
    const estado = MotorExamen.obtenerEstado();

    const escalaSeleccionada = configEscalas.escalas.find(e => e.id === estado.escalaId);
    const resultado = ReglasEvaluacion.corregirIntento(
      estado.preguntasCongeladas,
      estado.respuestas,
      configEscalas.reglaBase,
      escalaSeleccionada
    );

    ultimoResultadoCorreccion = resultado;
    ultimoContextoReporte = {
      anio: estado.anio,
      nombreEscala: escalaSeleccionada.nombre,
      fecha: new Date().toLocaleString("es-PE")
    };

    // Limpieza automática del estado temporal al finalizar (requisito de persistencia).
    MotorExamen.limpiarIntentoActual();

    cronometroEl.hidden = true;
    mostrarResultados(porTiempoAgotado);
  }

  function mostrarResultados(porTiempoAgotado) {
    resumenResultados.innerHTML = Reporte.construirResumenHTML(
      ultimoResultadoCorreccion,
      ultimoContextoReporte.anio,
      ultimoContextoReporte.nombreEscala
    );
    if (porTiempoAgotado) {
      const avisoTiempo = document.createElement("p");
      avisoTiempo.className = "aviso aviso--info";
      avisoTiempo.textContent = "El tiempo máximo (180 minutos) se agotó. El examen fue cerrado y corregido automáticamente.";
      resumenResultados.parentElement.insertBefore(avisoTiempo, resumenResultados);
    }
    mostrarPantalla("resultados");
  }

  btnVerReporte.addEventListener("click", () => {
    reporteImprimible.innerHTML = Reporte.construirReporteImprimibleHTML(ultimoResultadoCorreccion, ultimoContextoReporte);
    mostrarPantalla("reporte");
  });
  btnVolverResultados.addEventListener("click", () => mostrarPantalla("resultados"));
  btnImprimir.addEventListener("click", () => window.print());

  btnNuevoIntento.addEventListener("click", () => {
    avisoReanudar.hidden = true;
    mostrarPantalla("inicio");
  });

  // ------------------------------------------------------------
  // Panel de administración local (aislado del flujo de examen)
  // ------------------------------------------------------------
  function alternarAdmin(mostrar) {
    mostrarPantalla(mostrar ? "admin" : "inicio");
  }
  btnAdminToggle.addEventListener("click", () => alternarAdmin(true));
  btnAdminCerrar.addEventListener("click", () => alternarAdmin(false));

  btnAdminValidar.addEventListener("click", () => {
    try {
      const banco = JSON.parse(adminPreguntasJson.value || "{}");
      const claves = JSON.parse(adminClavesJson.value || "{}");
      const resultado = Admin.validarConsistencia(banco, claves);
      adminResultadoValidacion.textContent = resultado.valido
        ? `Válido. ${resultado.totalPreguntas} preguntas y ${resultado.totalClaves} claves coinciden correctamente.`
        : `Se encontraron ${resultado.errores.length} problema(s):\n- ${resultado.errores.join("\n- ")}`;
    } catch (error) {
      adminResultadoValidacion.textContent = `Error al interpretar el JSON: ${error.message}`;
    }
  });

  btnAdminExportar.addEventListener("click", () => {
    const anio = adminAnio.value.trim() || "AAAA";
    try {
      const banco = JSON.parse(adminPreguntasJson.value || "{}");
      const claves = JSON.parse(adminClavesJson.value || "{}");
      Admin.descargarJSON(`preguntas-${anio}.json`, banco);
      Admin.descargarJSON(`claves-${anio}.json`, claves);
    } catch (error) {
      adminResultadoValidacion.textContent = `Error al exportar: ${error.message}`;
    }
  });

  // ------------------------------------------------------------
  // Arranque
  // ------------------------------------------------------------
  document.addEventListener("DOMContentLoaded", inicializar);
})();
