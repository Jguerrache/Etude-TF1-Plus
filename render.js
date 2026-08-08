/* ============================================================
   Moteur de rendu — scène 1920×1080, mise à l'échelle responsive
   ============================================================ */
const FAM = { SG: "'Space Grotesk'", PM: "'IBM Plex Mono'" };
const WEIGHT = { Light: 300, Regular: 400, Medium: 500, Bold: 700 };
const ALIGN = { L: "left", C: "center", R: "right" };

function el(tag, cls) { const n = document.createElement(tag); if (cls) n.className = cls; return n; }

/* Logotype officiel TF1+ — le fichier source le remplit d'un dégradé radial
   navy sur navy, illisible sur fond sombre : on impose un aplat. */
const LOGO_RATIO = 1663.004 / 390.836;
function logoSVG(color, w) {
  const NS = "http://www.w3.org/2000/svg";
  const s = document.createElementNS(NS, "svg");
  s.setAttribute("viewBox", "0 0 1663.004 390.836");
  s.setAttribute("width", w);
  s.setAttribute("height", w / LOGO_RATIO);
  s.style.position = "absolute";
  const g = document.createElementNS(NS, "g");
  g.setAttribute("transform", "translate(24491.004 -10587.258)");
  const p = document.createElementNS(NS, "path");
  p.setAttribute("d", LOGO_PATH);
  p.setAttribute("transform", "translate(18600.5 16831.584)");
  p.setAttribute("fill", color);
  g.appendChild(p);
  s.appendChild(g);
  return s;
}

function buildMesh() {
  const m = el("div", "mesh");
  for (const h of HALOS) {
    const g = el("div", "halo");
    g.style.left = h.x + "px"; g.style.top = h.y + "px";
    g.style.width = h.w + "px"; g.style.height = h.h + "px";
    g.style.background =
      "radial-gradient(closest-side, rgba(" + h.c + "," + h.a + ") 0%, rgba(" + h.c + "," + (h.a * 0.34).toFixed(3) + ") 42%, rgba(" + h.c + ",0) 100%)";
    m.appendChild(g);
  }
  return m;
}

function buildSlide(data, index) {
  const s = el("section", "slide");
  s.style.background = data.bg;
  s.dataset.index = index;
  if (data.annexe) s.dataset.annexe = "1";

  if (data.mesh) s.appendChild(buildMesh());

  const light = data.bg.toLowerCase() === "#f4f6fb";
  const logoColor = light ? "#000a64" : "#ffffff";
  if (data.logo === "grand") {
    const l = logoSVG(logoColor, 437);
    l.style.left = "140px"; l.style.top = "390px";
    s.appendChild(l);
  } else if (data.logo) {
    const l = logoSVG(logoColor, 182);
    l.style.left = "1689px"; l.style.top = "85px";
    s.appendChild(l);
  }

  for (const n of data.n) {
    if (n[0] === "T") {
      const [, x, y, w, font, size, lh, tr, al, col, txt] = n;
      const t = el("div", "t");
      const [fam, style] = font.split("|");
      t.style.left = x + "px"; t.style.top = y + "px"; t.style.width = w + "px";
      t.style.fontFamily = FAM[fam];
      t.style.fontWeight = WEIGHT[style] || 400;
      t.style.fontSize = size + "px";
      t.style.lineHeight = (lh ? lh + "px" : 1.2);
      if (tr) t.style.letterSpacing = (tr / 100) + "em";
      t.style.textAlign = ALIGN[al] || "left";
      t.style.color = col;
      // les étiquettes mono sur une seule ligne ne doivent jamais se renvoyer :
      // l'interlettrage se calcule autrement dans le navigateur que dans Figma
      if (fam === "PM" && txt.indexOf("\n") === -1 && n[11] !== "wrap") t.style.whiteSpace = "nowrap";
      t.textContent = txt;
      s.appendChild(t);
    } else {
      const [, x, y, w, h, col, op] = n;
      const r = el("div", "r");
      r.style.left = x + "px"; r.style.top = y + "px";
      r.style.width = w + "px"; r.style.height = h + "px";
      r.style.background = col;
      if (op !== undefined && op !== 1) r.style.opacity = op;
      s.appendChild(r);
    }
  }
  return s;
}

/* ---------- montage ----------
   On force le chargement des trois graisses avant de composer : sinon
   le texte en graisse 500 peut être rendu pendant la période de blocage
   des polices, donc invisible à l'impression. */
const deck = document.getElementById("deck");
if (document.fonts && document.fonts.load) {
  ["300 16px 'Space Grotesk'", "400 16px 'Space Grotesk'", "500 16px 'Space Grotesk'",
   "700 16px 'Space Grotesk'", "400 16px 'IBM Plex Mono'", "500 16px 'IBM Plex Mono'"]
    .forEach(f => document.fonts.load(f));
}
SLIDES.forEach((d, i) => deck.appendChild(buildSlide(d, i)));

const notesPane = document.getElementById("notes");
const counter = document.getElementById("counter");
const slides = Array.from(document.querySelectorAll(".slide"));
let current = 0;

function mdToHTML(s) {
  return s
    .split("\n")
    .filter(Boolean)
    .map(l => l.replace(/^-\s*/, ""))
    .map(l => l
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
      .replace(/\*(.+?)\*/g, "<i>$1</i>"))
    .map(l => "<li>" + l + "</li>")
    .join("");
}

function show(i) {
  current = Math.max(0, Math.min(slides.length - 1, i));
  slides.forEach((s, k) => s.classList.toggle("on", k === current));
  counter.textContent = (current + 1) + " / " + slides.length;
  notesPane.innerHTML = SLIDES[current].notes
    ? "<ul>" + mdToHTML(SLIDES[current].notes) + "</ul>"
    : "<p class='vide'>Pas de notes pour cette slide.</p>";
  fit();
}

function fit() {
  const pad = document.body.classList.contains("notes-on") ? 0.62 : 1;
  const w = window.innerWidth * (document.body.classList.contains("notes-on") ? 0.60 : 1);
  const h = window.innerHeight * (document.body.classList.contains("notes-on") ? 1 : 1);
  const scale = Math.min(w / 1920, h / 1080) * 0.94;
  deck.style.setProperty("--scale", scale);
}

document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") { e.preventDefault(); show(current + 1); }
  if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); show(current - 1); }
  if (e.key === "Home") show(0);
  if (e.key === "End") show(slides.length - 1);
  if (e.key.toLowerCase() === "n") { document.body.classList.toggle("notes-on"); fit(); }
  if (e.key.toLowerCase() === "f") {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen();
  }
});
window.addEventListener("resize", fit);
show(0);
