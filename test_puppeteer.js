
const puppeteer = require("puppeteer");
const path = require("path");

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--allow-file-access-from-files"]
  });
  const page = await browser.newPage();

  page.on("console", msg => console.log("CONSOLE:", msg.type(), msg.text()));
  page.on("pageerror", err => console.log("PAGE ERROR:", err.message));
  page.on("requestfailed", req => console.log("REQUEST FAILED:", req.url(), req.failure() && req.failure().errorText));

  const filePath = "file://" + path.resolve(__dirname, "index.html");
  console.log("Abriendo:", filePath);
  await page.goto(filePath, { waitUntil: "networkidle0" });

  await new Promise(r => setTimeout(r, 1000));

  const anioOptions = await page.$eval("#select-anio", el => el.innerHTML);
  console.log("select-anio:", anioOptions.slice(0,200));

  await page.select("#select-anio", "2018");
  await page.select("#select-escala", "segunda");
  await page.click("#btn-ir-instrucciones");
  await new Promise(r => setTimeout(r, 300));
  await page.click("#btn-iniciar-examen");
  await new Promise(r => setTimeout(r, 1000));

  const enunciado = await page.$eval("#pregunta-enunciado", el => el.textContent).catch(e => "ERROR: " + e.message);
  console.log("Enunciado:", enunciado);

  const altHtml = await page.$eval("#pregunta-alternativas", el => el.innerHTML).catch(e => "ERROR: " + e.message);
  console.log("Alternativas HTML:", altHtml.slice(0, 300));

  await browser.close();
})();
