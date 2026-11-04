/** Animated background: particles, soft glows and cursor attraction.
 * Particle counts and smoothing settings are in config.js.
 * Glows are cached; nearby grid cells are used to find connections.
 * Motion is disabled when prefers-reduced-motion is enabled.
 */
(() => {
  const page = document.querySelector(".page");
  if (!page) return;
  const canvas = document.createElement("canvas");
  canvas.className = "ambient-background";
  canvas.setAttribute("aria-hidden", "true");
  page.prepend(canvas);
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    canvas.remove();
    return;
  }
  const reduce = matchMedia("(prefers-reduced-motion: reduce)"),
    fine = matchMedia("(hover: hover) and (pointer: fine)");
  let width = 0,
    height = 0,
    frameId = 0,
    lastPaint = 0,
    time = 0,
    previous = 0,
    pointerActive = false;
  const pointer = { x: 0, y: 0 },
    smooth = { x: 0, y: 0 };
  const points = Array.from({ length: LEG_CONFIG.background.desktopCount }, (_, i) => ({
    x: ((i * 73.17 + 19) % 100) / 100,
    y: ((i * 37.31 + 11) % 100) / 100,
    phase: i * 2.399,
    speed: 0.13 + (i % 5) * 0.025,
    size: 1.1 + (i % 4) * 0.3,
  }));
  function resize() {
    width = innerWidth;
    height = innerHeight;
    const ratio = 1;
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    paint();
  }
  // Rasterize the soft glow once, rather than recomputing large gradients each frame.
  const glowSprite = document.createElement("canvas");
  glowSprite.width = glowSprite.height = 192;
  const glowCtx = glowSprite.getContext("2d"),
    gradient = glowCtx.createRadialGradient(96, 96, 0, 96, 96, 96);
  gradient.addColorStop(0, "rgba(49,177,158,1)");
  gradient.addColorStop(0.55, "rgba(77,191,175,.35)");
  gradient.addColorStop(1, "rgba(77,191,175,0)");
  glowCtx.fillStyle = gradient;
  glowCtx.fillRect(0, 0, 192, 192);
  function glow(x, y, r, alpha) {
    ctx.globalAlpha = alpha;
    ctx.drawImage(glowSprite, x - r, y - r, r * 2, r * 2);
    ctx.globalAlpha = 1;
  }
  function paint(delta = 1 / 60) {
    if (!width || !height) return;
    ctx.clearRect(0, 0, width, height);
    const movement = reduce.matches ? 0 : 1;
    const px = smooth.x * movement,
      py = smooth.y * movement;
    glow(
      width * 0.18 + Math.sin(time * 0.16) * 35 * movement + px * 0.055,
      height * 0.3 + Math.cos(time * 0.12) * 25 * movement + py * 0.055,
      Math.min(width * 0.45, 470),
      0.19,
    );
    glow(
      width * 0.78 + Math.cos(time * 0.11) * 45 * movement + px * 0.075,
      height * 0.76 + Math.sin(time * 0.14) * 30 * movement + py * 0.075,
      Math.min(width * 0.46, 510),
      0.16,
    );
    if (reduce.matches) return;
    if (pointerActive && fine.matches) {
      glow(width / 2 + smooth.x, height / 2 + smooth.y, 210, 0.12);
    }

    const visiblePoints = points
      .slice(
        0,
        fine.matches ? LEG_CONFIG.background.desktopCount : LEG_CONFIG.background.mobileCount,
      )
      .map((p) => {
        const baseX = p.x * width + Math.sin(time * p.speed + p.phase) * 14,
          baseY = p.y * height + Math.cos(time * p.speed * 0.8 + p.phase) * 12;
        let targetX = baseX,
          targetY = baseY;
        if (pointerActive && fine.matches) {
          const dx = width / 2 + smooth.x - baseX,
            dy = height / 2 + smooth.y - baseY,
            d = Math.hypot(dx, dy),
            pull = Math.max(0, 1 - d / LEG_CONFIG.background.attractionRadius);
          const strength = pull * LEG_CONFIG.background.attractionStrength;
          targetX += dx * strength;
          targetY += dy * strength;
        }
        // Persistent positions ease toward the pointer and back to their drifting home.
        if (!Number.isFinite(p.currentX)) {
          p.currentX = baseX;
          p.currentY = baseY;
        }
        const ease = 1 - Math.exp(-delta / LEG_CONFIG.background.particleFollowSeconds);
        p.currentX += (targetX - p.currentX) * ease;
        p.currentY += (targetY - p.currentY) * ease;
        return { x: p.currentX, y: p.currentY, p };
      });
    // Only inspect neighbouring cells, avoiding an all-pairs distance scan.
    const cells = new Map(),
      cellSize = 105;
    for (let i = 0; i < visiblePoints.length; i++) {
      const p = visiblePoints[i],
        key = Math.floor(p.x / cellSize) + "," + Math.floor(p.y / cellSize);
      if (!cells.has(key)) cells.set(key, []);
      cells.get(key).push(i);
    }
    ctx.lineWidth = 0.85;
    for (let i = 0; i < visiblePoints.length; i++) {
      const a = visiblePoints[i],
        gx = Math.floor(a.x / cellSize),
        gy = Math.floor(a.y / cellSize);
      let connections = 0;
      neighbourCells: for (let ox = -1; ox <= 1; ox++)
        for (let oy = -1; oy <= 1; oy++) {
          for (const j of cells.get(gx + ox + "," + (gy + oy)) || []) {
            if (j <= i) continue;
            const b = visiblePoints[j],
              dx = a.x - b.x,
              dy = a.y - b.y,
              squared = dx * dx + dy * dy;
            if (squared < 11025) {
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.strokeStyle = `rgba(31,151,135,${0.1 * (1 - Math.sqrt(squared) / 105)})`;
              ctx.stroke();
              if (++connections === 3) break neighbourCells;
            }
          }
        }
      ctx.beginPath();
      ctx.arc(a.x, a.y, a.p.size, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(20,149,134,.40)";
      ctx.fill();
    }
  }

  function frame(now) {
    if (document.hidden || reduce.matches) {
      frameId = 0;
      return;
    }
    frameId = requestAnimationFrame(frame);
    if (now - lastPaint < (fine.matches ? 14 : 32)) return;
    const delta = previous ? Math.min((now - previous) / 1000, 0.05) : 1 / 60;
    previous = now;
    lastPaint = now;
    time += delta;
    const follow = 1 - Math.exp(-delta / LEG_CONFIG.background.cursorFollowSeconds);
    smooth.x += ((pointerActive ? pointer.x - width / 2 : 0) - smooth.x) * follow;
    smooth.y += ((pointerActive ? pointer.y - height / 2 : 0) - smooth.y) * follow;
    paint(delta);
  }
  function sync() {
    cancelAnimationFrame(frameId);
    frameId = 0;
    previous = 0;
    if (document.hidden) return;
    paint();
    if (!reduce.matches) frameId = requestAnimationFrame(frame);
  }
  addEventListener(
    "pointermove",
    (e) => {
      if (e.pointerType !== "mouse" || !fine.matches || reduce.matches) return;
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointerActive = true;
    },
    { passive: true },
  );
  document.documentElement.addEventListener("pointerleave", () => (pointerActive = false));
  addEventListener("blur", () => (pointerActive = false));
  addEventListener("resize", resize, { passive: true });
  document.addEventListener("visibilitychange", sync);
  reduce.addEventListener("change", sync);
  resize();
  sync();
})();
