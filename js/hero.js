/** Hero 3D animation.
 * rings: leg cross-sections [height, X radius, Z depth, Z offset].
 * verts and faces provide the shared sample geometry for analysis.js.
 * Rotation speed is set in config.js; subtracting the angle keeps leftward rotation.
 */
const canvas = document.querySelector("#leg"),
  ctx = canvas.getContext("2d");
let w,
  h,
  dpr,
  angle = 0,
  paused = matchMedia("(prefers-reduced-motion: reduce)").matches,
  drag = false,
  lastX = 0;
const rings = [
  [-2.85, 0.72, 0.62, 0.12],
  [-2.5, 0.63, 0.57, 0.09],
  [-2.1, 0.49, 0.48, 0],
  [-1.75, 0.46, 0.43, -0.04],
  [-1.4, 0.52, 0.44, -0.04],
  [-1.05, 0.61, 0.5, 0],
  [-0.65, 0.65, 0.52, 0.04],
  [-0.25, 0.56, 0.49, 0.08],
  [0.15, 0.43, 0.4, 0.06],
  [0.6, 0.34, 0.33, 0.01],
  [1.1, 0.28, 0.28, 0],
  [1.55, 0.3, 0.31, -0.02],
  [1.83, 0.43, 0.39, -0.12],
  [1.98, 0.51, 0.65, -0.38],
  [2.09, 0.53, 0.92, -0.65],
  [2.23, 0.49, 0.95, -0.7],
];
let verts = [];
const N = 12;
rings.forEach(([y, rx, rz, z], j) => {
  for (let i = 0; i < N; i++) {
    let t = (i / N) * Math.PI * 2 + (j % 2) * 0.12;
    verts.push({ x: Math.cos(t) * rx, y, z: Math.sin(t) * rz + z });
  }
});
let faces = [];
for (let j = 0; j < rings.length - 1; j++)
  for (let i = 0; i < N; i++) {
    let a = j * N + i,
      b = j * N + ((i + 1) % N),
      c = (j + 1) * N + i,
      d = (j + 1) * N + ((i + 1) % N);
    faces.push([a, b, c], [b, d, c]);
  }
