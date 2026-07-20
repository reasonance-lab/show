/* Hero canvas — layered standing waves. Self-contained; safe to delete
   (the CSS fallback background remains underneath). */
(() => {
  const canvas = document.getElementById("waves");
  if (!canvas) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const ctx = canvas.getContext("2d");
  let w = 0, h = 0, raf = 0, last = 0, t = 0;
  let running = false;

  // hue, base amplitude, wavelength multiplier, phase speed, phase offset
  const WAVES = [
    { hue: 190, amp: 0.20, len: 1.6, speed: 0.00022, off: 0.0, lw: 1.6, a: 0.50 },
    { hue: 205, amp: 0.13, len: 2.4, speed: -0.00017, off: 2.1, lw: 1.1, a: 0.38 },
    { hue: 268, amp: 0.24, len: 1.2, speed: 0.00013, off: 4.2, lw: 1.8, a: 0.42 },
    { hue: 255, amp: 0.10, len: 3.1, speed: -0.00030, off: 1.3, lw: 1.0, a: 0.32 },
    { hue: 152, amp: 0.16, len: 2.0, speed: 0.00019, off: 3.0, lw: 1.3, a: 0.28 },
  ];

  // Pinch the wave to zero at both edges — a standing wave clamped at its nodes.
  const envelope = (k) => Math.pow(Math.sin(Math.PI * k), 1.5);

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function frame(now) {
    raf = requestAnimationFrame(frame);
    if (now - last < 33) return; // ~30 fps is plenty for a slow drift
    t += now - last;
    last = now;

    ctx.clearRect(0, 0, w, h);
    ctx.globalCompositeOperation = "lighter";
    const mid = h * 0.58;

    for (const wv of WAVES) {
      ctx.beginPath();
      for (let x = 0; x <= w; x += 3) {
        const k = x / w;
        const y =
          mid +
          envelope(k) *
            (Math.sin(k * Math.PI * 2 * wv.len + t * wv.speed + wv.off) * wv.amp * h * 0.5 +
             Math.sin(k * Math.PI * 4.7 * wv.len - t * wv.speed * 1.6 + wv.off * 2) * wv.amp * h * 0.12);
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = `hsla(${wv.hue}, 90%, 62%, ${wv.a})`;
      ctx.lineWidth = wv.lw;
      ctx.shadowColor = `hsla(${wv.hue}, 90%, 60%, 0.5)`;
      ctx.shadowBlur = 10;
      ctx.stroke();
    }
  }

  function start() {
    if (running) return;
    running = true;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  }
  function stop() {
    running = false;
    cancelAnimationFrame(raf);
  }

  resize();
  addEventListener("resize", resize);
  document.addEventListener("visibilitychange", () =>
    document.hidden ? stop() : start()
  );
  // Don't burn battery once the hero is scrolled away.
  new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()), {
    threshold: 0.02,
  }).observe(canvas);

  start();
})();
