
const { JSDOM } = require("jsdom");
const fs = require("fs");

(async () => {
  const html = fs.readFileSync("index.html", "utf-8");
  const dom = new JSDOM(html, {
    url: "file://" + __dirname + "/index.html",
    runScripts: "dangerously",
    resources: "usable"
  });
  const window = dom.window;
  window.onerror = (msg, src, line, col, err) => {
    console.log("WINDOW ERROR:", msg, "@", line + ":" + col, err && err.stack);
  };

  await new Promise(resolve => setTimeout(resolve, 1000));

  const doc = window.document;

  function click(id) {
    const el = doc.getElementById(id);
    if (!el) { console.log("NO EXISTE:", id); return; }
    el.dispatchEvent(new window.Event("click", { bubbles: true }));
  }

  // Seleccionar año 2018 y escala segunda
  doc.getElementById("select-anio").value = "2018";
  doc.getElementById("select-escala").value = "segunda";

  click("btn-ir-instrucciones");
  await new Promise(r => setTimeout(r, 200));
  console.log("Pantalla instrucciones activa:", doc.getElementById("pantalla-instrucciones").classList.contains("activa"));

  click("btn-iniciar-examen");
  await new Promise(r => setTimeout(r, 800));

  console.log("Pantalla examen activa:", doc.getElementById("pantalla-examen").classList.contains("activa"));
  console.log("pregunta-enunciado texto:", doc.getElementById("pregunta-enunciado").textContent);
  console.log("pregunta-alternativas innerHTML:", doc.getElementById("pregunta-alternativas").innerHTML.slice(0,300));

  process.exit(0);
})();