// Match the canvas dimensions to its visible size and screen density.
function resize() {
  const r = canvas.getBoundingClientRect();
  w = r.width;
  h = r.height;
  dpr = Math.min(devicePixelRatio, 2);
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
addEventListener("resize", resize);
resize();
function ellipse(x, y, rx, ry, color, line = 1) {
  ctx.beginPath();
  ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
  ctx.strokeStyle = color;
  ctx.lineWidth = line;
  ctx.stroke();
}
// Draw the mesh, glowing nodes, scan band and surrounding rings.
let tick = 0,
  lastLegFrame = 0;
function draw(now = performance.now()) {
  requestAnimationFrame(draw);
  const elapsed = lastLegFrame ? Math.min((now - lastLegFrame) / 1000, 0.1) : 1 / 60;
  lastLegFrame = now;
  if (!paused) {
    angle -= elapsed * LEG_CONFIG.hero.rotationSpeed;
    tick += elapsed * 0.72;
  }
  ctx.clearRect(0, 0, w, h);
  let cx = w * 0.55,
    cy = h * 0.49,
    s = Math.min(h / 5.9, w / 4.4);
  let g = ctx.createRadialGradient(cx, cy, 10, cx, cy, w * 0.58);
  g.addColorStop(0, "#15a59d38");
  g.addColorStop(1, "#15a59d00");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
  for (let r = 0; r < 3; r++) {
    ctx.beginPath();
    ctx.ellipse(
      cx,
      h * 0.49,
      w * (0.33 + r * 0.045),
      h * (0.32 + r * 0.025),
      -0.25,
      tick * 0.13 + r,
      tick * 0.13 + r + 4.3,
    );
    ctx.strokeStyle = "#f0ffff70";
    ctx.lineWidth = r === 1 ? 3 : 1;
    ctx.stroke();
  }
  let base = h * 0.88;
  g = ctx.createRadialGradient(cx, base, 0, cx, base, w * 0.34);
  g.addColorStop(0, "#00bbaa65");
  g.addColorStop(1, "#00bbaa00");
  ctx.fillStyle = g;
  ctx.fillRect(0, base - 40, w, 100);
  ellipse(cx, base, w * 0.34, 40, "#c7ffff", 2);
  ellipse(cx, base, w * 0.43, 55, "#e0ffff70");
  const a = angle + 0.7,
    co = Math.cos(a),
    si = Math.sin(a);
  let ps = verts.map((v) => {
    let x = v.x * co + v.z * si,
      z = -v.x * si + v.z * co;
    return { x: cx + x * s, y: h * 0.48 + v.y * s, z };
  });
  let sorted = faces
    .map((f) => ({ f, z: f.reduce((t, i) => t + ps[i].z, 0) / 3 }))
    .sort((a, b) => a.z - b.z);
  for (const { f, z } of sorted) {
    ctx.beginPath();
    f.forEach((i, k) => (k ? ctx.lineTo(ps[i].x, ps[i].y) : ctx.moveTo(ps[i].x, ps[i].y)));
    ctx.closePath();
    let shade = Math.max(0, Math.min(1, (z + 1) / 2));
    ctx.fillStyle = `rgba(${25 + shade * 70},${155 + shade * 73},${151 + shade * 72},${0.42 + shade * 0.25})`;
    ctx.fill();
    ctx.strokeStyle = `rgba(224,255,255,${0.27 + shade * 0.55})`;
    ctx.lineWidth = 0.8;
    ctx.stroke();
  }
  ps.forEach((p, i) => {
    if (p.z > 0 && i % 2 === 0) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = "#e4ffff";
      ctx.shadowColor = "#bafff3";
      ctx.shadowBlur = 9;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  });
  let scan = h * 0.12 + ((Math.sin(tick * 0.65) + 1) / 2) * h * 0.7;
  g = ctx.createLinearGradient(0, scan - 15, 0, scan + 15);
  g.addColorStop(0, "#bfffff00");
  g.addColorStop(0.5, "#afffffa0");
  g.addColorStop(1, "#bfffff00");
  ctx.save();
  ctx.beginPath();
  let outline = [...Array(rings.length).keys()].map((j) => {
    let row = ps.slice(j * N, (j + 1) * N);
    return row.reduce((a, b) => (a.x < b.x ? a : b));
  });
  let right = [...Array(rings.length).keys()]
    .reverse()
    .map((j) => ps.slice(j * N, (j + 1) * N).reduce((a, b) => (a.x > b.x ? a : b)));
  [...outline, ...right].forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
  ctx.closePath();
  ctx.clip();
  ctx.fillStyle = g;
  ctx.fillRect(0, scan - 15, w, 30);
  ctx.restore();
}
// Mouse interaction and pause control.
draw();
canvas.addEventListener("pointerdown", (e) => {
  drag = true;
  lastX = e.clientX;
  canvas.setPointerCapture(e.pointerId);
});
canvas.addEventListener("pointermove", (e) => {
  if (drag) {
    angle += (e.clientX - lastX) * LEG_CONFIG.hero.dragSensitivity;
    lastX = e.clientX;
  }
});
canvas.addEventListener("pointerup", () => (drag = false));
canvas.addEventListener("pointercancel", () => (drag = false));
const pause = document.querySelector("#pause");
function setPause() {
  pause.textContent = paused ? "▶ Play" : "Ⅱ Pause";
  pause.setAttribute("aria-label", paused ? "Play animation" : "Pause animation");
}
setPause();
pause.onclick = () => {
  paused = !paused;
  setPause();
};
canvas.addEventListener("lostpointercapture", () => (drag = false));
window.addEventListener("blur", () => (drag = false));
