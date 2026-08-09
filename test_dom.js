
const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");

(async () => {
  const html = fs.readFileSync("index.html", "utf-8");
  const dom = new JSDOM(html, {
    url: "file://" + __dirname + "/index.html",
    runScripts: "dangerously",
    resources: "usable"
  });

  const window = dom.window;

  window.onerror = (msg, src, line, col, err) => {
    console.log("WINDOW ERROR:", msg, src, line, col, err && err.stack);
  };

  // Esperar a que se ejecuten los scripts y el DOMContentLoaded
  await new Promise(resolve => setTimeout(resolve, 1500));

  const doc = window.document;
  const selectAnio = doc.getElementById("select-anio");
  const selectEscala = doc.getElementById("select-escala");

  console.log("select-anio innerHTML:", selectAnio ? selectAnio.innerHTML : "NO ENCONTRADO");
  console.log("select-escala innerHTML:", selectEscala ? selectEscala.innerHTML : "NO ENCONTRADO");

  console.log("typeof Datos:", typeof window.Datos);
  console.log("typeof DATOS_EMBEBIDOS:", typeof window.DATOS_EMBEBIDOS);

  process.exit(0);
})();
