/* MUNDUS — movimento e 3D, senza librerie esterne.
   - globo: un globo 3D (proiezione ortografica su canvas) con le coste reali, che si può ruotare
     trascinandolo e che fa da solo il «giro» dei luoghi delle date fondamentali;
   - pulviscolo: particelle dorate che fluttuano nelle sezioni scure;
   - inclinazione 3D di schede e immagini sotto il mouse, parallasse allo scorrimento,
     titoli che compaiono parola per parola, numeri che contano, luce che segue il cursore.
   Tutto si ferma con «riduci movimento» del sistema operativo e quando l'elemento non è visibile. */
(function () {
  'use strict';
  const M = window.MUNDUS;
  const D2R = Math.PI / 180, K = 10;
  const motion = (M.motion = {});

  /* ---------- dati: coste dal tracciato già proiettato di data/land.js ---------- */
  let landPromise = null, RINGS = null;
  motion.ready = () => {
    if (!landPromise) {
      landPromise = M.landPath ? Promise.resolve() : new Promise((res) => M.loadScripts(['data/land.js'], () => res()));
    }
    return landPromise;
  };
  function rings() {
    if (RINGS || !M.landPath) return RINGS;
    const out = []; let cur = null, m, n = 0;
    const re = /([MLZ])(?:(-?[\d.]+) (-?[\d.]+))?/g;
    while ((m = re.exec(M.landPath))) {
      if (m[1] === 'Z') { if (cur && cur.length > 3) out.push(cur); cur = null; continue; }
      const lon = +m[2] / K, lat = (2 * Math.atan(Math.exp((-m[3] * D2R) / K)) - Math.PI / 2) / D2R;
      if (m[1] === 'M') { cur = []; n = 0; }
      const edge = lon <= -39.9 || lon >= 74.9 || lat <= 10.1 || lat >= 74.9;
      if (n++ % 2 === 0 || edge) cur.push([lon * D2R, Math.sin(lat * D2R), Math.cos(lat * D2R), edge]);
    }
    RINGS = out;
    return RINGS;
  }
  const alive = (el) => document.body.contains(el);

  /* ---------- globo 3D ---------- */
  motion.globe = function (canvas, opt = {}) {
    const ctx = canvas.getContext('2d');
    const st = { lam: opt.lon ?? 10, phi: opt.lat ?? 40, tl: null, tp: null, drag: null, pause: 0, focus: -1, visible: true, t: 0 };
    const places = (opt.places || []).map((p) => ({ ...p, l: p.lon * D2R, s: Math.sin(p.lat * D2R), c: Math.cos(p.lat * D2R) }));
    const tour = opt.tour || [];
    let W = 0, H = 0, R = 0, dpr = 1, raf = 0, timer = 0;

    function size() {
      const r = canvas.getBoundingClientRect(); dpr = Math.min(1.5, window.devicePixelRatio || 1);
      W = r.width; H = r.height; canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
      R = Math.min(W, H) * (opt.scale || 0.42);
    }
    const proj = (l, sp, cp, out) => {
      const l0 = st.lam * D2R, p0 = st.phi * D2R, dl = l - l0, cd = Math.cos(dl);
      const s0 = Math.sin(p0), c0 = Math.cos(p0);
      out[0] = cp * Math.sin(dl); out[1] = -(c0 * sp - s0 * cp * cd); out[2] = s0 * sp + c0 * cp * cd;
      return out;
    };
    const P = [0, 0, 0];

    function draw() {
      const cx = W / 2, cy = H / 2;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      /* alone */
      let g = ctx.createRadialGradient(cx, cy, R * 0.9, cx, cy, R * 1.45);
      g.addColorStop(0, 'rgba(205,171,104,0.22)'); g.addColorStop(0.35, 'rgba(205,171,104,0.06)'); g.addColorStop(1, 'rgba(205,171,104,0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, R * 1.45, 0, Math.PI * 2); ctx.fill();
      /* sfera */
      g = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.4, R * 0.1, cx, cy, R);
      g.addColorStop(0, '#22385e'); g.addColorStop(0.55, '#0f1b31'); g.addColorStop(1, '#060b15');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.fill();
      ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.clip();
      /* reticolo */
      ctx.strokeStyle = 'rgba(205,171,104,0.13)'; ctx.lineWidth = 0.7;
      for (let lo = -180; lo < 180; lo += 15) {
        ctx.beginPath(); let pen = false;
        for (let la = -85; la <= 85; la += 5) {
          proj(lo * D2R, Math.sin(la * D2R), Math.cos(la * D2R), P);
          if (P[2] > 0) { const x = cx + P[0] * R, y = cy + P[1] * R; pen ? ctx.lineTo(x, y) : ctx.moveTo(x, y); pen = true; } else pen = false;
        }
        ctx.stroke();
      }
      for (let la = -75; la <= 75; la += 15) {
        ctx.beginPath(); let pen = false; const sp = Math.sin(la * D2R), cp = Math.cos(la * D2R);
        for (let lo = -180; lo <= 180; lo += 4) {
          proj(lo * D2R, sp, cp, P);
          if (P[2] > 0) { const x = cx + P[0] * R, y = cy + P[1] * R; pen ? ctx.lineTo(x, y) : ctx.moveTo(x, y); pen = true; } else pen = false;
        }
        ctx.stroke();
      }
      /* terre: riempimento (i punti nascosti si portano sul bordo) e coste visibili */
      const rs = rings();
      if (rs) {
        /* solo le coste, come su un globo da navigazione: una traccia larga e tenue e una sottile e luminosa */
        ctx.beginPath();
        for (const r of rs) {
          let pen = false;
          for (let i = 0; i < r.length; i++) {
            proj(r[i][0], r[i][1], r[i][2], P);
            if (P[2] > 0.01 && !r[i][3]) { const x = cx + P[0] * R, y = cy + P[1] * R; pen ? ctx.lineTo(x, y) : ctx.moveTo(x, y); pen = true; } else pen = false;
          }
        }
        ctx.lineJoin = 'round';
        ctx.strokeStyle = 'rgba(205,171,104,0.22)'; ctx.lineWidth = 3.2; ctx.stroke();
        ctx.strokeStyle = 'rgba(240,214,160,0.9)'; ctx.lineWidth = 0.9; ctx.stroke();
      }
      /* luoghi */
      const pulse = (Math.sin(st.t * 2.2) + 1) / 2;
      places.forEach((p, i) => {
        proj(p.l, p.s, p.c, P); if (P[2] < 0.08) return;
        const x = cx + P[0] * R, y = cy + P[1] * R, on = i === st.focus;
        ctx.globalAlpha = Math.min(1, P[2] * 2.2);
        if (on) {
          ctx.strokeStyle = `rgba(239,220,176,${0.9 - pulse * 0.7})`; ctx.lineWidth = 1.2;
          ctx.beginPath(); ctx.arc(x, y, 6 + pulse * 14, 0, Math.PI * 2); ctx.stroke();
        }
        const gg = ctx.createRadialGradient(x, y, 0, x, y, on ? 14 : 8);
        gg.addColorStop(0, 'rgba(255,236,190,0.95)'); gg.addColorStop(1, 'rgba(205,171,104,0)');
        ctx.fillStyle = gg; ctx.beginPath(); ctx.arc(x, y, on ? 14 : 8, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = on ? '#fff6dd' : '#e6c98c'; ctx.beginPath(); ctx.arc(x, y, on ? 3.2 : 1.9, 0, Math.PI * 2); ctx.fill();
        if (on && p.label) {
          ctx.font = '600 13px Inter, "Segoe UI", sans-serif'; ctx.textBaseline = 'middle';
          const tw = ctx.measureText(p.label).width;
          ctx.fillStyle = 'rgba(6,11,21,0.82)'; ctx.fillRect(x + 12, y - 12, tw + 18, 24);
          ctx.strokeStyle = 'rgba(205,171,104,0.6)'; ctx.lineWidth = 1; ctx.strokeRect(x + 12.5, y - 11.5, tw + 17, 23);
          ctx.fillStyle = '#f2e3bd'; ctx.fillText(p.label, x + 21, y + 0.5);
        }
        ctx.globalAlpha = 1;
      });
      /* ombreggiatura sferica e bordo luminoso */
      g = ctx.createRadialGradient(cx - R * 0.3, cy - R * 0.35, R * 0.2, cx, cy, R * 1.02);
      g.addColorStop(0, 'rgba(255,240,210,0.06)'); g.addColorStop(0.7, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,0.55)');
      ctx.fillStyle = g; ctx.fillRect(cx - R, cy - R, R * 2, R * 2);
      ctx.restore();
      ctx.strokeStyle = 'rgba(224,197,139,0.55)'; ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.stroke();
    }

    function focusOn(i) {
      if (!places[i]) return;
      st.focus = i; st.tl = places[i].lon; st.tp = Math.max(18, Math.min(58, places[i].lat - 4));
      if (M.reduced()) { st.lam = st.tl; st.phi = st.tp; }
      if (opt.onFocus) opt.onFocus(places[i], i);
    }
    function nextStop() {
      if (!tour.length) return;
      const cur = tour.indexOf(st.focus); focusOn(tour[(cur + 1) % tour.length]);
    }

    let last = performance.now();
    function frame(now) {
      if (!alive(canvas)) { cancelAnimationFrame(raf); clearInterval(timer); return; }
      const dt = Math.min(0.05, (now - last) / 1000); last = now; st.t += dt;
      if (!st.drag && st.tl != null && now > st.pause) {
        let dl = ((st.tl - st.lam + 540) % 360) - 180;
        st.lam += dl * Math.min(1, dt * 1.6); st.phi += (st.tp - st.phi) * Math.min(1, dt * 1.6);
        if (Math.abs(dl) < 0.05) st.lam += dt * 0.6;
      } else if (!st.drag && st.tl == null) st.lam += dt * 4;
      draw();
      raf = st.visible && !M.reduced() ? requestAnimationFrame(frame) : 0;
    }
    const start = () => { if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame); } };

    /* trascinamento */
    canvas.addEventListener('pointerdown', (e) => { st.drag = { x: e.clientX, y: e.clientY, l: st.lam, p: st.phi }; canvas.setPointerCapture(e.pointerId); canvas.classList.add('is-dragging'); });
    canvas.addEventListener('pointermove', (e) => {
      if (!st.drag) return;
      st.lam = st.drag.l - (e.clientX - st.drag.x) * 0.3; st.phi = Math.max(-20, Math.min(75, st.drag.p + (e.clientY - st.drag.y) * 0.3));
      if (M.reduced()) draw();
    });
    const up = () => { if (!st.drag) return; st.drag = null; st.tl = st.lam; st.tp = st.phi; st.pause = performance.now() + 5000; canvas.classList.remove('is-dragging'); };
    canvas.addEventListener('pointerup', up); canvas.addEventListener('pointercancel', up);

    size();
    new ResizeObserver(() => { size(); draw(); }).observe(canvas);
    if ('IntersectionObserver' in window) new IntersectionObserver(([en]) => { st.visible = en.isIntersecting; if (st.visible) start(); }).observe(canvas);
    motion.ready().then(() => { rings(); draw(); });
    if (tour.length) { focusOn(tour[0]); timer = setInterval(() => { if (!st.drag && performance.now() > st.pause) nextStop(); if (M.reduced()) draw(); }, opt.every || 4200); }
    draw(); start();
    return { focusOn };
  };

  /* ---------- pulviscolo dorato ---------- */
  motion.dust = function (canvas, opt = {}) {
    if (M.reduced()) return;
    const ctx = canvas.getContext('2d');
    let W = 0, H = 0, dpr = 1, raf = 0, visible = true, mx = -1e4, my = -1e4;
    const N = opt.n || 70; let ps = [];
    const size = () => {
      const r = canvas.getBoundingClientRect(); dpr = Math.min(1.5, window.devicePixelRatio || 1);
      W = r.width; H = r.height; canvas.width = W * dpr; canvas.height = H * dpr;
      ps = Array.from({ length: N }, () => ({ x: Math.random() * W, y: Math.random() * H, r: 0.4 + Math.random() * 1.6, v: 4 + Math.random() * 14, d: Math.random() * Math.PI * 2, a: 0.15 + Math.random() * 0.6 }));
    };
    const host = canvas.parentElement;
    host.addEventListener('pointermove', (e) => { const r = canvas.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top; });
    host.addEventListener('pointerleave', () => { mx = my = -1e4; });
    let last = performance.now();
    function frame(now) {
      if (!alive(canvas)) return;
      const dt = Math.min(0.05, (now - last) / 1000); last = now;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
      for (const p of ps) {
        p.d += dt * 0.6; p.y -= p.v * dt; p.x += Math.sin(p.d) * 6 * dt;
        const dx = p.x - mx, dy = p.y - my, dd = dx * dx + dy * dy;
        if (dd < 14000) { const f = (1 - dd / 14000) * 60 * dt; p.x += dx * f / 40; p.y += dy * f / 40; }
        if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W; }
        const tw = 0.6 + Math.sin(p.d * 3) * 0.4;
        ctx.fillStyle = `rgba(232,205,150,${p.a * tw})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      }
      raf = visible ? requestAnimationFrame(frame) : 0;
    }
    size(); new ResizeObserver(size).observe(canvas);
    new IntersectionObserver(([en]) => { visible = en.isIntersecting; if (visible && !raf) { last = performance.now(); raf = requestAnimationFrame(frame); } }).observe(canvas);
  };

  /* ---------- inclinazione 3D sotto il mouse ---------- */
  const TILT = [['.card', 9], ['.tool', 4], ['.ch-hero__fig .fig__frame', 7], ['.fig--inset .fig__frame', 5], ['.ch-nav a', 3], ['.net-card', 3], ['.axis', 4], ['.cp-item', 5]];
  const TILT_SEL = TILT.map((t) => t[0]).join(',');
  let tilted = null;
  function untilt(el) { el.classList.remove('is-tilting'); el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg'); }
  motion.bindTilt = function () {
    document.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse' || M.reduced()) return;
      const el = e.target.closest && e.target.closest(TILT_SEL);
      if (tilted && tilted !== el) { untilt(tilted); tilted = null; }
      if (!el) return;
      const max = (TILT.find((t) => el.matches(t[0])) || [0, 5])[1];
      const r = el.getBoundingClientRect(); const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      el.classList.add('tilt', 'is-tilting'); tilted = el;
      el.style.setProperty('--rx', `${((0.5 - py) * max * 2).toFixed(2)}deg`);
      el.style.setProperty('--ry', `${((px - 0.5) * max * 2).toFixed(2)}deg`);
      el.style.setProperty('--gx', `${(px * 100).toFixed(1)}%`); el.style.setProperty('--gy', `${(py * 100).toFixed(1)}%`);
    }, { passive: true });
    document.addEventListener('pointerleave', () => { if (tilted) untilt(tilted); tilted = null; });
  };

  /* ---------- parallasse allo scorrimento e luce che segue il cursore ---------- */
  let plx = [], ticking = false;
  function parallax() {
    ticking = false; const vh = window.innerHeight;
    for (const el of plx) {
      const r = el.getBoundingClientRect(); if (r.bottom < -200 || r.top > vh + 200) continue;
      const off = (r.top + r.height / 2 - vh / 2) * +el.dataset.parallax;
      el.style.translate = `0 ${off.toFixed(1)}px`;
    }
  }
  motion.bindScroll = function () {
    window.addEventListener('scroll', () => { if (!ticking && plx.length) { ticking = true; requestAnimationFrame(parallax); } }, { passive: true });
    document.addEventListener('pointermove', (e) => {
      const host = e.target.closest && e.target.closest('.hero, .ch-hero, .pagehead');
      if (!host) return; const r = host.getBoundingClientRect();
      host.style.setProperty('--mx', `${e.clientX - r.left}px`); host.style.setProperty('--my', `${e.clientY - r.top}px`);
    }, { passive: true });
  };

  /* ---------- arricchisce una pagina appena disegnata ---------- */
  function splitWords(el, i0 = 0) {
    if (el.dataset.split || el.children.length) return;
    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words.map((w, i) => `<span class="w"><span style="--i:${i + i0}">${M.esc(w)}</span></span>`).join(' ');
    el.dataset.split = '1'; el.classList.add('split'); el.setAttribute('aria-label', words.join(' '));
  }
  function countUp(el) {
    const to = +el.dataset.count; const t0 = performance.now(); const dur = 1300;
    const step = (now) => { const t = Math.min(1, (now - t0) / dur); el.textContent = Math.round(to * (1 - Math.pow(1 - t, 3))); if (t < 1) requestAnimationFrame(step); };
    if (M.reduced()) el.textContent = to; else requestAnimationFrame(step);
  }
  motion.enhance = function (root) {
    const reduced = M.reduced();
    if (!reduced) {
      /* titoli d'apertura: compaiono subito, parola per parola */
      M.qsa('.ch-hero h1, .pagehead h1, .hero__sub', root).forEach((h) => { splitWords(h); requestAnimationFrame(() => setTimeout(() => h.classList.add('is-in'), 120)); });
      /* titoli di sezione: compaiono quando entrano nello schermo */
      M.qsa('.ch-sec h2, .section__head h2, .guide-q__text', root).forEach((h) => { splitWords(h); h.classList.add('reveal'); });
      /* luce che segue il cursore */
      M.qsa('.hero, .ch-hero, .pagehead', root).forEach((h) => { if (!M.qs(':scope > .cursor-glow', h)) h.insertAdjacentHTML('afterbegin', '<span class="cursor-glow" aria-hidden="true"></span>'); });
      /* pulviscolo */
      M.qsa('.hero, .ch-hero', root).forEach((h) => { h.insertAdjacentHTML('afterbegin', '<canvas class="dust" aria-hidden="true"></canvas>'); motion.dust(h.querySelector('canvas.dust'), { n: h.classList.contains('hero') ? 90 : 55 }); });
    }
    /* parallasse */
    plx = reduced ? [] : M.qsa('[data-parallax]', root);
    M.qsa('.fig--wide .fig__frame img', root).forEach((img) => { if (!reduced) { img.dataset.parallax = '-0.07'; plx.push(img); } });
    parallax();
    /* numeri che contano quando sono visibili */
    const io = new IntersectionObserver((ens) => ens.forEach((en) => { if (en.isIntersecting) { countUp(en.target); io.unobserve(en.target); } }));
    M.qsa('[data-count]', root).forEach((n) => io.observe(n));
  };
})();
